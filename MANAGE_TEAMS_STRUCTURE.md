# Manage Teams - Structure Documentation

## 📁 File Structure

```
src/app/(management-content)/admin/manage-teams/
├── page.tsx                    # Main teams overview (card-based)
├── core/
│   └── page.tsx               # Core team management
└── [slug]/
    └── page.tsx               # Division-specific management
```

## 🎯 Page Hierarchy

### 1. **Main Teams Page** (`/admin/manage-teams`)

**Purpose**: Overview dashboard dengan card untuk setiap team/division

**Features**:

- Statistics cards (Total Members, Core Team, Divisions)
- Core Team card dengan akses ke management page
- Division cards dengan stats per divisi
- Navigate ke halaman detail management

**UI Components**:

- Card untuk Core Team (dengan border primary)
- Grid cards untuk setiap divisi (RPL & SI, Jaringan & Cyber, ML & AI)
- Member avatars preview di setiap card
- Core vs Regular members count per divisi

---

### 2. **Core Team Management** (`/admin/manage-teams/core`)

**Purpose**: Kelola anggota core team secara terpisah

**Features**:

- ✅ Back button ke main teams page
- ✅ Header dengan Crown icon
- ✅ Search functionality
- ✅ Add member dialog (khusus core team)
- ✅ List view semua core team members
- ✅ Edit & Delete actions per member
- ✅ Core badge di setiap member

**Data Source**: `CORE_TEAM` dari `@/constants/core-team`

**Member Fields**:

- Name
- Role (e.g., Lead SCIT, Secretary, Public Relation)
- Angkatan
- Image URL

---

### 3. **Division Management** (`/admin/manage-teams/[slug]`)

**Purpose**: Kelola anggota per divisi dengan pemisahan Core Members dan Regular Members

**Supported Slugs**:

- `rpl-si` - RPL & SI Division
- `jaringan-komputer-cyber-security` - Jaringan & Cyber Security
- `ml-ai` - ML & AI Division

**Features**:

- ✅ Back button ke main teams page
- ✅ Division-specific header dengan icon
- ✅ Statistics (Total, Core, Regular members)
- ✅ **TABS** untuk memisahkan:
  - All Members (semua anggota)
  - Core Members (leadership divisi)
  - Members (anggota biasa)
- ✅ Search functionality per tab
- ✅ Add member dialog (dengan pilihan Core/Regular)
- ✅ List view dengan badge Core/Regular
- ✅ Edit & Delete actions per member

**Data Source**: `DIVISION_DETAILS` dari `@/constants/division-members`

**Member Fields**:

- Name
- Role (e.g., Lead, Co-Lead, Secretary, Media & Information, Member)
- Angkatan
- Image URL
- **isCoreMember** (boolean) - menentukan apakah core atau regular member

---

## 🎨 Design System

### Color & Icons

- **Core Team**: Crown icon, Primary border
- **RPL & SI**: Code icon
- **Jaringan & Cyber**: Shield icon
- **ML & AI**: Brain icon

### Card Components

```tsx
// Main page - Division Card
- Header: Icon + Division name
- Avatar preview (max 6 visible)
- Stats grid: Core Members | Members
- Manage button with ArrowRight icon
```

### Tabs Component (Division Pages)

```tsx
<Tabs defaultValue="all">
  <TabsList>- All Members - Core Members (count) - Members (count)</TabsList>
  <TabsContent>// Member list filtered by tab</TabsContent>
</Tabs>
```

---

## 🔄 Navigation Flow

```
/admin/manage-teams
├─ Click "Core Team" → /admin/manage-teams/core
│  └─ Manage core team members
│  └─ Back to teams
│
├─ Click "RPL & SI" → /admin/manage-teams/rpl-si
│  ├─ Tab: All Members
│  ├─ Tab: Core Members (Lead, Co-Lead, Secretary, Media)
│  └─ Tab: Members (Regular members)
│  └─ Back to teams
│
├─ Click "Jaringan & Cyber" → /admin/manage-teams/jaringan-komputer-cyber-security
│  └─ Same structure as RPL & SI
│
└─ Click "ML & AI" → /admin/manage-teams/ml-ai
   └─ Same structure as RPL & SI
```

