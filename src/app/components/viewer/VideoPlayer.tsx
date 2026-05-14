import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Play, Loader, AlertCircle } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useVideoDetails, useVideoAuth, useWatchHistory } from "../../../api/hooks";

export function VideoPlayer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { video, loading, error, fetchVideo } = useVideoDetails(id || null);
  const { authorized, authVideo } = useVideoAuth();
  const { fetchHistory } = useWatchHistory(id || null);

  useEffect(() => {
    if (id) {
      fetchVideo();
      fetchHistory();
    }
  }, [id]);

  useEffect(() => {
    if (id && !loading) {
      authVideo(id, 0);
    }
  }, [id, loading]);

  if (error) {
    return (
      <div className="min-h-screen" style={{ background: "#0B0B12" }}>
        <div className="flex items-center gap-4 px-6 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <button onClick={() => navigate("/home")} className="flex items-center gap-2" style={{ color: "#8B8799", fontSize: "0.875rem", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "#F5F0E8")} onMouseLeave={e => (e.currentTarget.style.color = "#8B8799")}>
            <ArrowLeft size={18} />
            Back to Home
          </button>
        </div>
        <div className="px-6 md:px-10 py-8 max-w-5xl mx-auto">
          <div className="flex items-center gap-3" style={{ color: "#EF4444" }}>
            <AlertCircle size={20} />
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#0B0B12" }}>
      {/* Header */}
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
        {/* Player area */}
        <div className="rounded-2xl overflow-hidden" style={{ background: "#000", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="relative" style={{ aspectRatio: "16/9" }}>
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center" style={{ background: "#1C1C28" }}>
                <Loader size={40} style={{ color: "#C9A227", animation: "spin 1s linear infinite" }} />
              </div>
            ) : (
              <>
                <ImageWithFallback src={video?.posterUrl || "https://images.unsplash.com/photo-1615963644057-838b0829d95b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"} alt={video?.title || "Video"} className="w-full h-full object-cover" style={{ filter: "brightness(0.6) saturate(0.85)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(11,11,18,0.85) 0%, transparent 65%)" }} />
                {!authorized && (
                  <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.5)" }}>
                    <div style={{ color: "#F5F0E8", textAlign: "center" }}>
                      <p style={{ fontSize: "0.95rem" }}>Checking access...</p>
                    </div>
                  </div>
                )}
                {authorized && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(201,162,39,0.25)", border: "2px solid rgba(201,162,39,0.7)", backdropFilter: "blur(8px)" }}>
                      <Play size={24} fill="#C9A227" color="#C9A227" />
                    </div>
                  </div>
                )}
              </>
            )}
            <div className="absolute bottom-4 left-4 right-4">
              <div style={{ color: "#8B8799", fontSize: "0.8rem" }}>Player placeholder - HLS integration pending</div>
            </div>
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-6">
          {loading ? (
            <div className="flex gap-3 items-center">
              <Loader size={20} style={{ color: "#C9A227", animation: "spin 1s linear infinite" }} />
              <span style={{ color: "#8B8799" }}>Loading video...</span>
            </div>
          ) : video ? (
            <>
              <h1 style={{ color: "#F5F0E8", fontWeight: 800, fontSize: "1.6rem", letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>{video.title}</h1>
              {video.description && (
                <p style={{ color: "#8B8799", fontSize: "0.95rem", lineHeight: "1.65", maxWidth: "700px" }}>{video.description}</p>
              )}
              <div style={{ color: "#4A4860", fontSize: "0.85rem", marginTop: "1rem" }}>
                <p>Status: <span style={{ color: "#C9A227" }}>{video.status}</span></p>
                {video.viewCount && <p>Views: {video.viewCount}</p>}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
