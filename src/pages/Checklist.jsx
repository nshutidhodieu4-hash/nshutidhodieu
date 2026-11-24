import { motion, AnimatePresence } from "framer-motion";
import PageWrap, { item } from "../components/PageWrap.jsx";
import CodeBlock from "../components/CodeBlock.jsx";
import { STEPS } from "../data.js";
import { useProgress } from "../ProgressContext.jsx";

export default function Checklist() {
  const { done, toggle, reset, count, percent, total } = useProgress();
  return (
    <PageWrap>
      <motion.h1 variants={item} className="text-4xl font-bold tracking-tight">Checklist</motion.h1>
      <motion.p variants={item} className="mt-2 text-ink/70">
        Tick each step as you finish it. Your progress is saved in this browser.
      </motion.p>

      <motion.div variants={item} className="mt-6">
        <div className="h-3 overflow-hidden rounded-full bg-line" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
          <motion.div className="h-full rounded-full bg-brand" animate={{ width: `${percent}%` }} transition={{ type: "spring", stiffness: 80, damping: 16 }} />
        </div>
        <div className="mt-2 flex items-center justify-between text-sm text-ink/70">
          <span>{count} of {total} steps done</span>
          <button type="button" onClick={reset} className="font-semibold text-brand hover:underline">Reset</button>
        </div>
      </motion.div>

      <ol className="mt-8 grid gap-4">
        {STEPS.map((s, i) => (
          <motion.li
            key={s.id}
            variants={item}
            layout
            className={`rounded-xl border border-l-4 bg-white p-5 shadow-sm transition-colors ${done[s.id] ? "border-line border-l-ok" : "border-line border-l-brand"}`}
          >
            <label className="flex cursor-pointer items-center gap-3 font-semibold">
              <input type="checkbox" checked={!!done[s.id]} onChange={() => toggle(s.id)} className="h-5 w-5 accent-ok" />
              <span className={done[s.id] ? "text-ink/50 line-through" : ""}>{i + 1}. {s.title}</span>
              <AnimatePresence>
                {done[s.id] && (
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="ml-auto rounded-full bg-ok px-2 py-0.5 text-xs text-white">
                    Done
                  </motion.span>
                )}
              </AnimatePresence>
            </label>
            <div className="mt-3"><CodeBlock code={s.cmd} /></div>
          </motion.li>
        ))}
      </ol>

      <AnimatePresence>
        {count === total && (
          <motion.p initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="mt-8 rounded-xl border border-ok bg-emerald-50 p-4 font-semibold">
            All done. Your app is ready for any developer to pull and run.
          </motion.p>
        )}
      </AnimatePresence>
    </PageWrap>
  );
}
