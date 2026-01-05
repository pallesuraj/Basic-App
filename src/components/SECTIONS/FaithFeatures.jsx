"use client";

export default function FaithFeatures() {
  const features = [
    {
      title: "Verified communities",
      description:
        "Where members feel known, trusted, and protected through church-led verification.",
      icon: "✓",
    },
    {
      title: "Purposeful interaction",
      description:
        "Meaningful connection without the noise, pressure, or public performance of social media.",
      icon: "✦",
    },
    {
      title: "Closed environment",
      description:
        "A moderated, invitation-based space built on respect, faith, and emotional safety.",
      icon: "◯",
    },
  ];

  return (
    <section className="relative overflow-hidden py-28 bg-[#ffffff]">
      {/* FULL background wash (this was missing) */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-white to-blue-50/40 pointer-events-none" />

      {/* Soft radial glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-sm text-slate-400 mb-3">
            Why this platform
          </p>

          <h2 className="text-3xl sm:text-4xl font-semibold text-blue-600 mb-4">
            Designed for real church life
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto">
            Built around trust, gentleness, and everyday rhythms of church communities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                hover:shadow-[0_14px_40px_rgba(0,0,0,0.06)]
                transition-shadow
              "
            >
              {/* Icon */}
              <div className="w-10 h-10 mb-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg font-semibold">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
