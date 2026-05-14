import { ChevronRight, Compass, Flag, Globe2, Sparkles, Users } from "lucide-react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { MarketingShell } from "./MarketingShell";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1526481280695-3c687fd5432c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600";

const pillars = [
  {
    icon: Flag,
    title: "Company Mission",
    description: "TRAID Stream exists to amplify African voices through world-class streaming infrastructure and cinematic digital experiences.",
  },
  {
    icon: Compass,
    title: "Vision",
    description: "A premium ecosystem where African creators distribute globally — with ownership, dignity, and cultural depth.",
  },
  {
    icon: Globe2,
    title: "Creator Economy Impact",
    description: "Tools and partnerships that help studios sustain production and reach audiences worldwide.",
  },
  {
    icon: Sparkles,
    title: "Storytelling Movement",
    description: "A platform designed to elevate the next era of African cinema, documentaries, series, and digital originals.",
  },
];

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <MarketingShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={HERO_IMAGE} alt="About" className="w-full h-full object-cover" style={{ filter: "brightness(0.2) saturate(0.85)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,11,18,0.6) 0%, rgba(11,11,18,0.9) 60%, #0B0B12 100%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top, rgba(201,162,39,0.06) 0%, transparent 70%)" }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full" style={{ background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.3)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A227" }} />
            <span style={{ color: "#C9A227", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>About</span>
          </div>

          <h1 style={{ color: "#F5F0E8", fontWeight: 800, fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: "1.1", letterSpacing: "-0.03em" }}>
            Empowering African Stories Through <span style={{ color: "#C9A227" }}>Technology</span>
          </h1>

          <p style={{ color: "#8B8799", fontSize: "clamp(1rem, 1.8vw, 1.15rem)", lineHeight: "1.7", maxWidth: 840, marginTop: "1rem" }}>
            TRAID Stream exists to amplify African voices through world-class streaming infrastructure and cinematic digital experiences.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={() => navigate("/creators")}
              className="flex items-center justify-center gap-2"
              style={{ background: "#C9A227", color: "#0B0B12", fontWeight: 800, fontSize: "1rem", padding: "0.9rem 1.6rem", borderRadius: "0.6rem" }}
            >
              Explore Creators <ChevronRight size={18} />
            </button>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="flex items-center justify-center gap-2"
              style={{ color: "#F5F0E8", fontWeight: 650, fontSize: "1rem", padding: "0.9rem 1.6rem", borderRadius: "0.6rem", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              Contact Us <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 style={{ color: "#F5F0E8", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", letterSpacing: "-0.02em" }}>Mission, vision, and impact</h2>
          <p style={{ color: "#8B8799", marginTop: 10, maxWidth: 820, lineHeight: 1.7 }}>
            A premium African storytelling movement — built with modern distribution technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-7 rounded-xl"
                style={{ background: "rgba(19,19,28,0.92)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(8px)", transition: "transform 0.15s, border-color 0.2s" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,162,39,0.22)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: "rgba(201,162,39,0.1)" }}>
                  <Icon size={22} style={{ color: "#C9A227" }} />
                </div>
                <div style={{ color: "#F5F0E8", fontWeight: 700, fontSize: "1.05rem" }}>{p.title}</div>
                <p style={{ color: "#8B8799", marginTop: 10, lineHeight: 1.65, fontSize: "0.92rem" }}>{p.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="mb-10 flex items-center justify-between gap-8">
          <div>
            <h2 style={{ color: "#F5F0E8", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", letterSpacing: "-0.02em" }}>Team</h2>
            <p style={{ color: "#8B8799", marginTop: 10, maxWidth: 760, lineHeight: 1.7 }}>
              A small team building a premium creator-first platform.
            </p>
          </div>
          <Users size={22} color="#C9A227" className="hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Product", "Distribution", "Creator Success"].map((role) => (
            <div key={role} className="p-7 rounded-xl" style={{ background: "#13131C", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, rgba(201,162,39,0.30), rgba(201,162,39,0.08) 70%)", border: "1px solid rgba(201,162,39,0.20)" }} />
                <div>
                  <div style={{ color: "#F5F0E8", fontWeight: 800 }}>{role}</div>
                  <div style={{ color: "#8B8799", marginTop: 2, fontSize: "0.9rem" }}>TRAID Stream</div>
                </div>
              </div>
              <p style={{ color: "#D4CFCA", marginTop: 14, lineHeight: 1.65, fontSize: "0.92rem" }}>
                Building premium UX, infrastructure, and creator tools with a cinematic-first product mindset.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto rounded-2xl p-10 md:p-14 relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(201,162,39,0.10) 0%, rgba(19,19,28,0.9) 55%, rgba(11,11,18,1) 100%)", border: "1px solid rgba(201,162,39,0.18)" }}>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(201,162,39,0.12) 0%, transparent 60%)" }} />
          <div className="relative">
            <h2 style={{ color: "#F5F0E8", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", letterSpacing: "-0.03em" }}>Future goals</h2>
            <p style={{ color: "#8B8799", marginTop: 12, lineHeight: 1.7, maxWidth: 820 }}>
              Expand distribution, deepen creator tooling, and grow a premium catalog that represents the breadth of African storytelling.
            </p>
            <div className="mt-8">
              <button type="button" onClick={() => navigate("/contact")} className="inline-flex items-center gap-2" style={{ background: "#C9A227", color: "#0B0B12", fontWeight: 800, padding: "0.9rem 1.7rem", borderRadius: "0.65rem" }}>
                Join the Movement <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
