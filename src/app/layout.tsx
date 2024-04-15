import type { Metadata } from "next";
import "@/styles/globals.scss";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: "عالیس - تولیدات نوشیدنی",
  description: "وبسایت عالیس",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
