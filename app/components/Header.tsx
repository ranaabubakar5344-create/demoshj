"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  X,
  Mail,
  Phone,
  Menu,
  X as Close,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ================= SCROLL DETECT =================
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ================= MOBILE TOP BAR ================= */}
      <div className="lg:hidden bg-[#861F20]">
        <div className="flex items-center justify-center gap-6 py-2 text-[11px] text-white">
          <a href="tel:+97165611886" className="flex items-center gap-1">
            <Phone size={12} /> +971 6 561 1886
          </a>
          <span className="opacity-40">|</span>
          <a
            href="mailto:admissions@futureeducation.ae"
            className="flex items-center gap-1"
          >
            <Mail size={12} /> admissions@futureeducation.ae
          </a>
        </div>
      </div>

      {/* ================= DESKTOP TOP BAR ================= */}
      {!scrolled && (
        <div className="hidden lg:block bg-[#7c1c1d] backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {[Facebook, Instagram, Linkedin, X].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="h-7 w-7 flex items-center justify-center rounded-full
                  bg-white/10 text-white hover:bg-[#E5CA77] hover:text-black
                  transition"
                >
                  <Icon size={14} />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-6 text-[11px] text-white">
              <span className="flex items-center gap-1">
                <Mail size={12} /> admissions@futureeducation.ae
              </span>
              <span className="flex items-center gap-1">
                <Phone size={12} /> +971 6 561 1886
              </span>
            </div>
          </div>

          <div className="h-[1px] bg-[#E5CA77]" />
        </div>
      )}

      {/* ================= MAIN HEADER ================= */}
      <div
        className={`bg-white/90 backdrop-blur-xl transition-all duration-300
        ${
          scrolled
            ? "shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
            : "shadow-[0_6px_20px_rgba(0,0,0,0.08)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`flex items-center justify-between transition-all duration-300
            ${scrolled ? "h-[68px] lg:h-[76px]" : "h-[78px] lg:h-[96px]"}`}
          >
            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Bright Future Training Center"
                width={140}
                height={140}
                priority
                className={`w-auto object-contain transition-all duration-300
                ${scrolled ? "h-[52px] lg:h-[64px]" : "h-[62px] lg:h-[86px]"}`}
              />
            </Link>

            {/* NAVIGATION */}
            <nav className="hidden lg:flex items-center gap-12 text-[15px] font-semibold text-black">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Short Courses", href: "/shortcourses" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="relative group hover:text-[#861F20] transition"
                >
                  {label}
                  <span
                    className="absolute -bottom-2 left-1/2 h-[2px] w-0 bg-[#E5CA77]
                    transition-all duration-300 group-hover:w-full group-hover:left-0"
                  />
                </Link>
              ))}
            </nav>

            {/* BUTTONS */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="https://lms.futureeducation.ae/login/index.php"
                target="_blank"
                className="rounded-full border border-[#861F20]
                px-5 py-2 text-sm font-semibold text-[#861F20]
                hover:bg-[#861F20] hover:text-white transition"
              >
                Study Portal
              </Link>

              <Link
                href="/apply"
                className="rounded-full bg-gradient-to-r from-[#861F20] to-[#74191A]
                px-6 py-2 text-sm font-semibold text-white
                hover:shadow-[0_8px_25px_rgba(134,31,32,0.35)] transition"
              >
                Apply Online
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-[#861F20]"
            >
              {open ? <Close size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="bg-white border-t shadow-xl px-6 py-6 flex flex-col gap-6">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Short Courses", href: "/shortcourses" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-lg font-semibold hover:text-[#861F20]"
              >
                {label}
              </Link>
            ))}
              <div className="flex items-center gap-4">
              <Link
                href="https://lms.futureeducation.ae/login/index.php"
                target="_blank"
                className="rounded-full border border-[#861F20]
                px-5 py-2 text-sm font-semibold text-[#861F20]
                hover:bg-[#861F20] hover:text-white transition"
              >
                Study Portal
              </Link>

              <Link
                href="/apply"
                className="rounded-full bg-gradient-to-r from-[#861F20] to-[#74191A]
                px-6 py-2 text-sm font-semibold text-white
                hover:shadow-[0_8px_25px_rgba(134,31,32,0.35)] transition"
              >
                Apply Online
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
}