"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { flags } from "@/src/data/flags";
import { ChevronDown } from "lucide-react";

export const ChangeLang = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1] || "en";
  const currentFlag =
    flags.find((flag) => flag.id === currentLocale) || flags[0];

  const handleLanguageChange = (locale: string) => {
    const newPathname = pathname.match(/^\/[a-z]{2}/)
      ? pathname.replace(/^\/[a-z]{2}/, `/${locale}`)
      : `/${locale}${pathname}`;
    router.push(newPathname);
    setIsOpen(false);
  };

  return (
    <div className="relative hidden md:inline-block">
      {/* Dropdown Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
      >
        <Image
          src={currentFlag.image}
          alt={currentFlag.name}
          width={24}
          height={24}
          className="w-6 h-6"
        />
        <span className="text-sm font-medium">{currentFlag.name}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-40">
          {flags.map((flag) => (
            <button
              key={flag.id}
              onClick={() => handleLanguageChange(flag.id)}
              className={`flex items-center cursor-pointer gap-2 w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                flag.id === currentLocale
                  ? "bg-gray-50 border-l-2 border-primary"
                  : ""
              }`}
            >
              <Image
                src={flag.image}
                alt={flag.name}
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span className="text-sm">{flag.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
