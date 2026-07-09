// src/app/blogs/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Pressure Washing Tips for Central Texas | AquaBlast",
  description: "Practical advice on soft washing, driveway cleaning, roof algae, and exterior maintenance for Waco, Temple, and Killeen homeowners.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
