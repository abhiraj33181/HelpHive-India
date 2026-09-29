"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-auto lg:h-[calc(100vh-80px)] lg:min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-worker.png"
          alt="HelpHive Professional"
          className="w-full h-full object-cover object-[center_top]"
        />
        <div className="absolute inset-0 bg-white/85 md:bg-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 h-full py-12 lg:py-0 pb-20 lg:pb-0">
        <div className="w-full lg:w-[65%] flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-[60px] font-black text-slate-900 leading-[1.15]">
            Find Trusted <br />
            <span className="text-violet-600">
              Local Service Providers
            </span>{" "}
            <br />
            Near You
          </h1>

          <p className="text-base md:text-lg text-slate-800 md:text-slate-700 max-w-xl font-medium leading-relaxed">
            From home repairs to beauty services, from nearby shops to rooms for
            rent &ndash; HelpHive connects you with verified local providers,
            all in one place.
          </p>

          <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl md:rounded-full p-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 max-w-3xl mt-2">
            <div className="flex-1 flex items-center px-4 w-full border-b md:border-b-0 border-slate-100 md:border-r md:border-slate-200 pb-2 md:pb-0 mb-2 md:mb-0">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <Input
                type="text"
                placeholder="What do you need?"
                className="border-0 shadow-none focus-visible:ring-0 text-base px-3 placeholder:text-slate-400 h-12"
              />
            </div>

            <div className="flex-1 flex items-center px-4 w-full pb-2 md:pb-0 mb-2 md:mb-0">
              <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
              <Input
                type="text"
                placeholder="Location"
                defaultValue="Gaya Ji, Bihar"
                className="border-0 shadow-none focus-visible:ring-0 text-base px-3 placeholder:text-slate-400 h-12"
              />
            </div>

            <Button className="w-full md:w-auto bg-violet-600 hover:bg-violet-700 text-white rounded-xl md:rounded-full h-12 md:h-14 px-10 text-lg font-semibold shadow-md shrink-0 transition-all">
              Search
            </Button>
          </div>

          <div className="flex items-center gap-2 md:gap-3 flex-wrap">
            <span className="text-sm font-bold text-slate-900">Popular:</span>
            {[
              "AC Repair",
              "Electrician",
              "Plumber",
              "Cleaning",
              "Salon",
              "PG/Rooms",
            ].map((tag) => (
              <span
                key={tag}
                className="text-sm font-medium text-slate-800 md:text-slate-700 bg-white/80 backdrop-blur-sm border border-slate-200 px-3 py-1.5 md:px-4 md:py-1.5 rounded-full hover:border-violet-300 hover:text-violet-700 cursor-pointer shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          className="relative block w-full h-[40px] md:h-[80px] lg:h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 L1440,120 L1440,0 C1000,100 400,140 0,60 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
