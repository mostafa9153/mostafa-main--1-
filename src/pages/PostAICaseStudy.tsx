import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowLeft, Pencil, CheckCircle2, Clock, Zap, Brain,
  Database, Workflow, Globe, ArrowRight, X, Sparkles, Calendar,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const platforms = [
  { label: "LinkedIn", color: "text-blue-400", border: "border-blue-400/40", bg: "bg-blue-400/5", delay: "0.1s" },
  { label: "Instagram", color: "text-pink-400", border: "border-pink-400/40", bg: "bg-pink-400/5", delay: "0.25s" },
  { label: "Facebook", color: "text-sky-400", border: "border-sky-400/40", bg: "bg-sky-400/5", delay: "0.4s" },
  { label: "Twitter / X", color: "text-slate-300", border: "border-slate-400/40", bg: "bg-slate-400/5", delay: "0.55s" },
];

const techStack = [
  { name: "Claude AI", role: "Content Brain", icon: Brain, description: "Generates platform-aware posts tuned to each algorithm's format and tone" },
  { name: "n8n", role: "Workflow Engine", icon: Workflow, description: "Orchestrates the end-to-end pipeline from topic input to multi-platform output" },
  { name: "React", role: "Creator Interface", icon: Globe, description: "Fast, clean UI where creators enter topics and retrieve generated posts" },
  { name: "Supabase", role: "Data Layer", icon: Database, description: "Stores brand profiles, post history, and user settings with real-time sync" },
  { name: "Antigravity", role: "Dev Accelerator", icon: Zap, description: "AI-powered coding assistant used to ship the entire product rapidly" },
];

const results = [
  { metric: "4", suffix: "-in-1", label: "Platforms per topic" },
  { metric: "90", suffix: "%", label: "Time saved per content cycle" },
  { metric: "4", suffix: "x", label: "Faster content output" },
  { metric: "0", suffix: "", label: "Algorithm knowledge required" },
];

const beforeAfter = [
  { before: "Write 4 separate posts manually", after: "One topic → 4 posts instantly" },
  { before: "Learn each platform's rules", after: "AI knows every algorithm" },
  { before: "Hours lost every content day", after: "Done in under 60 seconds" },
  { before: "Inconsistent brand voice", after: "Uniform tone across all platforms" },
];

