// app/avx-help-center/page.jsx
// Route: /avx-help-center
// This file ONLY handles the category listing page.
// Article detail is handled by: app/avx-help-center/[slug]/page.jsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, MessageSquare, Search, Shield, ChevronRight } from "lucide-react";
import { articles, tagStyles } from "@/app/components/avx-help-center/Articles.data";

export default function CategoryPage() {
  const [hoveredId, setHoveredId] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = articles.filter(
    (a) =>
      a.question.toLowerCase().includes(search.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="relative py-16 px-4 sm:px-6 overflow-hidden font-secondary text-primary">
      <div className="max-w-7xl mx-auto relative">

        {/* ── HEADER ─────────────────────────────────────────── */}
        <div className="mb-14">

          {/* Breadcrumb */}
          <div
            className="flex items-center gap-2 text-sm tracking-[0.4em] uppercase text-third font-semibold mb-6"
            style={{ fontFamily: "var(--font-primary)" }}
          >
            <Link
              href="/avx-help-center"
              style={{ color: "rgba(190,190,190,0.25)" }}
              className="transition-colors duration-200"
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(190,190,190,0.55)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(190,190,190,0.25)")}
            >
              Help Center
            </Link>
            <ChevronRight size={8} style={{ color: "rgba(190,190,190,0.15)" }} />
            <span style={{ color: "#bebebe" }}>AVX Inspection</span>
          </div>

          {/* Title row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl"
                  style={{ backgroundColor: "rgba(0,123,255,0.1)", color: "#007bff" }}
                >
                  <Shield size={18} />
                </div>
                <span
                  className="text-[10px] uppercase tracking-[0.35em] font-bold"
                  style={{ color: "rgba(190,190,190,0.35)", fontFamily: "var(--font-primary)" }}
                >
                  FAQ Category
                </span>
              </div>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-none tracking-tight"
                style={{ fontFamily: "var(--font-primary)", color: "#fffef7" }}
              >
                AVX <span style={{ color: "#007bff" }}>Inspection</span>
              </h1>
              <p
                className="mt-3 text-sm leading-relaxed max-w-md"
                style={{ color: "rgba(190,190,190,0.45)", fontFamily: "var(--font-secondary)" }}
              >
                Everything you need to know about our 200-point vehicle inspection
                process — from request to report.
              </p>
            </div>

            {/* Article count badge */}
            <div
              className="self-start sm:self-auto flex items-center gap-2 px-4 py-2.5 rounded-2xl border"
              style={{
                borderColor: "rgba(255,255,255,0.07)",
                backgroundColor: "rgba(255,255,255,0.03)",
              }}
            >
              <span
                className="text-2xl font-black leading-none"
                style={{ fontFamily: "var(--font-primary)", color: "#007bff" }}
              >
                {articles.length}
              </span>
              <span
                className="text-[10px] uppercase tracking-[0.25em] font-semibold leading-tight"
                style={{ color: "rgba(190,190,190,0.5)" }}
              >
                Articles
              </span>
            </div>
          </div>

          {/* Separator */}
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,123,255,0.3) 0%, rgba(255,255,255,0.06) 40%, transparent 100%)",
            }}
          />
        </div>

        {/* ── SEARCH ─────────────────────────────────────────── */}
        <div className="mb-10 relative">
          <Search
            size={14}
            className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ color: "rgba(190,190,190,0.3)" }}
          />
          <input
            type="text"
            placeholder="Search inspection articles…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-300"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#fffef7",
              fontFamily: "var(--font-secondary)",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "rgba(0,123,255,0.35)";
              e.target.style.backgroundColor = "rgba(0,123,255,0.04)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "rgba(255,255,255,0.08)";
              e.target.style.backgroundColor = "rgba(255,255,255,0.04)";
            }}
          />
        </div>

        {/* ── ARTICLE LIST ───────────────────────────────────── */}
        <div className="flex flex-col mb-14">
          {filtered.length === 0 && (
            <p
              className="text-sm py-12 text-center"
              style={{ color: "rgba(190,190,190,0.35)" }}
            >
              No articles match your search.
            </p>
          )}

          {filtered.map((article, i) => {
            const tc = tagStyles[article.tag] || {
              bg: "rgba(190,190,190,0.08)",
              text: "#bebebe",
            };
            const isHovered = hoveredId === article.id;

            return (
              <Link
                key={article.id}
                href={`/avx-help-center/${article.slug}`}
                onMouseEnter={() => setHoveredId(article.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative flex items-start gap-4 sm:gap-6 py-5 sm:py-6"
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.055)",
                  borderTop: i === 0 ? "1px solid rgba(255,255,255,0.055)" : "none",
                  paddingLeft: isHovered ? "12px" : "0px",
                  transition: "padding-left 0.3s cubic-bezier(0.22,1,0.36,1)",
                  textDecoration: "none",
                }}
              >
                {/* Number */}
                <span
                  className="shrink-0 font-black tabular-nums leading-none"
                  style={{
                    fontFamily: "var(--font-primary)",
                    fontSize: "11px",
                    color: isHovered ? "rgba(0,123,255,0.5)" : "rgba(190,190,190,0.2)",
                    transition: "color 0.3s ease",
                    minWidth: "28px",
                    paddingTop: "4px",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span
                      className="text-[9px] uppercase tracking-[0.25em] font-bold px-2 py-0.5 rounded-md"
                      style={{
                        backgroundColor: tc.bg,
                        color: tc.text,
                        fontFamily: "var(--font-primary)",
                      }}
                    >
                      {article.tag}
                    </span>
                    <span
                      className="text-[9px] uppercase tracking-widest"
                      style={{ color: "rgba(190,190,190,0.25)" }}
                    >
                      {article.readTime} read
                    </span>
                  </div>

                  <h3
                    className="font-semibold text-sm sm:text-base leading-snug mb-1.5 transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-secondary)",
                      color: isHovered ? "#fffef7" : "rgba(255,254,247,0.75)",
                    }}
                  >
                    {article.question}
                  </h3>

                  <p
                    className="text-[12px] sm:text-[13px] leading-relaxed line-clamp-2"
                    style={{
                      color: "rgba(190,190,190,0.4)",
                      maxHeight: isHovered ? "60px" : "0px",
                      overflow: "hidden",
                      opacity: isHovered ? 1 : 0,
                      transition: "max-height 0.35s ease, opacity 0.3s ease",
                    }}
                  >
                    {article.excerpt}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className="shrink-0 flex items-center justify-center w-8 h-8 rounded-xl transition-all duration-300"
                  style={{
                    backgroundColor: isHovered
                      ? "rgba(0,123,255,0.12)"
                      : "rgba(255,255,255,0.03)",
                    color: isHovered ? "#007bff" : "rgba(190,190,190,0.2)",
                    marginTop: "2px",
                  }}
                >
                  <ArrowUpRight
                    size={14}
                    style={{
                      transform: isHovered ? "translate(1px,-1px)" : "translate(0,0)",
                      transition: "transform 0.2s ease",
                    }}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* ── CONTACT SUPPORT CTA ────────────────────────────── */}
        <div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden border p-8 sm:p-10 lg:p-12"
          style={{
            borderColor: "rgba(0,123,255,0.15)",
            backgroundColor: "rgba(0,123,255,0.04)",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(0,123,255,0.45), transparent)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(0,123,255,0.06) 0%, transparent 70%)",
            }}
          />

          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div
                className="flex items-center justify-center w-12 h-12 rounded-2xl shrink-0"
                style={{ backgroundColor: "rgba(0,123,255,0.12)", color: "#007bff" }}
              >
                <MessageSquare size={20} />
              </div>
              <div>
                <h3
                  className="font-black uppercase text-lg sm:text-xl leading-tight mb-1.5"
                  style={{ fontFamily: "var(--font-primary)", color: "#fffef7" }}
                >
                  Still have questions?
                </h3>
                <p
                  className="text-sm leading-relaxed max-w-sm"
                  style={{ color: "rgba(190,190,190,0.5)" }}
                >
                  Our inspection support team is available to walk you through
                  any step of the process.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 self-start sm:self-auto shrink-0 w-full md:w-auto">
              <button
                className="flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl text-[11px] uppercase tracking-[0.18em] font-bold transition-all duration-300"
                style={{
                  backgroundColor: "#007bff",
                  color: "#fffef7",
                  fontFamily: "var(--font-primary)",
                  boxShadow: "0 8px 30px rgba(0,123,255,0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,123,255,0.35)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,123,255,0.2)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Contact Support
                <ArrowUpRight size={13} />
              </button>

              <button
                className="flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl text-[11px] uppercase tracking-[0.18em] font-bold transition-all duration-300"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  color: "rgba(190,190,190,0.6)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  fontFamily: "var(--font-primary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.color = "#fffef7";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.color = "rgba(190,190,190,0.6)";
                }}
              >
                Browse All FAQs
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}