import type { Metadata } from "next";
import { LiquidGlassFilter } from "@/components/LiquidGlassFilter";
import { GITHUB_USERNAME, getGithubProfile } from "@/lib/github";
import "./globals.css";

/** The tab icon is the GitHub avatar. Shares the cached profile fetch. */
export async function generateMetadata(): Promise<Metadata> {
  const { avatarUrl } = await getGithubProfile(GITHUB_USERNAME);

  return {
    title: "RNDev",
    description: "Liquid glass GitHub profile card",
    // s=64 asks GitHub for a favicon-sized avatar instead of the full one.
    icons: { icon: `${avatarUrl}&s=64` },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LiquidGlassFilter />
        {children}
      </body>
    </html>
  );
}
