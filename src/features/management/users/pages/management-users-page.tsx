"use client";

import { useState, useEffect, Activity } from "react";
import { Plus, ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CustomDialog } from "@/components/custom-dialog";
import { useDebounce } from "@/hooks/use-debounce";
import { EmptyState, FilterBar, Pagination } from "../components/users-table";
import ErrorStateUi from "@/components/error-state-ui";
import { LIMITS, useUsersFilters } from "../hooks/use-users-filters";
import { useGetUsers } from "@/features/auth/queries/use-get-users";
import { RoleAdminGuard } from "@/features/auth/guard/role-admin-guard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CreateUserForm } from "../components/create-user-form";
import { EditUserDialog } from "../components/edit-user-dialog";

const ManagementUsersPage = () => {
  const [filters, setFilters] = useUsersFilters();
  const [searchInput, setSearchInput] = useState(filters.search || "");
  const debouncedSearchInput = useDebounce(searchInput, 500);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<{
    userId: number;
    name: string;
    email: string;
    role: "ADMIN" | "SUPER_ADMIN";
  } | null>(null);

  // Update URL search param when debounced value changes
  useEffect(() => {
    if (debouncedSearchInput !== filters.search) {
      setFilters({ search: debouncedSearchInput, page: 1 });
    }
  }, [debouncedSearchInput, filters.search, setFilters]);

  // Sync local input with URL search param (for browser back/forward)
  useEffect(() => {
    setSearchInput(filters.search || "");
  }, [filters.search]);

  const { data, isLoading, isRefetching, isFetching, isError, refetch } = useGetUsers({
    params: {
      page: filters.page,
      per_page: String(filters.limit),
      search: filters.search || undefined,
      sort_by: filters.sortBy || undefined,
      sort_dir: filters.sortOrder || undefined,
    },
  });

  const users = data?.data;

  const handleSort = (field: "created_at") => {
    if (filters.sortBy === field) {
      // Toggle order if same field
      setFilters({ sortOrder: filters.sortOrder === "asc" ? "desc" : "asc", page: 1 });
    } else {
      // Set new field with default desc order
      setFilters({ sortBy: field, sortOrder: "desc", page: 1 });
    }
  };

  return (
    <RoleAdminGuard>
      <Activity mode={isError ? "visible" : "hidden"}>
        <ErrorStateUi
          onRetry={() => {
            if (!isFetching) {
              refetch();
            }
          }}
        />
      </Activity>
      <div
        style={isError ? { display: "none" } : {}}
        className="flex flex-col"
      >
        <div>
          <div className="flex py-4 px-6 gap-2 justify-between">
            <h1 className="text-2xl font-semibold tracking-tight">Manajemen User Login</h1>
            <CustomDialog
              open={isDialogOpen}
              onOpenChange={setIsDialogOpen}
              title="Tambah user baru"
              maxWidth="4xl"
              trigger={
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Tambah User
                </Button>
              }
            >
              <CreateUserForm onSuccess={() => setIsDialogOpen((prev) => !prev)} />
            </CustomDialog>
          </div>
          <Separator />

          {/* Filter and Header */}
          <div
            style={{
              pointerEvents: isFetching ? "none" : "auto",
            }}
            className="sticky top-0 z-10 bg-background"
          >
            {/* Filter */}
            <FilterBar
              value={searchInput}
              onChange={setSearchInput}
            />

            {/* Table Header */}
            <div className="flex items-center px-6 py-3 text-xs font-medium text-muted-foreground border-b">
              <div
                className="flex items-center"
                style={{ width: "40px", marginRight: "12px" }}
              >
                <span>Avatar</span>
              </div>
              <div
                className="flex items-center"
                style={{ minWidth: "150px", flex: "1 0 150px" }}
              >
                <span>Nama</span>
              </div>
              <div
                className="flex items-center"
                style={{ minWidth: "200px", paddingLeft: "12px", flex: "2 0 200px" }}
              >
                <span>Email</span>
              </div>
              <button
                className="flex items-center gap-1 hover:bg-muted/50 rounded px-2 py-1 -mx-2 transition-colors cursor-pointer group"
                style={{ minWidth: "150px", paddingLeft: "12px", flex: "0 0 150px" }}
                onClick={() => handleSort("created_at")}
              >
                <span>Tanggal dibuat</span>
                {filters.sortBy === "created_at" ? (
                  filters.sortOrder === "asc" ? (
                    <ArrowUp className="size-3" />
                  ) : (
                    <ArrowDown className="size-3" />
                  )
                ) : (
                  <ArrowUpDown className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
              <div
                className="flex items-center"
                style={{ minWidth: "150px", paddingLeft: "12px", flex: "0 0 150px" }}
              >
                <span>Role</span>
              </div>
            </div>
          </div>
        </div>

        {/* users Grid */}
        <Activity mode={isLoading ? "hidden" : "visible"}>
          {!users || users.length === 0 ? (
            <EmptyState message={`Tidak ada pengguna yang cocok dengan kata kunci "${filters.search}"`} />
          ) : (
            <div
              className="flex flex-col"
              style={{
                opacity: isRefetching ? "0.5" : "1",
                pointerEvents: isRefetching ? "none" : "auto",
              }}
            >
              {users.map((user) => (
                <div
                  key={user.id}
                  className="px-6 py-3 flex items-center border-b hover:bg-muted/50 transition-colors cursor-pointer"
                  onClick={() =>
                    setSelectedRow({
                      userId: user.id,
                      name: user.name,
                      email: user.email,
                      role: user.role,
                    })
                  }
                >
                  {/* Avatar */}
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{ width: "40px", marginRight: "12px" }}
                  >
                    <Avatar>
                      <AvatarImage src={user.avatar || "https://placehold.co/400"} />
                      <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Nama */}
                  <div
                    className="flex items-center"
                    style={{ minWidth: "150px", flex: "1 0 150px" }}
                  >
                    <span className="font-medium text-sm hover:text-primary truncate">{user.name}</span>
                  </div>

                  {/* Email */}
                  <div
                    className="flex items-center text-sm text-muted-foreground"
                    style={{ minWidth: "200px", paddingLeft: "12px", flex: "2 0 200px" }}
                  >
                    <span className="truncate">{user.email}</span>
                  </div>

                  {/* Tanggal dibuat */}
                  <div
                    className="flex items-center text-xs text-muted-foreground"
                    style={{ minWidth: "150px", paddingLeft: "12px", flex: "0 0 150px" }}
                  >
                    {Intl.DateTimeFormat("id-ID", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    }).format(new Date(user.createdAt))}
                  </div>

                  {/* Role */}
                  <div
                    className="flex items-center"
                    style={{ minWidth: "150px", paddingLeft: "12px", flex: "0 0 150px" }}
                  >
                    <span className="text-xs px-2 py-1 rounded-full font-medium">{user.role === "SUPER_ADMIN" ? "Super Admin" : "Admin"}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Activity>

        {/* Pagination */}
        <Pagination
          currentPage={filters.page}
          pageSize={filters.limit}
          pageSizeOptions={LIMITS}
          pagination={{
            from: data?.pagination.from || 0,
            to: data?.pagination.to || 0,
            total: data?.pagination.total || 0,
            lastPage: data?.pagination.lastPage || 0,
          }}
          onPageChange={(page) => setFilters({ page })}
          onPageSizeChange={(limit) => setFilters({ limit, page: 1 })}
          isVisible={!!(users && users.length > 0)}
        />
        <Separator />
        <div className="h-20" />
      </div>

      {/* Modal Edit */}
      <EditUserDialog
        open={selectedRow !== null}
        onClose={() => setSelectedRow(null)}
        data={selectedRow}
      />
    </RoleAdminGuard>
  );
};

export default ManagementUsersPage;
