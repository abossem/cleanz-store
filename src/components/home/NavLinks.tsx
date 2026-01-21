import { cn } from "@/lib/utils";
import { Link } from "@/src/i18n/navigation";

export const NavLinks = ({
  links,
  onHover,
  setOnHover,
}: {
  links: { href: string; name: string }[];
  onHover?: boolean;
  setOnHover: (value: boolean) => void;
}) => {
  return (
    <nav
      className={cn(
        "flex items-center gap-3 text-white",
        onHover ? "text-primary transition-all duration-300" : "",
      )}
    >
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.name}
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          className="nav-link"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
