import { BriefcaseBusiness, ChevronRight, Handshake, Landmark, Sparkles, Users2 } from "lucide-react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { MarketingShell } from "./MarketingShell";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600";

const offerings = [
  {
    icon: Handshake,
    title: "Media Partnerships",
    description: "Curated programming, collections, and premium placement for high-quality catalogs.",
  },
  {
    icon: Users2,
    title: "Studio Collaborations",
    description: "Co-marketing, premieres, and distribution strategies aligned with studio releases.",
  },
  {
    icon: Sparkles,
    title: "Sponsorship Opportunities",
    description: "Brand-safe sponsorship packages with cinematic creative direction.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Enterprise Streaming",
    description: "Private releases, internal portals, and event streaming with premium delivery.",
  },
  {
    icon: Landmark,
    title: "Investor Highlights",
    description: "A creator-economy platform built for long-term growth and global distribution.",
  },
];

const logos = ["Addis Studio Group", "Nile Media", "Habesha Pictures", "Kush Originals", "Sahel Ventures", "Horn Digital"]; 

export function PartnersPage() {
  const navigate = useNavigate();

  return (
    <MarketingShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={HERO_IMAGE} alt="Partners" className="w-full h-full object-cover" style={{ filter: "brightness(0.2) saturate(0.85)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,11,18,0.6) 0%, rgba(11,11,18,0.88) 60%, #0B0B12 100%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top, rgba(201,162,39,0.06) 0%, transparent 70%)" }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full" style={{ background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.3)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A227" }} />
            <span style={{ color: "#C9A227", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Partners</span>
          </div>

          <h1 style={{ color: "#F5F0E8", fontWeight: 800, fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: "1.1", letterSpacing: "-0.03em" }}>
            Partner With the Future of <span style={{ color: "#C9A227" }}>African Streaming</span>
          </h1>
          <p style={{ color: "#8B8799", fontSize: "clamp(1rem, 1.8vw, 1.15rem)", lineHeight: "1.7", maxWidth: 800, marginTop: "1rem" }}>
            For studios, production companies, investors, and collaborators building premium distribution ecosystems.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="flex items-center justify-center gap-2"
              style={{ background: "#C9A227", color: "#0B0B12", fontWeight: 800, fontSize: "1rem", padding: "0.9rem 1.6rem", borderRadius: "0.6rem", transition: "background 0.2s, transform 0.15s", boxShadow: "0 0 0 1px rgba(201,162,39,0.25), 0 18px 50px rgba(201,162,39,0.10)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#E0B83A";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#C9A227";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Become a Partner <ChevronRight size={18} />
            </button>

            <button
              type="button"
              onClick={() => navigate("/distribution")}
              className="flex items-center justify-center gap-2"
              style={{ color: "#F5F0E8", fontWeight: 650, fontSize: "1rem", padding: "0.9rem 1.6rem", borderRadius: "0.6rem", border: "1px solid rgba(255,255,255,0.15)", transition: "border-color 0.2s, transform 0.15s" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Explore Distribution <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 style={{ color: "#F5F0E8", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", letterSpacing: "-0.02em" }}>Partnership opportunities</h2>
          <p style={{ color: "#8B8799", marginTop: 10, maxWidth: 760, lineHeight: 1.7 }}>
            Premium, brand-safe partnership models designed for creators and studios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((o) => {
            const Icon = o.icon;
            return (
              <div
                key={o.title}
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
                <div style={{ color: "#F5F0E8", fontWeight: 650, fontSize: "1.05rem" }}>{o.title}</div>
                <p style={{ color: "#8B8799", marginTop: 10, lineHeight: 1.65, fontSize: "0.92rem" }}>{o.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 style={{ color: "#F5F0E8", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", letterSpacing: "-0.02em" }}>Partner logos</h2>
          <p style={{ color: "#8B8799", marginTop: 10, maxWidth: 760, lineHeight: 1.7 }}>
            A premium ecosystem in formation — built for long-term collaboration.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {logos.map((name) => (
            <div key={name} className="px-4 py-2 rounded-full" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", color: "#8B8799", fontSize: "0.9rem" }}>
              {name}
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto rounded-2xl p-10 md:p-14 relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(201,162,39,0.10) 0%, rgba(19,19,28,0.9) 55%, rgba(11,11,18,1) 100%)", border: "1px solid rgba(201,162,39,0.18)" }}>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(201,162,39,0.12) 0%, transparent 60%)" }} />
          <div className="relative">
            <h2 style={{ color: "#F5F0E8", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", letterSpacing: "-0.03em" }}>Become a Partner</h2>
            <p style={{ color: "#8B8799", marginTop: 12, lineHeight: 1.7, maxWidth: 760 }}>
              Let’s build a premium streaming ecosystem for African storytelling.
            </p>
            <div className="mt-8">
              <button type="button" onClick={() => navigate("/contact")} className="inline-flex items-center gap-2" style={{ background: "#C9A227", color: "#0B0B12", fontWeight: 800, padding: "0.9rem 1.7rem", borderRadius: "0.65rem" }}>
                Become a Partner <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
