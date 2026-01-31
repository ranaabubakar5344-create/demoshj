"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState } from "react";

/* Helper: Get initials */
const getInitials = (name: string) => {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
};

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ayesha Khan",
      programme: "Academic English",
      image: "/r1.png",
      quote:
        "The Academic English  Course helped me improve my writing and presentation skills. The structured lessons gave me confidence for further studies.",
    },
    {
      name: "Ahmed Al Mansoori",
      programme: "Cyber Security",
      image: "unnamed.jpg",
      quote:
        "The cyber security course provided strong foundational knowledge and practical exposure. The hands-on sessions made complex topics easy to understand.",
    },
    {
      name: "Sara Malik",
      programme: "Psychology",
      image: "/png-girl.webp",
      quote:
        "The psychology  course was engaging and thoughtfully delivered. It helped me better understand human behaviour and academic research methods.",
    },
    {
      name: "Michael Joseph",
      programme: "Business Management",
      image: "", // ❌ no image
      quote:
        "The business management course was well-structured and practical. It improved my understanding of leadership, strategy, and organizational skills.",
    },
    {
      name: "Maryam Hassan",
      programme: "Computing Fundamentals",
      image: "/r1.png",
      quote:
        "The computing short course helped me build confidence in IT basics. The instructors explained concepts clearly and supported us throughout the course.",
    },
    {
      name: "Daniel Thomas",
      programme: "Academic English",
      image: "", // ❌ no image
      quote:
        "The learning environment was professional and welcoming. This course significantly improved my academic communication and writing skills.",
    },
  ];

  return (
    <section className="py-32 bg-[#FAF7F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-[#810204]">
            Student Experiences
          </h2>
          <p className="mt-4 text-black/60">
            Real voices from learners who shaped their future with us.
          </p>
        </div>

        {/* Carousel */}
        <div className="perspective-[1200px]">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            centeredSlides
            loop
            spaceBetween={40}
            speed={1200}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                {({ isActive }) => (
                  <div
                    className={`
                      transition-all duration-500 ease-out
                      ${
                        isActive
                          ? "opacity-100 -translate-y-3 z-20"
                          : "opacity-75 blur-[1px] z-10"
                      }
                    `}
                    style={{
                      transformStyle: "preserve-3d",
                      willChange: "transform",
                      transform: isActive
                        ? "translateZ(60px) translateY(-12px) scale(1.02)"
                        : "translateZ(0px) translateY(0px) scale(0.95)",
                    }}
                  >
                    {/* CARD */}
                    <div className="bg-white rounded-xl border border-black/10 p-8 text-center sm:text-left">

                      {/* QUOTE */}
                      <p className="text-sm text-black/70 leading-relaxed text-center sm:text-left">
                        {t.quote}
                      </p>

                      <div className="my-6 h-px bg-black/10" />

                      {/* AUTHOR */}
                      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left justify-center sm:justify-start">

                        {/* AVATAR */}
                        {t.image ? (
                          <img
                            src={t.image}
                            alt={t.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        ) : (
                          <div
                            className="
                              w-10 h-10
                              rounded-full
                              bg-[#861F20]/10
                              flex items-center justify-center
                              text-[#810204]
                              text-sm font-semibold
                            "
                          >
                            {getInitials(t.name)}
                          </div>
                        )}

                        {/* NAME */}
                        <div>
                          <p className="text-sm font-semibold text-[#810204]">
                            {t.name}
                          </p>
                          <p className="text-xs text-black/55">
                            {t.programme}
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}