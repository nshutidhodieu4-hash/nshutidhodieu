import { motion } from "framer-motion";
import PageWrap, { item } from "../components/PageWrap.jsx";

const tech = [
  { name: "React 18", role: "User interface and routing between pages" },
  { name: "Tailwind CSS", role: "Styling with utility classes" },
  { name: "Framer Motion", role: "Page transitions and animations" },
  { name: "Vite", role: "Fast development server and production build" },
  { name: "Docker", role: "Packages the app into a portable image" },
  { name: "Nginx", role: "Serves the built app inside the container" },
];

export default function About() {
  return (
    <PageWrap>
      <motion.h1 variants={item} className="text-4xl font-bold tracking-tight">About this project</motion.h1>
      <motion.p variants={item} className="mt-3 max-w-2xl leading-relaxed text-ink/80">
        Built for the DevOps practical assignment: develop a React application, containerize it with
        Docker, publish the image to Docker Hub and keep the code on GitHub, so any developer can run
        the app without touching the source.
      </motion.p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tech.map((t) => (
          <motion.div key={t.name} variants={item} whileHover={{ scale: 1.03 }} className="rounded-xl border border-line bg-white p-5 shadow-sm">
            <h2 className="font-bold">{t.name}</h2>
            <p className="mt-1 text-sm text-ink/70">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </PageWrap>
  );
}
