import { ChevronRight, Cloud, Cpu, Globe, Lock, Monitor, Signal, Wallet } from "lucide-react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { MarketingShell } from "./MarketingShell";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600";

const sections = [
  { icon: Globe, title: "Global CDN", description: "Premium delivery routes tuned for speed, stability, and cinematic quality across regions." },
  { icon: Cpu, title: "Smart Compression", description: "High quality at lower bandwidth — optimized transcodes and efficient packaging." },
  { icon: Signal, title: "Adaptive Streaming", description: "Smooth playback that adjusts to network conditions without degrading the experience." },
  { icon: Monitor, title: "Device Compatibility", description: "Designed for modern web viewing and scalable platform integrations." },
  { icon: Lock, title: "DRM & Security", description: "Protection controls aligned with premium content requirements and studio policies." },
  { icon: Wallet, title: "Monetization Models", description: "Support subscription, rentals, and studio-ready revenue strategies." },
  { icon: Cloud, title: "Streaming Analytics", description: "Clear, export-ready insights on performance and delivery health." },
] as const;

export function DistributionPage() {
  const navigate = useNavigate();

  return (
    <MarketingShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={HERO_IMAGE} alt="Distribution" className="w-full h-full object-cover" style={{ filter: "brightness(0.18) saturate(0.85)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,11,18,0.6) 0%, rgba(11,11,18,0.9) 60%, #0B0B12 100%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top, rgba(201,162,39,0.06) 0%, transparent 70%)" }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full" style={{ background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.3)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A227" }} />
            <span style={{ color: "#C9A227", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Distribution</span>
          </div>

          <h1 style={{ color: "#F5F0E8", fontWeight: 800, fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: "1.1", letterSpacing: "-0.03em" }}>
            Global Distribution for <span style={{ color: "#C9A227" }}>African Media</span>
          </h1>
          <p style={{ color: "#8B8799", fontSize: "clamp(1rem, 1.8vw, 1.15rem)", lineHeight: "1.7", maxWidth: 760, marginTop: "1rem" }}>
            Deliver cinematic-quality streaming experiences across devices and regions worldwide.
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
              Distribute Worldwide <ChevronRight size={18} />
            </button>

            <button
              type="button"
              onClick={() => navigate("/pricing")}
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
              View Pricing <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 style={{ color: "#F5F0E8", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", letterSpacing: "-0.02em" }}>Infrastructure designed for premium delivery</h2>
          <p style={{ color: "#8B8799", marginTop: 10, maxWidth: 760, lineHeight: 1.7 }}>
            A modern distribution layer built around quality, speed, and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
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
                <div style={{ color: "#F5F0E8", fontWeight: 650, fontSize: "1.05rem" }}>{s.title}</div>
                <p style={{ color: "#8B8799", marginTop: 10, lineHeight: 1.65, fontSize: "0.92rem" }}>{s.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto rounded-2xl p-10 md:p-14 relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(201,162,39,0.10) 0%, rgba(19,19,28,0.9) 55%, rgba(11,11,18,1) 100%)", border: "1px solid rgba(201,162,39,0.18)" }}>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(201,162,39,0.12) 0%, transparent 60%)" }} />
          <div className="relative">
            <h2 style={{ color: "#F5F0E8", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", letterSpacing: "-0.03em" }}>
              Ready for worldwide delivery?
            </h2>
            <p style={{ color: "#8B8799", marginTop: 12, lineHeight: 1.7, maxWidth: 760 }}>
              Talk to us about global distribution, studio solutions, and premium streaming rollouts.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button type="button" onClick={() => navigate("/contact")} style={{ background: "#C9A227", color: "#0B0B12", fontWeight: 800, padding: "0.9rem 1.7rem", borderRadius: "0.65rem" }}>
                Distribute Worldwide <ChevronRight size={18} />
              </button>
              <button type="button" onClick={() => navigate("/partners")} style={{ color: "#F5F0E8", fontWeight: 650, padding: "0.9rem 1.7rem", borderRadius: "0.65rem", border: "1px solid rgba(255,255,255,0.15)" }}>
                Partner With Us <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
