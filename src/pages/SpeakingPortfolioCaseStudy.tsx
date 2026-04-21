import { useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Mic,
  Brain,
  Handshake,
  Workflow,
  Cloud,
  Sparkles,
  Clock,
  Globe,
  Timer,
  TrendingUp,
  X,
  Calendar,
  FileSpreadsheet,
  Zap,
} from "lucide-react";

const techStack = [
  {
    name: "n8n",
    icon: Workflow,
    description: "The brain orchestrating the logic behind every query and response flow",
  },
  {
    name: "OpenAI API",
    icon: Brain,
    description: "Powering intelligent, context-aware conversations with advanced language models",
  },
  {
    name: "Supabase",
    icon: Cloud,
    description: "Backend-as-a-service providing real-time database and authentication",
  },
  {
    name: "Google Drive",
    icon: Globe,
    description: "Knowledge base storage for RAG — syncing documents and project data seamlessly",
  },
  {
    name: "Antigravity",
    icon: Zap,
    description: "AI-powered coding assistant for rapid development and iteration",
  },
  {
    name: "Google Sheets",
    icon: FileSpreadsheet,
    description: "Tracking updates, managing data, and keeping everything synced in real-time",
  },
];

const results = [
  { metric: "100%", label: "Accuracy in answering client FAQs" },
  { metric: "24/7", label: "Availability for global clients" },
  { metric: "0", label: "Wait time for client qualification" },
  { metric: "3x", label: "Increase in meeting bookings" },
];

const beforeAfter = [
  {
    before: "Static text that visitors rarely read",
    after: "Interactive Voice engagement",
  },
  {
    before: "Manual booking & wait times",
    after: "Instant answers to every query",
  },
  {
    before: "Missed leads after work hours",
    after: "24/7 active client support",
  },
  {
    before: "Just another business card",
    after: 'A "Wow" impression that closes deals',
  },
];

// Extend window for YT API
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}

