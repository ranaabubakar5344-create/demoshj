"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF8]">

      {/* ===== BACKGROUND ===== */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(229,202,119,0.12),transparent_45%)]"
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block mb-5 rounded-full bg-[#861F20]/10 px-5 py-1.5 text-[10px] font-semibold tracking-widest text-[#861F20]">
              BRIGHT FUTURE TRAINING CENTER
            </span>

            <h1 className="text-[34px] sm:text-[42px] lg:text-[56px] leading-[1.15] font-extrabold text-black">
              Practical Skills for
              <span className="block text-[#861F20]">
                Professional Careers
              </span>
            </h1>

            <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-[15px] leading-relaxed text-black/65">
              Certified training programmes designed to equip students and
              professionals with industry-relevant skills.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <Link
                href="/courses"
                className="rounded-full bg-[#861F20] px-9 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(134,31,32,0.35)]"
              >
                Explore Programmes →
              </Link>

              <Link
                href="/about"
                className="text-sm font-semibold text-[#861F20] underline-offset-4 hover:underline"
              >
                Learn More
              </Link>
            </div>

            <div className="mt-10 mx-auto lg:mx-0 h-px w-24 bg-[#E5CA77]/70" />

            {/* <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 text-sm text-black/60">
              <span>✔ KHDA Approved</span>
              <span>✔ Expert Faculty</span>
              <span>✔ Career Focused</span>
            </div> */}
          </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="relative flex justify-center"
>
  <div className="
    relative
    w-[280px] h-[280px]
    sm:w-[360px] sm:h-[360px]
    lg:w-[500px] lg:h-[500px]
  ">

    {/* ROTATING OUTER ORBIT */}
    <motion.div
      className="absolute inset-0 rounded-full"
      style={{
        background:
          "conic-gradient(from 0deg, #820404, transparent, #790817)",
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 26,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="absolute inset-[3px] rounded-full bg-[#FFFDF8]" />
    </motion.div>

    {/* PULSING MID ORBIT */}
    <motion.div
      className="absolute inset-6 sm:inset-10 rounded-full border-4 border-[#E5CA77]/30"
      animate={{
        scale: [1, 1.05, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{ duration: 3, repeat: Infinity }}
    />

    {/* CORE */}
    <motion.div
      className="absolute inset-10 sm:inset-14 rounded-full bg-gradient-to-br from-[#861F20] via-[#9B2325] to-[#6D1819]"
      animate={{ rotate: -360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    />

    {/* IMAGE */}
    <div className="absolute inset-14 sm:inset-20 rounded-full overflow-hidden shadow-[0_40px_90px_rgba(0,0,0,0.35)]">
      <img
        src="/hero2.png"
        alt="Professional Training"
        className="w-full h-full object-cover scale-110"
      />
    </div>

    {/* FLOATING ORBIT DOTS */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-br from-[#E5CA77] to-[#D4B962] rounded-full shadow-lg"
        style={{
          left: `${50 + 46 * Math.cos((i * Math.PI * 2) / 8)}%`,
          top: `${50 + 46 * Math.sin((i * Math.PI * 2) / 8)}%`,
        }}
        animate={{
          y: [0, -16, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: i * 0.15,
        }}
      />
    ))}
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
}