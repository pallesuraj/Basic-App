"use client";

export default function HeroFaith() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9ff]">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <span className="inline-block mb-6 px-4 py-1.5 text-sm rounded-full bg-blue-100 font-semibold text-black-600">
            A calm, trusted space for the church family
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-blue-600 leading-tight mb-8">
            A trusted digital space for churches and faith communities
          </h1>

          {/* Description */}
          <p className="text-gray-600 max-w-xl mb-5 text-lg">
            A place where faith, families, and communities grow together —
            today and for generations to come.
          </p>

          <p className="text-gray-500 max-w-xl mb-8">
            Designed for elders, parents, youth, and future generations to stay
            connected in a gentle, private, and safe way.
          </p>

          <p className="text-sm text-gray-400">
            Coming soon on Android & iOS
          </p>
        </div>

        {/* RIGHT NOTIFY CARD */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-3">
              Get notified about the launch
            </h3>

            <p className="text-sm text-gray-500 mb-6">
              Leave your email to hear when the first churches begin using the app.
              No noise. Just a few thoughtful updates.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2.5 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition"
              >
                Get notified
              </button>
            </div>

            <p className="text-xs text-gray-400 mt-4">
              We respect your inbox. Launch and early-access updates only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
