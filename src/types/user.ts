/**
 * @typedef {object} User
 * @property {string} userId - ID unik pengguna.
 * @property {string} name - Nama lengkap pengguna.
 * @property {string} username - Username/email pengguna.
 * @property {string | null} avatar - URL gambar avatar pengguna.
 * @property {"USER" | "ADMIN"} role - Role pengguna dalam sistem.
 * @property {string} createdAt - Timestamp pembuatan user.
 * @property {string} updatedAt - Timestamp update terakhir user.
 */
export type User = {
  userId: string;
  name: string;
  username: string;
  avatar: string | null;
  role: "USER" | "ADMIN";
  createdAt: string;
  updatedAt: string;
};

/**
 * @typedef {object} CreateUserRequest
 * @property {string} name - Nama lengkap pengguna.
 * @property {string} username - Username/email pengguna.
 * @property {string} password - Password pengguna.
 */
export type CreateUserRequest = {
  name: string;
  username: string;
  password: string;
};

/**
 * @typedef {object} UpdateUserRequest
 * @property {string} [name] - Nama lengkap pengguna.
 * @property {string} [username] - Username/email pengguna.
 * @property {string} [password] - Password baru (opsional).
 * @property {"USER" | "ADMIN"} [role] - Role pengguna.
 */
export type UpdateUserRequest = {
  name?: string;
  username?: string;
  password?: string;
  role?: "USER" | "ADMIN";
};
