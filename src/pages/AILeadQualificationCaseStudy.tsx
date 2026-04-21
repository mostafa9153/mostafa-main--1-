import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Bot,
  CheckCircle2,
  Play,
  Target,
  Brain,
  TrendingUp,
  Zap,
  MessageSquare,
  Database,
  Workflow,
  Users
} from "lucide-react";

const techStack = [
  {
    name: "n8n",
    icon: Workflow,
    description: "Orchestrating lead capture, scoring, and CRM integration workflows"
  },
  {
    name: "OpenAI",
    icon: Brain,
    description: "GPT-powered conversation and intelligent lead qualification analysis"
  },
  {
    name: "Apify",
    icon: Target,
    description: "Ethical data enrichment and lead research automation"
  },
  {
    name: "CRM Integration",
    icon: Database,
    description: "Seamless sync with HubSpot, Salesforce, and custom CRMs"
  }
];

const results = [
  { metric: "85%", label: "Qualified lead accuracy" },
  { metric: "2 min", label: "Response time (was 4 hrs)" },
  { metric: "60%", label: "More sales meetings" },
  { metric: "0", label: "Hot leads lost" }
];

const AILeadQualificationCaseStudy = () => {
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
            <a href="https://calendly.com/aiagent9001/30min?background_color=000000&text_color=ffffff&primary_color=e9a41e" target="_blank" rel="noopener noreferrer">
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
                <Bot className="w-6 h-6 text-primary" />
                <span className="text-lg font-medium text-primary">AI Lead Qualification Bot</span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up animation-delay-100">
                <span className="text-gradient">85% Accuracy</span> in Lead Qualification
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-200">
                How an AI-powered qualification bot transformed cold leads into sales-ready opportunities in minutes
              </p>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/50 rounded-3xl border border-border/50 p-8 md:p-12 backdrop-blur-sm
                transform transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(255,169,40,0.1)]">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-red-400" />
                  </span>
                  The Challenge
                </h2>

                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    A B2B SaaS company's sales team was drowning in
                    <strong className="text-foreground"> unqualified leads from web forms</strong>, wasting
                    precious hours on prospects who weren't ready to buy.
                  </p>
                  <p>
                    Their manual qualification process was causing major problems:
                  </p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                      <span>Sales reps spending 60% of time on leads that never converted</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                      <span>4+ hour average response time letting hot leads go cold</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                      <span>Inconsistent qualification criteria across team members</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                      <span>No enrichment data to understand lead potential before outreach</span>
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
              <div className="bg-card/50 rounded-3xl border border-border/50 p-8 md:p-12 backdrop-blur-sm
                transform transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(255,169,40,0.1)]">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-green-400" />
                  </span>
                  The Solution
                </h2>

                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    I built an <strong className="text-primary">AI-Powered Lead Qualification System</strong> that
                    instantly engages, qualifies, and routes leads to the right sales rep:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mt-8">
                    <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20">
                      <div className="flex items-center gap-3 mb-3">
                        <Bot className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold text-foreground">Instant Engagement</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        AI chatbot engages leads within 2 minutes of form submission with personalized conversation
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20">
                      <div className="flex items-center gap-3 mb-3">
                        <Brain className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold text-foreground">Smart Scoring</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        GPT-powered analysis scores leads based on intent, budget, timeline, and authority
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20">
                      <div className="flex items-center gap-3 mb-3">
                        <Target className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold text-foreground">Data Enrichment</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Automatic company and contact enrichment via Apify for complete lead profiles
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20">
                      <div className="flex items-center gap-3 mb-3">
                        <Users className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold text-foreground">Smart Routing</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Qualified leads auto-assigned to reps based on territory, expertise, and availability
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                See It In Action
              </h2>

              <div className="relative aspect-video rounded-3xl bg-card/50 border border-border/50 overflow-hidden
                transform transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_60px_rgba(255,169,40,0.15)]">
                {/* Video Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-transparent">
                  <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mb-4
                    cursor-pointer transform transition-all duration-300 hover:scale-110 hover:bg-primary/30 hover:shadow-[0_0_30px_rgba(255,169,40,0.4)]">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                  <p className="text-muted-foreground">Demo video coming soon</p>
                  <p className="text-sm text-muted-foreground/60 mt-1">Contact me for a live demonstration</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Technology Stack
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="group p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm
                      transform transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(255,169,40,0.1)] hover:scale-[1.02]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0
                        group-hover:bg-primary/20 transition-colors duration-300">
                        <tech.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                          {tech.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{tech.description}</p>
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
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Results & Impact
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
                    <span className="text-sm text-muted-foreground">{result.label}</span>
                  </div>
                ))}
              </div>

              <div className="bg-card/50 rounded-3xl border border-border/50 p-8 backdrop-blur-sm">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  Key Outcomes
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Sales team now focuses only on pre-qualified, high-intent leads</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>60% increase in booked sales meetings within first month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Lead response time dropped from 4 hours to under 2 minutes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Sales cycle shortened by 30% with better-qualified pipeline</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl border border-primary/20 p-8 md:p-12
                transform transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,169,40,0.15)]">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Ready to Qualify Leads Automatically?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Let's discuss how AI-powered lead qualification can supercharge your sales pipeline
                </p>

                <Button variant="hero" size="xl" className="text-sm px-4 py-3 md:text-base md:px-6 md:py-4" asChild>
                  <a
                    href="https://calendly.com/aiagent9001/30min?background_color=000000&text_color=ffffff&primary_color=e9a41e"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Bot className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    <span className="hidden sm:inline">Book Your Free Consultation</span>
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

export default AILeadQualificationCaseStudy;
