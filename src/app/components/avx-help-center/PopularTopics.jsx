"use client";

import { useState } from "react";
import {
    Car,
    Tag,
    ClipboardCheck,
    UserCheck,
    CreditCard,
    Megaphone,
    KeyRound,
    ShieldAlert,
    ArrowUpRight,
} from "lucide-react";

const topics = [
    {
        id: "buying",
        label: "Buying a Vehicle",
        icon: Car,
        index: "01",
        desc: "Find, compare and secure your next vehicle with confidence.",
        accent: false,
    },
    {
        id: "selling",
        label: "Selling Your Vehicle",
        icon: Tag,
        index: "02",
        desc: "List your vehicle, set the right price and reach verified buyers.",
        accent: false,
    },
    {
        id: "inspection",
        label: "AVX Inspection",
        icon: ClipboardCheck,
        index: "03",
        desc: "Understand our 200-point inspection layer and what it covers.",
        accent: true,
    },
    {
        id: "consultant",
        label: "Consultant Program",
        icon: UserCheck,
        index: "04",
        desc: "Learn how to join, get verified and build your storefront.",
        accent: false,
    },
    {
        id: "billing",
        label: "Subscription & Billing",
        icon: CreditCard,
        index: "05",
        desc: "Manage your plan, invoices and payment methods.",
        accent: false,
    },
    {
        id: "ppc",
        label: "PPC & Boost Campaigns",
        icon: Megaphone,
        index: "06",
        desc: "Amplify your listings with targeted boost and PPC tools.",
        accent: true,
    },
    {
        id: "account",
        label: "Account & Login",
        icon: KeyRound,
        index: "07",
        desc: "Account setup, security settings and login troubleshooting.",
        accent: false,
    },
    {
        id: "disputes",
        label: "Disputes & Reporting",
        icon: ShieldAlert,
        index: "08",
        desc: "Report issues, raise disputes and understand resolution flows.",
        accent: false,
    },
];

export default function PopularTopicsGrid() {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="relative py-16 px-4 sm:px-6 overflow-hidden font-secondary text-primary">

          

            <div className="max-w-7xl mx-auto relative">

                {/* ── HEADER ── */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
                    <div>
                        <p className="text-sm tracking-[0.4em] uppercase text-third font-semibold mb-1">
                            Help Center
                        </p>
                        <h2 className="font-primary text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-none text-primary">
                            Popular{" "}
                            <span
                                className="text-fourth"
                            >
                                Topics.
                            </span>
                        </h2>
                    </div>

                    <p className="text-third/60 text-sm max-w-xs leading-relaxed">
                        Browse the most visited help categories or search for something specific.
                    </p>
                </div>

                {/* ── GRID ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary/5 rounded-2xl overflow-hidden border border-primary/[0.07]">
                    {topics.map((topic, i) => {
                        const Icon = topic.icon;
                        const isHovered = hovered === topic.id;
                        const isBlue = topic.accent;

                        return (
                            <button
                                key={topic.id}
                                onMouseEnter={() => setHovered(topic.id)}
                                onMouseLeave={() => setHovered(null)}
                                className="group relative flex flex-col justify-between p-7 sm:p-8 text-left transition-all duration-300 bg-secondary overflow-hidden"
                                style={{
                                    backgroundColor: isHovered
                                        ? isBlue
                                            ? "rgba(0,123,255,0.07)"
                                            : "rgba(255,254,247,0.03)"
                                        : "#121212",
                                    transition: "background-color 0.3s ease",
                                    minHeight: "200px",
                                }}
                                aria-label={`Go to ${topic.label}`}
                            >
                                {/* Top accent line on hover */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-px transition-opacity duration-300"
                                    style={{
                                        background: isBlue
                                            ? "linear-gradient(90deg, transparent, rgba(0,123,255,0.7), transparent)"
                                            : "linear-gradient(90deg, transparent, rgba(255,254,247,0.25), transparent)",
                                        opacity: isHovered ? 1 : 0,
                                    }}
                                />

                                {/* Ghost index number */}
                                <div
                                    className="absolute bottom-4 right-5 font-primary font-black select-none leading-none pointer-events-none transition-all duration-300"
                                    style={{
                                        fontSize: "clamp(3rem, 6vw, 5rem)",
                                        color: isHovered
                                            ? isBlue
                                                ? "rgba(0,123,255,0.12)"
                                                : "rgba(255,254,247,0.07)"
                                            : isBlue
                                                ? "rgba(0,123,255,0.05)"
                                                : "rgba(255,254,247,0.03)",
                                    }}
                                >
                                    {topic.index}
                                </div>

                                {/* Icon + index row */}
                                <div className="flex items-start justify-between mb-5">
                                    <div
                                        className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300"
                                        style={{
                                            backgroundColor: isHovered
                                                ? isBlue
                                                    ? "rgba(0,123,255,0.15)"
                                                    : "rgba(255,255,255,0.08)"
                                                : isBlue
                                                    ? "rgba(0,123,255,0.08)"
                                                    : "rgba(255,255,255,0.04)",
                                            color: isHovered
                                                ? isBlue
                                                    ? "rgba(0,123,255,0.9)"
                                                    : "rgba(255,254,247,0.7)"
                                                : isBlue
                                                    ? "rgba(0,123,255,0.55)"
                                                    : "rgba(190,190,190,0.35)",
                                        }}
                                    >
                                        <Icon size={16} />
                                    </div>

                                    {/* Arrow — appears on hover */}
                                    <div
                                        className="flex items-center justify-center w-7 h-7 rounded-lg transition-all duration-300"
                                        style={{
                                            opacity: isHovered ? 1 : 0,
                                            transform: isHovered ? "translate(0,0)" : "translate(4px,-4px)",
                                            backgroundColor: isBlue
                                                ? "rgba(0,123,255,0.15)"
                                                : "rgba(255,255,255,0.06)",
                                            color: isBlue ? "#007bff" : "rgba(255,254,247,0.5)",
                                        }}
                                    >
                                        <ArrowUpRight size={12} />
                                    </div>
                                </div>

                                {/* Label */}
                                <div className="relative z-10">
                                    <p
                                        className="font-primary font-black uppercase text-[13px] sm:text-[14px] tracking-wide leading-snug mb-2 transition-colors duration-300"
                                        style={{
                                            color: isHovered
                                                ? isBlue
                                                    ? "#007bff"
                                                    : "#fffef7"
                                                : "rgba(255,254,247,0.75)",
                                        }}
                                    >
                                        {topic.label}
                                    </p>
                                    <p
                                        className={`text-[11px] sm:text-[14px] leading-relaxed transition-colors duration-300 ${isHovered ? "text-third/80" : "text-third/60"
                                            }`}
                                    >
                                        {topic.desc}
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* ── BOTTOM BAR ── */}
                <div
                    className="flex items-center justify-between mt-6 px-1"
                >
                    <div className="flex items-center gap-2">
                        {topics.map((_, i) => (
                            <div
                                key={i}
                                className="rounded-full transition-all duration-300"
                                style={{
                                    height: "3px",
                                    width: hovered === topics[i].id ? "20px" : "6px",
                                    backgroundColor:
                                        hovered === topics[i].id
                                            ? topics[i].accent
                                                ? "#007bff"
                                                : "rgba(255,255,255,0.4)"
                                            : "rgba(255,255,255,0.07)",
                                }}
                            />
                        ))}
                    </div>

                    <p className="text-[10px] uppercase tracking-[0.3em] text-third/25">
                        {topics.length} topics
                    </p>
                </div>
            </div>

            <style>{`
        .bg-secondary { background-color: #121212; }
      `}</style>
        </section>
    );
}