const SpeakingPortfolioCaseStudy = () => {
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
      playerRef.current = new window.YT.Player('yt-player-speaking', {
        videoId: 'hAG1hR8NWW4',
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
    <div className="min-h-screen bg-background">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <Button variant="hero" size="sm" asChild>
            <a
              href="https://calendly.com/aiagent9001/30min?background_color=000000&text_color=ffffff&primary_color=e9a41e"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
            </a>
          </Button>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
                <Mic className="w-6 h-6 text-primary" />
                <span className="text-lg font-medium text-primary">
                  The Speaking Portfolio
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up animation-delay-100">
                Turning a Static Page into a{" "}
                <span className="text-gradient">24/7 Digital Expert</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-200">
                My portfolio isn't just a website anymore — it's my most
                productive team member. It doesn't just show what I do — it
                proves it the moment you land.
              </p>
            </div>
          </div>
        </section>

        {/* Before/After Transformation Table */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
                <span className="text-2xl">⚖️</span> The Transformation
              </h2>

              <div className="bg-card/50 rounded-3xl border border-border/50 p-8 md:p-12 backdrop-blur-sm overflow-hidden transform transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(255,169,40,0.1)]">
                {/* Table Header */}
                <div className="grid grid-cols-2 gap-4 mb-6 pb-4 border-b border-border/50">
                  <div className="text-center">
                    <h3 className="font-semibold text-red-400 text-lg">
                      Before (The Silent Site)
                    </h3>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-green-400 text-lg">
                      After (The Living Experience)
                    </h3>
                  </div>
                </div>

                {/* Table Rows */}
                <div className="space-y-4">
                  {beforeAfter.map((row, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-background/30 hover:bg-background/50 transition-colors duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm md:text-base">
                          {row.before}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-foreground text-sm md:text-base">
                          {row.after}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/50 rounded-3xl border border-border/50 p-8 md:p-12 backdrop-blur-sm transform transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(255,169,40,0.1)]">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </span>
                  Overview
                </h2>

                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    By teaching this site my entire work history and giving it a
                    voice, I've removed the{" "}
                    <strong className="text-primary">"friction"</strong> between
                    a visitor's question and a confirmed meeting.
                  </p>
                  <p>
                    It doesn't just show what I do —{" "}
                    <strong className="text-foreground">
                      it proves it the moment you land.
                    </strong>
                  </p>
                </div>

                {/* Image/Mockup */}
                <div className="mt-8 rounded-2xl border border-border/50 overflow-hidden">
                  <img
                    src="https://i.ibb.co/prshSHFY/image.png"
                    alt="LunAI Chatbot UI"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/50 rounded-3xl border border-border/50 p-8 md:p-12 backdrop-blur-sm transform transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(255,169,40,0.1)]">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <span className="text-xl">🛑</span>
                  </span>
                  The Client Challenge
                </h2>

                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <ul className="space-y-4 ml-0">
                    <li className="flex items-start gap-4 p-4 rounded-2xl bg-red-500/5 border border-red-500/10">
                      <span className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Clock className="w-4 h-4 text-red-400" />
                      </span>
                      <div>
                        <strong className="text-foreground block mb-1">
                          The Info Gap
                        </strong>
                        <span>
                          Potential clients leave when they can't find specific
                          answers quickly.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 rounded-2xl bg-red-500/5 border border-red-500/10">
                      <span className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <TrendingUp className="w-4 h-4 text-red-400" />
                      </span>
                      <div>
                        <strong className="text-foreground block mb-1">
                          Missed Opportunity
                        </strong>
                        <span>
                          Static sites don't build trust or demonstrate
                          "Expertise" instantly.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 rounded-2xl bg-red-500/5 border border-red-500/10">
                      <span className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Timer className="w-4 h-4 text-red-400" />
                      </span>
                      <div>
                        <strong className="text-foreground block mb-1">
                          Time Sink
                        </strong>
                        <span>
                          Answering the same FAQs manually over email kills
                          productivity.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/50 rounded-3xl border border-border/50 p-8 md:p-12 backdrop-blur-sm transform transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(255,169,40,0.1)]">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  </span>
                  The Automated Solution
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Card 1 */}
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,169,40,0.1)]">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                      <Mic className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Natural Voice Reception
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Don't just type — talk. The site hears the client and
                      responds with a human-like voice, creating an immediate
                      personal connection.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,169,40,0.1)]">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                      <Brain className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Instant Expertise
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The system is trained on my past projects and skills. It
                      answers complex client questions about "How I work" with
                      100% accuracy.
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,169,40,0.1)]">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                      <Handshake className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Trust Builder
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      By solving queries in real-time, it warms up leads and
                      increases the probability of them booking a call by 3x.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
                <span className="text-2xl">💻</span> The Engine Room
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="group p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm
                      transform transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(255,169,40,0.1)] hover:scale-[1.02]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <tech.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {tech.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {tech.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
                <span className="text-2xl">📈</span> Business Impact
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-2xl bg-primary/5 border border-primary/20
                      transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,169,40,0.15)]"
                  >
                    <span className="block font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                      {result.metric}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {result.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Demo / Video Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
                <span className="text-2xl">🎥</span> See It In Action
              </h2>

              <div
                ref={videoContainerRef}
                className="relative aspect-video rounded-3xl bg-card/50 border border-border/50 overflow-hidden transform transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_60px_rgba(255,169,40,0.15)]"
              >
                <div id="yt-player-speaking" className="absolute inset-0 w-full h-full" />
              </div>

              <p className="text-center text-muted-foreground/60 text-sm mt-4">
                One question, one instant voice answer — trust built.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl border border-primary/20 p-8 md:p-12 transform transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,169,40,0.15)]">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Ready to make your site work for you?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Let's discuss how a similar AI-powered solution can turn your
                  static site into a 24/7 digital expert
                </p>

                <Button
                  variant="hero"
                  size="xl"
                  className="text-sm px-4 py-3 md:text-base md:px-6 md:py-4"
                  asChild
                >
                  <a
                    href="https://calendly.com/aiagent9001/30min?background_color=000000&text_color=ffffff&primary_color=e9a41e"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    <span className="hidden sm:inline">
                      Book Your Free Consultation
                    </span>
                    <span className="sm:hidden">Book Now</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2024 LunAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SpeakingPortfolioCaseStudy;
