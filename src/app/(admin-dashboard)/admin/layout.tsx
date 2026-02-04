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
        <div className="w-full h-screen flex flex-col overflow-hidden">
          <NavbarAdmin />
          <div className="flex flex-1 overflow-hidden">
            <SidebarAdmin />
            <main
              style={{
                scrollbarGutter: "stable",
              }}
              className="flex-1 overflow-auto"
            >
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </ProtectedGuard>
  );
};

export default AdminLayout;
