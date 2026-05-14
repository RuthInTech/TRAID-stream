import { ChevronRight, Film, Shield, Sparkles, TrendingUp, Upload, Wallet } from "lucide-react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { MarketingShell } from "./MarketingShell";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1542204165-65bf26472b9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600";

const workflow = [
  {
    icon: Upload,
    title: "Upload Workflow",
    description: "A clean studio flow: title, description, and your master file — ready for review and publishing.",
  },
  {
    icon: Shield,
    title: "Content Protection",
    description: "Studio-grade security and policy controls designed to protect premium films and originals.",
  },
  {
    icon: Sparkles,
    title: "Cinematic Presentation",
    description: "Poster-first layouts, premium typography, and a distraction-free viewer experience.",
  },
];

const monetization = [
  {
    icon: Wallet,
    title: "Revenue Sharing",
    description: "Flexible splits and studio-ready agreements built for long-term creator sustainability.",
  },
  {
    icon: TrendingUp,
    title: "Audience Growth",
    description: "Discovery surfaces designed around taste, culture, and community — not noise.",
  },
  {
    icon: Film,
    title: "Release Strategy",
    description: "Launch like a studio: featured premieres, collections, and brand-safe placement.",
  },
];

const spotlight = [
  {
    name: "Addis Auteur",
    role: "Feature Films",
    note: "Festival-ready releases with premium distribution.",
  },
  {
    name: "Nile Documentary",
    role: "Documentaries",
    note: "Impact storytelling with global reach.",
  },
  {
    name: "Kush Series Studio",
    role: "Series & Originals",
    note: "Episodic storytelling designed for binge-worthy viewing.",
  },
];

