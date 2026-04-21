import profileImage from "@/assets/mostafa-profile.png";
const coreSkills = ["n8n", "REST APIs", "Webhooks", "Vibe Coding"];
const intelligenceSkills = ["RAG Agents", "LLM (Gemini/OpenAI)", "Ethical Scraping"];
const businessSkills = ["CRM Integrations", "Payment Gateways", "Shopify"];
const stats = [{
  value: "6+",
  label: "Months Focused Dev"
}, {
  value: "100%",
  label: "Data Security Focus"
}, {
  value: "24/7",
  label: "Automated Systems"
}];
const SkillChip = ({
  skill
}: {
  skill: string;
}) => <span className="inline-flex items-center px-4 py-2 rounded-full bg-neutral-800/80 border border-white/20 text-sm font-medium text-white/90 transition-all duration-300 hover:border-accent/60 hover:shadow-[0_0_20px_rgba(255,169,40,0.3)] hover:bg-neutral-800 cursor-default">
    {skill}
  </span>;
const AboutSection = () => {
  return <section id="about" className="relative py-24 md:py-32 overflow-hidden">
    {/* Hero-style background */}
    <div className="absolute inset-0 bg-noise pointer-events-none" />
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/12 rounded-full blur-[130px]" />
    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
    <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-50" />

    <div className="container relative z-10 px-6 md:px-8 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
          The Developer
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient">
          Meet the Developer
        </h2>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Vision Statement - Full Width */}
        <div className="lg:col-span-12">
          <div className="relative rounded-2xl bg-neutral-900/50 backdrop-blur-sm border border-white/10 p-8 md:p-12 overflow-hidden group transition-all duration-500 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(255,169,40,0.15)] hover:scale-[1.01]">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <p className="relative text-2xl md:text-3xl lg:text-4xl font-display font-bold text-center leading-relaxed">
              "Bringing the{" "}
              <span className="text-accent">unfair advantage</span> of{" "}
              <span className="text-accent">AI & Automation</span> to local businesses."
            </p>
          </div>
        </div>

        {/* Profile & Story Card - Left */}
        <div className="lg:col-span-5">
          <div className="h-full rounded-2xl bg-neutral-900/50 backdrop-blur-sm border border-white/10 p-6 md:p-8 flex flex-col transition-all duration-500 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(255,169,40,0.15)] hover:scale-[1.02] group">
            {/* Profile Header */}
            <div className="flex items-start gap-6 mb-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-accent/40 to-accent/10 rounded-2xl blur-sm" />
                <img alt="Mostafa - LunAI Founder" className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover border-2 border-accent/30" src="https://i.ibb.co/n8c3x7dT/Whats-App-Image-2025-12-06-at-13-29-20-dd4d4682.jpg" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-1">
                  Mostafa
                </h3>
                <p className="text-accent font-medium">Founder, LunAI</p>
                <p className="text-muted-foreground text-sm mt-1">
                  n8n Automation Specialist
                </p>
              </div>
            </div>

            {/* Story */}
            <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
              I founded <span className="text-white font-medium">LunAI</span> to stop the waste of time and money in manual operations. I build{" "}
              <span className="text-accent">secure, efficient, and dashboard-controlled</span> automation systems that give businesses the competitive edge they deserve.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              {stats.map((stat, index) => <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-display font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground leading-tight">
                  {stat.label}
                </div>
              </div>)}
            </div>
          </div>
        </div>

        {/* Tech Stack Card - Right */}
        <div className="lg:col-span-7">
          <div className="h-full rounded-2xl bg-neutral-900/50 backdrop-blur-sm border border-white/10 p-6 md:p-8 transition-all duration-500 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(255,169,40,0.15)] hover:scale-[1.02] group">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white">
                  The Engine
                </h3>
                <p className="text-sm text-muted-foreground">
                  Tech Stack & Expertise
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="space-y-6">
              {/* Core Skills */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm font-medium text-white/70 uppercase tracking-wider">
                    Core
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {coreSkills.map(skill => <SkillChip key={skill} skill={skill} />)}
                </div>
              </div>

              {/* Intelligence Skills */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm font-medium text-white/70 uppercase tracking-wider">
                    Intelligence
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {intelligenceSkills.map(skill => <SkillChip key={skill} skill={skill} />)}
                </div>
              </div>

              {/* Business Skills */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm font-medium text-white/70 uppercase tracking-wider">
                    Business
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {businessSkills.map(skill => <SkillChip key={skill} skill={skill} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default AboutSection;