import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", staggerChildren: 0.08 },
  },
  exit: { opacity: 0, y: -16, transition: { duration: 0.2 } },
};

export const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function PageWrap({ children }) {
  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="mx-auto max-w-5xl px-4 pb-20 pt-10"
    >
      {children}
    </motion.main>
  );
}
