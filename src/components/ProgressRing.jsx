import { motion } from "framer-motion";

export default function ProgressRing({ percent, size = 160 }) {
  const r = 62;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
        <circle cx="80" cy="80" r={r} fill="none" strokeWidth="12" className="stroke-line" />
        <motion.circle
          cx="80" cy="80" r={r} fill="none" strokeWidth="12" strokeLinecap="round"
          className="stroke-brand"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c - (c * percent) / 100 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold">{percent}%</span>
        <span className="text-xs text-ink/60">complete</span>
      </div>
    </div>
  );
}
