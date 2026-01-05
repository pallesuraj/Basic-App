"use client";

export default function ChurchWorkflow() {
  const cards = [
    {
      tag: "Create",
      title: "A dedicated home for your church",
      desc: "Pastors and trusted admins create a safe, recognizable space for your congregation.",
    },
    {
      tag: "Share",
      title: "Updates that really matter",
      desc: "Share announcements, sermons, and reflections with members and followers.",
    },
    {
      tag: "Organize",
      title: "Services, seasons, and events",
      desc: "Plan services, events, and yearly calendars in one simple, shared view.",
    },
    {
      tag: "Connect",
      title: "Leaders supporting leaders",
      desc: "Connect with other pastors for prayer, collaboration, and shared initiatives.",
    },
  ];

  return (
    <section className="relative bg-[#f7f9ff] py-10 overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className=" text-center mb-20">
          <p className="text-sm text-slate-400 mb-3">
            How churches use the platform
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-blue-600">
            Built around how churches work
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* Left cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {cards.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-sm text-slate-400 mb-2">
                  {item.tag}
                </p>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right testimonial */}
<div className="flex lg:justify-center lg:items-center h-full">
  <div className="bg-white rounded-3xl pt-12 px-8 pb-8 shadow-md max-w-md">
    <div className="flex items-center gap-4 mb-8">
      <img
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200"
        alt="Pastor"
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h4 className="font-semibold text-slate-900">
          Grace Community Church
        </h4>
        <p className="text-sm text-slate-500">
          Pastor-led space for families and elders
        </p>
      </div>
    </div>

    <blockquote className="text-slate-600 leading-relaxed mb-6">
      “We were looking for a gentle way to keep everyone close —
      from our elders to our teens. This feels like a quiet hallway
      in the church, not a public square.”
    </blockquote>

    <p className="text-xs text-slate-400">
      Illustrative example while the platform is in development.  
    </p>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
