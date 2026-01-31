"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

/* ================= TYPES ================= */

type ShortCourse = {
  title: string;
  image: string;
  href: string;
  duration: string;
};

type CourseCategory = {
  heading: string;
  courses: ShortCourse[];
};


/* ================= DATA ================= */

const courseCategories: CourseCategory[] = [
  {
    heading: "General",
    courses: [
      { title: "Academic English", image: "/eng.jpg", href: "#", duration: "Short Course" },
      { title: "Professional Academic Skills", image: "/a1.jpg", href: "#", duration: "Short Course" },
      { title: "Mathematics", image: "/mth.jpg", href: "#", duration: "Short Course" },
      { title: "Principles of Management", image: "/man.jpg", href: "#", duration: "Short Course" },
      { title: "Psychology", image: "/phy.jpg", href: "#", duration: "Short Course" },
      { title: "Fundamentals of Computing", image: "/c.jpg", href: "#", duration: "Short Course" },
    ],
  },
  {
    heading: "Computing",
    courses: [
      { title: "Digital Media and Storytelling", image: "/img1.jpg", href: "#", duration: "Short Course" },
      { title: "Introduction to Programming", image: "/img2.jpg", href: "#", duration: "Short Course" },
      { title: "Visual Design Fundamentals", image: "/img3.jpg", href: "#", duration: "Short Course" },
      { title: "UX Design and Ideation", image: "/ux.jpg", href: "#", duration: "Short Course" },
      { title: "Web Programming", image: "/img5.jpg", href: "#", duration: "Short Course" },
      { title: "Creativity in Coding", image: "/img6.jpg", href: "#", duration: "Short Course" },
    ],
  },
  {
    heading: "Cyber Security",
    courses: [
      { title: "Cyber Security Fundamentals", image: "/cyb.jpg", href: "#", duration: "Short Course" },
      { title: "Introduction to Computing", image: "/c.jpg", href: "#", duration: "Short Course" },
      { title: "Introduction to Programming", image: "/img2.jpg", href: "#", duration: "Short Course" },
      { title: "Computer Industry", image: "/imge7.jpg", href: "#", duration: "Short Course" },
      { title: "Digital Forensics", image: "/img8.jpg", href: "#", duration: "Short Course" },
      { title: "Web Programming", image: "/img5.jpg", href: "#", duration: "Short Course" },
    ],
  },
  {
    heading: "Psychology",
    courses: [
      { title: "Research Methods and Data Analysis I", image: "/resar.jpg", href: "#", duration: "Short Course" },
      { title: "Individual Differences", image: "/ind.jpg", href: "#", duration: "Short Course" },
      { title: "Understanding Psychology", image: "/un.jpg", href: "#", duration: "Short Course" },
      { title: "World of Ideas", image: "/wo.jpg", href: "#", duration: "Short Course" },
      { title: "Issues and Debates in Psychology", image: "/isu.jpg", href: "#", duration: "Short Course" },
      { title: "Psychological Science for Student Success", image: "/desa.jpg", href: "#", duration: "Short Course" },
    ],
  },
  {
    heading: "Business Management",
    courses: [
      { title: "Understanding the Business Environment", image: "/buis.jpg", href: "#", duration: "Short Course" },
      { title: "Personal and Professional Development", image: "/per.jpg", href: "#", duration: "Short Course" },
      { title: "Statistics for Managers", image: "/buisn.jpg", href: "#", duration: "Short Course" },
      { title: "Economics for Decision Making", image: "/eco.jpg", href: "#", duration: "Short Course" },
      { title: "Enterprise Design Thinking", image: "/enter.jpg", href: "#", duration: "Short Course" },
      { title: "Organisation Behaviour", image: "/df.jpg", href: "#", duration: "Short Course" },
    ]
  },
   {
    heading: "Business Management Accounting",
    courses: [
      { title: "Understanding the Business Environment", image: "/buis.jpg", href: "#", duration: "Short Course" },
      { title: "Financial Accounting for Business Enterprise", image: "/per.jpg", href: "#", duration: "Short Course" },
      { title: "Statistics for Managers", image: "/buisn.jpg", href: "#", duration: "Short Course" },
      { title: "Economics for Decision Making", image: "/eco.jpg", href: "#", duration: "Short Course" },
      { title: "Cost and Management Accounting", image: "/cos.jpg", href: "#", duration: "Short Course" },
      { title: "Organisation Behaviour", image: "/df.jpg", href: "#", duration: "Short Course" },
    ]
  },
];

