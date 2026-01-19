import React from "react";
import { SocialMedia } from "./SocialMedia";
import { ChangeLang } from "./ChangeLang";

export const InfoBar = () => {
  return (
    <div className="bg-secondary">
      <div className="flex justify-between items-center container py-2">
        <SocialMedia />

        <div></div>

        <ChangeLang />
      </div>
    </div>
  );
};
