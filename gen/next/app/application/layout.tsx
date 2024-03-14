import Navbar from "@/utils/components/navbar/navbar";

export default function ApplicationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  );
}
