"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";

import { Link } from "@/src/i18n/navigation";
import { cn } from "@/lib/utils";
import navLinks from "@/public/data/nav-links.json";

import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { SearchInput } from "./SearchInput";
import { Cart } from "./Cart";

export const Header = ({ locale }: { locale: string }) => {
  const [onHover, setOnHover] = useState(false);
  const t = useTranslations("home");
  const session = useSession();

  const { links } = navLinks[locale as "en" | "ar"];

  return (
    <header className={cn(onHover ? "bg-white" : "")}>
      <div className="container pt-4 flex justify-between items-center">
        <NavLinks links={links} onHover={onHover} setOnHover={setOnHover} />
        <Logo />
        <div className="flex items-center gap-4 text-white">
          <Link
            href={session?.status === "authenticated" ? "/profile" : "/login"}
          >
            {t(session?.status === "authenticated" ? "account" : "login")}
          </Link>
          <SearchInput onHover={onHover} />
          <Cart onHover={onHover} />
        </div>
      </div>
    </header>
  );
};
