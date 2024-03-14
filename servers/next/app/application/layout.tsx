import Navbar from "@/utils/components/navbar/navbar";
import { ReactNode } from "react";

export default function AppLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  );
}
