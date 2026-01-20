import { cn } from "@/lib/utils";
import { Link } from "@/src/i18n/navigation";
import React from "react";

export const NavLinks = ({
  links,
  onHover,
  setOnHover,
}: {
  links: { href: string; name: string }[];
  onHover?: boolean;
  setOnHover: (value: boolean) => void;
}) => {
  console.log("on hover", onHover);

  return (
    <div
      className={cn(
        "flex items-center gap-3 bg-amber-500",
        onHover ? "text-primary" : "",
      )}
    >
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.name}
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};
