"use client";

export default function TrustSection() {
  const items = [
    {
      title: "Hybrid verification",
      desc: "Flexible verification flows with approval controls so churches can recognize and welcome real people.",
    },
    {
      title: "Church-led moderation",
      desc: "Leaders and trusted admins guide the tone, pace, and culture of engagement in each community space.",
    },
    {
      title: "Predefined reactions",
      desc: "Warm, intentional reactions reduce misuse and keep responses grounded in encouragement.",
    },
    {
      title: "Closed community design",
      desc: "Communities are closed by default — designed for sincerity, not performance or virality.",
      highlight: true,
    },
  ];

  return (
    <section className="relative bg-white py-10 overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm text-slate-400 mb-3">
            Trust, safety & verification
          </p>

          <h2 className="text-3xl sm:text-4xl font-semibold text-blue-600 mb-4">
            Trust is not optional
          </h2>

          <p className="text-slate-500 max-w-3xl mx-auto">
            No ads. No noise. No public pressure. Just a calm, closed space for
            the people you shepherd.
          </p>
        </div>

        {/* Center pill */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-full px-8 py-4 shadow-md text-slate-600 text-sm max-w-3xl text-center">
            Hybrid member verification, church-led controls, and thoughtful
            interaction options help keep the community sincere and safe.
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#f7f9ff]
                rounded-3xl
                p-8
                shadow-sm
                flex
                flex-col
                h-full
                min-h-[240px]
              "
            >
              {/* Title */}
              <h3 className="font-semibold text-slate-900 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <div className="flex-1">
                <p
                  className={`text-sm leading-relaxed ${
                    item.highlight
                      ? "text-slate-600 border-2 border-dashed border-blue-400 rounded-xl p-4 bg-white"
                      : "text-slate-600"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
