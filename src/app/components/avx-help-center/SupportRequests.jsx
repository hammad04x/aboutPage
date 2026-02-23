"use client";

import { useState } from "react";
import {
    ChevronRight,
    MessageSquare,
    ArrowUpRight,
    Filter,
    Search,
    Send,
} from "lucide-react";

const STATUS_CONFIG = {
    Open: {
        color: "text-primary/60",
        bg: "bg-primary/5",
        border: "border-primary/10",
        dot: "bg-primary/40",
    },
    "In Progress": {
        color: "text-fourth",
        bg: "bg-fourth/10",
        border: "border-fourth/20",
        dot: "bg-fourth",
    },
    Escalated: {
        color: "text-warning",
        bg: "bg-warning/10",
        border: "border-warning/20",
        dot: "bg-warning",
    },
    Resolved: {
        color: "text-third/70",
        bg: "bg-third/5",
        border: "border-third/10",
        dot: "bg-third/50",
    },
    Closed: {
        color: "text-third/40",
        bg: "bg-primary/3",
        border: "border-primary/5",
        dot: "bg-third/25",
    },
};

const FILTERS = ["All", "Open", "In Progress", "Escalated", "Resolved", "Closed"];

// Props:
//   tickets        — array of ticket objects (from parent)
//   setTickets     — setter to update tickets (for replies)
//   onNewRequest() — called when "New Request" button is clicked
export default function SupportRequests({ tickets = [], setTickets, onNewRequest }) {
    const [activeFilter, setActiveFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTicket, setActiveTicket] = useState(null);
    const [hoveredRow, setHoveredRow] = useState(null);
    const [replyText, setReplyText] = useState({});

    const filtered = tickets.filter((t) => {
        const matchFilter = activeFilter === "All" || t.status === activeFilter;
        const matchSearch =
            searchQuery === "" ||
            t.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            t.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
            t.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchFilter && matchSearch;
    });

    const counts = FILTERS.reduce((acc, f) => {
        acc[f] = f === "All" ? tickets.length : tickets.filter((t) => t.status === f).length;
        return acc;
    }, {});

    const handleSend = (ticketId) => {
        const text = (replyText[ticketId] || "").trim();
        if (!text) return;
        setTickets((prev) =>
            prev.map((t) =>
                t.id === ticketId
                    ? { ...t, updated: "Just now", messages: [...t.messages, { from: "You", time: "Just now", text, mine: true }] }
                    : t
            )
        );
        setReplyText((prev) => ({ ...prev, [ticketId]: "" }));
    };

    return (
        <section className="relative py-10 px-4 sm:px-6 overflow-hidden font-secondary text-primary  flex flex-col justify-center">

            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,123,255,0.06) 0%, transparent 70%)" }} />

            <div className="max-w-7xl mx-auto w-full relative">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
                    <div>
                        <p className="text-sm tracking-[0.4em] uppercase text-third font-semibold mb-1">Support Center</p>
                        <h2 className="font-primary text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-none text-primary">
                            My{" "}
                            <span className="text-fourth">Requests</span>
                        </h2>
                    </div>
                    <button
                        onClick={onNewRequest}
                        className="self-start sm:self-auto flex items-center gap-2 px-4 py-2.5 rounded-xl font-primary text-xs font-bold uppercase tracking-[0.18em] bg-fourth text-primary"
                        style={{ boxShadow: "0 8px 30px rgba(0,123,255,0.2)" }}
                    >
                        New Request <ArrowUpRight size={13} />
                    </button>
                </div>

                {/* Panel */}
                <div className="relative border rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-sm bg-black/10" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,254,247,0.15), transparent)" }} />

                    {/* Toolbar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 sm:px-8 py-5 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                        <div className="relative flex-1 max-w-xs">
                            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-third/30" />
                            <input
                                type="text"
                                placeholder="Search tickets..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-8 pr-4 py-2 rounded-xl text-sm bg-primary/4 border text-primary placeholder-third/30 outline-none focus:border-fourth/40 transition-colors duration-200"
                                style={{ borderColor: "rgba(255,255,255,0.07)" }}
                            />
                        </div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                            <Filter size={11} className="text-third/30 mr-1" />
                            {FILTERS.map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setActiveFilter(f)}
                                    className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-[0.15em] transition-all duration-200 ${activeFilter === f ? "bg-fourth/15 text-fourth border border-fourth/25" : "text-third/40 hover:text-third/70 border border-transparent"
                                        }`}
                                >
                                    {f}
                                    {counts[f] > 0 && (
                                        <span className={`ml-1.5 text-[10px] font-black ${activeFilter === f ? "text-fourth/70" : "text-third/25"}`}>{counts[f]}</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Table header */}
                    <div className="hidden sm:grid px-6 sm:px-8 py-3 border-b" style={{ gridTemplateColumns: "140px 1fr 150px 130px 44px", borderColor: "rgba(255,255,255,0.04)" }}>
                        {["Ticket ID", "Subject / Category", "Status", "Last Updated", ""].map((h, i) => (
                            <span key={i} className="text-[12px] uppercase tracking-[0.3em] font-bold text-third/30">{h}</span>
                        ))}
                    </div>

                    {/* Rows */}
                    <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                        {filtered.length === 0 && (
                            <div className="px-8 py-14 text-center text-third/30 text-sm">No tickets found.</div>
                        )}
                        {filtered.map((ticket) => {
                            const cfg = STATUS_CONFIG[ticket.status];
                            const isActive = activeTicket === ticket.id;
                            const isHovered = hoveredRow === ticket.id;

                            return (
                                <div key={ticket.id}>
                                    <div
                                        className="relative px-6 sm:px-8 py-4 sm:py-5 cursor-pointer transition-all duration-200"
                                        style={{ backgroundColor: isActive ? "rgba(0,123,255,0.05)" : isHovered ? "rgba(255,255,255,0.02)" : "transparent" }}
                                        onMouseEnter={() => setHoveredRow(ticket.id)}
                                        onMouseLeave={() => setHoveredRow(null)}
                                        onClick={() => setActiveTicket(isActive ? null : ticket.id)}
                                    >
                                        {isActive && <div className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full bg-fourth" />}

                                        {/* Mobile */}
                                        <div className="flex sm:hidden items-start justify-between gap-3">
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="font-primary text-xs font-black text-third/50 tracking-widest">{ticket.id}</span>
                                                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-xs uppercase tracking-[0.15em] font-bold border ${cfg.color} ${cfg.bg} ${cfg.border}`}>
                                                        <span className={`w-1 h-1 rounded-full ${cfg.dot}`} />
                                                        {ticket.status}
                                                    </span>
                                                </div>
                                                <p className="text-sm font-semibold text-primary/80 truncate mb-0.5">{ticket.subject}</p>
                                                <p className="text-xs text-third/40">{ticket.category} · {ticket.updated}</p>
                                            </div>
                                            <ChevronRight size={14} className={`text-third/30 mt-1 transition-transform duration-200 ${isActive ? "rotate-90 text-fourth/60" : ""}`} />
                                        </div>

                                        {/* Desktop */}
                                        <div className="hidden sm:grid items-center gap-4" style={{ gridTemplateColumns: "140px 1fr 150px 130px 44px" }}>
                                            <span className="font-primary text-xs font-black text-third/50 tracking-widest">{ticket.id}</span>
                                            <div className="min-w-0">
                                                <p className="text-sm font-semibold text-primary/80 truncate">{ticket.subject}</p>
                                                <p className="text-xs text-third/35 mt-0.5 uppercase tracking-widest">{ticket.category}</p>
                                            </div>
                                            <div>
                                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs uppercase tracking-[0.15em] font-bold border ${cfg.color} ${cfg.bg} ${cfg.border}`}>
                                                    <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot} ${ticket.status === "In Progress" ? "animate-pulse" : ""}`} />
                                                    {ticket.status}
                                                </span>
                                            </div>
                                            <span className="text-xs text-third/35">{ticket.updated}</span>
                                            <div className="flex justify-end">
                                                <ChevronRight size={14} className={`text-third/25 transition-all duration-200 ${isActive ? "rotate-90 text-fourth/60" : isHovered ? "text-third/50 translate-x-0.5" : ""}`} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Thread */}
                                    {isActive && (
                                        <div className="px-6 sm:px-8 pb-6 border-t" style={{ borderColor: "rgba(0,123,255,0.1)", backgroundColor: "rgba(0,0,0,0.15)" }}>
                                            <div className="pt-4 flex items-center justify-center gap-2 mb-5">
                                                <MessageSquare size={13} className="text-fourth/60" />
                                                <span className="text-xs uppercase tracking-[0.3em] font-bold text-third/35">
                                                    Conversation Thread · {ticket.messages.length} messages
                                                </span>
                                            </div>

                                            <div className="flex flex-col gap-4">
                                                {ticket.messages.map((msg, mi) => (
                                                    <div key={mi} className={`flex flex-col gap-1 ${msg.mine ? "items-end" : "items-start"}`}>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-xs font-bold text-third/40 uppercase tracking-wider">{msg.from}</span>
                                                            <span className="text-xs text-third/25">{msg.time}</span>
                                                        </div>
                                                        <div
                                                            className="px-4 py-2.5 rounded-xl text-sm text-primary/80 max-w-m leading-relaxed"
                                                            style={{
                                                                backgroundColor: msg.mine ? "rgba(0,123,255,0.12)" : "rgba(255,255,255,0.04)",
                                                                border: msg.mine ? "1px solid rgba(0,123,255,0.2)" : "1px solid rgba(255,255,255,0.06)",
                                                            }}
                                                        >
                                                            {msg.text}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {ticket.status !== "Closed" ? (
                                                <div className="mt-5 flex items-center justify-center gap-2">
                                                    <input
                                                        type="text"
                                                        placeholder="Write a reply..."
                                                        value={replyText[ticket.id] || ""}
                                                        onChange={(e) => setReplyText((prev) => ({ ...prev, [ticket.id]: e.target.value }))}
                                                        onKeyDown={(e) => { if (e.key === "Enter") handleSend(ticket.id); }}
                                                        className="flex-1 px-4 py-2.5 rounded-xl text-sm bg-primary/4 border text-primary placeholder-third/25 outline-none focus:border-fourth/40 transition-colors duration-200"
                                                        style={{ borderColor: "rgba(255,255,255,0.07)" }}
                                                    />
                                                    <button
                                                        onClick={() => handleSend(ticket.id)}
                                                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest bg-fourth text-primary transition-opacity hover:opacity-90"
                                                        style={{ boxShadow: "0 4px 16px rgba(0,123,255,0.2)" }}
                                                    >
                                                        <Send size={13} /> Send
                                                    </button>
                                                </div>
                                            ) : (
                                                <p className="mt-4 text-xs text-third/30 uppercase tracking-widest">
                                                    This ticket is closed. Open a new request to continue.
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Footer */}
                    <div className="px-6 sm:px-8 py-4 flex items-center justify-between border-t" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                        <span className="text-xs uppercase tracking-[0.3em] text-third/25 font-semibold">
                            Showing {filtered.length} of {tickets.length} tickets
                        </span>
                        <div className="flex items-center gap-1">
                            <button className="w-7 h-7 rounded-lg text-xs font-bold bg-fourth/15 text-fourth border border-fourth/25">1</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}