import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Why Mithridates Practiced Daily Poison Doses",
  description: "Exploring the strategy behind Mithridates VI's daily micro-dosing of toxins and what it teaches about resilience." 
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
