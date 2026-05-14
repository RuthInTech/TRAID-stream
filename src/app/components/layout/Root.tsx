import { Outlet } from "react-router";

export function Root() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <Outlet />
    </div>
  );
}
