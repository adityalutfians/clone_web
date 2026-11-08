import { NextResponse } from "next/server";

export async function GET() {
  const testimonials = [
    {
      id: "cursor",
      company: "Cursor",
      logo: "/images/testimonials/logos/cursor-logo.svg",
      image: "/images/testimonials/cursor-person.svg",
      quote:
        "“Using the most AI-native tools like Notion is an important competitive advantage for us to stay small while doing a lot.”",
      author: "Michael Truell",
      role: "Co-founder & CEO",
      colorTheme: {
        // Base red multiply tint
        baseColor: "bg-[#DC2108]/50 mix-blend-multiply",
        // Custom linear merah: #E32D14 (15%) -> #DC2108 (35%)
        colorGradient:
          "linear-gradient(180deg, rgba(227, 45, 20, 0.15) 0%, rgba(220, 33, 8, 0.35) 100%)",
        // Custom black linear gradient dari Figma: 35% 0% -> 100% 55%
        blackGradient:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0.55) 100%)",
      },
    },
    {
      id: "faire",
      company: "Faire",
      logo: "/images/testimonials/logos/faire-logo.svg",
      image: "/images/testimonials/faire-person.svg",
      quote:
        "“Notion’s thoughtful design speeds up collaboration and decisions so we can deliver impact to our customers faster.”",
      author: "Renee Solorzano",
      role: "Sr. Director of Product Design",
      colorTheme: {
        // Base blue multiply tint
        baseColor: "bg-[#003C71]/50 mix-blend-multiply",
        // Custom linear biru: #003C71 (44%) -> #0087FF (30%)
        colorGradient:
          "linear-gradient(180deg, rgba(0, 60, 113, 0.44) 0%, rgba(0, 135, 255, 0.30) 100%)",
        // Custom black linear gradient dari Figma: 35% 0% -> 100% 55%
        blackGradient:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0.55) 100%)",
      },
    },
    {
      id: "ramp",
      company: "Ramp",
      logo: "/images/testimonials/logos/ramp-logo.svg",
      image: "/images/testimonials/ramp-person.svg",
      quote:
        "“Notion Custom Agents help our team go beyond doing work with AI to building AI tools that do the work for them.”",
      author: "Ben Levick",
      role: "Head of Operations & Internal AI",
      colorTheme: {
        // Base amber/yellow multiply tint
        baseColor: "bg-[#B67D07]/50 mix-blend-multiply",
        // Custom linear kuning: #B67D07 (44%) -> #9C6900 (14%)
        colorGradient:
          "linear-gradient(180deg, rgba(182, 125, 7, 0.44) 0%, rgba(156, 105, 0, 0.14) 100%)",
        // Custom black linear gradient dari Figma: 35% 0% -> 100% 55%
        blackGradient:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0.55) 100%)",
      },
    },
  ];

  return NextResponse.json({
    heading: "Trusted by teams that ship.",
    data: testimonials,
  });
}
