import Header from "@/components/header/header";
import "./globals.css";
import type { Metadata } from "next";
import { rubik } from "@/fonts/fonts";
import NextThemesProvider from "../providers/nextthemesprovider";

export const metadata: Metadata = {
  title: "Marek Ławniczak",
  keywords: [
    "programista luboń",
    "programista poznań",
    "programista stron internetowych",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${rubik.className}`}>
      <body>
        <NextThemesProvider>
          <Header></Header>
          {children}
        </NextThemesProvider>
      </body>
    </html>
  );
}
