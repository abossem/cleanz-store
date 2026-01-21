import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export const Cart = ({ onHover }: { onHover: boolean }) => {
  const t = useTranslations("home");
  return (
    <div
      className={cn(
        "flex items-center gap-2",
        onHover ? "text-primary transition-all duration-300" : "",
      )}
    >
      <p>{t("cart")}</p>
      <ShoppingCart size={16} />
    </div>
  );
};
