"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Menu,
  X as Close,
  Clock,
} from "lucide-react";

const NAV_LINKS = [
    { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Short Courses", href: "/shortcourses" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* ================= ENHANCED TOP BAR ================= */}
      <div className="bg-[#810204] shadow-md sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-3 sm:px-6">
            <div className="flex items-center justify-between h-12">
              {/* Left: Social Icons (desktop) and Phone (mobile) */}
              <div className="flex items-center gap-3 h-full">
                <div className="hidden lg:flex items-center gap-3 h-full">
                  <span className="text-xs text-white font-medium mr-2">Follow Us:</span>
                  {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="h-8 w-8 grid place-items-center rounded-full
                      bg-white/15 text-white hover:bg-white hover:text-[#8B1538] 
                      transition-all duration-300 hover:scale-110"
                    >
                      <Icon size={14} strokeWidth={2} />
                    </Link>
                  ))}
                </div>

                <div className="lg:hidden flex items-center h-12">
                  <a
                    href="tel:+97165611886"
                    className="flex items-center h-12 gap-2 text-xs sm:text-sm text-white hover:text-white/80 transition px-2"
                  >
                    <Phone size={14} strokeWidth={2} className="inline-flex align-middle" />
                    <span className="font-medium leading-none align-middle whitespace-nowrap">+971 6 561 1886</span>
                  </a>
                </div>
              </div>

              {/* Right: Contact Info (desktop) and Email (mobile) */}
              <div className="flex items-center gap-6 text-xs text-white h-full">
                <div className="lg:hidden flex items-center h-12">
                  <a
                    href="mailto:admissions@futureeducation.ae"
                    className="flex items-center h-12 gap-2 text-xs sm:text-sm text-white hover:text-white/80 transition px-2"
                  >
                    <Mail size={14} strokeWidth={2} className="inline-flex align-middle" />
                    <span className="font-medium leading-none align-middle whitespace-nowrap">admissions@futureeducation.ae</span>
                  </a>
                </div>

                <div className="hidden lg:flex items-center gap-6">
                  <a 
                    href="mailto:admissions@futureeducation.ae"
                    className="flex items-center gap-2 hover:text-white/80 transition group"
                  >
                    <div className="h-7 w-7 rounded-full bg-white/15 grid place-items-center group-hover:bg-white/25 transition">
                      <Mail size={13} strokeWidth={2} />
                    </div>
                    <span className="font-medium">admissions@futureeducation.ae</span>
                  </a>

                  <div className="h-4 w-px bg-white/30" />

                  <a 
                    href="tel:+97165611886"
                    className="flex items-center gap-2 hover:text-white/80 transition group"
                  >
                    <div className="h-7 w-7 rounded-full bg-white/15 grid place-items-center group-hover:bg-white/25 transition">
                      <Phone size={13} strokeWidth={2} />
                    </div>
                    <span className="font-medium">+971 6 561 1886</span>
                  </a>

                  <div className="h-4 w-px bg-white/30" />

                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-white/15 grid place-items-center">
                      <Clock size={13} strokeWidth={2} />
                    </div>
                    <span className="font-medium">Mon - Sat: 9AM - 5PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* ================= MAIN HEADER ================= */}
      <div
        className={`bg-white transition-all duration-300
        ${scrolled ? "shadow-2xl" : "shadow-lg border-b border-gray-100"}`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div
            className={`flex items-center justify-between transition-all duration-300
            ${scrolled ? "h-20" : "h-24"}`}
          >
            {/* LOGO */}
<Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo.png"
                alt="Al Mustaqbal Al Bahir Training Center"
                width={200}
                height={80}
                priority
                className="object-contain transition-all duration-300 h-16 w-16 sm:h-20 sm:w-auto group-hover:scale-105"
              />
            </Link>

            {/* DESKTOP NAVIGATION - PILL STYLE */}
<nav className="hidden lg:flex items-center gap-2">
  {NAV_LINKS.map(({ label, href }) => {
    const active =
      pathname === href || pathname.startsWith(href + "/");

    return (
      <Link
        key={label}
        href={href}
        className={`text-sm font-bold tracking-wide
        px-5 py-2.5 rounded-full transition-all duration-300
        ${
          active
            ? "bg-[#810204] text-white shadow-lg"
            : "bg-white text-black shadow-md hover:bg-[#810204] hover:text-white hover:shadow-lg"
        }`}
      >
        {label}
      </Link>
    );
  })}
</nav>

            {/* DESKTOP CTA BUTTONS */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="https://lms.futureeducation.ae/login/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-sm font-bold
                bg-[#a11310]
                text-white rounded-lg shadow-md
                hover:shadow-xl hover:scale-105
                transition-all duration-300 flex items-center gap-2"
              >
                Study Portal
              </Link>

              <Link
                href="/apply"
                className="px-6 py-2.5 text-sm font-bold
                bg-[#810204]
                text-white rounded-lg shadow-md
                hover:shadow-xl hover:scale-105
                transition-all duration-300 flex items-center gap-2"
              >
                Admissions Enquiry
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2.5} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              aria-label="Toggle Menu"
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-[#8B1538] hover:bg-gray-100 
              rounded-lg transition-all"
            >
              {open ? <Close size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden
          ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
        >
<div className="w-full bg-white border-t border-gray-200 text-gray-900">
            <div className="px-6 py-6 space-y-6">
              {/* Mobile Navigation Links */}
              <nav className="space-y-4">
                {NAV_LINKS.map(({ label, href }) => {
                  const active = pathname === href;
                  return (
                    <Link
                      key={label}
                      href={href}
                      className={`block text-base font-semibold py-2 px-4 rounded-lg
                      transition-all duration-300
                      ${
                       active
  ? "bg-[#810204] text-white"
  : "text-gray-700 hover:bg-gray-100 hover:text-[#810204]"

                      }`}
                    >
                      {label}
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile CTA Buttons */}
              <div className="space-y-3 pt-4 border-t border-gray-300">
                <Link
                  href="https://lms.futureeducation.ae/login/index.php"
                  target="_blank"
                  rel="noopener noreferrer"
                 className="block w-full px-5 py-3 text-sm font-semibold text-center
border-2 border-[#810204] text-[#810204] rounded-lg
hover:bg-[#810204] hover:text-white transition-all"

                >
                  Study Portal
                </Link>

                <Link
                  href="/apply"
                 className="block w-full px-6 py-3 text-sm font-bold text-center
bg-[#810204] text-white
rounded-lg shadow-lg
hover:bg-[#a11310] hover:shadow-xl transition-all"

                >
                 Admissions Enquiry
                </Link>
              </div>

              {/* Mobile Social Links */}
              <div className="pt-4 border-t border-gray-300">
                <p className="text-xs text-gray-700 font-medium mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
className="h-10 w-10 grid place-items-center rounded-full
bg-[#810204] text-white
hover:bg-[#a11310] hover:scale-110
transition-all duration-300 shadow-md"


                    >
                      <Icon size={16} strokeWidth={2} />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-300 space-y-3 text-sm">
                <a 
                  href="admissions@futureeducation.ae"
                  className="flex items-center gap-3 text-gray-700 hover:text-[#810204] transition"
                >
                  <Mail size={18} />
                  <span>admissions@futureeducation.ae</span>
                </a>
                <a 
                  href="tel:+97165611886"
                  className="flex items-center gap-3 text-gray-700 hover:text-[#810204] transition"
                >
                  <Phone size={18} />
                  <span>+971 6 561 1886</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}