import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { PAGES } from "../data.js";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="sticky top-0 z-20 border-b border-line bg-paper/80 backdrop-blur"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <span className="text-lg font-bold tracking-tight">Ship It</span>
        <ul className="flex gap-1 overflow-x-auto">
          {PAGES.map((p) => (
            <li key={p.to}>
              <NavLink
                to={p.to}
                end={p.to === "/"}
                className={({ isActive }) =>
                  `relative block rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                    isActive ? "text-brand" : "text-ink/70 hover:text-ink"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {p.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded bg-brand"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
