"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ayesha Khan",
      programme: "Academic English",
      image: "/hero.png",
      quote:
        "The learning environment was supportive and well-structured. The course helped me improve my academic confidence and prepare for further studies.",
    },
    {
      name: "Ahmed Raza",
      programme: "Computing Fundamentals",
      image: "/hero.png",
      quote:
        "The programme was practical and easy to follow. The guidance from instructors helped me build strong foundational skills.",
    },
    {
      name: "Sara Malik",
      programme: "Psychology",
      image: "/hero.png",
      quote:
        "The course content was clear and engaging. It gave me clarity about my academic direction and future learning pathway.",
    },
    {
      name: "Rana Abubakar",
      programme: "Psychology",
      image: "/hero.png",
      quote:
        "The course content was clear and engaging. It gave me clarity about my academic direction and future learning pathway.",
    },
    {
      name: "Sara Malik",
      programme: "Psychology",
      image: "/hero1.png",
      quote:
        "The course content was clear and engaging. It gave me clarity about my academic direction and future learning pathway.",
    },
    {
      name: "Sara Malik",
      programme: "Psychology",
      image: "/r1.png",
      quote:
        "The course content was clear and engaging. It gave me clarity about my academic direction and future learning pathway.",
    },
  ];

  return (
    <section className="py-32 bg-[#FAF7F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-[#861F20]">
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
            slidesPerView={1.2}
            centeredSlides
            loop
            spaceBetween={40}
            speed={1200}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
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
                          ? "scale-100 opacity-100 translate-y-[-14px]shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-20"
                          : "scale-95 opacity-75 blur-[1px] shadow-sm z-10"
                      }
                    `}
                  >
                    {/* CARD */}
                    <div className="bg-white rounded-xl border border-black/10 p-8">
                      
                      {/* TEXT */}
                      <p className="text-sm text-black/70 leading-relaxed">
                        {t.quote}
                      </p>

                      {/* DIVIDER */}
                      <div className="my-6 h-px bg-black/10" />

                      {/* AUTHOR */}
                      <div className="flex items-center gap-4">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-semibold text-[#861F20]">
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