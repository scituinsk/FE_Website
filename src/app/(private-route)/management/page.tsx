import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

const ManagementPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/login", RedirectType.replace);
  }
  return (
    <div>
      Ini adalah halaman management konten
      {JSON.stringify(session)}
    </div>
  );
};

export default ManagementPage;
