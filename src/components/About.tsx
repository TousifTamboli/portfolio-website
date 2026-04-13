import { motion } from "motion/react";

const stats = [
  { label: "PROBLEMS SOLVED", value: "1.2K+", sub: "LEETCODE / HACKERRANK" },
  { label: "PROJECTS", value: "35+", sub: "PRODUCTION READY" },
  { label: "HACKATHON WINS", value: "15+", sub: "SELF + TEAM" },
];

const skills = [
  "TYPESCRIPT", "REACT_NATIVE", "NODE_JS", "RUST_LANG", "DOCKER_VIZ", "POSTGRES_SQL", "AWS_CLOUD", "GRAPH_QL"
];

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Portrait */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-accent" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-accent" />
            
            <div className="relative overflow-hidden aspect-[4/5] bg-surface border border-border">
              <motion.img 
                whileInView={{ 
                  x: [0, 3, -3, 0],
                  transition: { duration: 0.15, repeat: 0 }
                }}
                src="https://res.cloudinary.com/dtlgg7ydm/image/upload/f_auto,q_100/v1776028768/Gemini_Generated_Image_svsmjosvsmjosvsm_1_f6p1x2.png" 
                alt="Portrait" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-accent text-xs tracking-widest uppercase">// ABOUT_ME</span>
              <h2 className="text-5xl md:text-6xl font-display font-bold leading-tight uppercase tracking-tighter">
                CLEAN CODE. <br/>
                DIRTY DEADLINES. <br/>
                ZERO EXCUSES.
              </h2>
            </div>

            <p className="text-muted text-lg leading-relaxed max-w-xl">
              I build fast, scalable web applications and crush algorithms 
              for fun. Full-stack by day, competitive programmer by night — 
              I turn complex problems into clean, elegant solutions that 
              <span className="text-accent"> actually ship.</span> with zero bugs and infinite profit.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-surface/30 border border-border p-6 hover:border-accent/50 transition-colors group"
                >
                  <div className="text-3xl font-display font-bold text-accent mb-1 group-hover:text-glow transition-all">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-mono text-white tracking-widest mb-1">{stat.label}</div>
                  <div className="text-[9px] font-mono text-muted uppercase">{stat.sub}</div>
                </motion.div>
              ))}
            </div>

            {/* Skills Marquee */}
            <div className="relative mt-8 overflow-hidden py-4 border-y border-border/50">
              <div className="flex gap-8 whitespace-nowrap animate-marquee">
                {[...skills, ...skills].map((skill, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-xs font-mono text-muted tracking-widest">{skill}</span>
                    <span className="w-1 h-1 rounded-full bg-accent/30" />
                  </div>
                ))}
              </div>
              <style dangerouslySetInnerHTML={{ __html: `
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                  animation: marquee 30s linear infinite;
                }
              `}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
