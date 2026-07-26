import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Code2, X, FileText } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl?: string;
}

const socialLinks = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/TousifTamboli/",
    icon: <Code2 size={20} />,
    desc: "ALGORITHMIC_RECORDS"
  },
  {
    name: "GitHub",
    url: "https://github.com/TousifTamboli/",
    icon: <Github size={20} />,
    desc: "SOURCE_REPOSITORY"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/tousif-tamboli",
    icon: <Linkedin size={20} />,
    desc: "PROFESSIONAL_NETWORK"
  }
];

const navItems = ["About", "Skills", "Projects", "Terminal", "Contact"];

export default function Sidebar({ isOpen, onClose, resumeUrl }: SidebarProps) {
  const defaultResumeUrl = "https://drive.google.com/file/d/1mzHO-cF7l2trscOO6lvZ0KQzPorsVCZs/view?usp=sharing";
  const targetResumeUrl = resumeUrl || defaultResumeUrl;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-bg/80 backdrop-blur-sm z-[60]"
          />

          {/* Sidebar Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-[400px] bg-surface border-l border-border z-[70] p-8 flex flex-col overflow-y-auto"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-12">
              <div className="font-display font-bold text-xl tracking-tighter text-white">
                MENU<span className="text-accent">/</span>
              </div>
              <motion.button
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center border border-border rounded-full text-muted hover:text-accent hover:border-accent transition-colors"
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-8 mb-8">
              <div className="text-[10px] font-mono text-muted uppercase tracking-[0.3em] mb-2">SYSTEM_NAVIGATION</div>
              <nav className="flex flex-col gap-5">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={onClose}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter hover:text-accent transition-colors flex items-center gap-4 group"
                  >
                    <span className="text-xs font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                    {item}
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Resume Callout in Mobile Drawer */}
            <div className="mb-8">
              <a
                href={targetResumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-accent/10 border border-accent/40 rounded hover:border-accent hover:bg-accent/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-accent" />
                  <div className="flex flex-col">
                    <span className="text-sm font-display font-bold uppercase text-white group-hover:text-accent transition-colors">VIEW_RESUME</span>
                    <span className="text-[9px] font-mono text-muted uppercase">PDF_DOCUMENT // GOOGLE_DRIVE</span>
                  </div>
                </div>
                <span className="text-accent font-bold">↗</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-auto pt-6 border-t border-border/50">
              <div className="text-[10px] font-mono text-muted uppercase tracking-[0.3em] mb-4">EXTERNAL_CHANNELS</div>
              <div className="flex flex-col gap-3">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="flex items-center justify-between p-3.5 border border-border hover:border-accent group transition-all rounded-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-muted group-hover:text-accent transition-colors">
                        {link.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-display font-bold uppercase group-hover:text-accent transition-colors">{link.name}</span>
                        <span className="text-[9px] font-mono text-muted uppercase">{link.desc}</span>
                      </div>
                    </div>
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">→</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-4 border-t border-border/50">
              <div className="flex justify-between items-end">
                <div className="text-[9px] font-mono text-muted uppercase">
                  Status: Connected<br/>
                  Session: {Math.random().toString(36).substring(7).toUpperCase()}
                </div>
                <div className="w-6 h-6 border-r border-b border-accent/30" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
