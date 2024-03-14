import type { Metadata } from "next";
import { montserrat, rubik } from "@/utils/fonts";
import "./globals.css";
import Header from "@singleuse/header/header";

export const metadata: Metadata = {
  title: {
    default: "dev.mareklawniczak",
    template: "%s - dev.mareklawniczak",
  },
  description: "SocialMediaTags",
  authors: [
    {
      name: "Marek Ławniczak",
      url: `${process.env.NEXT_PUBLIC_PUBLISHERURL}`,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
