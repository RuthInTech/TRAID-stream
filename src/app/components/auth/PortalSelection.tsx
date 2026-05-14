import { useNavigate } from "react-router";
import { Play, MonitorPlay, Clapperboard, ChevronRight, ArrowLeft } from "lucide-react";

export function PortalSelection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0B0B12" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ background: "#C9A227" }}>
            <Play size={16} fill="#0B0B12" color="#0B0B12" />
          </div>
          <span style={{ color: "#F5F0E8", fontWeight: 700, fontSize: "1.25rem", letterSpacing: "-0.02em" }}>
            TRAID <span style={{ color: "#C9A227" }}>Stream</span>
          </span>
        </div>
        <button onClick={() => navigate("/")} className="flex items-center gap-1.5" style={{ color: "#8B8799", fontSize: "0.875rem", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "#F5F0E8")} onMouseLeave={e => (e.currentTarget.style.color = "#8B8799")}>
          <ArrowLeft size={16} />
          Back to Home
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        <div className="text-center mb-12">
          <h1 style={{ color: "#F5F0E8", fontWeight: 700, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
            Choose Your Experience
          </h1>
          <p style={{ color: "#8B8799", fontSize: "1rem" }}>
            Are you here to watch great content or to share yours with the world?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          {/* Viewer Card */}
          <button
            onClick={() => navigate("/auth/viewer")}
            className="group text-left p-8 rounded-2xl relative overflow-hidden"
            style={{ background: "#13131C", border: "1px solid rgba(255,255,255,0.08)", transition: "border-color 0.25s, transform 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,162,39,0.4)"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
          >
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,162,39,0.3), transparent)" }} />
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(201,162,39,0.1)", border: "1px solid rgba(201,162,39,0.2)" }}>
              <MonitorPlay size={26} style={{ color: "#C9A227" }} />
            </div>
            <h2 style={{ color: "#F5F0E8", fontWeight: 700, fontSize: "1.4rem", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
              I'm a Viewer
            </h2>
            <p style={{ color: "#8B8799", fontSize: "0.9rem", lineHeight: "1.65", marginBottom: "2rem" }}>
              Discover thousands of Ethiopian and African titles. Watch movies, series, documentaries, and live events — anytime, anywhere.
            </p>
            <ul className="space-y-2 mb-6">
              {["Free tier available", "Stream in 4K HDR", "Multi-device access", "Personalized recommendations"].map(item => (
                <li key={item} className="flex items-center gap-2.5" style={{ color: "#8B8799", fontSize: "0.85rem" }}>
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#C9A227" }} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2" style={{ color: "#C9A227", fontWeight: 600, fontSize: "0.9rem" }}>
              Sign up as Viewer <ChevronRight size={16} />
            </div>
          </button>

          {/* Studio Card */}
          <button
            onClick={() => navigate("/auth/studio")}
            className="group text-left p-8 rounded-2xl relative overflow-hidden"
            style={{ background: "#13131C", border: "1px solid rgba(255,255,255,0.08)", transition: "border-color 0.25s, transform 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,162,39,0.4)"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
          >
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,162,39,0.2), transparent)" }} />
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(201,162,39,0.08)", border: "1px solid rgba(201,162,39,0.15)" }}>
              <Clapperboard size={26} style={{ color: "#C9A227" }} />
            </div>
            <h2 style={{ color: "#F5F0E8", fontWeight: 700, fontSize: "1.4rem", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
              I'm a Studio
            </h2>
            <p style={{ color: "#8B8799", fontSize: "0.9rem", lineHeight: "1.65", marginBottom: "2rem" }}>
              Upload your films, series, and content to reach a growing audience. Keep it simple: add a title, description, and upload your file.
            </p>
            <ul className="space-y-2 mb-6">
              {["Upload videos", "Add title & description", "Drag & drop file upload", "Publish when ready"].map(item => (
                <li key={item} className="flex items-center gap-2.5" style={{ color: "#8B8799", fontSize: "0.85rem" }}>
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#C9A227" }} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2" style={{ color: "#C9A227", fontWeight: 600, fontSize: "0.9rem" }}>
              Sign up as Studio <ChevronRight size={16} />
            </div>
          </button>
        </div>

        <p className="mt-10 text-center" style={{ color: "#4A4860", fontSize: "0.85rem" }}>
          Already have an account?{" "}
          <button onClick={() => navigate("/auth/viewer")} style={{ color: "#C9A227", fontWeight: 500 }}>
            Sign in here
          </button>
        </p>
      </div>
    </div>
  );
}
