import { useMemo, useRef, useState } from "react";
import type { DragEvent, FormEvent } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, CheckCircle, Play, Upload } from "lucide-react";

type UploadStatus = "idle" | "uploading" | "done";

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="relative h-1.5 rounded-full w-full" style={{ background: "rgba(255,255,255,0.08)" }}>
      <div className="absolute left-0 top-0 h-full rounded-full transition-all duration-300" style={{ width: `${value}%`, background: "#C9A227" }} />
    </div>
  );
}

export function StudioUpload() {
  const navigate = useNavigate();
  const fileRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const [status, setStatus] = useState<UploadStatus>("idle");
  const [progress, setProgress] = useState(0);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const fileLabel = useMemo(() => {
    if (!file) return null;
    const mb = (file.size / 1024 / 1024).toFixed(1);
    return `${file.name} · ${mb} MB`;
  }, [file]);

  const startUpload = () => {
    setStatus("uploading");
    setProgress(0);

    let p = 0;
    const interval = window.setInterval(() => {
      p += Math.random() * 12 + 6;
      if (p >= 100) {
        window.clearInterval(interval);
        setProgress(100);
        setStatus("done");
        return;
      }
      setProgress(Math.min(99, p));
    }, 180);
  };

  const onFilePicked = (picked: File | undefined) => {
    if (!picked) return;
    setFile(picked);
    setStatus("idle");
    setProgress(0);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    onFilePicked(e.dataTransfer.files?.[0]);
  };

  const canSubmit = Boolean(file && title.trim() && status !== "uploading");

  return (
    <div className="min-h-screen" style={{ background: "#0B0B12" }}>
      {/* Header */}
      <div className="flex items-center gap-4 px-6 md:px-10 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <button
          onClick={() => navigate("/portal")}
          className="flex items-center gap-2"
          style={{ color: "#8B8799", fontSize: "0.875rem", transition: "color 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#F5F0E8")}
          onMouseLeave={e => (e.currentTarget.style.color = "#8B8799")}
        >
          <ArrowLeft size={16} />
          Back
        </button>
        <div className="flex items-center gap-2 ml-auto">
          <div className="w-6 h-6 rounded-sm flex items-center justify-center" style={{ background: "#C9A227" }}>
            <Play size={11} fill="#0B0B12" color="#0B0B12" />
          </div>
          <span style={{ color: "#F5F0E8", fontWeight: 700, letterSpacing: "-0.02em", fontSize: "0.95rem" }}>
            TRAID <span style={{ color: "#C9A227" }}>Studio</span>
          </span>
        </div>
      </div>

      <div className="px-6 md:px-10 py-10 max-w-4xl mx-auto">
        <h1 style={{ color: "#F5F0E8", fontWeight: 700, fontSize: "1.6rem", letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>
          Upload Video
        </h1>
        <p style={{ color: "#8B8799", fontSize: "0.9rem", marginBottom: "2rem" }}>
          Add a video name, description, and upload your file.
        </p>

        {/* File upload */}
        <div
          className="relative border-2 border-dashed rounded-2xl flex flex-col items-center justify-center py-16 cursor-pointer transition-all duration-200"
          style={{ borderColor: dragOver ? "#C9A227" : "rgba(255,255,255,0.1)", background: dragOver ? "rgba(201,162,39,0.04)" : "#13131C" }}
          onDragOver={e => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => fileRef.current?.click()}
        >
          <input
            ref={fileRef}
            type="file"
            accept="video/*"
            className="hidden"
            onChange={e => onFilePicked(e.target.files?.[0])}
          />
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5" style={{ background: dragOver ? "rgba(201,162,39,0.15)" : "rgba(255,255,255,0.04)", border: `1px solid ${dragOver ? "rgba(201,162,39,0.4)" : "rgba(255,255,255,0.08)"}` }}>
            <Upload size={28} style={{ color: dragOver ? "#C9A227" : "#4A4860" }} />
          </div>
          <h3 style={{ color: "#F5F0E8", fontWeight: 600, fontSize: "1.1rem", marginBottom: "0.5rem" }}>
            {file ? "File selected" : dragOver ? "Drop to upload" : "Drag & drop your video"}
          </h3>
          <p style={{ color: "#4A4860", fontSize: "0.875rem" }}>{file ? fileLabel : "or click to browse files"}</p>
          <p style={{ color: "#4A4860", fontSize: "0.75rem", marginTop: "0.5rem" }}>MP4, MOV, AVI, MKV • Max 50 GB • 4K supported</p>
        </div>

        {/* Supported formats info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl p-6" style={{ background: "rgba(19,19,28,0.6)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ color: "#C9A227", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.8rem" }}>
              Video Formats
            </div>
            <div style={{ color: "#8B8799", fontSize: "0.9rem", lineHeight: 1.6 }}>
              MP4 • MOV • AVI • MKV
            </div>
          </div>

          <div className="rounded-xl p-6" style={{ background: "rgba(19,19,28,0.6)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ color: "#C9A227", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.8rem" }}>
              Thumbnails
            </div>
            <div style={{ color: "#8B8799", fontSize: "0.9rem", lineHeight: 1.6 }}>
              JPG • PNG • 16:9 ratio
            </div>
          </div>

          <div className="rounded-xl p-6" style={{ background: "rgba(19,19,28,0.6)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ color: "#C9A227", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.8rem" }}>
              Subtitles
            </div>
            <div style={{ color: "#8B8799", fontSize: "0.9rem", lineHeight: 1.6 }}>
              SRT • VTT • ASS
            </div>
          </div>
        </div>

        {/* Details */}
        <form
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (!canSubmit) return;
            startUpload();
          }}
          className="mt-6 space-y-5"
        >
          <div>
            <label style={{ color: "#8B8799", fontSize: "0.82rem", fontWeight: 500, display: "block", marginBottom: "0.5rem" }}>Video Name *</label>
            <input
              type="text"
              placeholder="e.g. Lalibela Rising"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-lg outline-none"
              style={{ background: "#1C1C28", border: "1px solid rgba(255,255,255,0.08)", color: "#F5F0E8", fontSize: "0.9rem" }}
              onFocus={e => (e.currentTarget.style.borderColor = "rgba(201,162,39,0.5)")}
              onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
            />
          </div>

          <div>
            <label style={{ color: "#8B8799", fontSize: "0.82rem", fontWeight: 500, display: "block", marginBottom: "0.5rem" }}>Description</label>
            <textarea
              placeholder="Describe your video..."
              value={description}
              onChange={e => setDescription(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-lg outline-none resize-none"
              style={{ background: "#1C1C28", border: "1px solid rgba(255,255,255,0.08)", color: "#F5F0E8", fontSize: "0.9rem" }}
              onFocus={e => (e.currentTarget.style.borderColor = "rgba(201,162,39,0.5)")}
              onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
            />
          </div>

          {status === "uploading" && (
            <div className="p-4 rounded-lg" style={{ background: "rgba(201,162,39,0.06)", border: "1px solid rgba(201,162,39,0.2)" }}>
              <div className="flex items-center justify-between mb-2">
                <span style={{ color: "#C9A227", fontSize: "0.82rem", fontWeight: 500 }}>Uploading...</span>
                <span style={{ color: "#C9A227", fontSize: "0.82rem" }}>{Math.round(progress)}%</span>
              </div>
              <ProgressBar value={progress} />
            </div>
          )}

          {status === "done" && (
            <div className="flex items-center gap-2 p-4 rounded-lg" style={{ background: "rgba(91,191,138,0.1)", border: "1px solid rgba(91,191,138,0.2)" }}>
              <CheckCircle size={16} style={{ color: "#5BBF8A" }} />
              <div>
                <div style={{ color: "#F5F0E8", fontSize: "0.9rem", fontWeight: 600 }}>Upload complete</div>
                <div style={{ color: "#4A4860", fontSize: "0.78rem" }}>This is UI-only for now (backend not connected).</div>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full py-3 rounded-lg font-semibold transition-all duration-200"
            style={{
              background: canSubmit ? "#C9A227" : "rgba(255,255,255,0.08)",
              color: canSubmit ? "#0B0B12" : "#4A4860",
              fontSize: "0.95rem",
            }}
            onMouseEnter={e => { if (canSubmit) e.currentTarget.style.background = "#E0B83A"; }}
            onMouseLeave={e => { if (canSubmit) e.currentTarget.style.background = "#C9A227"; }}
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}
