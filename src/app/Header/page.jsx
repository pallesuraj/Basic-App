"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-slate-900"
        >
          <Image
            src="/IM/10 Artboard 2.png"     // 👈 your uploaded logo
            alt="BASIC Logo"
            width={100}
            height={100}
            className="rounded-md"
            priority
          />
          {/*<span className="text-lg">BASIC</span>*/}
        </Link>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:block text-sm font-medium text-slate-500">
            For Churches
          </span>

          <Link
            href="/contact"
            className="px-5 py-2 rounded-full text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Get notified
          </Link>
        </div>
      </div>
    </header>
  );
}
