# React Docker App – Ship It

A small React (Vite) application, containerized with Docker and published on Docker Hub.
Built for the **DevOps Practical Assignment: React Application Containerization and Collaboration**.

## Project description
"Ship It" is a 5-page React app (Home, Checklist, Docker, GitHub, About) with animated page
transitions. It guides you through containerizing and publishing a React app. Checklist progress is saved in the browser.

## Links
- **GitHub repository:** https://github.com/YOUR_GITHUB_USERNAME/react-docker-app
- **Docker Hub repository:** https://hub.docker.com/r/YOUR_DOCKERHUB_USERNAME/react-docker-app
- **Docker image name:** `YOUR_DOCKERHUB_USERNAME/react-docker-app:1.0`

## Run the app from Docker Hub (no source code needed)
```bash
docker pull YOUR_DOCKERHUB_USERNAME/react-docker-app:1.0
docker run -d -p 8080:80 YOUR_DOCKERHUB_USERNAME/react-docker-app:1.0
```
Then open http://localhost:8080

## Run from source
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/react-docker-app.git
cd react-docker-app
npm install
npm run dev
```

## Build the Docker image yourself
```bash
docker build -t react-docker-app .
docker run -p 8080:80 react-docker-app
```

## Publish to Docker Hub
```bash
docker login
docker tag react-docker-app YOUR_DOCKERHUB_USERNAME/react-docker-app:1.0
docker push YOUR_DOCKERHUB_USERNAME/react-docker-app:1.0
```

## Tech
React 18, React Router, Tailwind CSS, Framer Motion, Vite, Docker (multi-stage build), Nginx.
