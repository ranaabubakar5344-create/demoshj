"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FAF7F5] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">

        {/* BIG 404 */}
        <h1 className="text-[120px] leading-none font-extrabold text-[#861F20]/20">
          404
        </h1>

        {/* MESSAGE */}
        <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-black">
          Page not found
        </h2>

        <p className="mt-3 text-black/60 text-sm sm:text-base">
          Sorry, the page you’re looking for doesn’t exist or may have been moved.
        </p>

        {/* ACTIONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            href="/"
            className="
              inline-flex items-center justify-center
              h-11 px-6 rounded-full
              bg-[#861F20]
              text-white text-sm font-medium
              hover:bg-[#74191A]
              transition
            "
          >
            Go to Homepage
          </Link>

          <Link
            href="/shortcourses"
            className="
              inline-flex items-center justify-center
              h-11 px-6 rounded-full
              border border-[#861F20]/30
              text-[#861F20] text-sm font-medium
              hover:bg-[#861F20]/5
              transition
            "
          >
            View Courses →
          </Link>

        </div>

      </div>
    </main>
  );
}