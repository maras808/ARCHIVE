export const experimental_ppr = true;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#141415", color: "#fff", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
