"use client";

export default function LivingCommunity() {
  const points = [
    {
      title: "Share needs and prayer requests",
      desc: "Members can gently share what they’re walking through with their community.",
    },
    {
      title: "Members respond with care",
      desc: "Relevant members and teams are notified so responses stay thoughtful and timely.",
    },
    {
      title: "Follow trusted voices",
      desc: "Follow churches, pastors, and Christian artists you know and trust.",
    },
    {
      title: "Faith journey tools in development",
      desc: "Family check-ins, devotion prompts, and journey tools are being shaped with real churches.",
    },
  ];
  
  return (
    <section className="relative bg-[#f7f9ff] py-20 overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm text-slate-400 mb-3">Beyond posts</p>

          <h2 className="text-3xl sm:text-4xl font-semibold text-blue-600 mb-4">
            More than posts. A living community.
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto">
            Faith lives beyond announcements. The app is built for care,
            presence, and everyday discipleship.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          
          {/* Left bullet content */}
          <div className="lg:col-span-2 space-y-8">
            {points.map((item, index) => (
              <div key={index} className="flex gap-4">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-red-400 flex-shrink-0" />

                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right quote card (CENTERED & NEAT) */}
          <div className="flex justify-center">
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-10 shadow-md max-w-md">
              <p className="text-slate-600 leading-relaxed">
                Imagine a place where a quiet request for prayer reaches just
                the right people — not the whole internet. That’s the heart
                behind every feature.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