/* ================= COMPONENT ================= */

export default function ShortCoursesSection() {
  const sliderRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* AUTO SCROLL PER CATEGORY */
  useEffect(() => {
    const intervals = sliderRefs.current.map((slider) => {
      if (!slider) return null;

      return setInterval(() => {
        const maxScroll = slider.scrollWidth - slider.clientWidth;

        if (slider.scrollLeft >= maxScroll - 10) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          slider.scrollBy({ left: 360, behavior: "smooth" });
        }
      }, 3000);
    });

    return () => {
      intervals.forEach((i) => i && clearInterval(i));
    };
  }, []);

  return (
    <section className="bg-[#FAF7F5] py-24">

      {/* PAGE HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#810204]">
          Short Courses
        </h1>
        <p className="mt-4 text-black text-lg">
          Industry-aligned short courses designed for academic and career growth
        </p>
        <div className="mt-6 h-1 w-28 bg-[#E5CA77] mx-auto rounded-full" />
      </div>

      {/* CATEGORIES */}
      {courseCategories.map((category, index) => (
        <div key={index} className="mb-24">

          {/* CATEGORY HEADING */}
          <div className="max-w-7xl mx-auto px-6 mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#810204]">
              {category.heading}
            </h2>
            <div className="mt-3 h-1 w-24 bg-[#E5CA77] rounded-full" />
          </div>

          {/* SLIDER */}
          <div className="w-full overflow-hidden">
            <div
              ref={(el) => {
                sliderRefs.current[index] = el;
              }}
              className="
                flex gap-6 px-6
                overflow-x-auto
                scroll-smooth
                scrollbar-hide
              "
            >
              {category.courses.map((course) => (
               <div
  key={course.title}
  className="
    group
    shrink-0
    w-full sm:w-[340px]
    snap-center
    rounded-[26px]
    bg-white
    border border-black/5
    hover:-translate-y-2
    transition-all duration-500
    overflow-hidden
  "
>
                {/* IMAGE */}
                <div className="relative h-[190px] overflow-hidden">
  <Image
    src={course.image}
    alt={course.title}
    fill
    className="object-cover transition-transform duration-700 group-hover:scale-110"
  />

  {/* DARK GRADIENT OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

  {/* BADGE */}
  <span
    className="
      absolute top-4 left-4
      bg-[#E5CA77] text-[#861F20]
      text-xs font-bold
      px-4 py-1 rounded-full
      shadow-md
    "
  >
    {course.duration}
  </span>
</div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col justify-between h-[200px]">
  <div>
    <h3 className="text-lg font-bold text-black leading-snug">
      {course.title}
    </h3>

    <div className="mt-4 flex flex-wrap gap-2">
      <span className="px-3 py-1 text-[11px] rounded-full bg-[#FAF7F5] text-[#861F20] font-medium">
        Industry Ready
      </span>
      <span className="px-3 py-1 text-[11px] rounded-full bg-[#FAF7F5] text-[#861F20] font-medium">
        Certificate
      </span>
    </div>
  </div>

  <Link
    href={course.href}
    className="
      mt-6 block text-center
      rounded-xl py-3
      bg-[#810204] text-white
      font-semibold
      tracking-wide
      hover:bg-[#6E1718]
      transition
    "
  >
    Start Learning →
  </Link>
</div>
              </div>
            ))}
            </div>
          </div>
        </div>
      ))}

    </section>
  );
}