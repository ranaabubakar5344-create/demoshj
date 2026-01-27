const categories = [
  {
    title: "General",
    image: "/s1.avif",
    courses: [
      "Academic English",
      "Professional Academic Skills",
      "Mathematics",
      "Principles of Management",
      "Psychology",
      "Fundamentals of Computing",
    ],
  },
  {
    title: "Computing",
    image: "/c.jpg",
    courses: [
      "Digital Media and Storytelling",
      "Introduction to Programming",
      "Visual Design Fundamentals",
      "UX Design and Ideation",
      "Web Programming",
      "Creativity in Coding",
    ],
  },
  {
    title: "Cyber Security",
    image: "/cyb.jpg",
    courses: [
      "Cyber Security Fundamentals",
      "Introduction to Computing",
      "Introduction to Programming",
      "Computer Industry",
      "Digital Forensics",
      "Web Programming",
    ],
  },
  {
    title: "Psychology",
    image: "/phy.jpg",
    courses: [
      "Research Methods and Data Analysis I",
      "Individual Differences",
      "Understanding Psychology",
      "World Of Ideas",
      "Issues and Debates in Psychology",
      "Psychological Science for Student Success",
    ],
  },
  {
    title: "Business Management",
    image: "/bm.jpg",
    courses: [
      "Understanding the Business Environment",
      "Personal and Professional Development",
      "Statistics for Managers",
      "Economics for Decision Making",
      "Enterprise Design Thinking",
      "Organisation Behaviour",
    ],
  },
];

export default function ShortCourses() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#FAF7F5]">

      {/* SOFT BACKGROUND WASH */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 
          w-[900px] h-[400px] 
          bg-[#861F20]/10 blur-[160px]" />
        <div className="absolute bottom-0 right-1/3 
          w-[600px] h-[300px] 
          bg-[#E5CA77]/20 blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-[#861F20] text-center">
          Our Short Courses
        </h2>
        <p className="text-black/60 text-center mt-3">
          Building a Bright Future Through Practical Learning
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {categories.map((cat, i) => (
  <div
  key={i}
  className="
    relative bg-white rounded-xl
    border border-black/10
    overflow-hidden
    transition-all duration-300
    hover:-translate-y-1
    hover:border-[#861F20]
  "
>
  {/* BOTTOM GLOW */}
  <div className="
    pointer-events-none
    absolute -bottom-6 left-1/2 -translate-x-1/2
    w-[80%] h-10
    bg-[#E5CA77]/40
    blur-[22px]
    opacity-0
    group-hover:opacity-100
    transition
  " />

  {/* IMAGE (REDUCED HEIGHT) */}
{/* IMAGE (FULLY VISIBLE) */}
{/* IMAGE – FULL WIDTH, CLEAN */}
<div className="w-full h-40 overflow-hidden">
  <img
    src={cat.image}
    alt={cat.title}
    className="w-full h-full object-cover"
  />
</div>
  {/* CONTENT */}
  <div className="p-7 relative z-10">
    <h3 className="text-lg font-semibold text-[#861F20]">
      {cat.title}
    </h3>

    <div className="w-10 h-[2px] bg-[#E5CA77] mt-2 mb-4" />

    <ul className="space-y-2 text-sm text-black/70 leading-relaxed">
      {cat.courses.slice(0, 4).map((course, idx) => (
        <li key={idx}>• {course}</li>
      ))}
    </ul>

    <div className="mt-6 text-sm font-medium text-[#861F20]">
      View Courses →
    </div>
  </div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
}