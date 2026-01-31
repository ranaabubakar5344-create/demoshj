import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply Online | Start Your Learning Journey",
 description:"Apply online to Al Mustaqbal Al Bahir Training Center. Begin your journey with career-focused short courses and academic programmes designed for future success.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
