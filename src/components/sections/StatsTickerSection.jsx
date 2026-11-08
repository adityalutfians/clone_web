"use client";

import { Trophy, Globe, Rocket, Heart } from "lucide-react";

const STATS_ITEMS = [
  {
    icon: Trophy,
    text: "G2’s #1 knowledge base for 3 consecutive years",
  },
  {
    icon: Globe,
    text: "100M users in over 50 countries",
  },
  {
    icon: Rocket,
    text: "Over 50% of YC companies",
  },
  {
    icon: Heart,
    text: "1.4M+ community members",
  },
  {
    icon: Globe,
    text: "62% of Fortune 100 use Notion",
  },
];

export default function StatsTickerSection() {
  return (
    <section className="relative w-full bg-white py-8 sm:py-10 overflow-hidden border-b border-neutral-100">
      {/* Left & Right Gradient Fade Masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

      {/* Scrolling Ticker Track */}
      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex items-center shrink-0 cursor-default">
          {/* Loop Set 1 */}
          <div className="flex items-center">
            {STATS_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`stat-1-${index}`}
                  className="flex items-center gap-2 mx-3.5 sm:mx-5 shrink-0 text-[14px] sm:text-[15px] font-medium text-neutral-600"
                >
                  <Icon className="w-4 h-4 text-neutral-500 shrink-0" />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>

          {/* Loop Set 2 (Duplikasi untuk Seamless Infinite Loop) */}
          <div className="flex items-center">
            {STATS_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`stat-2-${index}`}
                  className="flex items-center gap-2 mx-3.5 sm:mx-5 shrink-0 text-[14px] sm:text-[15px] font-medium text-neutral-600"
                >
                  <Icon className="w-4 h-4 text-neutral-500 shrink-0" />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

