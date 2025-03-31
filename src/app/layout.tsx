import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Component/Navbar/Navbar";


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
        <Navbar>
        {children}
        </Navbar> 
      </body>
    </html>
  );
}
