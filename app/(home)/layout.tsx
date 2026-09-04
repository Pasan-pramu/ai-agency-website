import type { ReactNode } from "react";
import SiteShell from "@/app/components/layout/SiteShell";

/*
 * The home variant of the shell. See app/(inner)/layout.tsx for why the variant
 * is resolved with route groups rather than by reading the pathname.
 *
 * Only index.html lives here.
 */
export default function HomeLayout({ children }: { children: ReactNode }) {
  return <SiteShell variant="home">{children}</SiteShell>;
}
