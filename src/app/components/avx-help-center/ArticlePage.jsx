// app/avx-help-center/[slug]/page.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Article Detail Page
// Route: /avx-help-center/[slug]
//
// Usage in category page (link to this page):
//   import Link from "next/link";
//   <Link href={`/avx-help-center/${article.slug}`}>…</Link>
// ─────────────────────────────────────────────────────────────────────────────

"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Calendar,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  ArrowUpRight,
  CheckCircle,
  ChevronRight,
  Shield,
} from "lucide-react";
import { articles, tagStyles } from "@/app/components/avx-help-center/Articles.data"; // adjust path as needed

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Renders a content string with **bold** markers into React nodes */
function RenderContent({ content }) {
  const blocks = content.split("\n\n").filter(Boolean);

  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        // Standalone bold line → section heading
        if (/^\*\*[^*]+\*\*$/.test(block.trim())) {
          return (
            <h3
              key={i}
              className="text-[11px] uppercase tracking-[0.25em] font-bold pt-4"
              style={{ fontFamily: "var(--font-primary)", color: "#fffef7" }}
            >
              {block.replace(/\*\*/g, "")}
            </h3>
          );
        }

        // Inline bold within paragraph
        const parts = block.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p
            key={i}
            className="text-sm sm:text-[15px] leading-[1.9]"
            style={{ color: "rgba(190,190,190,0.62)", fontFamily: "var(--font-secondary)" }}
          >
            {parts.map((part, j) =>
              part.startsWith("**") ? (
                <span key={j} style={{ color: "#fffef7", fontWeight: 600 }}>
                  {part.replace(/\*\*/g, "")}
                </span>
              ) : (
                part
              )
            )}
          </p>
        );
      })}
    </div>
  );
}

// ─── Support Flow ─────────────────────────────────────────────────────────────

