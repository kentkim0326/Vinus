import { creators } from "../../lib/data";

export function generateStaticParams() {
  return creators.map((c) => ({ id: String(c.id) }));
}

export default function CreatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
