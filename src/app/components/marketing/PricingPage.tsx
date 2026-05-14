import { Check, ChevronRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router";
import { MarketingShell } from "./MarketingShell";

const plans = [
  {
    name: "Starter",
    priceNote: "For early creators",
    accent: false,
    features: [
      "Storage: Essential library",
      "Streaming hours: Creator-ready",
      "Analytics access: Basic insights",
      "Revenue sharing: Standard",
      "Creator support: Community",
      "Premium tools: Limited",
    ],
  },
  {
    name: "Professional",
    priceNote: "For serious releases",
    accent: true,
    features: [
      "Storage: Expanded library",
      "Streaming hours: High volume",
      "Analytics access: Advanced summaries",
      "Revenue sharing: Improved",
      "Creator support: Priority",
      "Premium tools: Included",
    ],
  },
  {
    name: "Studio",
    priceNote: "For studios & catalogs",
    accent: false,
    features: [
      "Storage: Studio catalog",
      "Streaming hours: Studio scale",
      "Analytics access: Export-ready",
      "Revenue sharing: Studio terms",
      "Creator support: Dedicated",
      "Premium tools: Studio suite",
    ],
  },
  {
    name: "Enterprise",
    priceNote: "Custom partnerships",
    accent: false,
    features: [
      "Storage: Custom",
      "Streaming hours: Custom",
      "Analytics access: Custom",
      "Revenue sharing: Custom",
      "Creator support: SLA",
      "Premium tools: Custom",
    ],
  },
] as const;

export function PricingPage() {
  const navigate = useNavigate();

  return (
    <MarketingShell>
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full" style={{ background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.3)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A227" }} />
            <span style={{ color: "#C9A227", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Pricing</span>
          </div>

          <h1 style={{ color: "#F5F0E8", fontWeight: 800, fontSize: "clamp(2.25rem, 5vw, 3.6rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Elegant plans for a premium streaming ecosystem
          </h1>
          <p style={{ color: "#8B8799", marginTop: 14, lineHeight: 1.7 }}>
            Designed for creators, studios, and partners building cinematic distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl p-7"
              style={{
                background: "rgba(19,19,28,0.92)",
                border: plan.accent ? "1px solid rgba(201,162,39,0.35)" : "1px solid rgba(255,255,255,0.06)",
                boxShadow: plan.accent ? "0 0 0 1px rgba(201,162,39,0.12), 0 30px 80px rgba(201,162,39,0.10)" : undefined,
                transition: "transform 0.15s, border-color 0.2s",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLDivElement).style.borderColor = plan.accent ? "rgba(201,162,39,0.50)" : "rgba(201,162,39,0.20)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.borderColor = plan.accent ? "rgba(201,162,39,0.35)" : "rgba(255,255,255,0.06)";
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div style={{ color: "#F5F0E8", fontWeight: 800, fontSize: "1.1rem" }}>{plan.name}</div>
                  <div style={{ color: "#8B8799", fontSize: "0.9rem", marginTop: 4 }}>{plan.priceNote}</div>
                </div>
                {plan.accent ? <Sparkles size={18} color="#C9A227" /> : null}
              </div>

              <div className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <div key={f} className="flex gap-3 items-start">
                    <div className="mt-0.5 w-5 h-5 rounded-md flex items-center justify-center" style={{ background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.20)" }}>
                      <Check size={12} color="#C9A227" />
                    </div>
                    <div style={{ color: "#D4CFCA", fontSize: "0.9rem", lineHeight: 1.5 }}>{f}</div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => navigate("/portal")}
                className="mt-7 w-full flex items-center justify-center gap-2"
                style={{
                  background: plan.accent ? "#C9A227" : "rgba(255,255,255,0.06)",
                  color: plan.accent ? "#0B0B12" : "#F5F0E8",
                  fontWeight: 800,
                  padding: "0.8rem 1rem",
                  borderRadius: "0.75rem",
                  border: plan.accent ? "1px solid rgba(201,162,39,0.25)" : "1px solid rgba(255,255,255,0.06)",
                  transition: "transform 0.15s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  if (plan.accent) e.currentTarget.style.background = "#E0B83A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  if (plan.accent) e.currentTarget.style.background = "#C9A227";
                }}
              >
                Start Streaming Today <ChevronRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto rounded-2xl p-10 md:p-14 relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(201,162,39,0.10) 0%, rgba(19,19,28,0.9) 55%, rgba(11,11,18,1) 100%)", border: "1px solid rgba(201,162,39,0.18)" }}>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(201,162,39,0.12) 0%, transparent 60%)" }} />
          <div className="relative">
            <h2 style={{ color: "#F5F0E8", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", letterSpacing: "-0.03em" }}>
              Need enterprise distribution?
            </h2>
            <p style={{ color: "#8B8799", marginTop: 12, lineHeight: 1.7, maxWidth: 760 }}>
              We offer custom plans for studios, partners, and large catalogs.
            </p>
            <div className="mt-8">
              <button type="button" onClick={() => navigate("/contact")} className="inline-flex items-center gap-2" style={{ background: "#C9A227", color: "#0B0B12", fontWeight: 800, padding: "0.9rem 1.7rem", borderRadius: "0.65rem" }}>
                Talk to Sales <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
