import { motion } from "framer-motion";
import PageWrap, { item } from "../components/PageWrap.jsx";
import CodeBlock from "../components/CodeBlock.jsx";

const dockerfile = `FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`;

const blocks = [
  { title: "1. Build the image", text: "Run this in the folder that contains the Dockerfile.", code: "docker build -t react-docker-app ." },
  { title: "2. Run the container", text: "Port 8080 on your computer maps to port 80 in the container.", code: "docker run -d -p 8080:80 react-docker-app" },
  { title: "3. Tag and push", text: "Replace USERNAME with your Docker Hub username.", code: "docker login\ndocker tag react-docker-app USERNAME/react-docker-app:1.0\ndocker push USERNAME/react-docker-app:1.0" },
  { title: "4. Pull and run anywhere", text: "This is the final challenge: another developer needs only this.", code: "docker pull USERNAME/react-docker-app:1.0\ndocker run -d -p 8080:80 USERNAME/react-docker-app:1.0" },
];

export default function DockerGuide() {
  return (
    <PageWrap>
      <motion.h1 variants={item} className="text-4xl font-bold tracking-tight">Docker guide</motion.h1>
      <motion.p variants={item} className="mt-2 max-w-2xl text-ink/70">
        A multi-stage Dockerfile builds the React app with Node, then serves the finished files with
        Nginx. The final image stays small because Node is left behind.
      </motion.p>
      <motion.div variants={item} className="mt-6">
        <h2 className="mb-2 text-lg font-bold">The Dockerfile</h2>
        <CodeBlock code={dockerfile} />
      </motion.div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {blocks.map((b) => (
          <motion.section key={b.title} variants={item} whileHover={{ y: -4 }} className="rounded-xl border border-line bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold">{b.title}</h2>
            <p className="mb-3 mt-1 text-sm text-ink/70">{b.text}</p>
            <CodeBlock code={b.code} />
          </motion.section>
        ))}
      </div>
    </PageWrap>
  );
}
