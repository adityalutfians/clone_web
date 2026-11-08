"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setMessage(data.message || "Thank you for subscribing!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message || "Subscription failed. Please try again.");
      }
    } catch (err) {
      console.error("Newsletter submission error:", err);
      setStatus("error");
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="bg-white border-t border-neutral-200/80 py-20 sm:py-24 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#050505]">
          Get started today
        </h2>

        {/* Action Buttons: Get Notion free & Request a demo */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-[6px] bg-[#0077d4] hover:bg-[#0066b8] active:bg-[#005bb0] px-5 py-2.5 text-[15px] font-medium text-white shadow-xs transition-colors"
          >
            Get Notion free
          </a>
          <a
            href="#"
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-[6px] bg-[#eef6fc] hover:bg-[#e1effa] active:bg-[#d4e8f7] px-5 py-2.5 text-[15px] font-medium text-[#0077d4] transition-colors"
          >
            Request a demo
          </a>
        </div>

        {/* Newsletter Subscription Form (Backend API POST /api/newsletter) */}
        <div className="mt-12 pt-8 border-t border-neutral-100 max-w-md mx-auto">
          <p className="text-[13px] font-medium text-neutral-500 mb-3">
            Subscribe to our newsletter for product updates and tips
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="Enter your email address..."
              disabled={status === "loading"}
              required
              className="flex-1 rounded-[6px] border border-neutral-300 bg-white px-3.5 py-2 text-[14px] text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-colors disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === "loading" || !email.trim()}
              className="inline-flex items-center justify-center rounded-[6px] bg-[#050505] hover:bg-neutral-800 active:bg-black px-4 py-2 text-[14px] font-medium text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-1.5" />
                  Subscribing...
                </>
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </>
              )}
            </button>
          </form>

          {/* Feedback Messages */}
          {status === "success" && (
            <div className="mt-3 flex items-center justify-center gap-1.5 text-[13px] text-emerald-600 font-medium animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{message}</span>
            </div>
          )}

          {status === "error" && (
            <div className="mt-3 flex items-center justify-center gap-1.5 text-[13px] text-red-600 font-medium animate-fadeIn">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{message}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

