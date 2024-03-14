import Navbar from "@/src/_features/navbar/Navbar";
import LayoutWrapper from "@/src/components/LayoutWrapper";
import Providers from "@/src/utils/providers";
import { ReactNode, Suspense } from "react";

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>) {
  return (
    <html>
      <body>
        <Providers>
          <Suspense>
            <Navbar></Navbar>
          </Suspense>
          <LayoutWrapper>{children}</LayoutWrapper>
          {modal}
        </Providers>
      </body>
    </html>
  );
}
