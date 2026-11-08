"use client";

import { ChevronDown, Globe } from "lucide-react";
import { NOTION_FOOTER } from "@/constants/footer";

export default function Footer() {
  const { quote, logo, columns, bottom } = NOTION_FOOTER;

  return (
    <footer className="bg-white border-t border-neutral-200/60 text-[#050505]">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-16">
        {/* Top Grid: Left (Brand Logo + Quote) & Right (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column (Brand + Quote) */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col justify-between pr-4 space-y-12">
            {/* Notion Logo SVG */}
            <a href="#" className="inline-block hover:opacity-85 transition-opacity">
              <img
                src={logo}
                alt="Notion"
                className="h-8 w-auto object-contain select-none"
              />
            </a>

            {/* Marshall McLuhan Quote (Serif font sesuai desain asli Notion) */}
            <div className="space-y-3 pt-4">
              <p className="font-serif text-[15px] sm:text-[16px] leading-relaxed text-[#171717]">
                {quote.text}
              </p>
              <p className="text-[13px] text-neutral-500 font-sans">
                {quote.author}
              </p>
            </div>
          </div>

          {/* Right Columns (Product, Resources, Company, Notion for) */}
          <div className="md:col-span-8 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
            {columns.map((column) => (
              <div key={column.title} className="space-y-3.5">
                <h4 className="text-[13px] font-semibold text-neutral-500 tracking-normal">
                  {column.title}
                </h4>
                <ul className="space-y-2 text-[14px]">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[#171717] hover:text-[#050505] hover:underline transition-colors block py-0.5"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Menggunakan grid yang persis sejajar dengan Product, Resources, Company, Notion for */}
        <div className="mt-16 sm:mt-24 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Spacer Kosong di Sisi Kiri (Sejajar dengan kolom Brand/Quote) */}
            <div className="hidden md:block md:col-span-4 lg:col-span-4" />

            {/* Sisi Kanan: 4 Kolom yang Sejajar Persis dengan Kolom Atas */}
            <div className="md:col-span-8 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 items-center text-[13px] text-neutral-500 font-normal">
              {/* Kolom 1 (Sejajar dengan teks 'Product'): © 2026 Notion Labs, Inc. */}
              <div className="whitespace-nowrap">
                <span>{bottom.copyright}</span>
              </div>

              {/* Kolom 2 (Sejajar dengan teks 'Resources'): Cookie settings */}
              <div>
                <a
                  href="#"
                  className="text-neutral-500 hover:text-neutral-900 transition-colors whitespace-nowrap"
                >
                  {bottom.cookieSettings}
                </a>
              </div>

              {/* Kolom 3 (Sejajar dengan teks 'Company'): Kosong */}
              <div className="hidden sm:block" />

              {/* Kolom 4 (Sejajar dengan teks 'Notion for'): Language Selector */}
              <div className="flex sm:justify-start lg:justify-end col-span-2 sm:col-span-1 mt-2 sm:mt-0">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-[6px] border border-neutral-200/90 bg-white hover:bg-neutral-50 px-3 py-1.5 text-[13px] font-medium text-[#171717] shadow-xs transition-colors"
                >
                  <Globe className="h-3.5 w-3.5 text-neutral-700" />
                  <span>{bottom.language}</span>
                  <ChevronDown className="h-3.5 w-3.5 text-neutral-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
