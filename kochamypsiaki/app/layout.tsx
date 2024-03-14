import type { Metadata } from "next";
import "./globals.css";
import { rubik } from "@utils/fonts";
import Header from "@singleuse/header/header";
import Footer from "@singleuse/footer/footer";

export const metadata: Metadata = {
  title: {
    default: "Kochamy Psiaki",
    template: "%s - Kochamy Psiaki",
  },
  description: "Kochamy Psiaki",
  authors: {
    name: "Marek Ławniczak",
    url: "https://mareklawniczak.pl",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
