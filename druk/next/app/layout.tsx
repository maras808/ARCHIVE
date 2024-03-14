import Navbar from "@/utils/components/navbar/navbar";
import { montserrat } from "@/utils/fonts";
import { Providers } from "@/utils/providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={montserrat.className}>
        <Providers>
          <Navbar></Navbar>
          {children}
        </Providers>
      </body>
    </html>
  );
}
