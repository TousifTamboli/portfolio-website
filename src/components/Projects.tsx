import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "GovGuideBot — AI-Powered Document Assistance System",
    category: "AI",
    desc: "NLP based chatbot for assisting Government Documents for Pan Indian Citizens",
    longDesc: [
      "Engineered BERT-based NER pipeline to extract structured data from dense government documents.",
      "Built intent-processing engine that parses user queries and maps them to scheme workflows.",
      "NLP model trained to recognize entities — names, dates, eligibility criteria, document types.",
      "Generates step-by-step procedural guidance for complex government application processes.",
      "Reduced citizen confusion navigating bureaucratic systems by delivering instant, accurate answers."
    ],
    image: "https://picsum.photos/seed/p1/800/600",
    featured: true,
    tags: ["GRADIO", "PYTHON", "NLP", "NER", "BERT"],
    sourceUrl: "https://github.com/TousifTamboli/govguidebot",
    liveUrl: "https://github.com/TousifTamboli/govguidebot"
  },
  {
    id: 2,
    title: "UR Automation Suite",
    category: "Web",
    desc: "Built a centralized dashboard with Redis caching and RBAC that secured data & reduced load times by 40%.",
    longDesc: [
      "High-performance order matching using Rust's memory safety and zero-cost abstractions.",
      "Achieved sub-millisecond latency for order execution and validation.",
      "Implemented a robust gRPC interface for low-latency communication.",
      "Optimized data structures for O(1) order book operations."
    ],
    image: "https://picsum.photos/seed/p2/800/600",
    tags: ["RUST", "GRPC"],
    sourceUrl: "https://github.com/TousifTamboli/tp-cell-system",
    liveUrl: "https://github.com/TousifTamboli/tp-cell-system"
  },
  {
    id: 3,
    title: "NoCode Database Builder",
    category: "Tools",
    desc: "Just Drag and Drop your tables, it's that simple, and get your database in seconds.",
    longDesc: [
      "Custom shell utilities for automated project scaffolding and context management.",
      "Integrated with Go for high-speed file system operations and concurrent tasks.",
      "Replaced standard manual workflows with automated CLI triggers.",
      "Includes a diagnostics engine for real-time environment health checks."
    ],
    image: "https://picsum.photos/seed/p3/800/600",
    tags: ["GO", "SHELL"],
    sourceUrl: "https://github.com/TousifTamboli/nocode_db_generator",
    liveUrl: "https://github.com/TousifTamboli/nocode_db_generator"
  },
  {
    id: 4,
    title: "QUANTUM_ERP_SYSTEM",
    category: "Web",
    desc: "Cloud-native ERP system built for large manufacturing firms, focusing on inventory real-time sync.",
    longDesc: [
      "Scalable microservices architecture built with Next.js and PostgreSQL.",
      "Real-time inventory synchronization using WebSockets and Redis.",
      "Complex reporting engine with automated PDF generation and analytics.",
      "Secure multi-tenant authentication and role-based access control."
    ],
    image: "https://picsum.photos/seed/p4/800/600",
    tags: ["NEXTJS", "POSTGRES"],
    sourceUrl: "https://github.com/tousiftamboli",
    liveUrl: "https://github.com/tousiftamboli"
  }
];

