import type { Metadata } from "next";
import { Cairo, Geist, Geist_Mono } from "next/font/google";
import "@/src/style/globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/src/i18n/routing";
import { notFound } from "next/navigation";
import AuthProvider from "@/src/AuthProvider";

const cairo = Cairo({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Cleanz Store",
    template: "%s | Cleanz",
  },
  description:
    "Discover trendy and affordable clothing for every style. Shop premium quality apparel, casual wear, and fashion-forward pieces.",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      data-layout-dir={locale === "ar" ? "rtl" : "ltr"}
      data-preloader="disable"
    >
      <body
        className={` ${cairo.className} ${cairo.variable} antialiased flex flex-col min-h-screen [&>main]:flex-1`}
      >
        <NextIntlClientProvider>
          <AuthProvider>
            <main>{children}</main>
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
