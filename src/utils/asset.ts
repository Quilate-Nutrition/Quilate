/**
 * Resolves static asset paths taking into account Vite's base path
 * (e.g., '/' locally or '/Quilate/' on GitHub Pages).
 */
export const getAssetUrl = (path: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

