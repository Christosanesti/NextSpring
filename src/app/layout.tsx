import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarComp } from "@/components/ui/navbar";
import { FooterComponent } from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "ننه مریم",
  description: "فروشگاه اینترنتی البسه و لوازم خانگی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={`antialiased overflow-x-hidden`}>
        <NavbarComp />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
