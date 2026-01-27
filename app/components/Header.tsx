"use client";

import { useState } from "react";
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

  return (
    <header className="w-full relative z-50">

      {/* ================= MOBILE TOP BAR (PHONE + EMAIL ONLY) ================= */}
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
      <div className="hidden lg:block bg-[#861F20]/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between">

          {/* LEFT: SOCIALS */}
          <div className="flex items-center gap-3 text-white/90">
            {[Facebook, Instagram, Linkedin, X].map((Icon, i) => (
              <Link key={i} href="#" className="hover:text-[#E5CA77] transition">
                <Icon size={14} />
              </Link>
            ))}
          </div>

          {/* RIGHT: CONTACT */}
          <div className="flex items-center gap-5 text-[11px] text-white/90">
            <span className="flex items-center gap-1">
              <Mail size={12} /> admissions@futureeducation.ae
            </span>
            <span className="flex items-center gap-1">
              <Phone size={12} /> +971 6 561 1886
            </span>
          </div>
        </div>

        <div className="h-[1px] bg-[#E5CA77]/60" />
      </div>

      {/* ================= MAIN HEADER ================= */}
      <div className="bg-white shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex h-[76px] lg:h-[92px] items-center justify-between">

            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Bright Future Training Center"
                width={120}
                height={120}
                priority
                className="h-[60px] lg:h-[82px] w-auto object-contain"
              />
            </Link>

            {/* NAVIGATION (DESKTOP) */}
            <nav className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-black">
              {["Home", "About", "Short Courses", "Contact"].map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="relative hover:text-[#861F20] transition
                    after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                    after:w-0 after:bg-[#E5CA77]
                    hover:after:w-full after:transition-all"
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* RIGHT ACTIONS (DESKTOP) */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="https://lms.futureeducation.ae/login/index.php"
                target="_blank"
                className="rounded-full border border-[#861F20] px-5 py-2.5 text-sm font-semibold text-[#861F20] hover:bg-[#861F20] hover:text-white transition"
              >
                Study Portal
              </Link>

              <Link
                href="/apply"
                className="rounded-full bg-[#861F20] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#74191A] hover:shadow-[0_0_0_3px_rgba(229,202,119,0.35)] transition"
              >
                Apply Online
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-[#861F20]"
            >
              {open ? <Close size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {open && (
          <div className="lg:hidden bg-white border-t shadow-xl">
            <div className="px-6 py-6 flex flex-col gap-6">

              {["Home", "About", "Short Courses", "Contact"].map((item) => (
                <Link
                  key={item}
                  href="/"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-black hover:text-[#861F20]"
                >
                  {item}
                </Link>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <Link
                  href="https://lms.futureeducation.ae/login/index.php"
                  target="_blank"
                  className="text-center rounded-full border border-[#861F20] py-3 text-sm font-semibold text-[#861F20]"
                >
                  Study Portal
                </Link>

                <Link
                  href="/apply"
                  className="text-center rounded-full bg-[#861F20] py-3 text-sm font-semibold text-white"
                >
                  Apply Online
                </Link>
              </div>

            </div>
          </div>
        )}
      </div>
    </header>
  );
}