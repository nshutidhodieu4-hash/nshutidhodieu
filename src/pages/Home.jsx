import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrap, { item } from "../components/PageWrap.jsx";
import ProgressRing from "../components/ProgressRing.jsx";
import { useProgress } from "../ProgressContext.jsx";

const cards = [
  { to: "/checklist", title: "Checklist", text: "Tick off every step of the assignment and watch your progress grow." },
  { to: "/docker", title: "Docker guide", text: "Dockerfile, build, run and publish to Docker Hub, explained." },
  { to: "/github", title: "GitHub guide", text: "Create the repo, push your code and invite your teacher." },
  { to: "/about", title: "About", text: "What this project is and the tools it uses." },
];

export default function Home() {
  const { percent, count, total } = useProgress();
  return (
    <PageWrap>
      <div className="pointer-events-none absolute -left-20 top-10 -z-10 h-72 w-72 animate-float rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-48 -z-10 h-80 w-80 animate-float-slow rounded-full bg-ok/20 blur-3xl" />

      <section className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <motion.h1 variants={item} className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            From React app to{" "}
            <span className="animate-shimmer bg-gradient-to-r from-brand via-sky-400 to-brand bg-[length:200%_100%] bg-clip-text text-transparent">
              Docker Hub
            </span>
          </motion.h1>
          <motion.p variants={item} className="mt-5 max-w-xl text-lg leading-relaxed text-ink/80">
            This app runs inside a Docker container. Anyone can pull the image and launch it with one
            command, no source code needed.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link to="/checklist" className="block rounded-lg bg-brand px-6 py-3 font-semibold text-white shadow-lg shadow-brand/30">
                Open the checklist
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link to="/docker" className="block rounded-lg border border-ink/20 bg-white px-6 py-3 font-semibold">
                Read the Docker guide
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.div variants={item} className="flex flex-col items-center gap-2">
          <ProgressRing percent={percent} />
          <p className="text-sm text-ink/70">{count} of {total} steps done</p>
        </motion.div>
      </section>

      <section className="mt-16 grid gap-4 sm:grid-cols-2">
        {cards.map((c) => (
          <motion.div key={c.to} variants={item} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link to={c.to} className="block h-full rounded-xl border border-line bg-white p-6 shadow-sm transition-shadow hover:shadow-xl">
              <h2 className="text-xl font-bold">{c.title}</h2>
              <p className="mt-2 leading-relaxed text-ink/70">{c.text}</p>
            </Link>
          </motion.div>
        ))}
      </section>
    </PageWrap>
  );
}
