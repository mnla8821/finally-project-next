import type { Metadata } from "next";
import "./globals.css";
import Header from "./Component/Header/page";
import Footer from "./Sections/Footer/page";

export const metadata: Metadata = {
  title: "المبدع العربي",
  description: "انضم الان للاحتراف",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
