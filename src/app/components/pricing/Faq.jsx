"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Can I upgrade my subscription anytime?",
    a: "Yes — you can upgrade your plan at any time from your consultant dashboard. The new tier activates immediately and you'll only be charged the difference for the remaining billing period.",
  },
  {
    q: "Can I downgrade my subscription?",
    a: "Downgrading is not available mid-cycle. You can choose a lower tier at renewal — the change will take effect at the start of your next billing period.",
  },
  {
    q: "What happens if my subscription expires?",
    a: "If your subscription lapses, your storefront and all active listings will be hidden from the marketplace immediately. No data is lost — everything is restored as soon as you renew.",
  },
  {
    q: "Is the AVX inspection mandatory?",
    a: "No, inspection is optional. However, vehicles with verified inspection badges consistently rank higher in search and attract more serious buyers. We recommend it for competitive listings.",
  },
  {
    q: "Are transactions processed through AVX?",
    a: "No. AVX is a visibility and connection platform — all payments, negotiations, and transactions happen directly between you and the buyer. We never sit in the middle of your money.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative py-10 md:py-15 overflow-hidden">

      <div className="max-w-3xl mx-auto px-5 md:px-6">

        {/* HEADER */}
<motion.h2
  initial={{ opacity: 0, y: 18 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.55 }}
  viewport={{ once: true }}
  className="text-center text-[36px] sm:text-[48px] md:text-[58px] font-bold leading-tight mb-14 md:mb-16"
  style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
>
  Frequently asked{" "}
  <span className="bg-gradient-to-r from-fourth via-[#60a5fa] to-fourth bg-clip-text text-transparent">
    questions
  </span>
</motion.h2>

        {/* ACCORDION */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-primary border border-[#e5e1da] overflow-hidden "
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-6 px-7 py-6 text-left group hover:cursor-pointer"
                >
                  <span
                    className="text-[15px] md:text-[16px] font-medium text-[#1a1a18] leading-snug group-hover:text-[#3b3b38] transition-colors duration-150"
                  >
                    {faq.q}
                  </span>

                  {/* animated +/- sign */}
                  <div className="relative w-5 h-5 shrink-0 flex items-center justify-center">
                    {/* horizontal bar — always visible */}
                    <div className="absolute w-[14px] h-[1.5px] bg-[#1a1a18] rounded-full" />

                    {/* vertical bar — rotates out when open */}
                    <motion.div
                      animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="absolute w-[1.5px] h-[14px] bg-[#1a1a18] rounded-full"
                    />
                  </div>
                </button>

                {/* answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="px-7 pb-6 text-[14px] text-[#6b6b62] leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}