import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Short Courses | Career-Focused Learning Programmes",
 description:"Explore industry-aligned short courses at Al Mustaqbal Al Bahir Training Center. Upgrade your skills with practical, career-focused programmes designed for academic and professional growth.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
