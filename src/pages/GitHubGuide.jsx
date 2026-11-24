import { motion } from "framer-motion";
import PageWrap, { item } from "../components/PageWrap.jsx";
import CodeBlock from "../components/CodeBlock.jsx";

const steps = [
  { title: "Create an empty repository", text: "On github.com click New repository, name it react-docker-app and leave the README option unticked." },
  { title: "Push your code", text: "Run these commands in the project folder.", code: "git init\ngit add .\ngit commit -m \"React app with Docker\"\ngit branch -M main\ngit remote add origin https://github.com/GITHUB_USER/react-docker-app.git\ngit push -u origin main" },
  { title: "Share with your teacher", text: "In the repository open Settings, then Collaborators, then Add people, and enter your teacher's GitHub username." },
  { title: "Update the README", text: "Make sure it holds the Docker image name and the Docker Hub link, then commit and push again.", code: "git add README.md\ngit commit -m \"Update README\"\ngit push" },
];

export default function GitHubGuide() {
  return (
    <PageWrap>
      <motion.h1 variants={item} className="text-4xl font-bold tracking-tight">GitHub guide</motion.h1>
      <motion.p variants={item} className="mt-2 max-w-2xl text-ink/70">
        GitHub keeps your source code safe and lets your teacher review it.
      </motion.p>
      <ol className="relative mt-8 ml-3 border-l-2 border-line">
        {steps.map((s, i) => (
          <motion.li key={s.title} variants={item} className="mb-8 ml-6">
            <span className="absolute -left-[13px] flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">{i + 1}</span>
            <h2 className="text-lg font-bold">{s.title}</h2>
            <p className="mb-3 mt-1 text-ink/70">{s.text}</p>
            {s.code && <CodeBlock code={s.code} />}
          </motion.li>
        ))}
      </ol>
    </PageWrap>
  );
}
