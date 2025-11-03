# 🎯 Quick Reference - Manage Teams Navigation

## 📍 URL Routes

```
Main Overview
└─ /admin/manage-teams
   ├─ Core Team Card → Click "Manage"
   │  └─ /admin/manage-teams/core
   │
   └─ Division Cards → Click "Manage Division"
      ├─ /admin/manage-teams/rpl-si
      ├─ /admin/manage-teams/jaringan-komputer-cyber-security
      └─ /admin/manage-teams/ml-ai
```

## 🎨 Visual Flow

```
┌─────────────────────────────────────────────────────────┐
│                 /admin/manage-teams                      │
│                                                          │
│  📊 Stats: Total Members | Core Team | Divisions        │
│                                                          │
│  ┌────────────────────────────────────────────────┐    │
│  │ 👑 CORE TEAM (Primary Border)                  │    │
│  │                                                 │    │
│  │ [👤][👤][👤][👤][👤][👤][👤][👤]             │    │
│  │ 14 Members | Leadership & coordination         │    │
│  │                            [Manage Button →]   │    │
│  └────────────────────────────────────────────────┘    │
│                                                          │
│  Divisions                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐             │
│  │ 💻 RPL&SI│  │🛡️Jaringan│  │ 🧠 ML&AI│             │
│  │          │  │          │  │          │             │
│  │ [👤👤👤]│  │ [👤👤👤]│  │ [👤👤👤]│             │
│  │ Core: 4  │  │ Core: 4  │  │ Core: 4  │             │
│  │ Mem:  4  │  │ Mem:  4  │  │ Mem:  4  │             │
│  │[Manage →]│  │[Manage →]│  │[Manage →]│             │
│  └──────────┘  └──────────┘  └──────────┘             │
└─────────────────────────────────────────────────────────┘
                    │                    │
        ┌───────────┴──────┐    ┌───────┴──────────┐
        │                  │    │                   │
        ▼                  ▼    ▼                   ▼
┌──────────────┐  ┌──────────────────────────────────────┐
│   CORE TEAM  │  │         DIVISION DETAIL              │
│              │  │    (RPL&SI / Jaringan / ML&AI)       │
│ ← Back       │  │                                       │
│              │  │  ← Back | 💻 | RPL & SI              │
│ 👑 14 Mem    │  │                                       │
│              │  │  📊 Stats: Total | Core | Regular    │
│ 🔍 Search    │  │                                       │
│ + Add Member │  │  ┌─────────────────────────────────┐ │
│              │  │  │ Tabs:                           │ │
│ List:        │  │  │ [All] [Core (4)] [Members (4)]  │ │
│ • Lead SCIT  │  │  └─────────────────────────────────┘ │
│ • Secretary  │  │                                       │
│ • PR         │  │  🔍 Search      + Add Member         │
│ • etc...     │  │                                       │
│              │  │  Members List:                       │
│ [✏️][🗑️]    │  │  • Bayu [Core] [✏️][🗑️]            │
│              │  │  • Agung [Core] [✏️][🗑️]           │
└──────────────┘  │  • Member 1 [✏️][🗑️]               │
                  │  • etc...                            │
                  └──────────────────────────────────────┘
```

## 🔄 User Journey Examples

### Example 1: View All Members in RPL & SI

```
1. Visit /admin/manage-teams
2. Click "Manage Division" di RPL & SI card
3. Land on /admin/manage-teams/rpl-si
4. Stay in "All Members" tab
5. See 8 members (4 core + 4 regular)
```

### Example 2: Add Core Member to Jaringan Division

```
1. Visit /admin/manage-teams
2. Click "Manage Division" di Jaringan card
3. Land on /admin/manage-teams/jaringan-komputer-cyber-security
4. Switch to "Core Members" tab
5. Click "+ Add Member"
6. Fill form:
   - Name: "John Doe"
   - Role: "Lead Network"
   - Angkatan: "Informatics '24"
   - Type: "Core Member" ← Important!
   - Image URL: "https://..."
7. Click Save
8. ✅ Member appears in Core Members tab
```

