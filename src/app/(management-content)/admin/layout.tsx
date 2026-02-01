import { SidebarProvider } from "@/components/ui/sidebar";
import { ProtectedGuard } from "@/features/auth/guard/protected-guard";
import { NavbarAdmin } from "@/features/management/common/navbar-admin";
import { SidebarAdmin } from "@/features/management/common/sidebar-admin";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = async ({ children }: AdminLayoutProps) => {
  return (
    <ProtectedGuard>
      <SidebarProvider>
        <SidebarAdmin />
        <main className="flex-1 overflow-auto ">
          <NavbarAdmin />
          {children}
        </main>
      </SidebarProvider>
    </ProtectedGuard>
  );
};

export default AdminLayout;
