import { motion } from "motion/react";
import { useState } from "react";
import Sidebar from "./Sidebar";

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
        <div className="font-display font-bold text-xl tracking-tighter text-white">
          TOUSIF<span className="text-accent">/</span>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6 text-[11px] font-mono uppercase tracking-widest text-muted">
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#about" className="hover:text-accent transition-colors">Stats</a>
            <a href="#terminal" className="hover:text-accent transition-colors">Terminal</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsSidebarOpen(true)}
            className="bg-white text-bg px-6 py-2.5 rounded-full font-sans font-medium text-sm flex items-center gap-2"
          >
            Menu <span className="text-xs opacity-50">···</span>
          </motion.button>
        </div>
      </motion.nav>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
