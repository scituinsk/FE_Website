"use client";

import { RoleAdminGuard } from "@/features/auth/guard/role-admin-guard";

const ManageUserLoginPage = () => {
  return (
    <RoleAdminGuard>
      <div>Manage Users Login Page Content</div>
    </RoleAdminGuard>
  );
};

export default ManageUserLoginPage;
