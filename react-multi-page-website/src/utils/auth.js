// Demo-only account system. Accounts are stored in this browser's localStorage, so they
// only exist on the device where they were created. Passwords are salted and hashed with
// SHA-256 before saving so they're never stored as plain text, but a real site would
// handle accounts on a server instead.

import { readJSON, writeJSON, removeKey } from "./storage";

const USERS_KEY = "naplesDemoUsers";
const SESSION_KEY = "naplesDemoSession";

function toHex(buffer) {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function makeSalt() {
  const bytes = new Uint8Array(16);
  window.crypto.getRandomValues(bytes);
  return toHex(bytes);
}

export async function hashPassword(password, salt) {
  const data = new TextEncoder().encode(`${salt}:${password}`);
  const digest = await window.crypto.subtle.digest("SHA-256", data);
  return toHex(digest);
}

function normalizeEmail(email) {
  return String(email).trim().toLowerCase();
}

export async function signUp({ name, email, password }) {
  const users = readJSON(USERS_KEY, {});
  const key = normalizeEmail(email);
  if (users[key]) {
    throw new Error("An account with that email already exists. Try logging in.");
  }
  const salt = makeSalt();
  const passwordHash = await hashPassword(password, salt);
  users[key] = { name: name.trim(), email: key, salt, passwordHash };
  writeJSON(USERS_KEY, users);
  writeJSON(SESSION_KEY, key);
  return { name: users[key].name, email: key };
}

export async function logIn({ email, password }) {
  const users = readJSON(USERS_KEY, {});
  const key = normalizeEmail(email);
  const user = users[key];
  // Same message for a missing account or a wrong password, so the form doesn't reveal which emails exist.
  const failure = new Error("That email and password don't match an account.");
  if (!user) throw failure;
  const attempt = await hashPassword(password, user.salt);
  if (attempt !== user.passwordHash) throw failure;
  writeJSON(SESSION_KEY, key);
  return { name: user.name, email: key };
}

export function getCurrentUser() {
  const key = readJSON(SESSION_KEY, null);
  if (!key) return null;
  const user = readJSON(USERS_KEY, {})[key];
  return user ? { name: user.name, email: user.email } : null;
}

export function logOut() {
  removeKey(SESSION_KEY);
}
