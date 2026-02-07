"use client";

import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { getProjectsQueryKey } from "../queries/use-get-projects";
import { useCreateProject } from "../mutations/use-create-project";
import { useQueryClient } from "@tanstack/react-query";

import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group";
import { LENGTH_CONSTRAINTS } from "@/constants/length-constraints";

const createProjectFormSchema = z.object({
  title: z.string().min(LENGTH_CONSTRAINTS.title.min, "Judul wajib diisi").max(LENGTH_CONSTRAINTS.title.max, "Judul terlalu panjang"),
  description: z
    .string()
    .min(LENGTH_CONSTRAINTS.description.min, "Deskripsi wajib diisi")
    .max(LENGTH_CONSTRAINTS.description.max, "Deskripsi terlalu panjang"),
  slug: z
    .string()
    .min(LENGTH_CONSTRAINTS.slug.min, "Slug wajib diisi")
    .max(LENGTH_CONSTRAINTS.slug.max, "Slug terlalu panjang")
    .regex(/^[a-z-]+$/, "Slug hanya boleh berisi huruf kecil dan dash (-)")
    .regex(/^[^-].*[^-]$|^[^-]$/, "Slug tidak boleh dimulai atau diakhiri dengan dash")
    .refine((val) => !/\d/.test(val), "Slug tidak boleh mengandung angka")
    .refine((val) => !val.includes("--"), "Slug tidak boleh memiliki dash berturut-turut"),
  launchYear: z
    .string()
    .min(1, "Tahun perilisan wajib diisi")
    .regex(/^\d{4}$/, "Tahun perilisan harus berupa tahun yang valid (4 digit)"),
  duration: z.string().min(1, "Durasi proyek wajib diisi"),
  linkDemo: z.url("Url produksi harus berupa url yang valid").optional().or(z.literal("")),
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
      launchYear: new Date().getFullYear().toString(),
      duration: "",
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

  const handlePreventEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const titleValue = form.watch("title");
  const descriptionValue = form.watch("description");
  const slugValue = form.watch("slug");

  return (
    <form
      id="createProjectForm"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FieldGroup className="gap-3">
        <Controller
          name="title"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <InputGroup className="h-auto group">
                <InputGroupTextarea
                  id={field.name}
                  placeholder="Beritahu judul proyek yang ingin anda upload"
                  className="min-h-[50px]"
                  onChange={(e) => handleTitleChange(e.target.value, field.onChange)}
                  onKeyDown={handlePreventEnter}
                  aria-invalid={fieldState.invalid || titleValue.length > LENGTH_CONSTRAINTS.title.max}
                  autoComplete="off"
                  disabled={isPending}
                />
                <InputGroupAddon align="block-start">
                  <InputGroupText>Judul</InputGroupText>
                </InputGroupAddon>
                <InputGroupAddon
                  align="block-end"
                  className="opacity-0 group-focus-within:opacity-100 transition-opacity"
                >
                  <InputGroupText className={`ms-auto ${titleValue.length > LENGTH_CONSTRAINTS.title.max ? "text-red-500 font-semibold" : ""}`}>
                    {titleValue.length}/{LENGTH_CONSTRAINTS.title.max}
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="description"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <InputGroup className="h-auto group">
                <InputGroupTextarea
                  {...field}
                  id={field.name}
                  placeholder="Beritahu pengunjung tentang proyek ini"
                  aria-invalid={fieldState.invalid || descriptionValue.length > LENGTH_CONSTRAINTS.description.max}
                  autoComplete="off"
                  disabled={isPending}
                />
                <InputGroupAddon align="block-start">
                  <InputGroupText>Deskripsi</InputGroupText>
                </InputGroupAddon>
                <InputGroupAddon
                  align="block-end"
                  className="opacity-0 group-focus-within:opacity-100 transition-opacity"
                >
                  <InputGroupText
                    className={`ms-auto ${descriptionValue.length > LENGTH_CONSTRAINTS.description.max ? "text-red-500 font-semibold" : ""}`}
                  >
                    {descriptionValue.length}/{LENGTH_CONSTRAINTS.description.max}
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="slug"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <InputGroup className="h-auto group">
                <InputGroupTextarea
                  {...field}
                  id={field.name}
                  className="min-h-[24px]"
                  aria-invalid={fieldState.invalid || slugValue.length > LENGTH_CONSTRAINTS.slug.max}
                  onKeyDown={handlePreventEnter}
                  autoComplete="off"
                  placeholder="Url ini akan menjadi hal yang unik dalam proyek anda"
                  disabled={isPending}
                />
                <InputGroupAddon align="block-start">
                  <InputGroupText>Url unik</InputGroupText>
                </InputGroupAddon>
                <InputGroupAddon
                  align="block-end"
                  className="opacity-0 group-focus-within:opacity-100 transition-opacity"
                >
                  <InputGroupText className={`ms-auto ${slugValue.length > LENGTH_CONSTRAINTS.slug.max ? "text-red-500 font-semibold" : ""}`}>
                    {slugValue.length}/{LENGTH_CONSTRAINTS.slug.max}
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <div className="grid grid-cols-2 gap-3">
          <Controller
            name="launchYear"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <InputGroup>
                  <InputGroupInput
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    placeholder="Tahun perilisan, misal: 2024"
                    disabled={isPending}
                  />
                  <InputGroupAddon align="inline-start">
                    <InputGroupText>Tahun perilisan</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name="duration"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <InputGroup>
                  <InputGroupInput
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    placeholder="Misal: 6 bulan atau 1 tahun atau 2 hari"
                    disabled={isPending}
                  />
                  <InputGroupAddon align="inline-start">
                    <InputGroupText>Durasi proyek</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </div>
        <Controller
          name="linkDemo"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <InputGroup>
                <InputGroupInput
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                  placeholder="https://example.com"
                  disabled={isPending}
                />
                <InputGroupAddon align="inline-start">
                  <InputGroupText>URL produksi</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
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
          Upload Proyek
        </Button>
      </FieldGroup>
    </form>
  );
};
