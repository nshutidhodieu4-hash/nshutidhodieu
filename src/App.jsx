import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ProgressProvider } from "./ProgressContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Checklist from "./pages/Checklist.jsx";
import DockerGuide from "./pages/DockerGuide.jsx";
import GitHubGuide from "./pages/GitHubGuide.jsx";
import About from "./pages/About.jsx";

export default function App() {
  const location = useLocation();
  return (
    <ProgressProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/checklist" element={<Checklist />} />
            <Route path="/docker" element={<DockerGuide />} />
            <Route path="/github" element={<GitHubGuide />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </div>
    </ProgressProvider>
  );
}
