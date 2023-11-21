import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login form",
  description: "Created by UIMasters",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={{ height: "100%" }} lang="en">
      <body style={{ height: "100%" }} className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
