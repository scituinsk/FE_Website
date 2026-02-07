"use client";

import { toast } from "sonner";

import { getUsersQueryKey } from "@/features/auth/queries/use-get-users";
import { useCreateUser } from "@/features/auth/queries/use-create-user";
import { useQueryClient } from "@tanstack/react-query";
import { LENGTH_CONSTRAINTS } from "@/constants/length-constraints";
import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";

const createUserFormSchema = z.object({
  name: z.string().min(LENGTH_CONSTRAINTS.auth.name.MIN, "Nama terlalu pendek").max(LENGTH_CONSTRAINTS.auth.name.MAX, "Nama terlalu panjang"),
  email: z
    .email("Format email tidak valid")

    .min(LENGTH_CONSTRAINTS.auth.email.MIN, "Email terlalu pendek")
    .max(LENGTH_CONSTRAINTS.auth.email.MAX, "Email terlalu panjang"),
  password: z
    .string()
    .min(LENGTH_CONSTRAINTS.auth.password.MIN, "Password terlalu pendek")
    .max(LENGTH_CONSTRAINTS.auth.password.MAX, "Password terlalu panjang"),
});

type CreateUserFormValues = z.infer<typeof createUserFormSchema>;

interface CreateUserFormProps {
  onSuccess?: () => void;
}

export const CreateUserForm = ({ onSuccess }: CreateUserFormProps) => {
  const queryClient = useQueryClient();

  const form = useForm<CreateUserFormValues>({
    resolver: zodResolver(createUserFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { mutate: createUser, isPending: isCreating } = useCreateUser({
    mutationConfig: {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: getUsersQueryKey(),
        });
        toast.success("User berhasil ditambahkan!");
        form.reset();
        onSuccess?.();
      },
      onError: (error: any) => {
        toast.error(error?.response?.data?.message || "Gagal menambahkan user");
      },
    },
  });

  function onSubmit(values: CreateUserFormValues) {
    createUser(values);
  }

  const nameValue = form.watch("name");
  const emailValue = form.watch("email");

  return (
    <form
      id="createUserForm"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FieldGroup className="gap-3">
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <InputGroup className="h-auto group">
                <InputGroupInput
                  {...field}
                  id={field.name}
                  placeholder="John"
                  aria-invalid={fieldState.invalid || nameValue.length > LENGTH_CONSTRAINTS.auth.name.MAX}
                  autoComplete="off"
                  disabled={isCreating}
                />
                <InputGroupAddon align="block-start">
                  <InputGroupText>Nama</InputGroupText>
                </InputGroupAddon>
                <InputGroupAddon
                  align="block-end"
                  className="opacity-0 group-focus-within:opacity-100 transition-opacity"
                >
                  <InputGroupText className={`ms-auto ${nameValue.length > LENGTH_CONSTRAINTS.auth.name.MAX ? "text-red-500 font-semibold" : ""}`}>
                    {nameValue.length}/{LENGTH_CONSTRAINTS.auth.name.MAX}
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <InputGroup className="h-auto group">
                <InputGroupInput
                  {...field}
                  id={field.name}
                  type="email"
                  placeholder="nama@scituinsk.com"
                  aria-invalid={fieldState.invalid || emailValue.length > LENGTH_CONSTRAINTS.auth.email.MAX}
                  autoComplete="off"
                  disabled={isCreating}
                />
                <InputGroupAddon align="block-start">
                  <InputGroupText>Email</InputGroupText>
                </InputGroupAddon>
                <InputGroupAddon
                  align="block-end"
                  className="opacity-0 group-focus-within:opacity-100 transition-opacity"
                >
                  <InputGroupText className={`ms-auto ${emailValue.length > LENGTH_CONSTRAINTS.auth.email.MAX ? "text-red-500 font-semibold" : ""}`}>
                    {emailValue.length}/{LENGTH_CONSTRAINTS.auth.email.MAX}
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <InputGroup className="h-auto group">
                <InputGroupInput
                  {...field}
                  id={field.name}
                  type="password"
                  placeholder="*******"
                  aria-invalid={fieldState.invalid || emailValue.length > LENGTH_CONSTRAINTS.auth.email.MAX}
                  autoComplete="off"
                  disabled={isCreating}
                />
                <InputGroupAddon align="block-start">
                  <InputGroupText>Password</InputGroupText>
                </InputGroupAddon>
                <InputGroupAddon
                  align="block-end"
                  className="opacity-0 group-focus-within:opacity-100 transition-opacity"
                />
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Button
          type="submit"
          size="sm"
          disabled={isCreating}
        >
          Simpan
        </Button>
      </FieldGroup>
    </form>
  );
};
