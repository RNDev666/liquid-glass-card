import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdughafur - GitHub",
  description: "Liquid glass GitHub profile card",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
