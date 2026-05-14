import type { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router";
import { Play } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Creators", path: "/creators" },
  { label: "Distribution", path: "/distribution" },
  { label: "Partners", path: "/partners" },
  { label: "Pricing", path: "/pricing" },
] as const;

type MarketingShellProps = {
  children: ReactNode;
};

export function MarketingShell({ children }: MarketingShellProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#0B0B12" }}>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-4"
        style={{ background: "rgba(11,11,18,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <button
          type="button"
          className="flex items-center gap-2"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ background: "#C9A227" }}>
            <Play size={16} fill="#0B0B12" color="#0B0B12" />
          </div>
          <span style={{ color: "#F5F0E8", fontWeight: 700, fontSize: "1.25rem", letterSpacing: "-0.02em" }}>
            TRAID <span style={{ color: "#C9A227" }}>Stream</span>
          </span>
        </button>

        <div className="flex-1 px-4 md:px-10">
          <div className="flex items-center gap-6 md:gap-8 overflow-x-auto whitespace-nowrap" style={{ scrollbarWidth: "none" }}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                type="button"
                onClick={() => navigate(item.path)}
                className="shrink-0"
                style={{
                  color: isActive(item.path) ? "#F5F0E8" : "#8B8799",
                  fontSize: "0.875rem",
                  transition: "color 0.2s, transform 0.15s",
                  transform: isActive(item.path) ? "translateY(-1px)" : "translateY(0)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F0E8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive(item.path) ? "#F5F0E8" : "#8B8799")}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate("/portal")}
            style={{ color: "#8B8799", fontSize: "0.875rem", padding: "0.5rem 1rem", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F0E8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8B8799")}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => navigate("/portal")}
            style={{
              background: "#C9A227",
              color: "#0B0B12",
              fontSize: "0.875rem",
              fontWeight: 600,
              padding: "0.5rem 1.25rem",
              borderRadius: "0.375rem",
              transition: "background 0.2s, transform 0.15s",
              boxShadow: "0 0 0 1px rgba(201,162,39,0.25), 0 18px 50px rgba(201,162,39,0.08)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#E0B83A";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#C9A227";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get Started
          </button>
        </div>
      </nav>

      <main className="pt-20">{children}</main>

      <footer className="py-12 px-6 md:px-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <button type="button" onClick={() => navigate("/")} className="flex items-center gap-2" style={{ cursor: "pointer" }}>
            <div className="w-6 h-6 rounded-sm flex items-center justify-center" style={{ background: "#C9A227" }}>
              <Play size={11} fill="#0B0B12" color="#0B0B12" />
            </div>
            <span style={{ color: "#F5F0E8", fontWeight: 700, letterSpacing: "-0.02em" }}>
              TRAID <span style={{ color: "#C9A227" }}>Stream</span>
            </span>
          </button>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {[
              { label: "About", to: "/about" },
              { label: "Careers", to: "#" },
              { label: "Support", to: "/contact" },
              { label: "Privacy", to: "#" },
              { label: "Terms", to: "#" },
              { label: "Instagram", to: "#" },
              { label: "LinkedIn", to: "#" },
              { label: "YouTube", to: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.to}
                onClick={(e) => {
                  if (item.to.startsWith("/")) {
                    e.preventDefault();
                    navigate(item.to);
                  } else {
                    e.preventDefault();
                  }
                }}
                style={{ color: "#4A4860", fontSize: "0.85rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#8B8799")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4A4860")}
              >
                {item.label}
              </a>
            ))}
          </div>

          <span style={{ color: "#4A4860", fontSize: "0.8rem" }}>© {new Date().getFullYear()} TRAID Stream Inc.</span>
        </div>
      </footer>
    </div>
  );
}
