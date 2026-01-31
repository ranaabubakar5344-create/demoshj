"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 👉 future mein yahan API / email integration laga sakte ho

    setSubmitted(true);
  };

  return (
    <main className="bg-[#FAF7F5] text-black">

      {/* ================= HERO ================= */}
      <section className="pt-24 pb-16 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-black/60">
            For admissions, programme details, or general enquiries, please contact us using the options below.
          </p>
        </div>
      </section>

      {/* ================= TOP INFO CARDS (MAROON) ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-[#810204] rounded-xl p-7 text-white">
            <Phone size={24} className="mb-5 opacity-90" />
            <h3 className="text-lg font-semibold mb-1">Call Us</h3>
            <p className="text-sm text-white mb-3">
              Monday to Saturday, 9am – 5pm <br/>
            </p>
            <p className="text-sm font-medium tracking-wide">
              +971 6 561 1886
            </p>
          </div>

          <div className="bg-[#810204] rounded-xl p-7 text-white">
            <Mail size={24} className="mb-5  " />
            <h3 className="text-lg font-semibold mb-1">Email Us</h3>
            <p className="text-sm text-white mb-3">
              We usually respond within 24 hours
            </p>
            <p className="text-sm font-medium break-all tracking-wide">
              admissions@futureeducation.ae
            </p>
          </div>

          <div className="bg-[#861F20] rounded-xl p-7 text-white">
            <MapPin size={24} className="mb-5 opacity-90" />
            <h3 className="text-lg font-semibold mb-1">Visit Our Campus</h3>
            <p className="text-sm text-white leading-relaxed">
              Al Mustaqbal Al Bahir Training Center<br />
              Sharjah, United Arab Emirates
            </p>
          </div>

        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="max-w-4xl">

          {!submitted ? (
            <>
              <h2 className="text-2xl font-semibold mb-4">
                Send an Enquiry
              </h2>
              <p className="text-black/60 mb-8">
                Fill in the form below and our admissions team will contact you shortly.
              </p>

              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  <div className="space-y-2">
                    <label className="text-xs font-medium tracking-wide text-black/70">
                      FULL NAME
                    </label>
                    <input
                      required
                      className="w-full h-12 bg-[#FAF7F5] rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#861F20]/20"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium tracking-wide text-black/70">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full h-12 bg-[#FAF7F5] rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#861F20]/20"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium tracking-wide text-black/70">
                      PHONE NUMBER
                    </label>
                    <input
                      required
                      className="w-full h-12 bg-[#FAF7F5] rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#861F20]/20"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium tracking-wide text-black/70">
                      PROGRAMME
                    </label>
                    <input
                      className="w-full h-12 bg-[#FAF7F5] rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#861F20]/20"
                      placeholder="Business / Computing / Psychology"
                    />
                  </div>

                </div>

                <div className="mt-8 space-y-2">
                  <label className="text-xs font-medium tracking-wide text-black/70">
                    MESSAGE
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-[#FAF7F5] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#861F20]/20 resize-none"
                    placeholder="Tell us how we can help you…"
                  />
                </div>

                <div className="mt-10">
                  <button
                    type="submit"
                    className="w-full h-12 rounded-lg bg-[#861F20] text-white text-sm font-medium hover:bg-[#74191A] transition"
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </>
          ) : (
            /* SUCCESS MESSAGE */
            <div className="bg-white rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-[#861F20]/10 flex items-center justify-center">
                <span className="text-[#861F20] text-3xl">✓</span>
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                Thank You!
              </h3>

              <p className="text-black/60 max-w-md mx-auto">
                Your enquiry has been submitted successfully. Our admissions team will contact you shortly.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="border-t border-black/10">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Sharjah%20UAE&output=embed"
          className="w-full h-[320px] sm:h-[400px] border-0"
          loading="lazy"
        />
      </section>

    </main>
  );
}