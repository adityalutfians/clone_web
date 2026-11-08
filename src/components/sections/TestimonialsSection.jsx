"use client";

import { useEffect, useState } from "react";

export default function TestimonialsSection() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Memanggil endpoint backend Next.js API route GET /api/testimonials
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal mengambil data testimonials:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="h-10 w-72 bg-neutral-100 animate-pulse rounded-md mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 justify-items-center">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-full max-w-[401px] h-[501px] rounded-[16px] bg-neutral-100 animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Jika data kosong atau route.js tidak mengembalikan array data
  if (!data || !data.data || data.data.length === 0) {
    return null;
  }

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[46px] font-bold tracking-tight text-[#050505] leading-tight mb-8 sm:mb-12">
          {data.heading || "Trusted by teams that ship."}
        </h2>

        {/* 3 Color Cards Grid (Ukuran 401x501 proporsional) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 justify-items-center">
          {data.data.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-[16px] w-full max-w-[401px] h-[501px] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.16)] hover:-translate-y-1 cursor-pointer bg-neutral-900"
            >
              {/* 1. Base Image Layer (Tempat Foto Orang) */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={item.image}
                  alt={item.author}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* 2. Base Color Tint (Multiply) */}
              {item.colorTheme?.baseColor && (
                <div
                  className={`absolute inset-0 w-full h-full ${item.colorTheme.baseColor} transition-opacity duration-300`}
                />
              )}

              {/* 3. Custom Color Linear Gradient (Merah, Biru, atau Kuning) */}
              {item.colorTheme?.colorGradient && (
                <div
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ background: item.colorTheme.colorGradient }}
                />
              )}

              {/* 4. Custom Black Linear Gradient dari Figma (35% 0% -> 100% 55%) untuk keterbacaan teks */}
              <div
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                  background:
                    item.colorTheme?.blackGradient ||
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0.55) 100%)",
                }}
              />

              {/* 5. Top Header Logo */}
              <div className="relative z-10 p-6 sm:p-7">
                <div className="flex items-center">
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="h-7 sm:h-8 md:h-[34px] w-auto max-w-[140px] object-contain brightness-0 invert opacity-95"
                  />
                </div>
              </div>

              {/* 6. Bottom Content: Quote, Author, Role */}
              <div className="relative z-10 p-6 sm:p-7 space-y-4 text-white">
                <p className="text-[15px] sm:text-[16px] leading-snug font-medium text-white/95">
                  {item.quote}
                </p>
                <div className="pt-2 text-[13px] text-white/80">
                  <div className="font-semibold text-white">
                    {item.author},{" "}
                    <span className="font-normal text-white/80">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

