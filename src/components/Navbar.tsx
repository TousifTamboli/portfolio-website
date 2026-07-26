import { motion } from "motion/react";
import { useState } from "react";
import { FileText } from "lucide-react";
import Sidebar from "./Sidebar";

const RESUME_URL = "https://drive.google.com/file/d/1mzHO-cF7l2trscOO6lvZ0KQzPorsVCZs/view?usp=sharing";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference"
      >
        <a href="#" className="font-display font-bold text-xl tracking-tighter text-white">
          TOUSIF<span className="text-accent">/</span>
        </a>
        
        <div className="flex items-center gap-6">
          {/* Section Links */}
          <div className="hidden md:flex gap-6 text-[11px] font-mono uppercase tracking-widest text-muted">
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#terminal" className="hover:text-accent transition-colors">Terminal</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>

          {/* Action Buttons Group */}
          <div className="flex items-center gap-3">
            {/* Resume Button (Desktop Only) */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex border border-white/60 hover:border-white text-white hover:bg-white hover:text-bg px-5 py-2.5 rounded-full font-sans font-medium text-sm items-center gap-2 transition-all"
            >
              Resume <FileText className="w-3.5 h-3.5 opacity-70" />
            </motion.a>

            {/* Menu Button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsSidebarOpen(true)}
              className="bg-white text-bg px-6 py-2.5 rounded-full font-sans font-medium text-sm flex items-center gap-2"
            >
              Menu <span className="text-xs opacity-50">···</span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} resumeUrl={RESUME_URL} />
    </>
  );
}
