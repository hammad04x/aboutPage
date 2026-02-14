"use client"

import { useState } from "react"

export default function InteractionSection() {
  const [activeRole, setActiveRole] = useState(null)
  // activeRole: "buyer" | "consultant" | null

  return (
    <section className="relative bg-secondary py-20 overflow-hidden">

      {/* RECORDING STATUS */}
      <div className="absolute top-10 right-14 flex items-center gap-2 text-xs font-mono text-red-500">
        <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
        RECORDING ENABLED
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-14">
          <p className="text-sm tracking-[0.4em] uppercase text-third font-semibold">
            Buyer & Consultant Interaction
          </p>

          <h2 className="mt-6 text-5xl font-medium leading-tight text-white">
            Direct Communication
            <span className="block text-[var(--color-fourth)]">
              Platform Accountability
            </span>
          </h2>

          <p className="mt-6 text-lg text-third leading-relaxed">
            Buyers and consultants communicate directly while AVX observes,
            records, and enforces accountability without intervening.
          </p>
        </div>

        {/* CONVERSATION BAR */}
        <div className="mb-10 rounded-2xl border border-neutral-800 bg-[#0e0e0e] px-6 py-4 flex items-center gap-4">

          {/* BUYER PILL */}
          <span
            onMouseEnter={() => setActiveRole("buyer")}
            onMouseLeave={() => setActiveRole(null)}
            className={`
              px-4 py-1.5 rounded-full text-sm font-semibold cursor-pointer transition
              ${activeRole === "buyer"
                ? "bg-white text-secondary"
                : "bg-neutral-800 text-white"
              }
            `}
          >
            Buyer
          </span>

          <span className="text-third text-lg">↔</span>

          {/* CONSULTANT PILL */}
          <span
            onMouseEnter={() => setActiveRole("consultant")}
            onMouseLeave={() => setActiveRole(null)}
            className={`
              px-4 py-1.5 rounded-full text-sm font-semibold cursor-pointer transition
              ${activeRole === "consultant"
                ? "bg-emerald-400 text-black"
                : "bg-emerald-500/15 text-emerald-400"
              }
            `}
          >
            Consultant
          </span>

          <span className="ml-auto text-xs font-mono text-third">
            SESSION · AVX-INT-0921
          </span>
        </div>

        {/* CHAT THREAD — CENTERED */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl space-y-3">

            {/* BUYER MESSAGE */}
            <div className="flex justify-start">
              <div
                className={`
                  max-w-[70%]
                  rounded-2xl rounded-bl-md
                  px-5 py-4
                  border transition
                  ${activeRole === "buyer"
                    ? "bg-[#262626] border-white"
                    : "bg-[#1c1c1c] border-neutral-700"
                  }
                `}
              >
                <div className="mb-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold bg-neutral-700 text-white">
                    BUYER
                  </span>
                </div>


                <p className="text-white leading-relaxed">
                  Requesting inspection clarity and confirmation of odometer consistency.
                </p>

                <div className="mt-2 text-right text-xs text-third">
                  11:31 AM
                </div>
              </div>
            </div>

            {/* CONSULTANT MESSAGE */}
            <div className="flex justify-end">
              <div
                className={`
                  max-w-[70%]
                  rounded-2xl rounded-br-md
                  px-5 py-4
                  border transition
                  ${activeRole === "consultant"
                    ? "bg-[#143c30] border-emerald-400"
                    : "bg-[#10271f] border-emerald-500/40"
                  }
                `}
              >
                <div className="mb-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold bg-emerald-500/20 text-emerald-400">
                    CONSULTANT
                  </span>
                </div>


                <p className="text-emerald-200 leading-relaxed">
                  Inspection summary is available. Odometer verification passed within
                  platform checks.
                </p>

                <div className="mt-2 text-right text-xs text-emerald-300/70">
                  11:31 AM
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* SYSTEM LOG */}
        <div className="mt-6 flex justify-center">
          <div className="
            flex items-center gap-3
            px-6 py-3
            text-xs font-mono
            text-blue-400
            border border-blue-500/30
            bg-blue-500/10
            rounded-xl
          ">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Inspection request logged and linked to vehicle record
          </div>
        </div>

        {/* FOOTNOTE */}
        <div className="mt-16 max-w-2xl">
          <p className="text-sm text-third leading-relaxed">
            AVX does not participate in conversations.
            The platform exists to ensure traceability, auditability, and trust.
          </p>
        </div>

      </div>
    </section>
  )
}
