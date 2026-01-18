import React from "react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Cleanz Store. Discover trendy and affordable clothing for every style. Shop premium quality apparel, casual wear, and fashion-forward pieces.",
};

const page = async () => {
  const t = await getTranslations("home");

  return (
    <div className="">
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
};

export default page;
