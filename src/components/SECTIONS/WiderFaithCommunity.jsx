"use client";

export default function WiderFaithCommunity() {
  const cards = [
    {
      tag: "Churches & pastors",
      title: "Lead with clarity",
      desc: "Keep your church informed, cared for, and gently connected between Sundays.",
    },
    {
      tag: "Families & members",
      title: "Belong with confidence",
      desc: "Stay close to your church family in a space that’s simple, safe, and easy to use at any age.",
    },
    {
      tag: "Artists & ministries",
      title: "Serve with purpose",
      desc: "Share worship, teaching, and resources with communities who invite you in.",
    },
  ];

  return (
    <section className="relative bg-[#ffffff] py-20 overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm text-slate-400 mb-3">
            Who it’s for
          </p>

          <h2 className="text-3xl sm:text-4xl font-semibold text-blue-600">
            Built for the wider faith community
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-sm
                hover:shadow-md
                transition-shadow
              "
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
      </div>
    </section>
  );
}
