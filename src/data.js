export const STEPS = [
  { id: "app", title: "Build the React app", cmd: "npm create vite@latest" },
  { id: "docker", title: "Write the Dockerfile and build the image", cmd: "docker build -t react-docker-app ." },
  { id: "run", title: "Run it locally", cmd: "docker run -p 8080:80 react-docker-app" },
  { id: "login", title: "Log in to Docker Hub", cmd: "docker login" },
  { id: "tag", title: "Tag the image", cmd: "docker tag react-docker-app USERNAME/react-docker-app:1.0" },
  { id: "push", title: "Push the image to Docker Hub", cmd: "docker push USERNAME/react-docker-app:1.0" },
  { id: "git", title: "Push the code to GitHub", cmd: "git push -u origin main" },
  { id: "share", title: "Share the repo with your teacher", cmd: "GitHub > Settings > Collaborators" },
];

export const PAGES = [
  { to: "/", label: "Home" },
  { to: "/checklist", label: "Checklist" },
  { to: "/docker", label: "Docker" },
  { to: "/github", label: "GitHub" },
  { to: "/about", label: "About" },
];
