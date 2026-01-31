export default function AboutUs() {
  return (
    <section className="bg-[#FAF7F5]">

      {/* HERO INTRO */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#861F20]/10 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">

          <span className="inline-block text-xs md:text-sm tracking-wider text-[#810204] font-bold uppercase">
            About Us
          </span>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[#810204] leading-tight max-w-4xl">
            Industry-Driven Training for Academic and Professional Growth
          </h1>

          <p className="mt-6 md:mt-8 max-w-3xl text-base sm:text-lg text-black leading-[1.75]">
            We deliver accredited, demand-driven training programmes designed to
            equip learners with practical skills, recognised certifications, and
            meaningful career pathways.
          </p>

        </div>
      </div>

      {/* VISION & MISSION */}
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

        <div className="bg-white rounded-2xl p-8 md:p-12 border border-black/10 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-[#810204]">
            Our Vision
          </h3>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-black leading-[1.75]">
            To be the benchmark training hub that transforms Sharjah into a
            globally competitive, future-ready workforce by empowering every
            learner with world-class, industry-driven skills and internationally
            recognised credentials.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 border border-black/10 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-[#810204]">
            Our Mission
          </h3>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-black leading-[1.75]">
            We equip individuals and organisations with accredited,
            demand-driven vocational and corporate training that merges
            international standards with local labour-market intelligence,
            fostering lifelong learning, innovation, and sustainable employment.
          </p>
        </div>

      </div>

      {/* STRATEGIC OBJECTIVES */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">

          <h2 className="text-3xl md:text-4xl font-bold text-[#810204]">
            Strategic Objectives
          </h2>

          <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

            {[
              {
                title: "Learner Excellence",
                text: "Graduate 700+ learners annually with SPEA-accredited certificates, ensuring recognised and employable qualifications.",
              },
              {
                title: "Industry Partnerships",
                text: "Build strong partnerships with employers and government entities to establish integrated career-counselling and apprenticeship pathways.",
              },
              {
                title: "Quality & Satisfaction",
                text: "Achieve maximum learner satisfaction through continuous trainer up-skilling, digital-blended delivery, and real-time feedback loops.",
              },
              {
                title: "Future Skills Foundation",
                text: "Embed mandatory micro-credentials in digital literacy and data ethics across all certification tracks.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-[#FAF7F5] rounded-xl p-6 md:p-10 border border-black/10 hover:shadow-lg transition"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#810204] rounded-l-xl" />
                <h4 className="text-lg md:text-xl font-bold text-[#810204]">
                  {item.title}
                </h4>
                <p className="mt-3 md:mt-4 text-base md:text-lg text-black leading-[1.75]">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>

    </section>
  );
}