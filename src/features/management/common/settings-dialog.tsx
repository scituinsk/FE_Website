import { CustomDialog } from "@/components/custom-dialog";
import { Button } from "@/components/ui/button";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { SettingsIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { toast } from "sonner";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group";

type SettingsTab = "profile" | "security";

// Profile Form Schema
const LENGTH_CONSTRAINTS = {
  name: { min: 1, max: 100 },
  email: { min: 1, max: 255 },
  bio: { min: 0, max: 500 },
  phone: { min: 0, max: 20 },
};

const profileFormSchema = z.object({
  name: z.string().min(LENGTH_CONSTRAINTS.name.min, "Nama wajib diisi").max(LENGTH_CONSTRAINTS.name.max, "Nama terlalu panjang"),
  email: z
    .string()
    .min(LENGTH_CONSTRAINTS.email.min, "Email wajib diisi")
    .email("Email tidak valid")
    .max(LENGTH_CONSTRAINTS.email.max, "Email terlalu panjang"),
  phone: z
    .string()
    .max(LENGTH_CONSTRAINTS.phone.max, "Nomor telepon terlalu panjang")
    .regex(/^[0-9+\-() ]*$/, "Nomor telepon hanya boleh berisi angka dan karakter +, -, (, ), spasi")
    .optional()
    .or(z.literal("")),
  bio: z.string().max(LENGTH_CONSTRAINTS.bio.max, "Bio terlalu panjang").optional().or(z.literal("")),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// Password Form Schema
const PASSWORD_CONSTRAINTS = {
  min: 8,
  max: 128,
};

const passwordFormSchema = z
  .object({
    currentPassword: z.string().min(1, "Password saat ini wajib diisi"),
    newPassword: z
      .string()
      .min(PASSWORD_CONSTRAINTS.min, `Password minimal ${PASSWORD_CONSTRAINTS.min} karakter`)
      .max(PASSWORD_CONSTRAINTS.max, "Password terlalu panjang")
      .regex(/[A-Z]/, "Password harus mengandung minimal 1 huruf besar")
      .regex(/[a-z]/, "Password harus mengandung minimal 1 huruf kecil")
      .regex(/[0-9]/, "Password harus mengandung minimal 1 angka"),
    confirmPassword: z.string().min(1, "Konfirmasi password wajib diisi"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Konfirmasi password tidak cocok",
    path: ["confirmPassword"],
  });

type PasswordFormValues = z.infer<typeof passwordFormSchema>;

export const SettingsDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<SettingsTab>("profile");
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [isSavingPassword, setIsSavingPassword] = useState(false);

  // Profile Form
  const profileForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      bio: "",
    },
  });

  // Password Form
  const passwordForm = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const nameValue = profileForm.watch("name");
  const emailValue = profileForm.watch("email");
  const phoneValue = profileForm.watch("phone");
  const bioValue = profileForm.watch("bio");

  const handleProfileSubmit = (values: ProfileFormValues) => {
    setIsSavingProfile(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Profile updated:", values);
      toast.success("Profil berhasil diperbarui", {
        description: "Informasi profil Anda telah disimpan",
      });
      setIsSavingProfile(false);
    }, 1500);
  };

  const handlePasswordSubmit = (values: PasswordFormValues) => {
    setIsSavingPassword(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Password updated:", values);
      toast.success("Password berhasil diubah", {
        description: "Password akun Anda telah diperbarui",
      });
      passwordForm.reset();
      setIsSavingPassword(false);
    }, 1500);
  };

  const handleSave = () => {
    if (activeTab === "profile") {
      profileForm.handleSubmit(handleProfileSubmit)();
    } else if (activeTab === "security") {
      passwordForm.handleSubmit(handlePasswordSubmit)();
    }
  };

  const isSaving = isSavingProfile || isSavingPassword;

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Simulate a 1 second loading time

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <CustomDialog
      open={isOpen}
      onOpenChange={setIsOpen}
      title="Setelan"
      maxWidth="4xl"
      className="h-[600px]"
      isLoading={isLoading}
      trigger={
        <SidebarMenuButton className="h-10">
          <SettingsIcon />
          <span>Setelan</span>
        </SidebarMenuButton>
      }
      dialogContentProps={{
        onPointerDownOutside: (e) => {
          e.preventDefault();
        },
      }}
      dialogContentClassName="p-0 flex flex-col"
      showCloseButtonOnTopRight={false}
      footerContent={
        <div className="h-full flex items-center justify-end w-full gap-3">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => setIsOpen(false)}
            disabled={isSaving}
          >
            Tutup
          </Button>
          <Button
            size="sm"
            variant="primaryAdmin"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? "Menyimpan..." : "Simpan"}
          </Button>
        </div>
      }
    >
      <div className="grid grid-cols-12 flex-1 min-h-0">
        <div className="border-r col-span-4 py-5 px-5 flex flex-col min-h-0">
          <div
            className="space-y-2"
            style={{
              visibility: isLoading ? "hidden" : "visible",
              pointerEvents: isLoading ? "none" : "auto",
            }}
          >
            <Button
              className="w-full justify-start"
              variant={activeTab === "profile" ? "secondary" : "ghost"}
              onClick={() => setActiveTab("profile")}
            >
              Profil
            </Button>
            <Button
              className="w-full justify-start"
              variant={activeTab === "security" ? "secondary" : "ghost"}
              onClick={() => setActiveTab("security")}
            >
              Keamanan akun
            </Button>
          </div>
        </div>
        <div className="col-span-8 overflow-y-auto min-h-0">
          <div
            style={{
              visibility: isLoading ? "hidden" : "visible",
              pointerEvents: isLoading ? "none" : "auto",
            }}
          >
            {activeTab === "profile" && (
              <div className="py-5 px-5 space-y-4">
                <div>
                  <h3 className="font-semibold">Profil</h3>
                  <p className="text-muted-foreground text-sm">Kelola informasi profil Anda</p>
                </div>
                <form onSubmit={profileForm.handleSubmit(handleProfileSubmit)}>
                  <FieldGroup className="gap-3">
                    <Controller
                      name="name"
                      control={profileForm.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <InputGroup className="h-auto group">
                            <InputGroupInput
                              {...field}
                              id={field.name}
                              placeholder="Masukkan nama lengkap Anda"
                              aria-invalid={fieldState.invalid || nameValue.length > LENGTH_CONSTRAINTS.name.max}
                              autoComplete="name"
                              disabled={isSavingProfile}
                            />
                            <InputGroupAddon align="inline-start">
                              <InputGroupText>Nama lengkap</InputGroupText>
                            </InputGroupAddon>
                            <InputGroupAddon
                              align="inline-end"
                              className="opacity-0 group-focus-within:opacity-100 transition-opacity"
                            >
                              <InputGroupText
                                className={`ms-auto ${nameValue.length > LENGTH_CONSTRAINTS.name.max ? "text-red-500 font-semibold" : ""}`}
                              >
                                {nameValue.length}/{LENGTH_CONSTRAINTS.name.max}
                              </InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                      )}
                    />
                    <Controller
                      name="email"
                      control={profileForm.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <InputGroup className="h-auto group">
                            <InputGroupInput
                              {...field}
                              id={field.name}
                              type="email"
                              placeholder="nama@email.com"
                              aria-invalid={fieldState.invalid || emailValue.length > LENGTH_CONSTRAINTS.email.max}
                              autoComplete="email"
                              disabled={isSavingProfile}
                            />
                            <InputGroupAddon align="inline-start">
                              <InputGroupText>Email</InputGroupText>
                            </InputGroupAddon>
                            <InputGroupAddon
                              align="inline-end"
                              className="opacity-0 group-focus-within:opacity-100 transition-opacity"
                            >
                              <InputGroupText
                                className={`ms-auto ${emailValue.length > LENGTH_CONSTRAINTS.email.max ? "text-red-500 font-semibold" : ""}`}
                              >
                                {emailValue.length}/{LENGTH_CONSTRAINTS.email.max}
                              </InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                      )}
                    />
                    <Controller
                      name="phone"
                      control={profileForm.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <InputGroup className="h-auto group">
                            <InputGroupInput
                              {...field}
                              id={field.name}
                              placeholder="+62 812 3456 7890"
                              aria-invalid={fieldState.invalid || (phoneValue?.length || 0) > LENGTH_CONSTRAINTS.phone.max}
                              autoComplete="tel"
                              disabled={isSavingProfile}
                            />
                            <InputGroupAddon align="inline-start">
                              <InputGroupText>Nomor telepon</InputGroupText>
                            </InputGroupAddon>
                            <InputGroupAddon
                              align="inline-end"
                              className="opacity-0 group-focus-within:opacity-100 transition-opacity"
                            >
                              <InputGroupText
                                className={`ms-auto ${(phoneValue?.length || 0) > LENGTH_CONSTRAINTS.phone.max ? "text-red-500 font-semibold" : ""}`}
                              >
                                {phoneValue?.length || 0}/{LENGTH_CONSTRAINTS.phone.max}
                              </InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                      )}
                    />
                    <Controller
                      name="bio"
                      control={profileForm.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <InputGroup className="h-auto group">
                            <InputGroupTextarea
                              {...field}
                              id={field.name}
                              placeholder="Ceritakan sedikit tentang diri Anda"
                              className="min-h-[100px]"
                              aria-invalid={fieldState.invalid || (bioValue?.length || 0) > LENGTH_CONSTRAINTS.bio.max}
                              disabled={isSavingProfile}
                            />
                            <InputGroupAddon align="block-start">
                              <InputGroupText>Bio</InputGroupText>
                            </InputGroupAddon>
                            <InputGroupAddon
                              align="block-end"
                              className="opacity-0 group-focus-within:opacity-100 transition-opacity"
                            >
                              <InputGroupText
                                className={`ms-auto ${(bioValue?.length || 0) > LENGTH_CONSTRAINTS.bio.max ? "text-red-500 font-semibold" : ""}`}
                              >
                                {bioValue?.length || 0}/{LENGTH_CONSTRAINTS.bio.max}
                              </InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                      )}
                    />
                  </FieldGroup>
                </form>
              </div>
            )}
            {activeTab === "security" && (
              <div className="py-5 px-5 space-y-4">
                <div>
                  <h3 className="font-semibold">Keamanan Akun</h3>
                  <p className="text-muted-foreground text-sm">Kelola pengaturan keamanan akun Anda</p>
                </div>
                <form onSubmit={passwordForm.handleSubmit(handlePasswordSubmit)}>
                  <FieldGroup className="gap-3">
                    <Controller
                      name="currentPassword"
                      control={passwordForm.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <InputGroup>
                            <InputGroupInput
                              {...field}
                              id={field.name}
                              type="password"
                              placeholder="Masukkan password saat ini"
                              aria-invalid={fieldState.invalid}
                              autoComplete="current-password"
                              disabled={isSavingPassword}
                            />
                            <InputGroupAddon align="inline-start">
                              <InputGroupText>Password saat ini</InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                      )}
                    />
                    <div className="border-t my-4" />
                    <Controller
                      name="newPassword"
                      control={passwordForm.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <InputGroup>
                            <InputGroupInput
                              {...field}
                              id={field.name}
                              type="password"
                              placeholder="Masukkan password baru"
                              aria-invalid={fieldState.invalid}
                              autoComplete="new-password"
                              disabled={isSavingPassword}
                            />
                            <InputGroupAddon align="inline-start">
                              <InputGroupText>Password baru</InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                          {!fieldState.invalid && field.value && (
                            <p className="text-xs text-muted-foreground mt-1">
                              Password harus minimal {PASSWORD_CONSTRAINTS.min} karakter, mengandung huruf besar, huruf kecil, dan angka
                            </p>
                          )}
                        </Field>
                      )}
                    />
                    <Controller
                      name="confirmPassword"
                      control={passwordForm.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <InputGroup>
                            <InputGroupInput
                              {...field}
                              id={field.name}
                              type="password"
                              placeholder="Ketik ulang password baru"
                              aria-invalid={fieldState.invalid}
                              autoComplete="new-password"
                              disabled={isSavingPassword}
                            />
                            <InputGroupAddon align="inline-start">
                              <InputGroupText>Konfirmasi password</InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                      )}
                    />
                  </FieldGroup>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </CustomDialog>
  );
};
