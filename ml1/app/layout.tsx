import Header from "./(components)/header/header";
import global from "./global.module.css";
import "./globals.css";

export const metadata = {
  title: "Marek Ławniczak",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <main className={global.wrapper}>{children}</main>
      </body>
    </html>
  );
}
