import { createContext, useContext, useEffect, useState } from "react";
import { STEPS } from "./data.js";

const Ctx = createContext(null);

function load() {
  try {
    return JSON.parse(localStorage.getItem("ship-it-progress")) || {};
  } catch {
    return {};
  }
}

export function ProgressProvider({ children }) {
  const [done, setDone] = useState(load);

  useEffect(() => {
    try {
      localStorage.setItem("ship-it-progress", JSON.stringify(done));
    } catch {
      /* storage unavailable, ignore */
    }
  }, [done]);

  const toggle = (id) => setDone((d) => ({ ...d, [id]: !d[id] }));
  const reset = () => setDone({});
  const count = STEPS.filter((s) => done[s.id]).length;
  const percent = Math.round((count / STEPS.length) * 100);

  return (
    <Ctx.Provider value={{ done, toggle, reset, count, percent, total: STEPS.length }}>
      {children}
    </Ctx.Provider>
  );
}

export const useProgress = () => useContext(Ctx);
