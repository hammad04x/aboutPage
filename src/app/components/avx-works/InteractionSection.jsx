"use client"

export default function InteractionSection() {
  return (
    <section className="relative py-28 bg-[var(--color-secondary)] overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT */}
          <div className="max-w-xl space-y-7">

            <p className="text-xs tracking-[0.28em] uppercase text-[var(--color-third)]">
              Buyer & Consultant Interaction
            </p>

            <h2 className="text-3xl md:text-[38px] font-bold leading-tight text-white">
              Direct Communication,
              <span className="block text-[var(--color-fourth)]">
                Platform Accountability
              </span>
            </h2>

            <p className="text-[15px] text-[var(--color-third)] leading-relaxed">
              Every interaction is structured and recorded — ensuring transparency,
              traceability, and performance accountability across the entire buying journey.
            </p>

            <p className="text-[15px] text-white/90">
              All interactions are recorded within the platform, creating a transparent activity trail.
            </p>

            {/* TRUST ROW */}
            <div className="flex gap-10 pt-5 border-t border-white/10">

              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Recorded</p>
                  <p className="text-xs text-[var(--color-third)]">Communication</p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Activity</p>
                  <p className="text-xs text-[var(--color-third)]">Trail Tracking</p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT — WHITE PANEL */}
          <div className="relative flex justify-center">

            <div className="
              w-full max-w-md
              rounded-2xl
              border border-white/20
              bg-white
              p-8
              shadow-[0_25px_80px_rgba(0,0,0,0.45)]
              relative
            ">

              {/* subtle gradient glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100/20 to-transparent pointer-events-none" />

              <p className="text-sm text-gray-500 mb-6 font-medium">
                Buyer Capabilities
              </p>

              <div className="grid grid-cols-2 gap-4">

                {[
                  "Chat with Consultants",
                  "Send Inquiries",
                  "Request Inspections",
                  "Compare Vehicles"
                ].map((item, i) => (
                  <div
                    key={i}
                    className="
                    p-4 rounded-xl
                    border border-gray-200
                    bg-gray-50
                    text-[14px] font-medium text-gray-800
                    hover:border-blue-400
                    hover:bg-blue-50
                    transition
                  ">
                    {item}
                  </div>
                ))}

              </div>

              {/* Activity */}
              <div className="mt-7 pt-6 border-t border-blue-400">

                <p className="text-xs text-gray-500 mb-4 font-medium">
                  Activity Recording Preview
                </p>

                <div className="space-y-3 text-[14px] text-gray-800">

                  <div className="flex justify-between">
                    <span>Inquiry Sent</span>
                    <span className="text-gray-400 text-xs">10:42 AM</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Consultant Replied</span>
                    <span className="text-gray-400 text-xs">10:48 AM</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Inspection Requested</span>
                    <span className="text-gray-400 text-xs">11:02 AM</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
