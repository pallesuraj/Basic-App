"use client";

export default function FinalCTA() {
  return (
    <section className="relative bg-[#f7f9ff] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Gradient Card */}
        <div
          className="
            rounded-[32px]
            px-8 py-16 sm:px-12
            text-center
            bg-gradient-to-br
            from-blue-400
            via-indigo-400
            to-purple-300
            shadow-2xl
          "
        >
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6">
            Built carefully. Launched prayerfully.
          </h2>

          {/* Description */}
          <p className="text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            We are building this platform alongside a small number of churches
            to honor the trust placed in us. Android and iOS apps will be
            available soon.
          </p>

          {/* CTA Button */}
          <button
            className="
              bg-white
              text-blue-600
              font-semibold
              px-8 py-3
              rounded-full
              shadow-md
              hover:scale-105
              active:scale-95
              transition-all
            "
          >
            Be part of the beginning
          </button>
        </div>
      </div>
    </section>
  );
}
