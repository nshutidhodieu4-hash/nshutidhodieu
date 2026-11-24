import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex items-start gap-3 rounded-lg bg-ink p-3 text-sm text-sky-100">
      <pre className="flex-1 overflow-x-auto whitespace-pre font-mono leading-relaxed">{code}</pre>
      <motion.button
        type="button"
        whileTap={{ scale: 0.92 }}
        onClick={copy}
        className="min-w-[4.5rem] rounded bg-white/10 px-3 py-1.5 text-xs font-semibold hover:bg-brand"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={copied ? "c" : "n"}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.12 }}
            className="block"
          >
            {copied ? "Copied" : "Copy"}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