export function CreatorsPage() {
  const navigate = useNavigate();

  return (
    <MarketingShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={HERO_IMAGE} alt="Creators" className="w-full h-full object-cover" style={{ filter: "brightness(0.22) saturate(0.85)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,11,18,0.6) 0%, rgba(11,11,18,0.85) 60%, #0B0B12 100%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top, rgba(201,162,39,0.06) 0%, transparent 70%)" }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full" style={{ background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.3)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A227" }} />
            <span style={{ color: "#C9A227", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Creators</span>
          </div>

          <h1 style={{ color: "#F5F0E8", fontWeight: 800, fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: "1.1", letterSpacing: "-0.03em" }}>
            Built for <span style={{ color: "#C9A227" }}>African Creators</span>
          </h1>
          <p style={{ color: "#8B8799", fontSize: "clamp(1rem, 1.8vw, 1.15rem)", lineHeight: "1.7", maxWidth: 720, marginTop: "1rem" }}>
            Publish films, series, documentaries, and original content with professional streaming technology.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={() => navigate("/auth/studio")}
              className="flex items-center justify-center gap-2"
              style={{ background: "#C9A227", color: "#0B0B12", fontWeight: 700, fontSize: "1rem", padding: "0.9rem 1.6rem", borderRadius: "0.6rem", transition: "background 0.2s, transform 0.15s", boxShadow: "0 0 0 1px rgba(201,162,39,0.25), 0 18px 50px rgba(201,162,39,0.10)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#E0B83A";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#C9A227";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Upload Your First Film <ChevronRight size={18} />
            </button>

            <button
              type="button"
              onClick={() => navigate("/partners")}
              className="flex items-center justify-center gap-2"
              style={{ color: "#F5F0E8", fontWeight: 600, fontSize: "1rem", padding: "0.9rem 1.6rem", borderRadius: "0.6rem", border: "1px solid rgba(255,255,255,0.15)", transition: "border-color 0.2s, transform 0.15s" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Talk to Partnerships <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 style={{ color: "#F5F0E8", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", letterSpacing: "-0.02em" }}>A studio-grade upload workflow</h2>
          <p style={{ color: "#8B8799", marginTop: 10, maxWidth: 720, lineHeight: 1.7 }}>
            Keep it minimal. Keep it premium. Focus on the film.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workflow.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
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
                <div style={{ color: "#F5F0E8", fontWeight: 650, fontSize: "1.05rem" }}>{item.title}</div>
                <p style={{ color: "#8B8799", marginTop: 10, lineHeight: 1.65, fontSize: "0.92rem" }}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 style={{ color: "#F5F0E8", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", letterSpacing: "-0.02em" }}>Monetization and analytics — without clutter</h2>
          <p style={{ color: "#8B8799", marginTop: 10, maxWidth: 760, lineHeight: 1.7 }}>
            Creator tools designed to be clear, fast, and investor-grade — not noisy dashboards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {monetization.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-7 rounded-xl"
                style={{ background: "#13131C", border: "1px solid rgba(255,255,255,0.06)", transition: "transform 0.15s, border-color 0.2s" }}
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
                <div style={{ color: "#F5F0E8", fontWeight: 650, fontSize: "1.05rem" }}>{item.title}</div>
                <p style={{ color: "#8B8799", marginTop: 10, lineHeight: 1.65, fontSize: "0.92rem" }}>{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-7 rounded-xl" style={{ background: "rgba(19,19,28,0.75)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(10px)" }}>
          <div style={{ color: "#C9A227", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Analytics Dashboard</div>
          <div style={{ color: "#F5F0E8", fontWeight: 700, fontSize: "1.25rem", marginTop: 10 }}>Track performance with cinematic simplicity</div>
          <p style={{ color: "#8B8799", marginTop: 10, lineHeight: 1.7, maxWidth: 820 }}>
            Understand watch-time, retention trends, and release performance with clean summaries and export-ready insights — without charts and clutter.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 style={{ color: "#F5F0E8", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", letterSpacing: "-0.02em" }}>Creator spotlight</h2>
          <p style={{ color: "#8B8799", marginTop: 10, maxWidth: 720, lineHeight: 1.7 }}>
            Premium positioning for studios shaping the next era of African storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {spotlight.map((c) => (
            <div
              key={c.name}
              className="p-7 rounded-xl"
              style={{ background: "#13131C", border: "1px solid rgba(255,255,255,0.06)", transition: "transform 0.15s, border-color 0.2s" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,162,39,0.22)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, rgba(201,162,39,0.32), rgba(201,162,39,0.08) 70%)", border: "1px solid rgba(201,162,39,0.22)" }} />
                <div>
                  <div style={{ color: "#F5F0E8", fontWeight: 700 }}>{c.name}</div>
                  <div style={{ color: "#8B8799", fontSize: "0.9rem", marginTop: 2 }}>{c.role}</div>
                </div>
              </div>
              <p style={{ color: "#D4CFCA", marginTop: 14, lineHeight: 1.65, fontSize: "0.92rem" }}>{c.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto rounded-2xl p-10 md:p-14 relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(201,162,39,0.10) 0%, rgba(19,19,28,0.9) 55%, rgba(11,11,18,1) 100%)", border: "1px solid rgba(201,162,39,0.18)" }}>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(201,162,39,0.12) 0%, transparent 60%)" }} />
          <div className="relative">
            <h2 style={{ color: "#F5F0E8", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", letterSpacing: "-0.03em" }}>
              Ready to launch your next film?
            </h2>
            <p style={{ color: "#8B8799", marginTop: 12, lineHeight: 1.7, maxWidth: 760 }}>
              Start with a premium upload flow and scale into global distribution.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => navigate("/auth/studio")}
                className="flex items-center justify-center gap-2"
                style={{ background: "#C9A227", color: "#0B0B12", fontWeight: 800, padding: "0.9rem 1.7rem", borderRadius: "0.65rem" }}
              >
                Upload Your First Film <ChevronRight size={18} />
              </button>
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="flex items-center justify-center gap-2"
                style={{ color: "#F5F0E8", fontWeight: 650, padding: "0.9rem 1.7rem", borderRadius: "0.65rem", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                Contact Creator Support <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
