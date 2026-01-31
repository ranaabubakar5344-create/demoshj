"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    tag: "Al Mustaqbal Al Bahir Training Center",
    title: "Innovative Learning in",
    highlight: "Computing",
    desc: "Develop future-ready computing skills including software development, IT systems, and emerging technologies.",
    image: "/c.jpg",
  },
  {
    tag: "Cyber Security",
    title: "Secure the Digital World with",
    highlight: "Cyber Security",
    desc: "Master ethical hacking, cyber defence, network security, and real-world risk management practices.",
    image: "/cree.jpg",
  },
  {
    tag: "Psychology",
    title: "Understanding Human Behaviour through",
    highlight: "Psychology",
    desc: "Study mental processes, emotional intelligence, and applied psychology for professional impact.",
    image: "/phy.jpg",
  },
  {
    tag: "Business",
    title: "Leadership & Strategy in",
    highlight: "Business Management",
    desc: "Build strong foundations in management, entrepreneurship, marketing, and organizational leadership.",
    image: "/bm.jpg",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative overflow-hidden bg-[#FBF7F2]">
      {/* ===== Decorative Blurred Background Shapes ===== */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#861F20]/10 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 h-[450px] w-[450px] rounded-full bg-[#E5CA77]/20 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-5 pt-24 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ================= IMAGE ================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:order-2"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="
                relative
                w-[240px] h-[240px]
                sm:w-[280px] sm:h-[280px]
                lg:w-[400px] lg:h-[400px]
                rounded-full
                bg-gradient-to-br from-[#861F20] to-[#5f1516]
                p-5
                shadow-[0_30px_80px_rgba(0,0,0,0.25)]
              "
            >
              {/* rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-[#E5CA77]/40"
              />

              <Image
                src={slide.image}
                alt={slide.highlight}
                fill
                className="object-cover rounded-full"
                priority
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* ================= CONTENT ================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <span className="inline-block mb-4 rounded-full bg-white/70 backdrop-blur px-4 py-1 text-xs sm:text-sm font-medium text-[#810204] shadow">
              {slide.tag}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-black">
              {slide.title}{" "}
              <span className="text-[#810204]">
                {slide.highlight}
              </span>
            </h1>

            <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-gray-600 text-sm sm:text-base leading-relaxed">
              {slide.desc}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/shortcourses"
                className="
                  rounded-full
                  bg-gradient-to-r from-[#810204] to-[#74191A]
                  px-7 py-3
                  text-white
                  text-sm sm:text-base
                  font-semibold
                  shadow-lg
                  hover:shadow-[0_12px_40px_rgba(134,31,32,0.4)]
                  transition-all
                "
              >
                Explore Courses 
              </Link>

              <Link
                href="/about"
                className="
                  px-6 py-3
                  text-sm sm:text-base
                  font-medium
                  text-[#810204]
                  hover:underline
                "
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ================= DOTS ================= */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              h-2.5 w-2.5 rounded-full transition-all
              ${index === i
                ? "bg-[#810204] scale-125"
                : "bg-[#810204]/30 hover:bg-[#861F20]/50"}
            `}
          />
        ))}
      </div>
    </section>
  );
}