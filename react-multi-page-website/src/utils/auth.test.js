import { signUp, logIn, logOut, getCurrentUser } from "./auth";

beforeEach(() => {
  window.localStorage.clear();
});

test("signing up logs the user in", async () => {
  await signUp({ name: "Himani", email: "Himani@Example.com", password: "pizza1234" });
  expect(getCurrentUser()).toEqual({ name: "Himani", email: "himani@example.com" });
});

test("passwords are never stored in plain text", async () => {
  await signUp({ name: "Himani", email: "h@example.com", password: "pizza1234" });
  expect(window.localStorage.getItem("naplesDemoUsers")).not.toContain("pizza1234");
});

test("logging in works with the right password and fails with the wrong one", async () => {
  await signUp({ name: "Himani", email: "h@example.com", password: "pizza1234" });
  logOut();
  expect(getCurrentUser()).toBeNull();

  await expect(logIn({ email: "h@example.com", password: "wrong-password" })).rejects.toThrow();
  await expect(logIn({ email: "h@example.com", password: "pizza1234" })).resolves.toEqual({
    name: "Himani",
    email: "h@example.com",
  });
});

test("the same email can't sign up twice", async () => {
  await signUp({ name: "Himani", email: "h@example.com", password: "pizza1234" });
  await expect(signUp({ name: "Other", email: "H@example.com", password: "another123" })).rejects.toThrow(
    /already exists/
  );
});
