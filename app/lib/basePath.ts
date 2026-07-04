// Base path helper for GitHub Pages deployment
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function href(path: string): string {
  if (path.startsWith("http") || path.startsWith("#")) return path;
  return `${basePath}${path}`;
}

export function imgSrc(path: string): string {
  if (path.startsWith("http") || path.startsWith("data:")) return path;
  return `${basePath}${path}`;
}
