import { auth } from "./lib/auth";

async function seedUser() {
  await auth.api.signUpEmail({
    body: {
      name: "Ahmad",
      email: "admin@gmail.com",
      password: "12345678",
    },
  });
}

seedUser().then(() => {
  console.log("OK");
});
