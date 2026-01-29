import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-[#861F20] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}
        <div>
  {/* LOGO */}
  <Image
    src="/logo.png"  
    alt="Your Institute Logo"
    width={110}
    height={48}
    className="object-contain"
    priority
  />

  {/* DESCRIPTION */}
  <p className="mt-5 text-sm text-white  leading-relaxed max-w-sm">
    Providing quality education through structured short courses
    designed to support academic progression and professional growth.
  </p>
</div>

          {/* PROGRAMMES */}
          <div>
            <h4 className="text-sm font-semibold text-[#E5CA77]">
              Programmes
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Short Courses
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Business Management
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Computing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Psychology
                </Link>
              </li>
            </ul>
          </div>

          {/* ADMISSIONS */}
          <div>
            <h4 className="text-sm font-semibold text-[#E5CA77]">
              Admissions
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white">
              <li>
                <Link href="#" className="hover:text-white transition">
                  How to Apply
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Entry Requirements
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Fees & Funding
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Contact Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold text-[#E5CA77]">
              Contact
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-white">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-[#E5CA77]" />
                <span>Sharjah, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#E5CA77]" />
                <span>+971 6561 188</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#E5CA77]" />
                <span>admissions@futureeducation.ae</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
      <div className="mt-16 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white">
  <span className="text-center md:text-left">
    © {new Date().getFullYear()} Al Mustaqbal Al Bahir Training Center.
  </span>

  <div className="flex items-center gap-4 sm:gap-6">
    <Link href="#" className="hover:text-white transition text-xs sm:text-sm">
      Privacy Policy
    </Link>
    <Link href="#" className="hover:text-white transition text-xs sm:text-sm">
      Terms of Service
    </Link>
    <Link href="#" className="hover:text-white transition text-xs sm:text-sm">
      Cookie Policy
    </Link>
  </div>
</div>

      </div>
    </footer>
  );
}