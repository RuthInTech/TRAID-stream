import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { ChevronRight, Globe, Play, Shield, Star, Users, Zap } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { MarketingShell } from "../marketing/MarketingShell";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1615963644057-838b0829d95b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600";
const CINEMA_IMAGE =
  "https://images.unsplash.com/photo-1759230766134-e3ff1c27d20e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600";
const CITY_IMAGE =
  "https://images.unsplash.com/photo-1769337950338-e9e7756f8e6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600";

const features = [
  {
    icon: Zap,
    title: "Ultra-Fast Streaming",
    description: "Adaptive bitrate CDN delivering 4K HDR content with sub-second buffering across Ethiopia and beyond.",
  },
  {
    icon: Globe,
    title: "Local First",
    description: "Ethiopian originals, regional cinema, and local content curated for African audiences worldwide.",
  },
  {
    icon: Shield,
    title: "Studio-Grade Security",
    description: "DRM protection, multi-DRM support, and watermarking for every piece of content on the platform.",
  },
  {
    icon: Users,
    title: "Creator Tools",
    description: "A premium creator flow for uploads, monetization, and distribution — designed to stay minimal.",
  },
];

type StatTarget = {
  label: string;
  target: number;
  format: (value: number) => string;
};

const testimonials = [
  {
    quote: "TRAID transformed how we distribute our films. The reach is unlike anything else in the region.",
    author: "Selam Tadesse",
    role: "Director, Addis Cinema House",
    rating: 5,
  },
  {
    quote: "Finally a platform that understands African storytelling. The quality and experience are world-class.",
    author: "Yonas Bekele",
    role: "Independent Filmmaker",
    rating: 5,
  },
  {
    quote: "Our audience momentum accelerated after launching on TRAID Stream.",
    author: "Marta Alemu",
    role: "CEO, Habesha Studios",
    rating: 5,
  },
];

