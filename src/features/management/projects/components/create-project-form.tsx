"use client";

import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const createProjectFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  slug: z.string().min(1, "Slug is required"),
  demoUrl: z.url("Demo URL must be a valid URL").optional(),
});

export const CreateProjectForm = () => {
  const form = useForm<z.infer<typeof createProjectFormSchema>>({
    resolver: zodResolver(createProjectFormSchema),
    defaultValues: {
      title: "",
      description: "",
      slug: "",
      demoUrl: "",
    },
  });

  function onSubmit(values: z.infer<typeof createProjectFormSchema>) {
    console.log(values);
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
                id="createProjectForm-title"
                aria-invalid={fieldState.invalid}
                placeholder="Project Title"
                autoComplete="off"
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
              <FieldLabel htmlFor="createProjectForm-demoUrl">Slug</FieldLabel>
              <Input
                {...field}
                id="createProjectForm-demoUrl"
                aria-invalid={fieldState.invalid}
                placeholder="Project Slug"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="demoUrl"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="createProjectForm-slug">Demo Url</FieldLabel>
              <Input
                {...field}
                id="createProjectForm-slug"
                aria-invalid={fieldState.invalid}
                placeholder="Project Demo Url"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Button
          type="submit"
          className="w-full"
        >
          Create Project
        </Button>
      </FieldGroup>
    </form>
  );
};
