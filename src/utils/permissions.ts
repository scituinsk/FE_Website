import { CurrentSession } from "@/features/auth/queries/use-get-current-session";

export const ACTIONS = {
  CREATE_USER: "create_user",
  DELETE_USER: "delete_user",
  VIEW_ACCOUNTS: "view_users",
} as const;

export type Action = (typeof ACTIONS)[keyof typeof ACTIONS];
// Tipe data untuk Target (bisa berupa User, Article, atau null)
type ResourceTarget = any;

/**
 * Cek Permission User
 * @param currentUser - User object dari auth store
 * @param action - String action yang sudah di-define typenya
 * @param target - Data target (opsional)
 */
export const can = (currentUser: CurrentSession | null, action: Action, target: ResourceTarget = null): boolean => {
  // Fail fast jika tidak ada user login
  if (!currentUser) return false;

  const rules: Record<Action, () => boolean> = {
    view_users: () => {
      return currentUser.role === "SUPER_ADMIN";
    },

    create_user: () => {
      return currentUser.role === "SUPER_ADMIN";
    },

    delete_user: () => {
      if (!target) return false;

      return currentUser.role === "SUPER_ADMIN" && target.role !== "SUPER_ADMIN" && target.id !== currentUser.userId;
    },
  };

  // 5. Eksekusi Rule
  const ruleChecker = rules[action];

  // Jika rule ada, jalankan. Jika tidak (undefined), return false.
  return ruleChecker ? ruleChecker() : false;
};
