import { useNavigate } from "react-router";
import { Play, Loader } from "lucide-react";
import { useEffect } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useVideoList } from "../../../api/hooks";

export function ViewerHome() {
  const navigate = useNavigate();
  const { videos, loading, error, fetchVideos } = useVideoList();

  useEffect(() => {
    fetchVideos(1, 20);
  }, []);

  if (error) {
    return (
      <div className="min-h-screen" style={{ background: "#0B0B12" }}>
        <div className="flex items-center justify-between px-6 md:px-10 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}> 
            <div className="w-7 h-7 rounded-sm flex items-center justify-center" style={{ background: "#C9A227" }}>
              <Play size={13} fill="#0B0B12" color="#0B0B12" />
            </div>
            <span style={{ color: "#F5F0E8", fontWeight: 700, letterSpacing: "-0.02em" }}>
              TRAID <span style={{ color: "#C9A227" }}>Stream</span>
            </span>
          </div>
        </div>
        <div className="px-6 md:px-10 py-12 max-w-6xl mx-auto">
          <div style={{ color: "#EF4444", fontSize: "0.95rem", textAlign: "center" }}>
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#0B0B12" }}>
      {/* Minimal header */}
      <div className="flex items-center justify-between px-6 md:px-10 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}> 
          <div className="w-7 h-7 rounded-sm flex items-center justify-center" style={{ background: "#C9A227" }}>
            <Play size={13} fill="#0B0B12" color="#0B0B12" />
          </div>
          <span style={{ color: "#F5F0E8", fontWeight: 700, letterSpacing: "-0.02em" }}>
            TRAID <span style={{ color: "#C9A227" }}>Stream</span>
          </span>
        </div>
      </div>

      <div className="px-6 md:px-10 py-8 max-w-6xl mx-auto">
        <h1 style={{ color: "#F5F0E8", fontWeight: 700, fontSize: "1.4rem", letterSpacing: "-0.02em" }}>Recommended</h1>
        <p style={{ color: "#8B8799", fontSize: "0.9rem", marginTop: "0.25rem", marginBottom: "1.5rem" }}>
          {loading ? "Loading videos..." : `${videos.length} videos available`}
        </p>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="flex flex-col items-center gap-3">
              <Loader size={32} style={{ color: "#C9A227", animation: "spin 1s linear infinite" }} />
              <p style={{ color: "#8B8799" }}>Loading videos...</p>
            </div>
          </div>
        ) : videos.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {videos.map(v => (
              <button
                key={v.id}
                onClick={() => navigate(`/watch/${v.id}`)}
                className="text-left rounded-xl overflow-hidden"
                style={{ background: "#13131C", border: "1px solid rgba(255,255,255,0.06)", transition: "border-color 0.2s, transform 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,162,39,0.25)"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
              >
                <div className="relative" style={{ aspectRatio: "16/9" }}>
                  <ImageWithFallback 
                    src={v.posterUrl || "https://images.unsplash.com/photo-1615963644057-838b0829d95b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"} 
                    alt={v.title} 
                    className="w-full h-full object-cover" 
                    style={{ filter: "brightness(0.8)" }} 
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(11,11,18,0.9) 0%, transparent 65%)" }} />
                </div>
                <div className="p-3">
                  <div style={{ color: "#F5F0E8", fontSize: "0.9rem", fontWeight: 600 }} className="line-clamp-1">{v.title}</div>
                  <div style={{ color: "#4A4860", fontSize: "0.78rem", marginTop: "0.25rem" }}>Tap to watch</div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div style={{ color: "#8B8799", textAlign: "center", paddingY: "2rem" }}>
            No videos available at the moment.
          </div>
        )}
      </div>
    </div>
  );
}
