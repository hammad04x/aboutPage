"use client";

import { motion } from "framer-motion";
import {
  FiUserCheck,
  FiStar,
  FiActivity,
  FiMessageSquare,
} from "react-icons/fi";

const pillars = [
  {
    icon: <FiUserCheck />,
    title: "Verified Consultant Identities",
    desc: "Every consultant goes through KYC and business verification before accessing the marketplace.",
    color: "#3b82f6",
  },
  {
    icon: <FiStar />,
    title: "Review Transparency",
    desc: "Buyer reviews are authenticated and publicly visible with no hidden ratings.",
    color: "#f59e0b",
  },
  {
    icon: <FiActivity />,
    title: "Performance Signals",
    desc: "Response rate, listing accuracy, and inquiry handling are tracked and surfaced to buyers.",
    color: "#10b981",
  },
  {
    icon: <FiMessageSquare />,
    title: "Recorded Interactions",
    desc: "Every buyer interaction is logged through AVX ensuring accountability across the platform.",
    color: "#a78bfa",
  },
];

export default function AccountabilityTrust() {
  return (
    <section className="relative py-10 md:py-10 overflow-hidden ">

      <div className="relative max-w-7xl mx-auto px-5 md:px-6">

        {/* HEADER */}
        <div className="max-w-xl mb-10">
          <p className="text-[11px] tracking-[0.35em] uppercase text-fourth mb-3">
            Accountability & Trust
          </p>

          <h2 className="text-[32px] sm:text-[42px] font-semibold leading-[1.15] text-white">
            Trust is built into
            <span className="text-fourth"> every interaction.</span>
          </h2>

          <p className="text-gray-400 text-[14px] mt-4 leading-relaxed">
            Identity, reviews, performance, and communication signals are verified and visible across AVX.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">

          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-[#1a1f2b] bg-[#0b0e13] p-7 md:p-8 hover:shadow-[0_10px_40px_-10px_rgba(230,230,230,0.15)] hover:-translate-y-1 transition-all duration-300"
            >

              {/* subtle hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at top left, ${p.color}15, transparent 60%)`,
                }}
              />

              <div className="relative">

                {/* ICON */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-lg"
                  style={{
                    background: `${p.color}18`,
                    color: p.color,
                  }}
                >
                  {p.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-[16px] font-semibold text-white mb-2">
                  {p.title}
                </h3>

                {/* DESC */}
                <p className="text-[14px] text-gray-400 leading-relaxed max-w-sm">
                  {p.desc}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        {/* <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#1a1f2b] rounded-xl px-6 py-4 bg-[#0b0e13]">

          <p className="text-[13px] text-gray-400 text-center sm:text-left">
            Trust isn’t a feature — it’s the foundation AVX is built on.
          </p>

          <a
            href="/consultant/register"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition"
          >
            Join as Verified Consultant
          </a>

        </div> */}

      </div>
    </section>
  );
}