// ─── Count-Up Hook ────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1200, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ─── Metric Card ─────────────────────────────────────────────────────────────
function MetricCard({ metric, suffix, label }: { metric: string; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const num = parseInt(metric, 10);
  const counted = useCountUp(num, 1400, visible);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center p-6 rounded-2xl bg-primary/5 border border-primary/20 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,169,40,0.15)]">
      <span className="block font-display text-3xl md:text-4xl font-bold text-primary mb-2">
        {visible ? counted : 0}{suffix}
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const PostAICaseStudy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300">
            <ArrowLeft className="w-4 h-4" /><span>Back to Portfolio</span>
          </Link>
          <Button variant="hero" size="sm" asChild>
            <a href="https://calendly.com/aiagent9001/30min?background_color=000000&text_color=ffffff&primary_color=e9a41e" target="_blank" rel="noopener noreferrer">Book a Call</a>
          </Button>
        </div>
      </nav>

      <main className="relative z-10">

        {/* ── HERO ── */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
                <Pencil className="w-6 h-6 text-primary" />
                <span className="text-lg font-medium text-primary">PostAI</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up animation-delay-100">
                <span className="text-gradient">4-in-1</span> Content Engine —{" "}
                <br className="hidden md:block" />One Topic, All Platforms
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-200 mb-8">
                Type one idea. PostAI writes platform-perfect posts for LinkedIn, Instagram, Facebook, and Twitter/X — automatically.
              </p>

              <div className="flex justify-center animate-fade-up animation-delay-300">
                <Button variant="hero" size="xl" asChild>
                  <a href="https://mdmostafa.in" target="_blank" rel="noopener noreferrer">
                    <Globe className="w-5 h-5 mr-2" />
                    Visit Live Project
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── VISUAL 1: Animated Flow Diagram ── */}
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/50 rounded-3xl border border-border/50 p-8 md:p-12 backdrop-blur-sm overflow-hidden">
                <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-10">How It Works</p>

                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-4">
                  {/* Input node */}
                  <div className="flex-shrink-0 animate-fade-up">
                    <div className="w-36 h-20 rounded-2xl bg-neutral-900 border border-white/10 flex flex-col items-center justify-center shadow-lg">
                      <Pencil className="w-5 h-5 text-primary mb-1" />
                      <span className="text-sm font-semibold text-foreground">Your Topic</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center flex-shrink-0">
                    <div className="hidden md:block w-8 h-[2px] bg-gradient-to-r from-primary/60 to-primary" />
                    <div className="md:hidden w-[2px] h-6 bg-gradient-to-b from-primary/60 to-primary" />
                    <ArrowRight className="hidden md:block w-5 h-5 text-primary -ml-1" />
                  </div>

                  {/* AI node */}
                  <div className="flex-shrink-0 animate-fade-up animation-delay-100">
                    <div className="w-36 h-20 rounded-2xl bg-primary/10 border border-primary/40 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(245,166,35,0.2)]">
                      <Brain className="w-5 h-5 text-primary mb-1" />
                      <span className="text-sm font-semibold text-primary">Claude AI</span>
                      <span className="text-[10px] text-muted-foreground">+ n8n Pipeline</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center flex-shrink-0">
                    <div className="hidden md:block w-8 h-[2px] bg-gradient-to-r from-primary/60 to-primary" />
                    <div className="md:hidden w-[2px] h-6 bg-gradient-to-b from-primary/60 to-primary" />
                    <ArrowRight className="hidden md:block w-5 h-5 text-primary -ml-1" />
                  </div>

                  {/* Output cards */}
                  <div className="flex-1 grid grid-cols-2 gap-3 w-full md:w-auto">
                    {platforms.map((p) => (
                      <div
                        key={p.label}
                        className={`rounded-xl ${p.bg} border ${p.border} px-4 py-3 flex items-center gap-2 animate-fade-up`}
                        style={{ animationDelay: p.delay, opacity: 0 }}
                      >
                        <span className={`w-2 h-2 rounded-full ${p.color.replace("text-", "bg-")} flex-shrink-0`} />
                        <span className={`text-sm font-medium ${p.color}`}>{p.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VISUAL 2: Time Comparison ── */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
                <span className="text-2xl">⚖️</span> The Transformation
              </h2>

              {/* Time comparison visual */}
              <div className="flex items-stretch gap-0 mb-8 rounded-2xl overflow-hidden border border-border/50">
                <div className="flex-1 bg-red-500/5 p-6 md:p-8 flex flex-col items-center justify-center text-center gap-3 border-r border-border/50">
                  <Clock className="w-8 h-8 text-red-400" />
                  <span className="font-display text-4xl md:text-5xl font-bold text-red-400/80">2–3 hrs</span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Manual</span>
                </div>
                <div className="flex items-center justify-center px-4 bg-card/50">
                  <span className="font-display text-lg font-bold text-muted-foreground">VS</span>
                </div>
                <div className="flex-1 bg-primary/5 p-6 md:p-8 flex flex-col items-center justify-center text-center gap-3 border-l border-border/50">
                  <Zap className="w-8 h-8 text-primary" />
                  <span className="font-display text-4xl md:text-5xl font-bold text-primary drop-shadow-[0_0_10px_rgba(245,166,35,0.4)]">30 sec</span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">PostAI</span>
                </div>
              </div>

              {/* Before/After table */}
              <div className="bg-card/50 rounded-3xl border border-border/50 p-8 md:p-12 backdrop-blur-sm transform transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(255,169,40,0.1)]">
                <div className="grid grid-cols-2 gap-4 mb-6 pb-4 border-b border-border/50">
                  <div className="text-center"><h3 className="font-semibold text-red-400 text-lg">Before</h3></div>
                  <div className="text-center"><h3 className="font-semibold text-green-400 text-lg">After PostAI</h3></div>
                </div>
                <div className="space-y-4">
                  {beforeAfter.map((row, i) => (
                    <div key={i} className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-background/30 hover:bg-background/50 transition-colors duration-300">
                      <div className="flex items-center gap-3">
                        <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm md:text-base">{row.before}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-foreground text-sm md:text-base">{row.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VISUAL 5: App Mockup ── */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
                <span className="text-2xl">🖥️</span> See It In Action
              </h2>

              {/* Browser frame - Clickable */}
              <a 
                href="https://mdmostafa.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/mockup block rounded-2xl border border-border/50 overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.5)] transform transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_60px_rgba(245,166,35,0.15)] hover:scale-[1.01]"
              >
                {/* Browser chrome */}
                <div className="bg-neutral-900 px-4 py-3 flex items-center gap-3 border-b border-border/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex-1 bg-neutral-800 rounded-md px-3 py-1 text-xs text-muted-foreground group-hover/mockup:text-primary transition-colors">mdmostafa.in</div>
                </div>

                {/* App content */}
                <div className="bg-neutral-950 p-6 md:p-8 space-y-6">
                  {/* Platform toggles */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "✓ LinkedIn", active: true, cls: "border-blue-400/60 text-blue-400 bg-blue-400/10" },
                      { name: "✓ Instagram", active: true, cls: "border-pink-400/60 text-pink-400 bg-pink-400/10" },
                      { name: "○ Facebook", active: false, cls: "border-border/40 text-muted-foreground" },
                      { name: "○ Twitter", active: false, cls: "border-border/40 text-muted-foreground" },
                    ].map((p) => (
                      <span key={p.name} className={`px-3 py-1.5 rounded-full text-xs font-medium border ${p.cls}`}>{p.name}</span>
                    ))}
                  </div>

                  {/* Prompt input */}
                  <div className="relative">
                    <div className="w-full rounded-xl bg-neutral-900 border border-border/50 px-4 py-3 text-sm text-muted-foreground/70 min-h-[72px] flex items-start">
                      আমার নতুন product launch নিয়ে post করতে চাই…
                    </div>
                  </div>

                  {/* Generate button */}
                  <div className="flex justify-end">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-black font-semibold text-sm cursor-default select-none shadow-[0_0_20px_rgba(245,166,35,0.4)]">
                      Generate Posts <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Output cards */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { label: "LinkedIn", color: "text-blue-400", border: "border-blue-400/30", lines: ["🚀 Excited to announce...", "After months of work, we...", "Here's what makes it different:"] },
                      { label: "Instagram", color: "text-pink-400", border: "border-pink-400/30", lines: ["✨ Big news! 🎉", "Our new product is live 🔥", "#ProductLaunch #Innovation"] },
                    ].map((card) => (
                      <div key={card.label} className={`rounded-xl bg-neutral-900 border ${card.border} p-4 space-y-2`}>
                        <div className={`text-xs font-bold uppercase tracking-widest ${card.color} mb-3`}>{card.label}</div>
                        {card.lines.map((line, i) => (
                          <div key={i} className="h-4 rounded bg-neutral-800 text-xs text-muted-foreground/50 px-2 flex items-center">{line}</div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </a>

              {/* Direct Link Below Mockup */}
              <div className="mt-8 text-center animate-fade-up">
                <a 
                  href="https://mdmostafa.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline group"
                >
                  <Globe className="w-5 h-5" />
                  <span>Visit mdmostafa.in</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Challenge ── */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/50 rounded-3xl border border-border/50 p-8 md:p-12 backdrop-blur-sm transform transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(255,169,40,0.1)]">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <span className="text-xl">🛑</span>
                  </span>
                  The Challenge
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>Content creators were spending <strong className="text-foreground">hours writing separate posts for every platform</strong>, each demanding different tone, structure, and algorithmic knowledge.</p>
                  <ul className="space-y-3 ml-4">
                    {["Each platform demands a completely different writing style", "Without algorithm expertise, posts get buried — high effort, low reach", "Creators post inconsistently because the workload is unsustainable", "No unified tool to manage brand voice across all platforms at once"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VISUAL 3: Engine Room ── */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
                <span className="text-2xl">💻</span> The Engine Room
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <div key={tech.name} className="group p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm transform transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(255,169,40,0.1)] hover:scale-[1.02]" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <tech.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{tech.name}</h3>
                        {/* Role badge */}
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-2">{tech.role}</span>
                        <p className="text-sm text-muted-foreground">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── VISUAL 4: Business Impact with count-up ── */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
                <span className="text-2xl">📈</span> Business Impact
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {results.map((r, i) => (
                  <MetricCard key={i} metric={r.metric} suffix={r.suffix} label={r.label} />
                ))}
              </div>

              <div className="bg-card/50 rounded-3xl border border-border/50 p-8 backdrop-blur-sm">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" /> Key Outcomes
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  {[
                    "Creators go from one idea to four platform-ready posts in under 60 seconds",
                    "Consistent brand voice maintained across LinkedIn, Twitter/X, Instagram, and Facebook",
                    "Posting frequency increased dramatically — content bottleneck eliminated entirely",
                    "Zero platform expertise required — the AI knows each algorithm's preferences",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl border border-primary/20 p-8 md:p-12 transform transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,169,40,0.15)]">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Want Your Own Content Engine?</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Let's build a custom AI content system tuned to your brand, platforms, and workflow.</p>
                <Button variant="hero" size="xl" className="text-sm px-4 py-3 md:text-base md:px-6 md:py-4" asChild>
                  <a href="https://calendly.com/aiagent9001/30min?background_color=000000&text_color=ffffff&primary_color=e9a41e" target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    <span className="hidden sm:inline">Book Your Free Consultation</span>
                    <span className="sm:hidden">Book Now</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2024 LunAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PostAICaseStudy;
