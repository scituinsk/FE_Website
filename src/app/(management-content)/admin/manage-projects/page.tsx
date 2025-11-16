"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Search, FolderKanban } from "lucide-react";

import { PROJECTS } from "@/constants/projects";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { SimpleTechStack } from "@/features/projects/components/simple-tech-stack";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";

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
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
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

const ManageProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const totalProjects = PROJECTS.length;

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Manage Projects</h1>
        <p className="text-muted-foreground">Kelola portfolio dan proyek-proyek SCIT</p>
      </div>

      {/* Statistics Cards */}
      <div className="w-full">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            <FolderKanban className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalProjects}</div>
            <p className="text-xs text-muted-foreground">Active projects</p>
          </CardContent>
        </Card>
      </div>

      {/* Projects List */}
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle className="lg:text-2xl">Projects</CardTitle>
              <CardDescription>Daftar semua proyek yang telah dikembangkan</CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Tambah Project
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle> Tambah Project</DialogTitle>
                  <DialogDescription>Tambahkan proyek baru ke portfolio</DialogDescription>
                </DialogHeader>
                <CreateProjectForm />
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search and Filter */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search projects by title, description, or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <Separator />

          {/* Projects Grid */}
          <div className="flex flex-col gap-5">
            {PROJECTS.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <FolderKanban className="h-12 w-12 text-muted-foreground/50 mb-4" />
                <p className="text-sm text-muted-foreground">No projects found</p>
              </div>
            ) : (
              PROJECTS.map((project, index) => (
                <Link
                  key={index}
                  href={`/admin/manage-projects/${1}`}
                >
                  <div className="flex flex-col sm:flex-row items-center gap-4 rounded-lg border p-4 hover:bg-accent/50 transition-colors">
                    {/* Project Image */}
                    <div className="relative w-full sm:w-32 h-32 rounded-md overflow-hidden bg-muted flex-shrink-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://placehold.co/400x300/png?text=No+Image";
                        }}
                      />
                    </div>

                    {/* Project Info */}
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-lg line-clamp-1">{project.title}</h3>
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>

                      {/* Tech Stack */}

                      <div className="flex flex-wrap gap-1.5">
                        {Array.from({ length: 6 }).map((_, idx) => (
                          <SimpleTechStack
                            key={idx}
                            techNames={["React"]}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          {/* Pagination */}
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageProjectsPage;
