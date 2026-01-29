import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Footer from "./Footer";
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Al Mustaqbal Al Bahir Training Center",
  description: "Al Mustaqbal Al Bahir Training Center in UAE offers professional training programmes in Academic English, Business Management, Computing, Cyber Security, and Psychology. Empowering students with skills for academic and career success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased pt-[108px] lg:pt-[128px]`}>
        <Header />
        <WhatsAppFloat />
        {children}
        <Footer />
      </body>
    </html>
  );
}