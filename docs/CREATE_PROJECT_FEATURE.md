# Create Project Feature - Documentation

## Overview

Implementasi fitur create project dengan mutation, loading state, toast notification, dan auto-generate slug.

## Files Created/Modified

### 1. Mutation Hook

**File:** `src/features/management/projects/mutations/use-create-project.ts`

```typescript
export const useCreateProject = (params: UseCreateProjectParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      // Invalidate all project queries to refetch data
      queryClient.invalidateQueries({ queryKey: getProjectsQueryKey() });
    },
    ...params.mutationConfig,
  });
};
```

**Features:**

- Type-safe mutation dengan TypeScript
- Auto invalidate queries setelah create success
- Support custom mutation config untuk toast/callbacks
- Proper error handling

### 2. Create Project Form

**File:** `src/features/management/projects/components/create-project-form.tsx`

**Features:**

- ✅ Form validation dengan Zod
- ✅ Loading state dengan disabled inputs
- ✅ Spinner icon pada button saat loading
- ✅ Auto-generate slug dari title
- ✅ Toast notifications (success/error)
- ✅ Auto reset form setelah success
- ✅ Callback `onSuccess` untuk close dialog

### 3. Management Page

**File:** `src/features/management/projects/pages/management-project-page.tsx`

**Features:**

- Dialog state management
- Auto close dialog setelah create success
- Integrated dengan pagination dan search

## API Request

### Endpoint

```
POST /projects
```

### Request Body

```json
{
  "title": "ModaWave E-Commerce",
  "description": "Website e-commerce fashion modern dengan fitur katalog dinamis, payment gateway, dan personalisasi rekomendasi produk.",
  "slug": "modawave-ecommerce",
  "linkDemo": "https://shop.modawave.com"
}
```

**Field Details:**

- `title` (required): Judul project
- `description` (required): Deskripsi project
- `slug` (required): URL-friendly slug (auto-generated dari title)
- `linkDemo` (optional): URL demo project

### Response

```json
{
  "statusCode": 200,
  "message": "Success",
  "data": {
    "id": 15,
    "title": "ModaWave E-Commerce",
    "description": "Website e-commerce fashion modern...",
    "slug": "modawave-ecommerce",
    "demoUrl": "https://shop.modawave.com",
    "status": "PLANNING",
    "createdAt": "2025-11-24T14:23:02.765Z",
    "updatedAt": "2025-11-24T14:23:02.765Z",
    "technologies": [],
    "images": []
  }
}
```

## Usage Example

### Basic Usage

```tsx
const { mutate: createProject, isPending } = useCreateProject();

// Call mutation
createProject({
  title: "My Project",
  description: "Project description",
  slug: "my-project",
  linkDemo: "https://demo.com",
});
```

### With Custom Callbacks

```tsx
const { mutate, isPending } = useCreateProject({
  mutationConfig: {
    onSuccess: (data) => {
      console.log("Created project:", data);
      toast.success("Success!");
    },
    onError: (error) => {
      console.error("Error:", error);
      toast.error("Failed!");
    },
  },
});
```

## Features Breakdown

### 1. Auto-Generate Slug

Slug otomatis di-generate dari title dengan rules:

- Lowercase
- Remove special characters
- Replace spaces with hyphens
- Remove multiple consecutive hyphens

**Example:**

- Input: "ModaWave E-Commerce!!!"
- Output: "modawave-ecommerce"

### 2. Loading States

```tsx
// Inputs disabled saat loading
<Input disabled={isPending} />

// Button dengan spinner
<Button disabled={isPending}>
  {isPending && <Loader2 className="animate-spin" />}
  {isPending ? "Creating..." : "Create Project"}
</Button>
```

### 3. Toast Notifications

```tsx
// Success toast
toast.success("Project berhasil dibuat!", {
  description: `${data.title} telah ditambahkan ke portfolio`,
});

// Error toast
toast.error("Gagal membuat project", {
  description: error.message || "Terjadi kesalahan saat membuat project",
});
```

### 4. Form Validation

```tsx
const createProjectFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  slug: z.string().min(1, "Slug is required"),
  linkDemo: z.string().url("Demo URL must be a valid URL").optional().or(z.literal("")),
});
```

## Integration Flow

1. User clicks "Tambah Project" button
2. Dialog opens with CreateProjectForm
3. User fills in title (slug auto-generated)
4. User fills description and optional demo URL
5. User submits form
6. Validation runs (Zod schema)
7. Mutation executes (POST /projects)
8. Loading state shown (button disabled, spinner visible)
9. On success:
   - Toast notification shown
   - Form reset
   - Dialog closes
   - Projects list refetched (invalidateQueries)
10. On error:
    - Error toast shown
    - Form stays open for correction

## Error Handling

### Network Errors

```typescript
onError: (error) => {
  toast.error("Gagal membuat project", {
    description: error.message || "Terjadi kesalahan saat membuat project",
  });
};
```

### Validation Errors

- Zod handles validation before submission
- Field-level error messages shown
- Form submission prevented if invalid

## Best Practices Applied

1. ✅ Proper TypeScript typing
2. ✅ Loading state management
3. ✅ Error handling with user feedback
4. ✅ Auto-invalidate queries for data freshness
5. ✅ Accessible forms (aria-invalid, proper labels)
6. ✅ User-friendly UX (auto-slug, disabled states)
7. ✅ Clean separation of concerns (mutation/component/page)
8. ✅ Consistent code style with existing codebase
9. ✅ Proper documentation with JSDoc
10. ✅ Reusable mutation hook pattern

## Testing Checklist

- [ ] Form validation works for all fields
- [ ] Slug auto-generation from title
- [ ] Loading state disables form inputs
- [ ] Success toast appears after create
- [ ] Error toast appears on failure
- [ ] Dialog closes after success
- [ ] Projects list updates after create
- [ ] Form resets after success
- [ ] Optional linkDemo field works
- [ ] Network error handling

## Future Enhancements

- [ ] Image upload for project
- [ ] Technology tags selection
- [ ] Status selection
- [ ] Duration and launch date fields
- [ ] About/detailed description field
- [ ] Duplicate slug detection
- [ ] Preview before submit
