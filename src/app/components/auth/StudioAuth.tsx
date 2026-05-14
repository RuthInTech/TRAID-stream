import { useState } from "react";
import { useNavigate } from "react-router";
import { Play, Eye, EyeOff, ArrowLeft, Mail, Lock, User, Building2 } from "lucide-react";

export function StudioAuth() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("signup");
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/studio/upload");
  };

  return (
    <div className="min-h-screen flex" style={{ background: "#0B0B12" }}>
      {/* Left visual panel */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 p-12 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0F0F18 0%, #13131C 100%)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(201,162,39,0.07) 0%, transparent 60%)" }} />
        <div className="relative z-10 flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ background: "#C9A227" }}>
            <Play size={16} fill="#0B0B12" color="#0B0B12" />
          </div>
          <span style={{ color: "#F5F0E8", fontWeight: 700, fontSize: "1.25rem", letterSpacing: "-0.02em" }}>
            TRAID <span style={{ color: "#C9A227" }}>Stream</span>
          </span>
        </div>
        <div className="relative z-10">
          <div className="mb-6 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(201,162,39,0.1)", border: "1px solid rgba(201,162,39,0.2)" }}>
            <Building2 size={22} style={{ color: "#C9A227" }} />
          </div>
          <h2 style={{ color: "#F5F0E8", fontWeight: 700, fontSize: "2rem", letterSpacing: "-0.03em", lineHeight: "1.2", marginBottom: "1rem" }}>
            Your Studio,<br />Your Audience
          </h2>
          <p style={{ color: "#8B8799", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "2rem" }}>
            Sign in to upload your content. Keep it simple: title, description, and file.
          </p>
          <div className="space-y-4" />
        </div>
        <div className="relative z-10" style={{ color: "#4A4860", fontSize: "0.8rem" }}>
          © 2026 TRAID Stream Inc. — All rights reserved.
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <button onClick={() => navigate("/portal")} className="flex items-center gap-1.5 mb-8" style={{ color: "#8B8799", fontSize: "0.875rem", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "#F5F0E8")} onMouseLeave={e => (e.currentTarget.style.color = "#8B8799")}>
            <ArrowLeft size={16} />
            Back
          </button>

          <div className="flex lg:hidden items-center gap-2 mb-8">
            <div className="w-7 h-7 rounded-sm flex items-center justify-center" style={{ background: "#C9A227" }}>
              <Play size={14} fill="#0B0B12" color="#0B0B12" />
            </div>
            <span style={{ color: "#F5F0E8", fontWeight: 700, letterSpacing: "-0.02em" }}>TRAID <span style={{ color: "#C9A227" }}>Stream</span></span>
          </div>

          {/* Tabs */}
          <div className="flex mb-8 p-1 rounded-lg" style={{ background: "#13131C", border: "1px solid rgba(255,255,255,0.06)" }}>
            {(["signup", "login"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setMode(tab)}
                className="flex-1 py-2 rounded-md text-sm font-medium transition-all duration-200"
                style={{
                  background: mode === tab ? "#C9A227" : "transparent",
                  color: mode === tab ? "#0B0B12" : "#8B8799",
                  fontWeight: mode === tab ? 600 : 400,
                }}
              >
                {tab === "signup" ? "Create Studio" : "Sign In"}
              </button>
            ))}
          </div>

          <div>
            <h1 style={{ color: "#F5F0E8", fontWeight: 700, fontSize: "1.6rem", letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>
              {mode === "login" ? "Studio Sign In" : "Create Your Studio"}
            </h1>
            <p style={{ color: "#8B8799", fontSize: "0.9rem", marginBottom: "2rem" }}>
              {mode === "login" ? "Sign in to upload content." : "Create your studio account to start uploading."}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "signup" && (
                <div>
                  <label style={{ color: "#8B8799", fontSize: "0.82rem", fontWeight: 500, display: "block", marginBottom: "0.5rem" }}>Full Name</label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#4A4860" }} />
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-lg outline-none"
                      style={{ background: "#1C1C28", border: "1px solid rgba(255,255,255,0.08)", color: "#F5F0E8", fontSize: "0.9rem" }}
                      onFocus={e => (e.currentTarget.style.borderColor = "rgba(201,162,39,0.5)")}
                      onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                    />
                  </div>
                </div>
              )}

              <div>
                <label style={{ color: "#8B8799", fontSize: "0.82rem", fontWeight: 500, display: "block", marginBottom: "0.5rem" }}>Email Address</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#4A4860" }} />
                  <input
                    type="email"
                    placeholder="studio@example.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-lg outline-none"
                    style={{ background: "#1C1C28", border: "1px solid rgba(255,255,255,0.08)", color: "#F5F0E8", fontSize: "0.9rem" }}
                    onFocus={e => (e.currentTarget.style.borderColor = "rgba(201,162,39,0.5)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>
              </div>

              <div>
                <label style={{ color: "#8B8799", fontSize: "0.82rem", fontWeight: 500, display: "block", marginBottom: "0.5rem" }}>Password</label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#4A4860" }} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                    className="w-full pl-10 pr-10 py-3 rounded-lg outline-none"
                    style={{ background: "#1C1C28", border: "1px solid rgba(255,255,255,0.08)", color: "#F5F0E8", fontSize: "0.9rem" }}
                    onFocus={e => (e.currentTarget.style.borderColor = "rgba(201,162,39,0.5)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: "#4A4860" }}>
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold transition-all duration-200 mt-2"
                style={{ background: "#C9A227", color: "#0B0B12", fontSize: "0.95rem" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#E0B83A")}
                onMouseLeave={e => (e.currentTarget.style.background = "#C9A227")}
              >
                {mode === "login" ? "Sign In to Studio" : "Create Studio"}
              </button>
            </form>

            <p className="mt-6 text-center" style={{ color: "#4A4860", fontSize: "0.85rem" }}>
              {mode === "signup" ? "Already have a studio account? " : "New to TRAID? "}
              <button onClick={() => setMode(mode === "login" ? "signup" : "login")} style={{ color: "#C9A227", fontWeight: 500 }}>
                {mode === "signup" ? "Sign in" : "Create studio"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