function SupportFlow({ onClose }) {
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState("");

  if (sent) {
    return (
      <div
        className="rounded-2xl p-6 flex items-center gap-4"
        style={{
          backgroundColor: "rgba(0,123,255,0.04)",
          border: "1px solid rgba(0,123,255,0.15)",
        }}
      >
        <div
          className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
          style={{ backgroundColor: "rgba(0,123,255,0.12)", color: "#007bff" }}
        >
          <CheckCircle size={16} />
        </div>
        <div>
          <p
            className="text-sm font-bold"
            style={{ fontFamily: "var(--font-primary)", color: "#fffef7" }}
          >
            Message received
          </p>
          <p className="text-[11px] mt-0.5" style={{ color: "rgba(190,190,190,0.4)" }}>
            Our support team will follow up with you shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl p-6"
      style={{
        backgroundColor: "rgba(202,11,0,0.03)",
        border: "1px solid rgba(202,11,0,0.14)",
      }}
    >
      <p
        className="text-[10px] uppercase tracking-[0.3em] font-bold mb-1"
        style={{ fontFamily: "var(--font-primary)", color: "rgba(202,11,0,0.75)" }}
      >
        Still Need Help?
      </p>
      <p className="text-[12px] mb-4" style={{ color: "rgba(190,190,190,0.4)" }}>
        Tell us what was unclear and our team will respond directly.
      </p>

      <textarea
        rows={3}
        placeholder="Describe what you need help with…"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full text-sm resize-none rounded-xl px-4 py-3 mb-3 outline-none transition-all duration-200"
        style={{
          backgroundColor: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          color: "#fffef7",
          fontFamily: "var(--font-secondary)",
        }}
        onFocus={(e) => (e.target.style.borderColor = "rgba(202,11,0,0.3)")}
        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
      />

      <div className="flex items-center gap-2">
        <button
          onClick={() => message.trim() && setSent(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[11px] uppercase tracking-[0.15em] font-bold transition-all duration-200"
          style={{
            backgroundColor: "#007bff",
            color: "#fffef7",
            fontFamily: "var(--font-primary)",
            boxShadow: "0 6px 20px rgba(0,123,255,0.2)",
            opacity: message.trim() ? 1 : 0.5,
            cursor: message.trim() ? "pointer" : "not-allowed",
          }}
          onMouseEnter={(e) => {
            if (message.trim())
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,123,255,0.35)";
          }}
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,123,255,0.2)")
          }
        >
          <MessageSquare size={11} />
          Send Message
        </button>

        <button
          onClick={onClose}
          className="px-4 py-2.5 rounded-xl text-[11px] uppercase tracking-[0.15em] font-bold transition-all duration-200"
          style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "rgba(190,190,190,0.5)",
            fontFamily: "var(--font-primary)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            e.currentTarget.style.color = "#fffef7";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
            e.currentTarget.style.color = "rgba(190,190,190,0.5)";
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ArticleDetailPage() {
  const { slug } = useParams();
  const router = useRouter();

  const article = articles.find((a) => a.slug === slug);
  const articleIndex = articles.findIndex((a) => a.slug === slug);
  const prevArticle = articleIndex > 0 ? articles[articleIndex - 1] : null;
  const nextArticle = articleIndex < articles.length - 1 ? articles[articleIndex + 1] : null;

  const [feedback, setFeedback] = useState(null); // null | "yes" | "no"
  const [supportOpen, setSupportOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // slight delay for entrance animation
    const t = setTimeout(() => setMounted(true), 30);
    return () => clearTimeout(t);
  }, []);

  // 404 fallback
  if (!article) {
    return (
      <section className="relative min-h-5vh py-16 px-4 sm:px-6 overflow-hidden flex items-center justify-center">
        <div className="text-center">
          <p
            className="text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-primary)", color: "rgba(190,190,190,0.15)" }}
          >
            404
          </p>
          <p className="text-sm mb-6" style={{ color: "rgba(190,190,190,0.4)" }}>
            Article not found.
          </p>
          <Link
            href="/avx-help-center"
            className="text-[11px] uppercase tracking-[0.25em] font-bold"
            style={{ color: "#007bff", fontFamily: "var(--font-primary)" }}
          >
            ← Back to AVX Help Center
          </Link>
        </div>
      </section>
    );
  }

  const tc = tagStyles[article.tag] || { bg: "rgba(190,190,190,0.08)", text: "#bebebe" };

  const handleYes = () => {
    setFeedback("yes");
    setSupportOpen(false);
  };

  const handleNo = () => {
    setFeedback("no");
    setSupportOpen(true);
  };

  return (
    <section className="relative min-h-screen py-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          className="max-w-2xl mx-auto"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.45s ease, transform 0.45s ease",
          }}
        >

          {/* ── BREADCRUMB ──────────────────────────── */}
          <div
            className="flex items-center justify-between  gap-2 text-[12px] uppercase tracking-[0.35em] font-bold mb-10"

          >
            <>
              <Link
                href="/avx-help-center"
                className="transition-colors duration-200 text-primary/60 flex items-center gap-1 "
              >
                <ArrowLeft size={14} className="text-primary/60" />
                Back
              </Link>
            </>
            <>
              <Link
                href="/inspection-process"
                className="transition-colors duration-200 text-primary/60 flex items-center gap-1 "
               
              >
                <Shield size={13} className="text-primary/60"/>
                Inspection Process
              </Link>
            </>
            {/* <Link
              href="/inspection-process"
              className="flex items-center gap-1.5 transition-colors duration-200"
              style={{ color: "rgba(190,190,190,0.4)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#bebebe")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(190,190,190,0.4)")}
            >
              <Shield size={9} />
            Inspection Process
            </Link>
            <ChevronRight size={8} style={{ color: "rgba(190,190,190,0.15)" }} /> */}
            {/* <span style={{ color: "rgba(190,190,190,0.55)" }} className="truncate max-w-[140px]">
              {article.question}
            </span> */}
          </div>

          {/* ── META ────────────────────────────────── */}
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-[9px] uppercase tracking-[0.3em] font-bold px-2.5 py-1 rounded-lg"
              style={{
                backgroundColor: tc.bg,
                color: tc.text,
                fontFamily: "var(--font-primary)",
              }}
            >
              {article.tag}
            </span>
            <span
              className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest"
              style={{ color: "rgba(190,190,190,0.3)" }}
            >
              <Clock size={9} />
              {article.readTime} read
            </span>
          </div>

          {/* ── TITLE ───────────────────────────────── */}
          <h1
            className="text-2xl sm:text-3xl lg:text-[2.6rem] font-black uppercase leading-tight tracking-tight mb-5"
            style={{ fontFamily: "var(--font-primary)", color: "#fffef7" }}
          >
            {article.question}
          </h1>

          {/* ── LAST UPDATED ────────────────────────── */}
          <div
            className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] pb-8 mb-8"
            style={{
              color: "rgba(190,190,190,0.28)",
              borderBottom: "1px solid rgba(255,255,255,0.055)",
            }}
          >
            <Calendar size={9} />
            Last Updated: {article.lastUpdated}
          </div>

          {/* ── CONTENT ─────────────────────────────── */}
          <div className="mb-12">
            <RenderContent content={article.content} />
          </div>

          {/* ── DIVIDER ─────────────────────────────── */}
          <div
            className="h-px w-full mb-8"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,123,255,0.2) 0%, rgba(255,255,255,0.06) 50%, transparent 100%)",
            }}
          />

          {/* ── HELPFUL? ────────────────────────────── */}
          <div
            className="rounded-2xl p-6 mb-5"
            style={{
              backgroundColor: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {feedback === "yes" ? (
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-xl shrink-0"
                  style={{ backgroundColor: "rgba(0,123,255,0.12)", color: "#007bff" }}
                >
                  <CheckCircle size={16} />
                </div>
                <div>
                  <p
                    className="text-sm font-bold"
                    style={{ fontFamily: "var(--font-primary)", color: "#fffef7" }}
                  >
                    Thanks for your feedback
                  </p>
                  <p className="text-[11px] mt-0.5" style={{ color: "rgba(190,190,190,0.4)" }}>
                    Glad this article was helpful.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <p
                  className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4"
                  style={{
                    fontFamily: "var(--font-primary)",
                    color: "rgba(190,190,190,0.35)",
                  }}
                >
                  Was this helpful?
                </p>
                <div className="flex items-center gap-3">
                  {/* YES */}
                  <button
                    onClick={handleYes}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[11px] uppercase tracking-[0.15em] font-bold transition-all duration-200"
                    style={{
                      backgroundColor: "rgba(0,123,255,0.08)",
                      border: "1px solid rgba(0,123,255,0.2)",
                      color: "#007bff",
                      fontFamily: "var(--font-primary)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "rgba(0,123,255,0.15)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "rgba(0,123,255,0.08)")
                    }
                  >
                    <ThumbsUp size={12} />
                    Yes
                  </button>

                  {/* NO */}
                  <button
                    onClick={handleNo}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[11px] uppercase tracking-[0.15em] font-bold transition-all duration-200"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: `1px solid ${feedback === "no" ? "rgba(202,11,0,0.3)" : "rgba(255,255,255,0.08)"}`,
                      color: feedback === "no" ? "#CA0B00" : "rgba(190,190,190,0.5)",
                      fontFamily: "var(--font-primary)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(202,11,0,0.25)";
                      e.currentTarget.style.color = "#CA0B00";
                    }}
                    onMouseLeave={(e) => {
                      if (feedback !== "no") {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                        e.currentTarget.style.color = "rgba(190,190,190,0.5)";
                      }
                    }}
                  >
                    <ThumbsDown size={12} />
                    No
                  </button>
                </div>
              </>
            )}
          </div>

          {/* ── SUPPORT FLOW (opens on No) ───────────── */}
          <div
            style={{
              maxHeight: supportOpen ? "400px" : "0px",
              overflow: "hidden",
              opacity: supportOpen ? 1 : 0,
              transition: "max-height 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease",
              marginBottom: supportOpen ? "20px" : "0px",
            }}
          >
            <SupportFlow onClose={() => setSupportOpen(false)} />
          </div>

          {/* ── DIVIDER ─────────────────────────────── */}
          <div
            className="h-px w-full mb-8"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.055) 0%, transparent 100%)",
            }}
          />

          {/* ── STILL NEED HELP CTA ─────────────────── */}
          <div
            className="relative rounded-2xl overflow-hidden border p-6 mb-10"
            style={{
              borderColor: "rgba(0,123,255,0.12)",
              backgroundColor: "rgba(0,123,255,0.03)",
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(0,123,255,0.4), transparent)",
              }}
            />
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
                  style={{ backgroundColor: "rgba(0,123,255,0.1)", color: "#007bff" }}
                >
                  <MessageSquare size={16} />
                </div>
                <div>
                  <p
                    className="text-sm font-black uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-primary)", color: "#fffef7" }}
                  >
                    Still Need Help?
                  </p>
                  <p
                    className="text-[11px] mt-0.5"
                    style={{ color: "rgba(190,190,190,0.4)" }}
                  >
                    Our team is available to assist you.
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setFeedback("no");
                  setSupportOpen(true);
                  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[11px] uppercase tracking-[0.15em] font-bold transition-all duration-200 shrink-0"
                style={{
                  backgroundColor: "#007bff",
                  color: "#fffef7",
                  fontFamily: "var(--font-primary)",
                  boxShadow: "0 6px 20px rgba(0,123,255,0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,123,255,0.35)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,123,255,0.2)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Contact Support
                <ArrowUpRight size={11} />
              </button>
            </div>
          </div>

          {/* ── PREV / NEXT ─────────────────────────── */}
          {(prevArticle || nextArticle) && (
            <div className="grid grid-cols-2 gap-3">
              {/* PREV */}
              <div>
                {prevArticle ? (
                  <Link
                    href={`/avx-help-center/${prevArticle.slug}`}
                    className="group flex flex-col gap-1.5 p-4 rounded-xl transition-all duration-200 h-full"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
                    }}
                  >
                    <span
                      className="text-[9px] uppercase tracking-[0.25em] font-bold flex items-center gap-1"
                      style={{ color: "rgba(190,190,190,0.3)", fontFamily: "var(--font-primary)" }}
                    >
                      <ArrowLeft size={8} />
                      Previous
                    </span>
                    <span
                      className="text-[12px] font-semibold leading-snug line-clamp-2"
                      style={{ color: "rgba(255,254,247,0.65)", fontFamily: "var(--font-secondary)" }}
                    >
                      {prevArticle.question}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
              </div>

              {/* NEXT */}
              <div>
                {nextArticle ? (
                  <Link
                    href={`/avx-help-center/${nextArticle.slug}`}
                    className="group flex flex-col gap-1.5 p-4 rounded-xl transition-all duration-200 text-right h-full"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
                    }}
                  >
                    <span
                      className="text-[9px] uppercase tracking-[0.25em] font-bold flex items-center justify-end gap-1"
                      style={{ color: "rgba(190,190,190,0.3)", fontFamily: "var(--font-primary)" }}
                    >
                      Next
                      <ArrowUpRight size={8} />
                    </span>
                    <span
                      className="text-[12px] font-semibold leading-snug line-clamp-2"
                      style={{ color: "rgba(255,254,247,0.65)", fontFamily: "var(--font-secondary)" }}
                    >
                      {nextArticle.question}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}