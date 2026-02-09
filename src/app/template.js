
// src/app/template.js
"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }) {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return children;
}