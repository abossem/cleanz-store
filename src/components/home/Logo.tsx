import Image from "next/image";
import React from "react";

export const Logo = ({
  width = 200,
  height = 200,
}: {
  width?: number;
  height?: number;
}) => {
  return <Image src={"/logo.png"} width={width} height={height} alt="logo" />;
};
