import { useRef, useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
    ArrowLeft,
    CheckCircle2,
    X,
    Sparkles,
    Clock,
    TrendingUp,
    FileWarning,
    Inbox,
    Brain,
    UserCheck,
    BookOpen,
    BarChart3,
    FolderOpen,
    Zap,
    Bot,
    Mail,
    BookOpenCheck,
    HardDrive,
    Sheet,
    Link2,
    FileText,
    Calendar,
} from "lucide-react";

/* ─── Flow Steps ─── */
const flowSteps = [
    { label: "Gmail", delay: 0 },
    { label: "AI Extract", delay: 150 },
    { label: "Human Review", delay: 300 },
    { label: "Bkper", delay: 450 },
    { label: "Sheets + Drive", delay: 600 },
];

/* ─── Before / After ─── */
const beforeItems = [
    "Hunting invoices in a flooded inbox every month",
    "Copy-pasting data into accounting software manually",
    "Wrong amounts, wrong accounts, wrong dates",
    "Hours lost on low-value, repetitive work",
    "No system. No audit trail. No control.",
];

const afterItems = [
    "Every invoice detected the moment it arrives",
    "AI extracts Vendor, Date, Amount, VAT — from PDF, XML, or scan",
    "One confirmation — everything posts automatically",
    "Bkper updated. Sheets logged. Drive organized.",
    "100% audit-ready. Zero manual entry.",
];

/* ─── Challenges ─── */
const challenges = [
    {
        icon: Clock,
        title: "The Time Drain",
        description:
            "Small businesses spend 5-10 hours monthly just searching and manually entering invoice data. That's time stolen from actual business growth.",
    },
    {
        icon: TrendingUp,
        title: "Costly Accounting Errors",
        description:
            "Manual data entry means wrong amounts, wrong categories, wrong VAT. Messy books. Failed audits. Unnecessary stress at tax time.",
    },
    {
        icon: FileWarning,
        title: "Lost Documents & No Paper Trail",
        description:
            "Without automation, invoices get buried, misfiled, or forgotten entirely — creating chaos when you need records most.",
    },
];

/* ─── Solution Cards ─── */
const solutions = [
    {
        icon: Inbox,
        title: "Instant Invoice Detection",
        description:
            "AI-powered Gmail trigger identifies invoices and receipts automatically — no manual filtering, no missed documents.",
    },
    {
        icon: Brain,
        title: "Intelligent Data Extraction",
        description:
            "GPT-4o reads every invoice — PDF, XML, or scanned image. Extracts Vendor, Date, Net Amount, VAT, Total, Currency, and Category. Supports both Factur-X XML and scanned documents via OCR.",
    },
    {
        icon: UserCheck,
        title: "Human-in-the-Loop Validation",
        description:
            "You get one clean review email. Approve or correct. Reply once — the entire workflow continues automatically.",
    },
    {
        icon: BookOpen,
        title: "Automated Bkper Journal Entry",
        description:
            "Double-entry posted instantly — Net and VAT split correctly. No manual bookkeeping. No errors.",
    },
    {
        icon: BarChart3,
        title: "Real-Time Google Sheets Log",
        description:
            "Every invoice auto-logged. Always up to date. Full transaction history at a glance.",
    },
    {
        icon: FolderOpen,
        title: "Smart Google Drive Organization",
        description:
            "Files auto-renamed and moved to processed folders. Organized, traceable, audit-ready forever.",
    },
];

/* ─── Tech Stack ─── */
const techStack = [
    {
        icon: Zap,
        name: "n8n",
        description: "Workflow automation backbone",
    },
    {
        icon: Bot,
        name: "OpenAI GPT-4o",
        description: "Intelligent invoice parsing",
    },
    {
        icon: Mail,
        name: "Gmail",
        description: "Trigger + Human-in-the-Loop channel",
    },
    {
        icon: BookOpenCheck,
        name: "Bkper",
        description: "Cloud accounting journal entries",
    },
    {
        icon: HardDrive,
        name: "Google Drive",
        description: "Smart file organization",
    },
    {
        icon: Sheet,
        name: "Google Sheets",
        description: "Auto-updated transaction log",
    },
    {
        icon: Link2,
        name: "Apps Script",
        description: "n8n ↔ Bkper API bridge",
    },
    {
        icon: FileText,
        name: "PDF.co",
        description: "PDF, XML & scanned invoice extraction",
    },
];

