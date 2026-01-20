"use client";
import navLinks from "@/public/data/nav-links.json";
import { useState } from "react";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";

export const Header = ({ locale }: { locale: string }) => {
  const [onHover, setOnHover] = useState(false);

  const { links } = navLinks[locale as "en" | "ar"];

  return (
    <div className="container pt-4 flex justify-between items-center">
      <NavLinks links={links} onHover={onHover} setOnHover={setOnHover} />
      <Logo />
    </div>
  );
};
