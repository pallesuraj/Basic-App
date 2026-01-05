"use client";

import React from "react";
import HeroCanvas from "../THREED/HeroCanvas";

export default function MainHero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Optional soft background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          {/* Badge */}
          <span className="inline-flex w-fit items-center px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-medium mb-6">
            Verified healthcare network
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 mb-6">
            Connect hospitals and doctors
            <br className="hidden sm:block" />
            for duties in minutes
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mb-10 leading-relaxed">
            BASIC is a healthcare workforce platform that connects hospitals
            with verified doctors for duty shifts, specialty visits, and
            flexible schedules — without manual calls.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <StoreButton
              img="/im/google-play-store-seeklogo.png"
              alt="Google Play"
            />
            <StoreButton
              img="/im/apple store.png"
              alt="App Store"
            />
          </div>
        </div>

        {/* RIGHT CANVAS */}
        <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[600px]">
          <HeroCanvas />
        </div>
      </main>
    </section>
  );
}

/* -------------------------------- */
/* Reusable Store Button Component */
/* -------------------------------- */
function StoreButton({ img, alt }) {
  return (
    <button
      onClick={() => window.open("https://yesca.in/", "_blank")}
      className="
        w-44 h-14
        rounded-xl bg-black
        flex items-center justify-center
        shadow-lg
        hover:scale-105
        active:scale-95
        transition-all duration-300
      "
    >
      <img src={img} alt={alt} className="h-9 object-contain" />
    </button>
  );
}
