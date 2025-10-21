import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header/Header";

export const metadata: Metadata = {
  title: "Hadasim Shopping App",
  description: "The most amazing shopping app in the world!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">

      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
