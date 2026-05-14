import { ChevronRight, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { useMemo, useState } from "react";
import { MarketingShell } from "./MarketingShell";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const faqs = [
  {
    q: "How do creators upload?",
    a: "Creators use a simple studio flow: video name, description, and file upload. We keep it minimal and cinematic.",
  },
  {
    q: "Do you support global distribution?",
    a: "Yes — the platform is designed around modern delivery infrastructure and premium streaming quality.",
  },
  {
    q: "Can studios request partnership terms?",
    a: "Yes — contact us and we’ll discuss catalog distribution and enterprise options.",
  },
] as const;

export function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const supportEmail = useMemo(() => "rteklu582@gmail.com", []);

  return (
    <MarketingShell>
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full" style={{ background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.3)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A227" }} />
            <span style={{ color: "#C9A227", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Contact</span>
          </div>

          <h1 style={{ color: "#F5F0E8", fontWeight: 800, fontSize: "clamp(2.25rem, 5vw, 3.8rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Contact TRAID Stream
          </h1>
          <p style={{ color: "#8B8799", marginTop: 14, lineHeight: 1.7, maxWidth: 820 }}>
            Modern creator support with a premium cinematic experience. Send a message — we’ll follow up.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="rounded-2xl p-8" style={{ background: "rgba(19,19,28,0.92)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(10px)" }}>
            <div style={{ color: "#F5F0E8", fontWeight: 800, fontSize: "1.2rem" }}>Send a message</div>
            <p style={{ color: "#8B8799", marginTop: 8, lineHeight: 1.7 }}>
              Creator support, partnerships, and enterprise streaming requests.
            </p>

            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div>
                <label style={{ color: "#8B8799", fontSize: "0.85rem" }}>Name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  className="mt-2 w-full rounded-xl px-4 py-3 outline-none"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "#F5F0E8" }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label style={{ color: "#8B8799", fontSize: "0.85rem" }}>Email</label>
                <input
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  className="mt-2 w-full rounded-xl px-4 py-3 outline-none"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "#F5F0E8" }}
                  placeholder="you@studio.com"
                />
              </div>

              <div>
                <label style={{ color: "#8B8799", fontSize: "0.85rem" }}>Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  className="mt-2 w-full rounded-xl px-4 py-3 outline-none min-h-[140px]"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "#F5F0E8" }}
                  placeholder="Tell us what you’re building…"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2"
                style={{ background: "#C9A227", color: "#0B0B12", fontWeight: 900, padding: "0.9rem 1.2rem", borderRadius: "0.9rem" }}
              >
                Send Message <ChevronRight size={18} />
              </button>

              {submitted ? (
                <div className="mt-3 rounded-xl px-4 py-3" style={{ background: "rgba(201,162,39,0.10)", border: "1px solid rgba(201,162,39,0.22)", color: "#D4CFCA" }}>
                  Message queued. We’ll respond via email.
                </div>
              ) : null}
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl p-8" style={{ background: "rgba(19,19,28,0.92)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(10px)" }}>
              <div style={{ color: "#F5F0E8", fontWeight: 800, fontSize: "1.2rem" }}>Support & office</div>
              <div className="mt-6 space-y-4">
                <div className="flex gap-3 items-start">
                  <Mail size={18} color="#C9A227" className="mt-0.5" />
                  <div>
                    <div style={{ color: "#8B8799", fontSize: "0.85rem" }}>Support email</div>
                    <div style={{ color: "#F5F0E8", fontWeight: 700 }}>{supportEmail}</div>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Phone size={18} color="#C9A227" className="mt-0.5" />
                  <div>
                    <div style={{ color: "#8B8799", fontSize: "0.85rem" }}>Phone</div>
                    <div style={{ color: "#F5F0E8", fontWeight: 700 }}>By request</div>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <MapPin size={18} color="#C9A227" className="mt-0.5" />
                  <div>
                    <div style={{ color: "#8B8799", fontSize: "0.85rem" }}>Office</div>
                    <div style={{ color: "#F5F0E8", fontWeight: 700 }}>Addis Ababa — Remote-first</div>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <MessageSquare size={18} color="#C9A227" className="mt-0.5" />
                  <div>
                    <div style={{ color: "#8B8799", fontSize: "0.85rem" }}>Creator support</div>
                    <div style={{ color: "#D4CFCA", lineHeight: 1.6 }}>
                      We support films, series, documentaries, and originals. Upload help, distribution questions, and partner inquiries are all welcome.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-8" style={{ background: "rgba(19,19,28,0.92)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(10px)" }}>
              <div style={{ color: "#F5F0E8", fontWeight: 800, fontSize: "1.2rem" }}>FAQ</div>
              <div className="mt-6 space-y-3">
                {faqs.map((f) => (
                  <details key={f.q} className="rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <summary style={{ color: "#F5F0E8", fontWeight: 750, cursor: "pointer" }}>{f.q}</summary>
                    <p style={{ color: "#8B8799", marginTop: 10, lineHeight: 1.65 }}>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
