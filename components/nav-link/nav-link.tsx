"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface INavLink {
  href: string;
  linkText: string;
}

export default function NavLink({ href, linkText }: INavLink) {
  const path = usePathname();
  const isActive = href === path;
  return (
    <li>
      <Link
        href={href}
        className={`transition-colors hover:text-cyan-400 font-bold ${
          isActive ? "text-cyan-400" : ""
        }`}
      >
        {linkText}
      </Link>
    </li>
  );
}
