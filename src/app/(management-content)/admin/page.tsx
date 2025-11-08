import { redirect } from "next/navigation";

const page = () => {
  redirect("/admin/manage-projects");
};

export default page;
