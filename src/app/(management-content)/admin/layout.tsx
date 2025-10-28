import { SidebarProvider } from "@/components/ui/sidebar";
import { NavbarAdmin } from "@/features/management/common/navbar-admin";
import { SidebarAdmin } from "@/features/management/common/sidebar-admin";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <SidebarProvider>
      <SidebarAdmin />
      <main className="flex-1">
        <NavbarAdmin />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default AdminLayout;
