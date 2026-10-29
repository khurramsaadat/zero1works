import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - 59 Live Projects",
  description: "Browse 59 live projects across 18 industries. Web apps, mobile apps, e-commerce, games, and more - all built by Zero One Works.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