### Example 3: Search Core Team

```
1. Visit /admin/manage-teams
2. Click "Manage" di Core Team card
3. Land on /admin/manage-teams/core
4. Type "Lead" in search box
5. See filtered results (Lead SCIT, etc.)
```

### Example 4: Edit Regular Member

```
1. Navigate to division (e.g., ML & AI)
2. Switch to "Members" tab (regular members only)
3. Find member to edit
4. Click [✏️] Edit icon
5. Dialog opens with pre-filled form
6. Modify fields
7. Save
8. ✅ Member updated
```

## 📊 Data Distribution

```
SCIT Organization
│
├─ Core Team (14 members)
│  ├─ Lead (1)
│  ├─ Secretary (1)
│  └─ Public Relations (4+)
│
└─ Divisions
   │
   ├─ RPL & SI (8 members)
   │  ├─ Core (4)
   │  │  ├─ Lead
   │  │  ├─ Co-Lead
   │  │  ├─ Secretary
   │  │  └─ Media & Info
   │  └─ Members (4)
   │
   ├─ Jaringan & Cyber Security (8 members)
   │  ├─ Core (4)
   │  └─ Members (4)
   │
   └─ ML & AI (8 members)
      ├─ Core (4)
      └─ Members (4)

Total Unique Members: ~30+ (some overlap)
```

## 🎯 Key Features per Page

### Main Overview (`/admin/manage-teams`)

- ✅ Statistics overview
- ✅ Core Team quick access
- ✅ Division cards with previews
- ✅ Member count per division
- ✅ No editing (navigation only)

### Core Team Page (`/admin/manage-teams/core`)

- ✅ Full list of core team
- ✅ Search functionality
- ✅ Add new core member
- ✅ Edit existing members
- ✅ Delete members
- ✅ Core badge on all members

### Division Pages (`/admin/manage-teams/[slug]`)

- ✅ Statistics per division
- ✅ **TABS: All | Core | Members**
- ✅ Search per tab
- ✅ Add member (Core or Regular)
- ✅ Edit/Delete per member
- ✅ Core badge only on core members
- ✅ Tab counts update dynamically

## 🎨 UI Components Mapping

```
Component                Usage
─────────────────────────────────────────────────
Card                     All containers
Button                   Actions, navigation
Avatar                   Member photos
Badge                    Core/Regular, Angkatan
Tabs                     Division pages only
Dialog                   Add/Edit forms
Input                    Search, form fields
Select                   Dropdowns in forms
Separator                Visual dividers
Icons                    Crown, Code, Shield, Brain, etc.
```

## 🔐 Access Control (Future)

```typescript
// Permission levels
const canEdit = (user, member) => {
  if (user.role === "super_admin") return true;
  if (user.role === "division_lead" && user.division === member.division) return true;
  if (user.id === member.id) return true; // Edit own profile
  return false;
};

// Apply in UI
<Button disabled={!canEdit(currentUser, member)}>
  <Pencil />
</Button>;
```

## 📱 Responsive Behavior

```
Mobile (< 640px)
- Statistics: Stack vertically (1 col)
- Division cards: 1 column
- Member list: Compact view
- Tabs: Scrollable horizontal

Tablet (640px - 1024px)
- Statistics: 2-3 columns
- Division cards: 2 columns
- Member list: Full details

Desktop (> 1024px)
- Statistics: 3-4 columns
- Division cards: 3 columns
- Member list: Full with hover effects
```

## 🚦 Status Indicators (Future)

```tsx
// Add to member object
member.status = "active" | "inactive" | "alumni"

// Display in UI
<Badge variant={
  status === "active" ? "success" :
  status === "inactive" ? "warning" :
  "secondary"
}>
  {status}
</Badge>
```

---

**Quick Start**: Go to `/admin/manage-teams` and start exploring! 🚀

Dibuat dengan ❤️ untuk SCIT UIN Suka