/* ─── Results ─── */
const results = [
    { metric: "0", label: "Manual data entry after setup" },
    { metric: "1", label: "Human action required per invoice" },
    { metric: "100%", label: "Extraction accuracy — PDF, XML & scanned" },
    { metric: "5x", label: "Faster than manual processing" },
];

/* ─── Animated Section Wrapper ─── */
const AnimatedSection = ({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

/* ─── YouTube Window Types ─── */
declare global {
    interface Window {
        YT: any;
        onYouTubeIframeAPIReady: (() => void) | undefined;
    }
}

/* ─── Main Component ─── */
const InvoiceAutomationCaseStudy = () => {
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<any>(null);
    const playerReadyRef = useRef(false);

    const handleVisibility = useCallback((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (!playerRef.current || !playerReadyRef.current) return;
            try {
                if (entry.isIntersecting) {
                    playerRef.current.playVideo();
                } else {
                    playerRef.current.pauseVideo();
                }
            } catch (e) {
                // Player not ready yet
            }
        });
    }, []);

    useEffect(() => {
        // Load YouTube IFrame API if not already loaded
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
        }

        const initPlayer = () => {
            if (!videoContainerRef.current) return;
            playerRef.current = new window.YT.Player('yt-player-invoice', {
                videoId: 'bj3aOi5qMWY',
                playerVars: {
                    autoplay: 0,
                    controls: 1,
                    rel: 0,
                    modestbranding: 1,
                    playsinline: 1,
                    enablejsapi: 1,
                    origin: window.location.origin,
                },
                events: {
                    onReady: () => {
                        playerReadyRef.current = true;
                    },
                },
            });
        };

        if (window.YT && window.YT.Player) {
            initPlayer();
        } else {
            window.onYouTubeIframeAPIReady = initPlayer;
        }

        // Set up IntersectionObserver
        const observer = new IntersectionObserver(handleVisibility, {
            threshold: 0.4,
        });

        if (videoContainerRef.current) {
            observer.observe(videoContainerRef.current);
        }

        return () => {
            observer.disconnect();
            if (playerRef.current && playerRef.current.destroy) {
                playerRef.current.destroy();
            }
        };
    }, [handleVisibility]);
    return (
        <div className="min-h-screen" style={{ background: "#0d0d0d" }}>
            {/* ── Background Effects ── */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f5a623]/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#f5a623]/3 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#f5a623]/4 rounded-full blur-[180px]" />
            </div>

            {/* ── Navigation Bar ── */}
            <nav className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ background: "rgba(13,13,13,0.85)", borderColor: "rgba(255,255,255,0.08)" }}>
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        to="/#projects"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-[#f5a623] transition-colors duration-300"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Portfolio</span>
                    </Link>

                    <a
                        href="https://calendly.com/aiagent9001/30min?background_color=000000&text_color=ffffff&primary_color=e9a41e"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl font-semibold text-sm text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(245,166,35,0.4)]"
                        style={{ background: "#f5a623" }}
                    >
                        Book a Call
                    </a>
                </div>
            </nav>

            <main className="relative z-10">
                {/* ═══════════════════════════════════════════
            SECTION 1 — HERO
        ═══════════════════════════════════════════ */}
                <section className="min-h-[85vh] flex items-center justify-center py-20 md:py-28">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            {/* Tag Pill */}
                            <AnimatedSection>
                                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8" style={{ background: "rgba(245,166,35,0.12)", border: "1px solid rgba(245,166,35,0.25)" }}>
                                    <Sparkles className="w-4 h-4 text-[#f5a623]" />
                                    <span className="text-sm font-medium text-[#f5a623]">
                                        AI Automation · n8n · Bkper
                                    </span>
                                </div>
                            </AnimatedSection>

                            {/* Headline */}
                            <AnimatedSection delay={100}>
                                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                    Stop Processing Invoices Manually.{" "}
                                    <br className="hidden md:block" />
                                    <span className="text-[#f5a623]">Let AI Handle It.</span>
                                </h1>
                            </AnimatedSection>

                            {/* Subtitle */}
                            <AnimatedSection delay={200}>
                                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                                    One email. AI extracts the data. You confirm once.
                                    <br />
                                    Everything else posts itself. Gmail → Bkper. Zero manual entry.
                                </p>
                            </AnimatedSection>

                            {/* Animated Flow Bar */}
                            <AnimatedSection delay={350}>
                                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                                    {flowSteps.map((step, index) => (
                                        <div key={step.label} className="flex items-center gap-2 md:gap-3">
                                            <div
                                                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium text-white/90 transition-all duration-500 hover:scale-105"
                                                style={{
                                                    background: "#1a1a1a",
                                                    border: "1px solid rgba(255,255,255,0.08)",
                                                    animationDelay: `${step.delay}ms`,
                                                }}
                                            >
                                                <span
                                                    className="w-2 h-2 rounded-full animate-pulse"
                                                    style={{
                                                        background: "#f5a623",
                                                        boxShadow: "0 0 8px rgba(245,166,35,0.6)",
                                                    }}
                                                />
                                                {step.label}
                                            </div>
                                            {index < flowSteps.length - 1 && (
                                                <span className="text-[#f5a623]/60 font-light text-lg hidden sm:block">→</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
            SECTION 2 — THE TRANSFORMATION
        ═══════════════════════════════════════════ */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-5xl mx-auto">
                            <AnimatedSection>
                                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-10 text-center flex items-center justify-center gap-3">
                                    <span className="text-2xl">🔄</span> The Transformation
                                </h2>
                            </AnimatedSection>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Before Card */}
                                <AnimatedSection delay={100}>
                                    <div
                                        className="rounded-2xl p-6 md:p-8 h-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(239,68,68,0.08)]"
                                        style={{
                                            background: "#1a1a1a",
                                            border: "1px solid rgba(255,255,255,0.06)",
                                            borderLeft: "4px solid rgba(239,68,68,0.7)",
                                        }}
                                    >
                                        <h3 className="text-lg font-bold text-red-400 mb-5">
                                            Before (Wasting Time)
                                        </h3>
                                        <ul className="space-y-3.5">
                                            {beforeItems.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                                                    <span className="text-gray-400 text-sm leading-relaxed">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </AnimatedSection>

                                {/* After Card */}
                                <AnimatedSection delay={200}>
                                    <div
                                        className="rounded-2xl p-6 md:p-8 h-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,197,94,0.08)]"
                                        style={{
                                            background: "#1a1a1a",
                                            border: "1px solid rgba(255,255,255,0.06)",
                                            borderLeft: "4px solid rgba(34,197,94,0.7)",
                                        }}
                                    >
                                        <h3 className="text-lg font-bold text-green-400 mb-5">
                                            After (Fully Automated)
                                        </h3>
                                        <ul className="space-y-3.5">
                                            {afterItems.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                                                    <span className="text-gray-300 text-sm leading-relaxed">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
            SECTION 3 — OVERVIEW
        ═══════════════════════════════════════════ */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <AnimatedSection>
                                <div
                                    className="rounded-3xl p-8 md:p-12 transition-all duration-300 hover:shadow-[0_0_50px_rgba(245,166,35,0.08)]"
                                    style={{
                                        background: "#1a1a1a",
                                        border: "1px solid rgba(255,255,255,0.06)",
                                    }}
                                >
                                    <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                        <span
                                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                                            style={{
                                                background: "rgba(245,166,35,0.12)",
                                                border: "1px solid rgba(245,166,35,0.25)",
                                            }}
                                        >
                                            <Sparkles className="w-5 h-5 text-[#f5a623]" />
                                        </span>
                                        Overview
                                    </h2>

                                    <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                                        <p>
                                            I built this system to eliminate the friction between
                                            receiving an invoice and having it recorded in your books.
                                            It doesn't just show what it does —{" "}
                                            <strong className="text-white">
                                                it proves it the moment you land.
                                            </strong>
                                        </p>
                                    </div>

                                    {/* Workflow Visual Image */}
                                    <div className="mt-8 rounded-2xl overflow-hidden relative group" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
                                        <img
                                            src="https://i.ibb.co/k22Gh8RD/Screenshot-2026-03-07-231703.png"
                                            alt="n8n Invoice Automation Workflow Architecture"
                                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                                        />
                                        <div className="absolute bottom-4 left-4 z-20 translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                            <span className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white/90 shadow-lg backdrop-blur-md" style={{ background: "rgba(245,166,35,0.2)", border: "1px solid rgba(245,166,35,0.3)" }}>
                                                Complete n8n Architecture
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
            SECTION 4 — THE CLIENT CHALLENGE
        ═══════════════════════════════════════════ */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <AnimatedSection>
                                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-10 text-center flex items-center justify-center gap-3">
                                    <span className="text-2xl">🔴</span> The Client Challenge
                                </h2>
                            </AnimatedSection>

                            <div className="space-y-5">
                                {challenges.map((challenge, index) => (
                                    <AnimatedSection key={index} delay={index * 120}>
                                        <div
                                            className="rounded-2xl p-6 md:p-8 flex items-start gap-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,166,35,0.06)]"
                                            style={{
                                                background: "#1a1a1a",
                                                border: "1px solid rgba(255,255,255,0.06)",
                                                borderLeft: "4px solid rgba(239,68,68,0.5)",
                                            }}
                                        >
                                            <span
                                                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                                                style={{
                                                    background: "rgba(239,68,68,0.1)",
                                                    border: "1px solid rgba(239,68,68,0.2)",
                                                }}
                                            >
                                                <challenge.icon className="w-5 h-5 text-red-400" />
                                            </span>
                                            <div>
                                                <h3 className="font-semibold text-white text-lg mb-2">
                                                    {challenge.title}
                                                </h3>
                                                <p className="text-gray-400 text-sm leading-relaxed">
                                                    {challenge.description}
                                                </p>
                                            </div>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
            SECTION 5 — THE AUTOMATED SOLUTION
        ═══════════════════════════════════════════ */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-5xl mx-auto">
                            <AnimatedSection>
                                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-10 text-center flex items-center justify-center gap-3">
                                    <span className="text-2xl">🟢</span> The Automated Solution
                                </h2>
                            </AnimatedSection>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {solutions.map((solution, index) => (
                                    <AnimatedSection key={index} delay={index * 100}>
                                        <div
                                            className="group rounded-2xl p-6 h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(245,166,35,0.1)]"
                                            style={{
                                                background: "#1a1a1a",
                                                border: "1px solid rgba(255,255,255,0.06)",
                                            }}
                                        >
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                                                style={{
                                                    background: "rgba(245,166,35,0.1)",
                                                    border: "1px solid rgba(245,166,35,0.2)",
                                                }}
                                            >
                                                <solution.icon className="w-6 h-6 text-[#f5a623]" />
                                            </div>
                                            <h3 className="font-semibold text-white mb-2 text-base group-hover:text-[#f5a623] transition-colors duration-300">
                                                {solution.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {solution.description}
                                            </p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
            SECTION 6 — THE ENGINE ROOM
        ═══════════════════════════════════════════ */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-5xl mx-auto">
                            <AnimatedSection>
                                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-10 text-center flex items-center justify-center gap-3">
                                    <span className="text-2xl">🔧</span> The Engine Room
                                </h2>
                            </AnimatedSection>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {techStack.map((tech, index) => (
                                    <AnimatedSection key={index} delay={index * 80}>
                                        <div
                                            className="group rounded-2xl p-5 text-center h-full transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(245,166,35,0.08)]"
                                            style={{
                                                background: "#1a1a1a",
                                                border: "1px solid rgba(255,255,255,0.06)",
                                            }}
                                        >
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(245,166,35,0.3)]"
                                                style={{
                                                    background: "rgba(245,166,35,0.1)",
                                                    border: "1px solid rgba(245,166,35,0.2)",
                                                }}
                                            >
                                                <tech.icon className="w-6 h-6 text-[#f5a623]" />
                                            </div>
                                            <h3 className="font-semibold text-white text-sm mb-1 group-hover:text-[#f5a623] transition-colors duration-300">
                                                {tech.name}
                                            </h3>
                                            <p className="text-gray-500 text-xs leading-relaxed">
                                                {tech.description}
                                            </p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
            SECTION 7 — BUSINESS IMPACT
        ═══════════════════════════════════════════ */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-5xl mx-auto">
                            <AnimatedSection>
                                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-10 text-center flex items-center justify-center gap-3">
                                    <span className="text-2xl">📈</span> Business Impact
                                </h2>
                            </AnimatedSection>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {results.map((result, index) => (
                                    <AnimatedSection key={index} delay={index * 100}>
                                        <div
                                            className="text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(245,166,35,0.12)]"
                                            style={{
                                                background: "rgba(245,166,35,0.05)",
                                                border: "1px solid rgba(245,166,35,0.2)",
                                            }}
                                        >
                                            <span
                                                className="block font-display text-3xl md:text-4xl font-bold mb-2"
                                                style={{
                                                    color: "#f5a623",
                                                    textShadow: "0 0 20px rgba(245,166,35,0.3)",
                                                }}
                                            >
                                                {result.metric}
                                            </span>
                                            <span className="text-gray-400 text-sm">
                                                {result.label}
                                            </span>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
            SECTION 8 — SEE IT IN ACTION
        ═══════════════════════════════════════════ */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <AnimatedSection>
                                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-10 text-center flex items-center justify-center gap-3">
                                    <span className="text-2xl">🎬</span> See It In Action
                                </h2>
                            </AnimatedSection>

                            <AnimatedSection delay={150}>
                                <div
                                    ref={videoContainerRef}
                                    className="relative aspect-video rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(245,166,35,0.15)]"
                                    style={{
                                        background: "#1a1a1a",
                                        border: "1px solid rgba(255,255,255,0.06)",
                                    }}
                                >
                                    <div id="yt-player-invoice" className="absolute inset-0 w-full h-full" />
                                </div>

                                <p className="text-center text-gray-500 text-sm mt-4">
                                    Full workflow demo — Gmail to Bkper in under 60 seconds
                                </p>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
            SECTION 9 — CTA
        ═══════════════════════════════════════════ */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mx-auto text-center">
                            <AnimatedSection>
                                <div
                                    className="rounded-3xl p-8 md:p-14 transition-all duration-300 hover:shadow-[0_0_80px_rgba(245,166,35,0.12)]"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(245,166,35,0.08) 0%, rgba(245,166,35,0.03) 50%, transparent 100%)",
                                        border: "1px solid rgba(245,166,35,0.2)",
                                    }}
                                >
                                    <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                                        Ready to make this work for you?
                                    </h2>
                                    <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
                                        I design and build AI-powered automation workflows that save
                                        time, eliminate errors, and scale with your business. No
                                        fluff — just systems that work.
                                    </p>

                                    <a
                                        href="https://calendly.com/aiagent9001/30min?background_color=000000&text_color=ffffff&primary_color=e9a41e"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-black text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(245,166,35,0.5)]"
                                        style={{ background: "#f5a623" }}
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Book a Free Consultation
                                    </a>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>
            </main>

            {/* ── Footer ── */}
            <footer className="py-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="container mx-auto px-6 text-center text-sm text-gray-500">
                    <p>© 2024 LunAI. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default InvoiceAutomationCaseStudy;
