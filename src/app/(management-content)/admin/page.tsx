import { redirect } from "next/navigation";

const AdminPage = () => {
  // Redirect to manage-projects by default or you can create a dashboard
  redirect("/admin/manage-projects");
};

export default AdminPage;
