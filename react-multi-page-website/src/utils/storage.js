// Small wrappers around localStorage. This site has no backend, so the browser is where
// demo data (drafts, applications, messages, accounts) lives. Reads and writes are wrapped
// in try/catch because localStorage can be unavailable (private browsing, full storage).

export function readJSON(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function writeJSON(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function removeKey(key) {
  try {
    window.localStorage.removeItem(key);
  } catch {
    // Nothing to clean up if storage is unavailable.
  }
}

// Adds an item to a list stored under `key` and returns the saved item.
export function appendToList(key, item) {
  const list = readJSON(key, []);
  const saved = { id: Date.now().toString(36), savedAt: new Date().toISOString(), ...item };
  writeJSON(key, [...list, saved]);
  return saved;
}
