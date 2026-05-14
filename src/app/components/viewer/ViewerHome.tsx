import { useNavigate } from "react-router";
import { Play } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const videos = [
  {
    id: "1",
    title: "Lalibela Rising",
    img: "https://images.unsplash.com/photo-1768590284178-9a6a32f3a1b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxFdGhpb3BpYW4lMjBsYW5kc2NhcGUlMjBjaW5lbWF0aWMlMjBmaWxtfGVufDF8fHx8MTc3ODY3ODI0NXww&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    id: "2",
    title: "Meskel Square",
    img: "https://images.unsplash.com/photo-1778503175903-151f7b8f3b37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwZmlsbSUyMGRvY3VtZW50YXJ5JTIwc3Rvcnl0ZWxsaW5nfGVufDF8fHx8MTc3ODY3ODI0OXww&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    id: "3",
    title: "The Crown of Aksum",
    img: "https://images.unsplash.com/photo-1596256603429-01eeed02b443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxBZnJpY2FuJTIwZmlsbSUyMGRvY3VtZW50YXJ5JTIwc3Rvcnl0ZWxsaW5nfGVufDF8fHx8MTc3ODY3ODI0OXww&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    id: "4",
    title: "Mountains of Simien",
    img: "https://images.unsplash.com/photo-1573403092240-26095e118918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxFdGhpb3BpYW4lMjBsYW5kc2NhcGUlMjBjaW5lbWF0aWMlMjBmaWxtfGVufDF8fHx8MTc3ODY3ODI0NXww&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    id: "5",
    title: "Addis After Dark",
    img: "https://images.unsplash.com/photo-1742134516442-2f51982ce675?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxBZnJpY2FuJTIwZmlsbSUyMGRvY3VtZW50YXJ5JTIwc3Rvcnl0ZWxsaW5nfGVufDF8fHx8MTc3ODY3ODI0OXww&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    id: "6",
    title: "Diaspora Blues",
    img: "https://images.unsplash.com/photo-1605302596032-15e67c3cf66a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxBZnJpY2FuJTIwZmlsbSUyMGRvY3VtZW50YXJ5JTIwc3Rvcnl0ZWxsaW5nfGVufDF8fHx8MTc3ODY3ODI0OXww&ixlib=rb-4.1.0&q=80&w=800",
  },
];

export function ViewerHome() {
  const navigate = useNavigate();

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
          A simple feed of videos to watch.
        </p>

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
                <ImageWithFallback src={v.img} alt={v.title} className="w-full h-full object-cover" style={{ filter: "brightness(0.8)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(11,11,18,0.9) 0%, transparent 65%)" }} />
              </div>
              <div className="p-3">
                <div style={{ color: "#F5F0E8", fontSize: "0.9rem", fontWeight: 600 }} className="line-clamp-1">{v.title}</div>
                <div style={{ color: "#4A4860", fontSize: "0.78rem", marginTop: "0.25rem" }}>Tap to watch</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