---

## 📊 Data Structure

### Core Team

```typescript
// Flattened from 2D array
[
  { name, role, angkatan, imageUrl },
  // Lead, Secretary, Public Relations, etc.
];
```

### Division Members

```typescript
{
  slug: "rpl-si",
  name: "RPL & SI",
  fullName: "Rekayasa Perangkat Lunak & Sistem Informasi",
  members: [
    {
      name,
      role,
      angkatan,
      imageUrl,
      isCoreMember: true  // Core member flag
    },
    // Core: Lead, Co-Lead, Secretary, Media & Information
    // Regular: Member 1, Member 2, etc.
  ]
}
```

---

## 🎯 Key Differences

### Before (Single Page)

❌ All members mixed in one list
❌ Single filter dropdown
❌ Hard to distinguish core vs regular members
❌ No division-specific context

### After (Card-based + Separate Pages)

✅ **Main page**: Card overview untuk setiap team/division
✅ **Core Team page**: Dedicated page untuk core team management
✅ **Division pages**: Separate page per divisi dengan TABS
✅ **Clear separation**: Core Members vs Regular Members
✅ **Better UX**: Navigate to specific context before managing
✅ **Scalable**: Easy to add new divisions

---

## 🚀 Future Enhancements

1. **Reordering**: Drag & drop untuk urutan members
2. **Bulk Actions**: Select multiple members untuk bulk delete/edit
3. **Import/Export**: CSV import untuk mass member addition
4. **Member Details**: Click member untuk detailed view/edit
5. **Activity Log**: Track changes per member
6. **Permissions**: Role-based access untuk edit/delete

---

## 💡 Usage Examples

### Adding Core Team Member

1. Navigate to `/admin/manage-teams`
2. Click "Manage" pada Core Team card
3. Click "Add Member" button
4. Fill form (Name, Role, Angkatan, Image URL)
5. Save → Member added to core team

### Adding Division Member (Core)

1. Navigate to `/admin/manage-teams`
2. Click "Manage Division" pada division card (e.g., RPL & SI)
3. Switch to "Core Members" tab
4. Click "Add Member" button
5. Fill form, select "Core Member" type
6. Save → Member added as core member of division

### Adding Division Member (Regular)

1. Same as above, but select "Regular Member" type
2. Member will appear in "Members" tab only

---

## 🎨 UI Preview

### Main Page

```
┌─────────────────────────────────────┐
│ Statistics (3 cards)                │
├─────────────────────────────────────┤
│ ┌─ Core Team (Primary Border) ───┐ │
│ │ Crown Icon | Core Team          │ │
│ │ Avatars... | Manage Button →   │ │
│ └─────────────────────────────────┘ │
├─────────────────────────────────────┤
│ Divisions (Grid 3 cols)             │
│ ┌─────┐ ┌─────┐ ┌─────┐            │
│ │RPL&SI│Jaringan│ML&AI│            │
│ │Stats │ Stats │Stats │            │
│ │Manage│Manage │Manage│            │
│ └─────┘ └─────┘ └─────┘            │
└─────────────────────────────────────┘
```

### Division Detail Page

```
┌─────────────────────────────────────┐
│ ← Back | Icon | Division Name       │
├─────────────────────────────────────┤
│ Statistics (3 cards)                │
├─────────────────────────────────────┤
│ Tabs: All | Core (4) | Members (4) │
├─────────────────────────────────────┤
│ Search | Add Member                 │
│ ───────────────────────────────────│
│ Member 1 | Edit Delete             │
│ Member 2 | Edit Delete             │
│ Member 3 | Edit Delete             │
└─────────────────────────────────────┘
```

---

Dibuat dengan ❤️ untuk SCIT UIN Suka
