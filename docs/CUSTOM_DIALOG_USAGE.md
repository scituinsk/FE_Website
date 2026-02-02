# Custom Dialog Component

Komponen dialog yang reusable dengan style konsisten untuk digunakan di seluruh aplikasi.

## Features

- ✅ Style konsisten dengan header, separator, dan content area
- ✅ Custom close button dengan icon
- ✅ Responsive dengan max-height 85vh
- ✅ Overflow handling otomatis
- ✅ Customizable max-width
- ✅ Optional trigger button
- ✅ Controlled state (open/onOpenChange)

## Props

| Prop           | Type                                                                                 | Default     | Description                                      |
| -------------- | ------------------------------------------------------------------------------------ | ----------- | ------------------------------------------------ |
| `open`         | `boolean`                                                                            | -           | **Required.** Dialog open state (controlled)     |
| `onOpenChange` | `(open: boolean) => void`                                                            | -           | **Required.** Callback when dialog state changes |
| `title`        | `string`                                                                             | -           | **Required.** Dialog title                       |
| `children`     | `ReactNode`                                                                          | -           | **Required.** Dialog content                     |
| `trigger`      | `ReactNode`                                                                          | `undefined` | Optional trigger element                         |
| `maxWidth`     | `"sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "3xl" \| "4xl" \| "5xl" \| "6xl" \| "7xl"` | `"4xl"`     | Maximum width of the dialog                      |
| `disableClose` | `boolean`                                                                            | `false`     | Disable the close button                         |
| `className`    | `string`                                                                             | `""`        | Additional className for DialogContent           |

## Basic Usage

### Example 1: With Trigger Button

```tsx
import { CustomDialog } from "@/components/custom-dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";

export const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CustomDialog
      open={isOpen}
      onOpenChange={setIsOpen}
      title="Tambah Item Baru"
      trigger={
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Tambah Item
        </Button>
      }
    >
      <div>
        <p>Content goes here...</p>
        <Button onClick={() => setIsOpen(false)}>Simpan</Button>
      </div>
    </CustomDialog>
  );
};
```

### Example 2: Without Trigger (Manual Control)

```tsx
import { CustomDialog } from "@/components/custom-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>

      <CustomDialog
        open={isOpen}
        onOpenChange={setIsOpen}
        title="Dialog Title"
      >
        <p>Your content here...</p>
      </CustomDialog>
    </>
  );
};
```

### Example 3: With Form

```tsx
import { CustomDialog } from "@/components/custom-dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateProjectForm } from "./create-project-form";

export const ProjectsPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <CustomDialog
      open={isDialogOpen}
      onOpenChange={setIsDialogOpen}
      title="Tambah Proyek"
      maxWidth="4xl"
      trigger={
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Tambah proyek
        </Button>
      }
    >
      <CreateProjectForm onSuccess={() => setIsDialogOpen(false)} />
    </CustomDialog>
  );
};
```

### Example 4: Custom Width

```tsx
import { CustomDialog } from "@/components/custom-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const SmallDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CustomDialog
      open={isOpen}
      onOpenChange={setIsOpen}
      title="Small Dialog"
      maxWidth="md"
      trigger={<Button>Open Small Dialog</Button>}
    >
      <p>This is a smaller dialog</p>
    </CustomDialog>
  );
};
```

### Example 5: Disable Close Button

```tsx
import { CustomDialog } from "@/components/custom-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const UnclosableDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    // Do async operation
    await someAsyncOperation();
    setIsLoading(false);
    setIsOpen(false);
  };

  return (
    <CustomDialog
      open={isOpen}
      onOpenChange={setIsOpen}
      title="Processing..."
      disableClose={isLoading}
      trigger={<Button>Start Process</Button>}
    >
      <div>
        <p>Please wait while we process your request...</p>
        <Button
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Submit"}
        </Button>
      </div>
    </CustomDialog>
  );
};
```

## Style Specifications

- **Border Radius**: `rounded-3xl`
- **Max Height**: `85vh`
- **Overflow**: Auto on content area
- **Header Padding**: `px-5 py-2.5`
- **Content Padding**: `p-5`
- **Separator**: Divides header and content
- **Close Button**: Top-right corner with `IoClose` icon

## Best Practices

1. **Always use controlled state** - Pass `open` and `onOpenChange` props
2. **Provide meaningful titles** - Use descriptive titles for better UX
3. **Handle close callbacks** - Make sure to handle `onOpenChange` in your forms
4. **Choose appropriate width** - Use smaller widths for simple dialogs, larger for complex forms
5. **Disable close when needed** - Use `disableClose` during async operations
6. **Keep content scrollable** - Let long content scroll naturally within the dialog

## Migration Guide

If you're migrating from the old Dialog pattern:

### Before:

```tsx
<Dialog
  open={isOpen}
  onOpenChange={setIsOpen}
>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent
    showCloseButton={false}
    className="p-0 max-w-4xl max-h-[85vh] rounded-3xl overflow-hidden flex flex-col gap-0"
  >
    <DialogHeader className="flex flex-row items-center justify-between px-5 py-2.5 shrink-0">
      <DialogTitle>Title</DialogTitle>
      <Button
        variant="close"
        size="icon"
        onClick={() => setIsOpen(false)}
      >
        <IoClose />
      </Button>
    </DialogHeader>
    <Separator className="shrink-0" />
    <div className="overflow-y-auto p-5 flex-1">Content</div>
  </DialogContent>
</Dialog>
```

### After:

```tsx
<CustomDialog
  open={isOpen}
  onOpenChange={setIsOpen}
  title="Title"
  trigger={<Button>Open</Button>}
>
  Content
</CustomDialog>
```

## Notes

- The component uses Tailwind CSS classes
- Requires `@/components/ui/button`, `@/components/ui/dialog`, and `@/components/ui/separator`
- Uses `react-icons/io5` for the close icon
