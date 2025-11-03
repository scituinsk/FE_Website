# SCIT Admin Dashboard

Dashboard admin yang telah dibuat untuk mengelola konten website SCIT dengan UI yang compact dan mudah digunakan.

## 📋 Fitur yang Telah Dibuat

### 1. **Dashboard Utama** (`/admin`)

- Overview statistik lengkap (total members, projects, gallery, divisions)
- Recent projects dengan tech stack badges
- Core team members overview
- Divisions overview dengan member count
- Recent activity tracking
- Quick actions untuk navigasi cepat

### 2. **Manage Teams** (`/admin/manage-teams`)

- Statistik: Total members, Core team, Divisions
- Filter by team: All Teams, Core Team, RPL & SI, Jaringan & Cyber, ML & AI
- Search functionality (nama, role, angkatan)
- Daftar member dengan:
  - Avatar/photo
  - Name & role
  - Angkatan badge
  - Division badge
  - Core member indicator
- Dialog untuk menambah member baru
- Edit & delete actions untuk setiap member
- Pagination info

### 3. **Manage Projects** (`/admin/manage-projects`)

- Statistik: Total projects, Tech stack count, Categories count
- Filter by category (All Projects, Web App, Mobile, AI/ML, dll)
- Search functionality (title, description, tech)
- Project cards dengan:
  - Project image/thumbnail
  - Title & description
  - Tech stack badges (max 6 visible)
  - Links ke demo & project page
- Dialog untuk menambah project baru
- Edit & delete actions
- Responsive grid layout

### 4. **Manage Galleries** (`/admin/manage-galleries`)

- Statistik: Total images, Categories, Years
- Filter by year & category
- Search by title
- Gallery grid dengan:
  - Image preview
  - Title & date
  - Category badge
  - Hover actions (edit/delete)
- Dialog untuk menambah image baru
- Responsive 3-column grid (mobile: 1, tablet: 2, desktop: 3)

## 🎨 Design System yang Digunakan

### Komponen UI (dari shadcn/ui)

- ✅ Card, CardHeader, CardTitle, CardDescription, CardContent
- ✅ Button (primary, ghost, outline variants)
- ✅ Input & Search
- ✅ Dialog (untuk forms)
- ✅ Select (untuk filters)
- ✅ Badge (secondary, outline variants)
- ✅ Avatar, AvatarImage, AvatarFallback
- ✅ Separator
- ✅ Sidebar (existing layout)

### Color Scheme

- Background: `bg-background`
- Cards: `border` with `hover:bg-accent/50`
- Text: `text-foreground`, `text-muted-foreground`
- Destructive: `text-destructive` untuk delete buttons
- Primary: `text-primary` untuk links

### Typography

- Heading: `text-3xl font-bold tracking-tight`
- Card Title: `text-sm font-medium`
- Stats: `text-2xl font-bold`
- Description: `text-xs text-muted-foreground`

### Spacing & Layout

- Container padding: `p-6`
- Card spacing: `gap-6`
- Grid gaps: `gap-4`
- Content spacing: `space-y-3`, `space-y-4`

## 📊 Data Sources

### Constants yang Digunakan

1. **CORE_TEAM** (`src/constants/core-team.ts`)

   - Array 2D dari core team members
   - Fields: name, role, angkatan, imageUrl

2. **DIVISION_DETAILS** (`src/constants/division-members.ts`)

   - Array dari divisions (RPL & SI, Jaringan & Cyber, ML & AI)
   - Each division memiliki: slug, name, fullName, description, members, faqs
   - Members memiliki: name, role, angkatan, imageUrl, isCoreMember

3. **PROJECTS** (`src/constants/projects.ts`)

   - Array dari projects
   - Fields: title, description, image, tech, demo, href

4. **GALLERY_IMAGES** (`src/constants/gallery.ts`)
   - Array dari gallery images
   - Fields: id, title, imageUrl, aspectRatio, date, category

## 🔧 Fitur Interaktif

### Search & Filter

- Real-time search tanpa delay
- Multiple filters (team, year, category)
- Filter combination support

### Actions

- ✏️ Edit button (ghost variant) - ready untuk implementasi
- 🗑️ Delete button (destructive color) - ready untuk implementasi
- ➕ Add button (primary) - dengan dialog form

### Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg
- Flexible grid layouts
- Compact cards di mobile, expanded di desktop

## 🚀 Next Steps untuk Implementasi

1. **Backend Integration**

   - Connect forms ke API endpoints
   - Implement CRUD operations
   - Add loading states
   - Error handling

2. **Form Validation**

   - Add react-hook-form
   - Zod schema validation
   - Error messages

3. **Image Upload**

   - File upload component
   - Image preview
   - Cloudinary/S3 integration

4. **Pagination**

   - Add pagination component
   - Limit items per page
   - Page navigation

5. **Confirmation Dialogs**

   - Delete confirmation
   - Unsaved changes warning

6. **Toast Notifications**
   - Success messages
   - Error messages
   - Using sonner (already in project)

## 📱 UI Preview

### Dashboard

- 4 stat cards di top
- Recent projects & core team side by side
- Divisions overview grid
- Quick actions panel

### Manage Teams

- 3 stat cards
- Search + filter controls
- List view dengan avatars & badges
- Add member dialog

### Manage Projects

- 3 stat cards
- Search + category filter
- Card list dengan thumbnail
- Tech stack badges & links

### Manage Galleries

- 3 stat cards
- Search + year + category filters
- Grid view dengan image previews
- Metadata overlay

## 🎯 Design Principles

1. **Compact & Efficient**: Minimal whitespace, maximum information density
2. **Easy to Scan**: Clear hierarchy, consistent spacing
3. **Quick Actions**: Edit/delete always visible on hover/in view
4. **Responsive**: Adapts dari mobile ke desktop seamlessly
5. **Consistent**: Menggunakan design system yang sama di semua halaman
6. **Accessible**: Proper semantic HTML, ARIA labels ready

---

Dibuat dengan ❤️ untuk SCIT UIN Suka
