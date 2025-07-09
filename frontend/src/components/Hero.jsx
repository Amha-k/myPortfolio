import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm John Doe</h1>
        <p className="text-xl">Frontend Developer</p>
      </div>
    </motion.div>
  );
}
