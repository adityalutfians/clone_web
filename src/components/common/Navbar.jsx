"use client";

import { useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import NotionLogo from "@/components/common/NotionLogo";
import { NOTION_NAV } from "@/constants/navigation";
import { useScroll } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'Product' | 'Resources' | null
  const timeoutRef = useRef(null);
  const isScrolled = useScroll(10);

  const handleMouseEnter = (label) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white transition-shadow duration-200 border-b",
        isScrolled
          ? "border-neutral-200/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]"
          : "border-transparent"
      )}
    >
      <div className="mx-auto flex h-14 max-w-[1360px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* 1. Left Side: Notion Logo */}
        <div className="flex-1 flex items-center justify-start">
          <a
            href={NOTION_NAV.brand.href}
            aria-label="Notion Home"
            className="flex items-center hover:opacity-85 transition-opacity"
          >
            <NotionLogo className="h-7 w-7 text-[#050505]" />
          </a>
        </div>

        {/* 2. Center: Navigation Links with Interactive Subnavbars */}
        <nav className="hidden lg:flex items-center justify-center gap-0.5">
          {NOTION_NAV.links.map((item) => {
            const isDropdownOpen = openDropdown === item.label;

            // Subnavbar Dropdown 1: Product
            if (item.label === "Product") {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("Product")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-1 rounded-[6px] px-2.5 py-1.5 text-[14px] font-medium transition-colors cursor-pointer",
                      isDropdownOpen
                        ? "bg-neutral-100 text-neutral-950"
                        : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 text-neutral-400 transition-transform duration-200",
                        isDropdownOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {/* Product Subnavbar Panel (Animasi Turun + Fade) */}
                  <div
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-[210px] pt-2 z-50 transition-all duration-200 ease-out",
                      isDropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    )}
                  >
                    <div className="w-[710px] rounded-[16px] bg-white border border-neutral-200/80 shadow-[0_16px_40px_rgba(0,0,0,0.12)] p-4">
                      <div className="grid grid-cols-3 gap-3.5">
                        {/* Card 1: All features */}
                        <div className="group/card flex flex-col justify-between p-4 rounded-[12px] bg-[#F9F9F8] transition-all duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:bg-white cursor-pointer min-h-[220px]">
                          <div className="h-28 w-full flex items-center justify-center mb-3">
                            <img
                              src="/images/navbar/all-features.svg"
                              alt="All features"
                              className="max-h-full w-auto object-contain transition-transform duration-200 group-hover/card:scale-105"
                            />
                          </div>
                          <div>
                            <h4 className="text-[16px] font-bold text-neutral-900 leading-snug">
                              All features
                            </h4>
                            <p className="mt-1 text-[13px] text-neutral-500 leading-snug">
                              Every single thing Notion can do.
                            </p>
                          </div>
                        </div>

                        {/* Card 2: What’s new */}
                        <div className="group/card flex flex-col justify-between p-4 rounded-[12px] bg-[#F9F9F8] transition-all duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:bg-white cursor-pointer min-h-[220px]">
                          <div className="h-28 w-full flex items-center justify-center mb-3">
                            <img
                              src="/images/navbar/whats-new.svg"
                              alt="What’s new"
                              className="max-h-full w-auto object-contain transition-transform duration-200 group-hover/card:scale-105"
                            />
                          </div>
                          <div>
                            <h4 className="text-[16px] font-bold text-neutral-900 leading-snug">
                              What’s new
                            </h4>
                            <p className="mt-1 text-[13px] text-neutral-500 leading-snug">
                              Agents, rebuilt to do more for less
                            </p>
                          </div>
                        </div>

                        {/* Card 3: Download */}
                        <div className="group/card flex flex-col justify-between p-4 rounded-[12px] bg-[#F9F9F8] transition-all duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:bg-white cursor-pointer min-h-[220px]">
                          <div className="h-28 w-full flex items-center justify-center mb-3">
                            <img
                              src="/images/navbar/download.svg"
                              alt="Download"
                              className="max-h-full w-auto object-contain transition-transform duration-200 group-hover/card:scale-105"
                            />
                          </div>
                          <div>
                            <h4 className="text-[16px] font-bold text-neutral-900 leading-snug">
                              Download
                            </h4>
                            <p className="mt-1 text-[13px] text-neutral-500 leading-snug">
                              Work without distractions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Subnavbar Dropdown 2: Resources
            if (item.label === "Resources") {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("Resources")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-1 rounded-[6px] px-2.5 py-1.5 text-[14px] font-medium transition-colors cursor-pointer",
                      isDropdownOpen
                        ? "bg-neutral-100 text-neutral-950"
                        : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 text-neutral-400 transition-transform duration-200",
                        isDropdownOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {/* Resources Subnavbar Panel (Animasi Turun + Fade) */}
                  <div
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-[260px] pt-2 z-50 transition-all duration-200 ease-out",
                      isDropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    )}
                  >
                    <div className="w-[660px] rounded-[16px] bg-white border border-neutral-200/80 shadow-[0_16px_40px_rgba(0,0,0,0.12)] p-6 sm:p-7">
                      <div className="grid grid-cols-3 gap-8">
                        {/* Column 1: Notion for */}
                        <div>
                          <span className="block text-[12px] font-medium text-neutral-400 mb-3.5 tracking-tight">
                            Notion for
                          </span>
                          <div className="flex flex-col gap-1">
                            {["Enterprise", "Small businesses", "Startups", "Developers"].map(
                              (subItem) => (
                                <a
                                  key={subItem}
                                  href="#"
                                  className="block py-1.5 px-2.5 -mx-2.5 rounded-[6px] text-[16px] font-bold text-neutral-900 hover:bg-neutral-100 transition-colors"
                                >
                                  {subItem}
                                </a>
                              )
                            )}
                          </div>
                        </div>

                        {/* Column 2: Discover */}
                        <div>
                          <span className="block text-[12px] font-medium text-neutral-400 mb-3.5 tracking-tight">
                            Discover
                          </span>
                          <div className="flex flex-col gap-1">
                            {[
                              "What's New",
                              "Customer stories",
                              "Webinars",
                              "Templates",
                              "Consultants",
                            ].map((subItem) => (
                              <a
                                key={subItem}
                                href="#"
                                className="block py-1.5 px-2.5 -mx-2.5 rounded-[6px] text-[14px] font-medium text-neutral-800 hover:bg-neutral-100 transition-colors"
                              >
                                {subItem}
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* Column 3: Learn */}
                        <div>
                          <span className="block text-[12px] font-medium text-neutral-400 mb-3.5 tracking-tight">
                            Learn
                          </span>
                          <div className="flex flex-col gap-1">
                            {["Academy", "Product tours", "Help Center"].map((subItem) => (
                              <a
                                key={subItem}
                                href="#"
                                className="block py-1.5 px-2.5 -mx-2.5 rounded-[6px] text-[14px] font-medium text-neutral-800 hover:bg-neutral-100 transition-colors"
                              >
                                {subItem}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Normal Navigation Links: Enterprise, Pricing, Request a demo
            return (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center rounded-[6px] px-2.5 py-1.5 text-[14px] font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 transition-colors"
              >
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* 3. Right Side: Log in & Get Notion free */}
        <div className="flex-1 flex items-center justify-end gap-2">
          {/* Desktop Right Actions */}
          <div className="hidden sm:flex items-center gap-1.5">
            <a
              href={NOTION_NAV.actions.login.href}
              className="inline-flex items-center rounded-[6px] px-3 py-1.5 text-[14px] font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 transition-colors"
            >
              {NOTION_NAV.actions.login.label}
            </a>
            <a
              href={NOTION_NAV.actions.getNotion.href}
              className="inline-flex items-center justify-center rounded-[6px] bg-[#0077d4] hover:bg-[#0066b8] active:bg-[#005bb0] px-3.5 py-1.5 text-[14px] font-medium text-white shadow-xs transition-colors"
            >
              {NOTION_NAV.actions.getNotion.label}
            </a>
          </div>

          {/* Mobile CTA (Get Notion) */}
          <div className="flex sm:hidden items-center mr-1">
            <a
              href={NOTION_NAV.actions.getNotion.href}
              className="inline-flex items-center justify-center rounded-[6px] bg-[#0077d4] hover:bg-[#0066b8] px-2.5 py-1 text-xs font-medium text-white shadow-xs transition-colors"
            >
              {NOTION_NAV.actions.getNotion.label}
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex lg:hidden items-center justify-center rounded-[6px] p-1.5 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-200 bg-white px-4 pt-2 pb-5 shadow-lg">
          <div className="flex flex-col gap-1">
            {NOTION_NAV.links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-[6px] px-3 py-2 text-[14px] font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 transition-colors"
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown className="h-4 w-4 text-neutral-400" />
                )}
              </a>
            ))}

            <div className="mt-3 pt-3 border-t border-neutral-100 flex flex-col gap-2">
              <a
                href={NOTION_NAV.actions.login.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-[6px] px-3 py-2 text-[14px] font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 transition-colors"
              >
                {NOTION_NAV.actions.login.label}
              </a>
              <a
                href={NOTION_NAV.actions.getNotion.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-[6px] bg-[#0077d4] hover:bg-[#0066b8] px-3.5 py-2 text-[14px] font-medium text-white shadow-xs transition-colors"
              >
                {NOTION_NAV.actions.getNotion.label}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
