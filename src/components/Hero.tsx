import { motion } from "motion/react";

export default function Hero() {
  const name = "TOUSIF";
  
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(0,255,156,0.18)_0%,rgba(0,180,80,0.06)_45%,transparent_75%)] pointer-events-none z-0" />
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,200,80,0.07)_0%,transparent_65%)] pointer-events-none z-0" />
      
      {/* Noise and Vignette are global but referenced here for context */}
      
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-between py-24">
        {/* Top Content */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="max-w-xs"
        >
          <p className="text-sm font-sans text-white mb-2">// INITIALIZING_SYSTEM...</p>
          <div className="h-px w-12 bg-accent" />
        </motion.div>

        {/* Center Name */}
        <div className="relative w-full flex justify-center items-center">
          {/* Subject Photo (Placeholder logic) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute z-0 w-[400px] h-[500px] md:w-[500px] md:h-[600px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-accent/10 mix-blend-luminosity z-10" />
            <img 
              src="https://res.cloudinary.com/dtlgg7ydm/image/upload/f_auto,q_100/v1776028885/Gemini_Generated_Image_2bsody2bsody2bso_1_vg6nyq.png" 
              alt="Tousif" 
              className="w-full h-full object-cover grayscale opacity-60"
              referrerPolicy="no-referrer"
              loading="eager"
            />
          </motion.div>

          {/* Giant Name */}
          <h1 className="relative z-20 text-[18vw] md:text-[15vw] font-display font-bold tracking-tighter leading-none flex overflow-hidden select-none text-accent">
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 0.7 }}
                transition={{ 
                  delay: 0.2 + (i * 0.05), 
                  duration: 0.5, 
                  ease: "easeOut" 
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Bottom Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="md:col-span-4"
          >
            <p className="text-xs font-mono text-muted mb-4 uppercase tracking-widest">
              &gt; FULLSTACK_ARCHITECT <span className="animate-pulse">|</span>
            </p>
            <div className="flex gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-accent text-bg px-6 py-3 font-display font-bold text-sm flex items-center gap-2"
              >
                INIT_PROJECTS <span className="text-xs">→</span>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="border border-border hover:border-accent px-6 py-3 font-display font-bold text-sm transition-colors"
              >
                VIEW_RECORDS
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="md:col-span-4 md:col-start-9 text-right md:text-left"
          >
            <div className="bg-surface/50 border border-border p-6 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-accent/20" />
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
                <span className="text-[10px] font-mono text-muted">bash — 80×24</span>
              </div>
              <p className="text-sm font-sans text-muted leading-relaxed">
                <span className="text-accent">$</span> npm run deploy<br/>
                <span className="text-muted">&gt; system-arch@0.0.4 build</span><br/>
                <span className="text-muted">&gt; next build</span><br/>
                <span className="text-yellow-500">● Optimized production build</span><br/>
                <span className="text-muted">◇ Compiling page entries...</span><br/>
                <span className="text-muted">◇ Checking types...</span><br/>
                <span className="text-accent">✓ Compiled successfully</span>
              </p>
              <p className="mt-4 text-[11px] font-mono italic text-white/80">
                "The user interface is the window to the soul of the machine."
              </p>
              
              <div className="mt-6 flex justify-between items-end">
                <div className="text-[9px] font-mono text-muted uppercase">
                  System Load: 0.12, 0.11, 0.08<br/>
                  Uptime: 2,456 Hours
                </div>
                <div className="w-4 h-8 border-r border-b border-accent/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 hidden md:flex"
      >
        <div className="h-24 w-px bg-border relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-accent"
          />
        </div>
        <span className="font-mono text-[10px] text-muted rotate-90 origin-center translate-y-8 tracking-[0.3em]">SCROLL</span>
      </motion.div>
    </section>
  );
}
