import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Play } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const POSTER = "https://images.unsplash.com/photo-1615963644057-838b0829d95b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYW4lMjBsYW5kc2NhcGUlMjBjaW5lbWF0aWMlMjBmaWxtfGVufDF8fHx8MTc3ODY3ODI0NXww&ixlib=rb-4.1.0&q=80&w=1600";

const titlesById: Record<string, { title: string; description: string }> = {
  "1": { title: "Lalibela Rising", description: "A breathtaking journey through the ancient rock-hewn churches of Lalibela." },
  "2": { title: "Meskel Square", description: "A city story told through light, rhythm, and everyday moments." },
  "3": { title: "The Crown of Aksum", description: "A historical tale tracing legends and lost artifacts." },
  "4": { title: "Mountains of Simien", description: "A nature documentary exploring Ethiopia’s highlands." },
  "5": { title: "Addis After Dark", description: "A thriller set in the city that never truly sleeps." },
  "6": { title: "Diaspora Blues", description: "A drama about home, memory, and identity across borders." },
};

export function VideoPlayer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const meta = (id && titlesById[id]) || { title: "Video", description: "" };

  return (
    <div className="min-h-screen" style={{ background: "#0B0B12" }}>
      {/* Minimal header */}
      <div className="flex items-center gap-4 px-6 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <button onClick={() => navigate("/home")} className="flex items-center gap-2" style={{ color: "#8B8799", fontSize: "0.875rem", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "#F5F0E8")} onMouseLeave={e => (e.currentTarget.style.color = "#8B8799")}>
          <ArrowLeft size={18} />
          Back to Home
        </button>
        <div className="flex items-center gap-2 ml-auto">
          <div className="w-6 h-6 rounded-sm flex items-center justify-center" style={{ background: "#C9A227" }}>
            <Play size={11} fill="#0B0B12" color="#0B0B12" />
          </div>
          <span style={{ color: "#F5F0E8", fontWeight: 700, letterSpacing: "-0.02em", fontSize: "0.95rem" }}>
            TRAID <span style={{ color: "#C9A227" }}>Stream</span>
          </span>
        </div>
      </div>

      <div className="px-6 md:px-10 py-8 max-w-5xl mx-auto">
        {/* Player area (UI placeholder) */}
        <div className="rounded-2xl overflow-hidden" style={{ background: "#000", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="relative" style={{ aspectRatio: "16/9" }}>
            <ImageWithFallback src={POSTER} alt={meta.title} className="w-full h-full object-cover" style={{ filter: "brightness(0.6) saturate(0.85)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(11,11,18,0.85) 0%, transparent 65%)" }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(201,162,39,0.25)", border: "2px solid rgba(201,162,39,0.7)", backdropFilter: "blur(8px)" }}>
                <Play size={24} fill="#C9A227" color="#C9A227" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div style={{ color: "#8B8799", fontSize: "0.8rem" }}>Player UI placeholder</div>
            </div>
          </div>
        </div>

        {/* Minimal metadata */}
        <div className="mt-6">
          <h1 style={{ color: "#F5F0E8", fontWeight: 800, fontSize: "1.6rem", letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>{meta.title}</h1>
          {meta.description && (
            <p style={{ color: "#8B8799", fontSize: "0.95rem", lineHeight: "1.65", maxWidth: "700px" }}>{meta.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
