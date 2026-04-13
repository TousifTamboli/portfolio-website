import { motion } from "motion/react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border/50 bg-bg relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-1">
            <div className="text-xs font-mono text-muted uppercase tracking-widest">
              ©2026 TOUSIF TAMBOLI. ALL_RIGHTS_RESERVED.
            </div>
            <div className="text-[10px] font-mono text-accent uppercase tracking-[0.2em]">
              ESTABLISHED_2026 / V4.0.2
            </div>
          </div>

          <div className="flex gap-8 text-[10px] font-mono uppercase tracking-widest text-muted">
            <a href="https://github.com/TousifTamboli/" className="hover:text-accent transition-colors">GITHUB</a>
            <a href="https://www.linkedin.com/in/tousif-tamboli-545357221/" className="hover:text-accent transition-colors">LINKEDIN</a>
            <a href="https://leetcode.com/u/TousifTamboli/" className="hover:text-accent transition-colors">LEETCODE</a>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] font-mono text-white uppercase tracking-widest">SYSTEM_STATUS: OPTIMIZED</span>
            </div>
            <div className="text-[9px] font-mono text-muted uppercase">
              LOCAL_TIME: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })} GMT+05:30
            </div>
          </div>
        </div>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          className="absolute left-1/2 -translate-x-1/2 -top-6 w-12 h-12 bg-surface border border-border flex items-center justify-center text-accent hover:border-accent transition-colors rounded-full"
        >
          ↑
        </motion.button>
      </div>
    </footer>
  );
}
