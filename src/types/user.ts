export type User = {
  id: number;
  name: string;
  email: string;
  role: "SUPER_ADMIN" | "ADMIN";
  createdAt: string;
  updatedAt: string;
};

export type CreateUserRequest = {
  name: string;
  email: string;
  password: string;
};

export type UpdateUserRequest = {
  name?: string;
  email?: string;
  password?: string;
  role?: "SUPER_ADMIN" | "ADMIN";
};
