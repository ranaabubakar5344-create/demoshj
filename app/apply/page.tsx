"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function StartYourJourney() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  

  return (
    <main className="min-h-screen bg-[#FAF7F5]">

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>
            <span className="inline-block mb-6 rounded-full bg-[#810204]/10 px-5 py-1 text-sm font-medium text-[#861F20]">
              Admissions & Guidance
            </span>

            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
              Start Your <br />
              <span className="text-[#810204]">Learning Journey</span>
            </h1>

            <p className="mt-6 max-w-xl text-black">
              Not sure where to begin? Share your details and our admissions
              advisors will guide you towards the right programme.
            </p>

            <div className="mt-8 space-y-3 text-sm text-black">
              <p>• Academic guidance by qualified instructors</p>
              <p>• Professionally designed short courses</p>
              <p>• Career-focused learning paths</p>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="
                  bg-white
                  rounded-2xl
                  border border-black/10
                  shadow-[0_30px_70px_rgba(0,0,0,0.12)]
                  p-8 sm:p-10
                  space-y-6
                "
              >
                <h2 className="text-2xl font-semibold">
                  Let’s Get Started
                </h2>
                <p className="text-sm text-black/60">
                  Our team will contact you shortly.
                </p>

                <input
                  required
                  placeholder="Full Name"
                  className="h-12 w-full rounded-lg border border-black/15 px-4 text-sm focus:outline-none focus:border-[#810204]"
                />

                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="h-12 w-full rounded-lg border border-black/15 px-4 text-sm focus:outline-none focus:border-[#861F20]"
                />

                <input
                  required
                  placeholder="Phone Number"
                  className="h-12 w-full rounded-lg border border-black/15 px-4 text-sm focus:outline-none focus:border-[#861F20]"
                />

                <select
                  className="h-12 w-full rounded-lg border border-black/15 px-4 text-sm bg-white focus:outline-none focus:border-[#861F20]"
                >
                  <option value="">Interested Programme</option>
                  <option>General</option>
                  <option>Business Management</option>
                  <option>Computing</option>
                  <option>Cyber Security</option>
                  <option>Psychology</option>
                </select>

                <button
                  type="submit"
                  className="
                    w-full h-12 rounded-full
                    bg-gradient-to-r from-[#861F20] to-[#74191A]
                    text-white text-sm font-semibold
                    hover:shadow-[0_12px_35px_rgba(134,31,32,0.35)]
                    transition flex items-center justify-center gap-2
                  "
                >
                  Submit Details <ArrowRight size={16} />
                </button>

              </form>
            ) : (
              <div className="bg-white rounded-2xl border border-black/10 p-12 text-center shadow-lg">
                <CheckCircle size={64} className="mx-auto text-[#810204]" />
                <h3 className="mt-6 text-2xl font-semibold">
                  Thank You!
                </h3>
                <p className="mt-3 text-black/60">
                  Our admissions advisor will contact you shortly to guide you.
                </p>
              </div>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}
