import React from "react";
import { SocialMedia } from "./SocialMedia";
import { ChangeLang } from "./ChangeLang";
import { OfferWithTimer } from "./OfferWithTimer";
import { Link } from "@/src/i18n/navigation";

export const InfoBar = () => {
  return (
    <div className="bg-secondary">
      <div className="flex justify-between items-center container py-2">
        <SocialMedia />

        <OfferWithTimer interval={3000} direction="up">
          <div>
            Our favorite bomber jacet is back
            <Link href={"/list"} className="underline">
              Shop now
            </Link>
          </div>
          <div>
            Our favorite bomber jacet is back
            <Link href={"/list"} className="underline">
              Shop now
            </Link>
          </div>
          <div>
            Our favorite bomber jacet is back
            <Link href={"/list"} className="underline">
              Shop now
            </Link>
          </div>
        </OfferWithTimer>

        <ChangeLang />
      </div>
    </div>
  );
};
