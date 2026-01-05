"use client";

export default function InAppAnnouncementPreview() {
  return (
    <section className="relative bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section label */}
        <p className="text-sm text-slate-400 mb-6">
          In-app announcement design
        </p>

        {/* Preview container */}
        <div className="bg-[#f3f6fb] rounded-3xl p-8 max-w-3xl">
          
          {/* Tag */}
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white text-slate-700 shadow-sm">
            Community announcement
          </span>

          {/* Title */}
          <h3 className="text-lg font-semibold text-slate-900 mb-3">
            Evening prayer service for families
          </h3>

          {/* Description */}
          <p className="text-slate-500 leading-relaxed text-sm max-w-xl">
            A gentle, optional card inside the app — no popups, no autoplay,
            no banners. Just a calm notice in the flow of community life.
          </p>
        </div>

        {/* Footnote */}
        <p className="text-sm text-slate-400 mt-6 max-w-3xl">
          We limit the number of announcements to maintain a peaceful,
          non-commercial experience.
        </p>
      </div>
    </section>
  );
}
