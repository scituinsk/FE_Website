export const LENGTH_CONSTRAINTS = {
  title: { min: 1, max: 100 },
  description: { min: 1, max: 2000 },
  slug: { min: 1, max: 255 },

  auth: {
    name: { MIN: 3, MAX: 50 },
    password: { MIN: 8, MAX: 100 },
    email: { MIN: 5, MAX: 100 },
  },
};
