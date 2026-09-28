import type { ReactNode } from "react";

export type Project = {
  title: string;
  /** One or two lines. The card is narrow, so keep it short. */
  description: string;
  /** Optional link, rendered as the title. */
  href?: string;
  tags?: string[];
  /** Anything renderable: a live demo, a screenshot, an embed. */
  example?: ReactNode;
};

/**
 * Add a project by appending an entry. Everything but `title` and
 * `description` is optional, and `example` takes arbitrary JSX, so a live
 * demo is just a component dropped in here.
 */
export const projects: Project[] = [
  {
    title: "This site",
    description: "A liquid-glass portfolio built with Next.js and CSS filters.",
    href: "https://github.com/RNDev666",
    tags: ["Next.js", "TypeScript", "CSS"],
  },
];
