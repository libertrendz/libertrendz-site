// components/hide-on-paths.tsx
"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function HideOnPaths({
  hidePrefixes,
  children,
}: {
  hidePrefixes: string[];
  children: ReactNode;
}) {
  const pathname = usePathname() || "/";
  const shouldHide = hidePrefixes.some((p) => pathname === p || pathname.startsWith(p + "/"));
  if (shouldHide) return null;
  return <>{children}</>;
}