function ProjectAnimation({ type, isHovered }: { type: string, isHovered: boolean }) {
  if (type === "AI") {
    return (
      <div className="w-full h-full relative bg-bg/50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-6 gap-4 opacity-20">
            {Array.from({ length: 36 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: isHovered ? [1, 1.8, 1] : [1, 1.5, 1],
                  opacity: isHovered ? [0.4, 0.8, 0.4] : [0.2, 0.5, 0.2],
                  backgroundColor: isHovered ? "#00FF9C" : "#00FF9C"
                }}
                transition={{
                  duration: isHovered ? 1 + Math.random() : 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                className="w-1 h-1 rounded-full"
              />
            ))}
          </div>
        </div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            stroke="#00FF9C"
            strokeWidth="0.5"
            fill="none"
            animate={{ r: [30, 45, 30], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.path
            d="M 20 20 L 80 80 M 80 20 L 20 80"
            stroke="#00FF9C"
            strokeWidth="0.2"
            className="opacity-20"
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </svg>
        <div className="absolute bottom-4 left-4 font-mono text-[8px] text-accent/40 uppercase">
          Neural_Net_Active // 0x{Math.random().toString(16).slice(2, 6)}
        </div>
      </div>
    );
  }

  if (type === "Web") {
    return (
      <div className="w-full h-full relative bg-bg/50 flex items-center justify-center">
        <div className="relative w-32 h-32">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border border-accent/20 rounded-full"
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
            />
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ 
                scale: isHovered ? [1.2, 1.5, 1.2] : [1, 1.2, 1],
                rotate: isHovered ? [45, 135, 45] : 45
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-4 h-4 bg-accent/40 rounded-sm"
            />
          </div>
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full"
              animate={{
                x: [0, Math.cos(i * 45 * Math.PI / 180) * 60],
                y: [0, Math.sin(i * 45 * Math.PI / 180) * 60],
                opacity: [1, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
        <div className="absolute top-4 right-4 font-mono text-[8px] text-accent/40 uppercase">
          Core_Engine_Sync // {Math.floor(Math.random() * 100)}ms
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative overflow-hidden bg-bg/50 p-6 flex flex-col justify-center gap-4">
      <div className="flex flex-col gap-1 opacity-40">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            className="font-mono text-[8px] text-accent/50"
          >
            &gt; STACK_TRACE_0x{Math.random().toString(16).slice(2, 6)}
          </motion.div>
        ))}
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: isHovered ? [1, 1.1, 1] : 1,
            rotate: isHovered ? [0, 5, -5, 0] : 0,
            opacity: isHovered ? 1 : 0.3
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative"
        >
          <div className="w-16 h-16 border border-accent/30 rounded flex items-center justify-center bg-accent/5 backdrop-blur-sm">
            <span className="text-3xl font-bold text-accent font-mono">&gt;_</span>
          </div>
          
          {/* Animated rings around the logo */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-10px] border border-dashed border-accent/20 rounded-lg"
          />
        </motion.div>
      </div>

      <div className="absolute top-4 left-4 font-mono text-[8px] text-accent/40 uppercase">
        System_Diagnostics // OK
      </div>
    </div>
  );
}

function ProjectCard({ project, featured = false }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={(e) => {
        handleMouseMove(e);
        setIsHovered(true);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        handleMouseLeave();
        setIsHovered(false);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative group bg-surface border ${featured ? 'border-accent/40 border-glow' : 'border-border'} p-6 flex flex-col gap-6 overflow-hidden transition-all duration-500 hover:border-accent/60 ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      {/* Header */}
      <div className="flex justify-between items-start relative z-10">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded uppercase tracking-widest">
              {featured ? "FEATURED" : project.category}
            </span>
            <span className="text-[10px] font-mono text-muted">2025</span>
          </div>
          <h3 className="text-2xl font-display font-bold tracking-tighter uppercase group-hover:text-accent transition-colors">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-6 relative z-10 h-full">
        <div className="flex-1 flex flex-col justify-start gap-4">
          {featured && project.longDesc ? (
            <div className="flex flex-col gap-2">
              {project.longDesc.map((point: string, i: number) => (
                <div key={i} className="flex gap-2">
                  <span className="text-accent font-mono text-xs mt-1">&gt;</span>
                  <p className="text-muted text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted text-sm leading-relaxed">
              {project.desc}
            </p>
          )}
          
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag: string) => (
              <span key={tag} className="text-[9px] font-mono text-muted border border-border px-2 py-1 uppercase">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-4">
            <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono text-accent flex items-center gap-1 hover:underline">
              SOURCE_CODE <span className="text-[8px]">↗</span>
            </a>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono text-white flex items-center gap-1 hover:text-accent transition-colors">
              LIVE_DEMO <span className="text-[10px]">🚀</span>
            </a>
          </div>
        </div>

        {/* Animation Area */}
        <div className="relative flex-1 aspect-video min-h-[180px] overflow-hidden border border-border bg-bg/20 backdrop-blur-sm m-2">
          <ProjectAnimation type={project.category} isHovered={isHovered} />
          <div className="absolute inset-0 bg-accent/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Hover Overlay Icons */}
          <div className="absolute bottom-4 right-4 flex gap-2 translate-y-12 group-hover:translate-y-0 transition-transform duration-500 z-10">
             <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-accent text-bg flex items-center justify-center rounded-sm text-xs hover:bg-white transition-colors">
               👁️
             </a>
             <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white text-bg flex items-center justify-center rounded-sm text-xs hover:bg-accent transition-colors">
               🔗
             </a>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Web", "AI", "Tools"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-accent text-xs tracking-widest uppercase">// SELECTED_WORKS</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter">
              ARCHITECTURAL <br/>
              SHOWCASE
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-8 border-b border-border pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative text-xs font-mono uppercase tracking-widest pb-2 transition-colors ${filter === cat ? 'text-accent' : 'text-muted hover:text-white'}`}
              >
                {cat}
                {filter === cat && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[350px]">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              featured={project.featured} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