export function LandingPage() {
  const navigate = useNavigate();

  const stats = useMemo<StatTarget[]>(
    () => [
      {
        label: "Active Viewers",
        target: 0,
        format: (v) => `${Math.round(v / 1000)}K+`,
      },
      {
        label: "Titles",
        target: 0,
        format: (v) => `${Math.round(v).toLocaleString()}+`,
      },
      {
        label: "Studio Partners",
        target: 0,
        format: (v) => `${Math.round(v)}+`,
      },
      {
        label: "Uptime SLA",
        target: 0,
        format: (v) => `${v.toFixed(1)}%`,
      },
    ],
    [],
  );

  const [statValues, setStatValues] = useState(() => stats.map(() => 0));

  useEffect(() => {
    const start = performance.now();
    const durationMs = 1200;

    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);

      setStatValues(stats.map((s) => s.target * eased));

      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [stats]);

  return (
    <MarketingShell>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={HERO_IMAGE} alt="African landscape" className="w-full h-full object-cover" style={{ filter: "brightness(0.22) saturate(0.85)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,11,18,0.35) 0%, rgba(11,11,18,0.78) 60%, #0B0B12 100%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(201,162,39,0.05) 0%, transparent 70%)" }} />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full" style={{ background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.3)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A227" }} />
            <span style={{ color: "#C9A227", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Premium African Streaming Ecosystem</span>
          </div>

          <h1 style={{ color: "#F5F0E8", fontWeight: 850, fontSize: "clamp(2.4rem, 6vw, 4.6rem)", lineHeight: "1.06", letterSpacing: "-0.035em", marginBottom: "1.2rem" }}>
            African Stories,<br />
            <span style={{ color: "#C9A227" }}>World-Class</span> Delivery
          </h1>

          <p style={{ color: "#8B8799", fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: "1.7", maxWidth: 820, margin: "0 auto 2.2rem" }}>
            TRAID Stream empowers African creators with modern streaming infrastructure, global distribution, and cinematic experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => navigate("/auth/viewer")}
              className="flex items-center gap-2"
              style={{ background: "#C9A227", color: "#0B0B12", fontWeight: 800, fontSize: "1rem", padding: "0.9rem 2rem", borderRadius: "0.65rem", transition: "background 0.2s, transform 0.15s", boxShadow: "0 0 0 1px rgba(201,162,39,0.25), 0 18px 50px rgba(201,162,39,0.10)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#E0B83A";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#C9A227";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Play size={18} fill="#0B0B12" />
              Start Watching
            </button>

            <button
              type="button"
              onClick={() => navigate("/creators")}
              className="flex items-center gap-2"
              style={{ color: "#F5F0E8", fontWeight: 650, fontSize: "1rem", padding: "0.9rem 2rem", borderRadius: "0.65rem", border: "1px solid rgba(255,255,255,0.15)", transition: "border-color 0.2s, transform 0.15s" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Explore Creators <ChevronRight size={18} />
            </button>
          </div>

          {/* Platform stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-10 mt-16">
            {stats.map((stat, idx) => (
              <div key={stat.label} className="text-center min-w-[120px]">
                <div style={{ color: "#C9A227", fontWeight: 850, fontSize: "1.75rem", letterSpacing: "-0.02em" }}>{stat.format(statValues[idx] ?? 0)}</div>
                <div style={{ color: "#4A4860", fontSize: "0.8rem", fontWeight: 500, marginTop: "0.2rem" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured creators */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-3 py-1 rounded-full" style={{ background: "rgba(201,162,39,0.1)", border: "1px solid rgba(201,162,39,0.2)" }}>
            <span style={{ color: "#C9A227", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Featured Creators</span>
          </div>
          <h2 style={{ color: "#F5F0E8", fontWeight: 750, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}>Studios shaping the next era</h2>
          <p style={{ color: "#8B8799", marginTop: 12, maxWidth: 760, marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
            Creator-first positioning with premium presentation and distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Addis Cinema House", role: "Feature Films", note: "Festival-ready releases with premium delivery." },
            { name: "Nile Documentary Lab", role: "Documentaries", note: "Impact stories designed for global reach." },
            { name: "Habesha Studios", role: "Series & Originals", note: "Episodic storytelling with cinematic UX." },
          ].map((c) => (
            <div
              key={c.name}
              className="p-7 rounded-xl"
              style={{ background: "rgba(19,19,28,0.92)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(10px)", transition: "transform 0.15s, border-color 0.2s" }}
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
                  <div style={{ color: "#F5F0E8", fontWeight: 800 }}>{c.name}</div>
                  <div style={{ color: "#8B8799", marginTop: 2, fontSize: "0.9rem" }}>{c.role}</div>
                </div>
              </div>
              <p style={{ color: "#D4CFCA", marginTop: 14, lineHeight: 1.65, fontSize: "0.92rem" }}>{c.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits / features */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full" style={{ background: "rgba(201,162,39,0.1)", border: "1px solid rgba(201,162,39,0.2)" }}>
            <span style={{ color: "#C9A227", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Platform Features</span>
          </div>
          <h2 style={{ color: "#F5F0E8", fontWeight: 700, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
            Built for the Next Era of African Media
          </h2>
          <p style={{ color: "#8B8799", fontSize: "1rem", maxWidth: "500px", margin: "0 auto" }}>
            Enterprise-grade infrastructure with a premium consumer experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="p-8 rounded-xl" style={{ background: "#13131C", border: "1px solid rgba(255,255,255,0.06)", transition: "border-color 0.2s" }} onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,162,39,0.2)")} onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)")}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: "rgba(201,162,39,0.1)" }}>
                  <Icon size={22} style={{ color: "#C9A227" }} />
                </div>
                <h3 style={{ color: "#F5F0E8", fontWeight: 600, fontSize: "1.1rem", marginBottom: "0.5rem" }}>{feature.title}</h3>
                <p style={{ color: "#8B8799", fontSize: "0.9rem", lineHeight: "1.65" }}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Cinematic showcase */}
      <section className="relative overflow-hidden py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-3 py-1 rounded-full" style={{ background: "rgba(201,162,39,0.1)", border: "1px solid rgba(201,162,39,0.2)" }}>
              <span style={{ color: "#C9A227", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Cinematic Showcase</span>
            </div>
            <h2 style={{ color: "#F5F0E8", fontWeight: 700, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "-0.02em", lineHeight: "1.2", marginBottom: "1rem" }}>
              Premium playback, elegant presentation
            </h2>
            <p style={{ color: "#8B8799", fontSize: "1rem", lineHeight: "1.7", marginBottom: "1.5rem" }}>
              A distraction-free player built for immersion, with modern delivery foundations and cinematic UI.
            </p>
            <ul className="space-y-3">
              {["Distraction-free viewing", "Fast startup and stable playback", "Premium typography and spacing", "Creator-first catalog presentation"].map((item) => (
                <li key={item} className="flex items-center gap-3" style={{ color: "#8B8799", fontSize: "0.9rem" }}>
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#C9A227" }} />
                  {item}
                </li>
              ))}
            </ul>
            <button onClick={() => navigate("/auth/viewer")} className="mt-8 flex items-center gap-2" style={{ color: "#C9A227", fontWeight: 700, fontSize: "0.9rem" }}>
              Start Watching <ChevronRight size={16} />
            </button>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-video" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <ImageWithFallback src={CINEMA_IMAGE} alt="Cinema experience" className="w-full h-full object-cover" style={{ filter: "brightness(0.7) saturate(0.8)" }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(201,162,39,0.2)", border: "2px solid rgba(201,162,39,0.6)", backdropFilter: "blur(8px)" }}>
                <Play size={24} fill="#C9A227" color="#C9A227" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 style={{ color: "#F5F0E8", fontWeight: 700, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
            Trusted by African Creators
          </h2>
          <p style={{ color: "#8B8799", fontSize: "1rem" }}>Real results from studios and filmmakers across the continent.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="p-6 rounded-xl" style={{ background: "#13131C", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="#C9A227" color="#C9A227" />
                ))}
              </div>
              <p style={{ color: "#D4CFCA", fontSize: "0.9rem", lineHeight: "1.65", marginBottom: "1.25rem" }}>"{t.quote}"</p>
              <div>
                <div style={{ color: "#F5F0E8", fontWeight: 600, fontSize: "0.9rem" }}>{t.author}</div>
                <div style={{ color: "#4A4860", fontSize: "0.8rem", marginTop: "0.2rem" }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* City CTA Section */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0">
          <ImageWithFallback src={CITY_IMAGE} alt="City at night" className="w-full h-full object-cover" style={{ filter: "brightness(0.15) saturate(0.5)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0B0B12 0%, rgba(11,11,18,0.5) 50%, #0B0B12 100%)" }} />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          <h2 style={{ color: "#F5F0E8", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em", lineHeight: "1.15", marginBottom: "1.25rem" }}>
            Join the Future of<br />African Streaming
          </h2>
          <p style={{ color: "#8B8799", fontSize: "1rem", lineHeight: "1.7", marginBottom: "2.5rem" }}>
            Whether you're a viewer looking for great stories or a studio ready to reach millions — TRAID Stream is your platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => navigate("/auth/viewer")} style={{ background: "#C9A227", color: "#0B0B12", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "0.5rem" }}>
              Watch Now — It's Free
            </button>
            <button onClick={() => navigate("/auth/studio")} style={{ color: "#F5F0E8", fontWeight: 600, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "0.5rem", border: "1px solid rgba(255,255,255,0.15)" }}>
              <Users size={16} className="inline mr-2" />
              Launch Your Studio
            </button>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
