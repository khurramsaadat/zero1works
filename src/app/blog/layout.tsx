import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Web development insights, tutorials, and industry news from the Zero One Works team in Manchester.",
  alternates: { canonical: "/blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
