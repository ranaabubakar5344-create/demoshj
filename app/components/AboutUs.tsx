import CountUp from "./CountUp";
export default function AboutUs() {
  return (
    <section className="relative py-32 bg-[#FAF7F5] overflow-hidden">
      
      {/* soft background accent */}
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-[#861F20]/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">
            <img
              src="/about.jpg"
              alt="About our institute"
              className="w-full h-[460px] object-cover rounded-3xl"
            />

            {/* luxury frame */}
            <div className="absolute -bottom-8 -left-8 w-full h-full border border-[#E5CA77]/50 rounded-3xl" />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* Eyebrow */}
            <span className="inline-block text-xs tracking-widest uppercase text-[#E5CA77] font-medium">
              About Our Institution
            </span>

            <h2 className="mt-4 text-5xl font-semibold text-[#861F20] leading-tight">
              Shaping Academic Confidence & Professional Growth
            </h2>

            <p className="mt-6 text-lg text-black/65 max-w-xl">
              We are a dedicated education provider committed to delivering
              structured, high-quality learning experiences that support
              academic progression and professional development.
            </p>

            <div className="mt-8 space-y-6 text-base text-black/70 leading-relaxed max-w-xl">
              <p>
                Our short courses are thoughtfully designed to strengthen
                subject knowledge, develop practical skills, and prepare
                learners for further study or career advancement.
              </p>

              <p>
                With a strong focus on academic integrity and student support,
                we provide an environment where learners can progress with
                clarity, confidence, and purpose.
              </p>
            </div>

            {/* STATS */}
          

<div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-xl">
{/* BOX 1 */}
<div className="bg-white rounded-xl border border-black/10 p-6 text-center shadow-sm">
<p className="text-4xl font-semibold text-[#861F20]">
<CountUp end={10} suffix="+" />
</p>
<p className="mt-2 text-sm text-black/60">
Years Experience
</p>
</div>


{/* BOX 2 */}
<div className="bg-white rounded-xl border border-black/10 p-6 text-center shadow-sm">
<p className="text-4xl font-semibold text-[#861F20]">
<CountUp end={3000} suffix="+" />
</p>
<p className="mt-2 text-sm text-black/60">
Students Supported
</p>
</div>


{/* BOX 3 */}
<div className="bg-white rounded-xl border border-black/10 p-6 text-center shadow-sm">
<p className="text-4xl font-semibold text-[#861F20]">
<CountUp end={40} suffix="+" />
</p>
<p className="mt-2 text-sm text-black/60">
Courses Offered
</p>
</div>


</div>

          </div>
        </div>
      </div>
    </section>
  );
}