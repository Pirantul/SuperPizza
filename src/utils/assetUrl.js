/** Public asset path that respects Vite `base` (e.g. `/pizza/`). */
export function assetUrl(path) {
  const base = import.meta.env.BASE_URL || "/";
  const normalized = String(path).replace(/^\/+/, "");
  return `${base}${normalized}`;
}
