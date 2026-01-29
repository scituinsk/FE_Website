"use client";

import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getProjectsQueryKey } from "../queries/use-get-projects";
import { useCreateProject } from "../mutations/use-create-project";
import { useQueryClient } from "@tanstack/react-query";

const createProjectFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  slug: z
    .string()
    .min(1, "Slug is required")
    .regex(/^[a-z-]+$/, "Slug hanya boleh berisi huruf kecil dan dash (-)")
    .regex(/^[^-].*[^-]$|^[^-]$/, "Slug tidak boleh dimulai atau diakhiri dengan dash")
    .refine((val) => !/\d/.test(val), "Slug tidak boleh mengandung angka")
    .refine((val) => !val.includes("--"), "Slug tidak boleh memiliki dash berturut-turut"),
  launchYear: z
    .string()
    .min(1, "Launch Year is required")
    .regex(/^\d{4}$/, "Launch Year must be a valid 4-digit year"),
  duration: z.string().min(1, "Duration is required"),
  linkDemo: z.string().url("Demo URL must be a valid URL").optional().or(z.literal("")),
});

type CreateProjectFormValues = z.infer<typeof createProjectFormSchema>;

interface CreateProjectFormProps {
  onSuccess?: () => void;
}

export const CreateProjectForm = ({ onSuccess }: CreateProjectFormProps) => {
  const queryClient = useQueryClient();
  const form = useForm<CreateProjectFormValues>({
    resolver: zodResolver(createProjectFormSchema),
    defaultValues: {
      title: "",
      description: "",
      slug: "",
      launchYear: "2024",
      duration: "6 months",
      linkDemo: "",
    },
  });

  const { mutate: createProject, isPending } = useCreateProject({
    mutationConfig: {
      onSuccess: (data) => {
        // Invalidate all project queries to refetch data
        queryClient.invalidateQueries({ queryKey: getProjectsQueryKey() });
        toast.success("Project berhasil dibuat!", {
          description: `${data.title} telah ditambahkan ke portfolio`,
        });
        form.reset();
        onSuccess?.();
      },
      onError: (error) => {
        toast.error("Gagal membuat project", {
          description: error.message || "Terjadi kesalahan saat membuat project",
        });
      },
    },
  });

  // Auto-generate slug from title
  const handleTitleChange = (value: string, onChange: (value: string) => void) => {
    onChange(value);

    // Auto-generate slug setiap kali title berubah
    const newSlug = generateSlug(value);
    form.setValue("slug", newSlug, {
      shouldValidate: true, // Trigger validasi ulang
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const generateSlug = (text: string): string => {
    return text
      .toLowerCase() // Ubah ke huruf kecil
      .trim() // Hapus spasi di awal dan akhir
      .normalize("NFD") // Normalize Unicode untuk handle karakter spesial
      .replace(/[\u0300-\u036f]/g, "") // Hapus diacritics (é -> e)
      .replace(/[0-9]/g, "") // Hapus semua angka
      .replace(/[^a-z\s-]/g, "") // Hapus semua karakter selain huruf, spasi, dan dash
      .replace(/\s+/g, "-") // Replace spasi dengan dash
      .replace(/-+/g, "-") // Replace multiple dash dengan single dash
      .replace(/^-+|-+$/g, ""); // Hapus dash di awal dan akhir
  };

  function onSubmit(values: CreateProjectFormValues) {
    createProject({
      title: values.title,
      description: values.description,
      slug: values.slug,
      launchYear: values.launchYear,
      duration: values.duration,
      linkDemo: values.linkDemo || undefined,
    });
  }

  return (
    <form
      id="createProjectForm"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FieldGroup>
        <Controller
          name="title"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="createProjectForm-title">Title</FieldLabel>
              <Input
                {...field}
                onChange={(e) => handleTitleChange(e.target.value, field.onChange)}
                id="createProjectForm-title"
                aria-invalid={fieldState.invalid}
                placeholder="Project Title"
                autoComplete="off"
                disabled={isPending}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="description"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="createProjectForm-description">Description</FieldLabel>
              <Input
                {...field}
                id="createProjectForm-description"
                aria-invalid={fieldState.invalid}
                placeholder="Project Description"
                autoComplete="off"
                disabled={isPending}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="slug"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="createProjectForm-slug">Slug</FieldLabel>
              <Input
                {...field}
                id="createProjectForm-slug"
                aria-invalid={fieldState.invalid}
                placeholder="project-slug"
                autoComplete="off"
                disabled={isPending}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="launchYear"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="createProjectForm-launchYear">Launch Year</FieldLabel>
              <Input
                {...field}
                id="createProjectForm-launchYear"
                aria-invalid={fieldState.invalid}
                placeholder="2024"
                autoComplete="off"
                disabled={isPending}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="duration"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="createProjectForm-duration">Duration</FieldLabel>
              <Input
                {...field}
                id="createProjectForm-duration"
                aria-invalid={fieldState.invalid}
                placeholder="6 months"
                autoComplete="off"
                disabled={isPending}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="linkDemo"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="createProjectForm-linkDemo">Demo URL (Optional)</FieldLabel>
              <Input
                {...field}
                id="createProjectForm-linkDemo"
                aria-invalid={fieldState.invalid}
                placeholder="https://demo.example.com"
                autoComplete="off"
                disabled={isPending}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Button
          type="submit"
          size="sm"
          disabled={isPending}
        >
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isPending ? "Creating..." : "Create Project"}
        </Button>
      </FieldGroup>
    </form>
  );
};
