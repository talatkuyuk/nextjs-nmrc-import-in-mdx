"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = pathname.includes("article");

  return (
    <div className="navbar">
      <Link href="/articles" className={isActive ? "underline" : undefined}>
        Articles
      </Link>
    </div>
  );
};

export default Navbar;
