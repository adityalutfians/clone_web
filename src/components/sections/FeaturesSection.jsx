"use client";

import { ArrowRight } from "lucide-react";
import { NOTION_AI_FEATURES, SEE_WHAT_NOTION_CAN_DO } from "@/constants/features";

export default function FeaturesSection() {
  const { heading, cards } = NOTION_AI_FEATURES;
  const [card1, card2, card3] = cards;

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[46px] font-bold tracking-tight text-[#050505] leading-tight mb-8 sm:mb-10">
          {heading}
        </h2>

        {/* 3 AI Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {/* Card 1: Capture knowledge */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-[16px] bg-[#F9F9F8] border border-neutral-200/70 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] hover:border-neutral-300">
            {/* Header with padding */}
            <div className="p-6 sm:p-8 pb-4 flex items-start justify-between gap-4">
              <div className="max-w-[85%]">
                <span className="block text-[13px] font-medium text-neutral-500 tracking-normal mb-1.5">
                  {card1.eyebrow}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050505] leading-snug">
                  {card1.title}
                </h3>
              </div>

              {/* Arrow Button */}
              <a
                href={card1.href}
                aria-label={card1.title}
                className="shrink-0 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#050505] text-white transition-transform duration-200 group-hover:scale-105"
              >
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Illustration without padding (flush / edge-to-edge) */}
            <div className="w-full mt-auto overflow-hidden">
              <img
                src={card1.svg}
                alt={card1.title}
                className="w-full h-auto object-cover select-none transition-transform duration-300 group-hover:scale-[1.01]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Card 2: Find answers */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-[16px] bg-[#F9F9F8] border border-neutral-200/70 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] hover:border-neutral-300">
            {/* Header with padding */}
            <div className="p-6 sm:p-8 pb-4 flex items-start justify-between gap-4">
              <div className="max-w-[85%]">
                <span className="block text-[13px] font-medium text-neutral-500 tracking-normal mb-1.5">
                  {card2.eyebrow}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050505] leading-snug">
                  {card2.title}
                </h3>
              </div>

              {/* Arrow Button */}
              <a
                href={card2.href}
                aria-label={card2.title}
                className="shrink-0 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#050505] text-white transition-transform duration-200 group-hover:scale-105"
              >
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Illustration without padding (flush / edge-to-edge) */}
            <div className="w-full mt-auto overflow-hidden">
              <img
                src={card2.svg}
                alt={card2.title}
                className="w-full h-auto object-cover select-none transition-transform duration-300 group-hover:scale-[1.01]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Card 3: Automate busywork (Full Width) */}
          <div className="group relative md:col-span-2 flex flex-col md:flex-row items-stretch justify-between overflow-hidden rounded-[16px] bg-[#F9F9F8] border border-neutral-200/70 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] hover:border-neutral-300">
            {/* Left Header with padding */}
            <div className="p-6 sm:p-8 flex flex-col justify-between w-full md:w-[340px] lg:w-[380px] shrink-0">
              <div>
                <span className="block text-[13px] font-medium text-neutral-500 tracking-normal mb-1.5">
                  {card3.eyebrow}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050505] leading-snug">
                  {card3.title}
                </h3>
              </div>

              {/* Arrow Button directly underneath */}
              <div className="mt-6 md:mt-auto pt-2">
                <a
                  href={card3.href}
                  aria-label={card3.title}
                  className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#050505] text-white transition-transform duration-200 group-hover:scale-105"
                >
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Illustration without padding (flush edge-to-edge) */}
            <div className="flex-1 w-full overflow-hidden flex items-end justify-end">
              <img
                src={card3.svg}
                alt={card3.title}
                className="w-full h-auto object-cover select-none transition-transform duration-300 group-hover:scale-[1.01]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* See what Notion can do Section (Tepat di bawahnya) */}
        <div className="mt-12 sm:mt-16">
          {/* Label */}
          <p className="text-sm font-medium text-neutral-500 mb-4 sm:mb-5">
            {SEE_WHAT_NOTION_CAN_DO.label}
          </p>

          {/* 5 Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {SEE_WHAT_NOTION_CAN_DO.items.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="group flex flex-col justify-between rounded-[16px] bg-white border border-neutral-200/80 p-5 sm:p-5.5 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-neutral-300 min-h-[160px]"
              >
                {/* Icon */}
                <div className="flex items-center">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-10 w-10 sm:h-11 sm:w-11 object-contain"
                  />
                </div>

                {/* Title with Arrow (Ukuran teks diperbesar, tidak berubah warna saat di-hover, panah pakai span) */}
                <div className="mt-6 text-[16px] sm:text-[17px] font-bold text-[#050505] leading-snug">
                  <span>{item.title}</span>{" "}
                  <span className="inline-block font-normal ml-0.5">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
