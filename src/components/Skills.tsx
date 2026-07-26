import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { 
  Code2, Terminal, Cpu, Database, Layers, Server, Cloud, 
  Sparkles, ShieldCheck, Workflow, Globe, Box, GitBranch, 
  Binary, Wrench, CheckCircle2, Lock, CpuIcon, ChevronDown, ChevronUp
} from "lucide-react";

interface SkillItem {
  name: string;
  category: "Languages" | "AI / ML" | "Frontend" | "Backend" | "Databases" | "DevOps & Cloud" | "Core CS & Tools";
  badge: string;
  proficiency: "EXPERT" | "ADVANCED" | "PROFICIENT";
  level: number;
  icon: React.ReactNode;
  highlight: string;
}

const categories = [
  "All",
  "Languages",
  "AI / ML",
  "Frontend",
  "Backend",
  "Databases",
  "DevOps & Cloud",
  "Core CS & Tools"
] as const;

const skillsDataFromTxt: SkillItem[] = [
  // Languages
  {
    name: "C++",
    category: "Languages",
    badge: "LANG",
    proficiency: "EXPERT",
    level: 96,
    icon: <Binary className="w-4 h-4 text-accent" />,
    highlight: "1.2K+ LeetCode & STL Mastery"
  },
  {
    name: "Python",
    category: "Languages",
    badge: "LANG",
    proficiency: "EXPERT",
    level: 95,
    icon: <Code2 className="w-4 h-4 text-accent" />,
    highlight: "AI/ML, AsyncIO & Backend"
  },
  {
    name: "JavaScript",
    category: "Languages",
    badge: "LANG",
    proficiency: "EXPERT",
    level: 92,
    icon: <Terminal className="w-4 h-4 text-accent" />,
    highlight: "ES6+, Async & Dynamic Logic"
  },
  {
    name: "SQL",
    category: "Languages",
    badge: "LANG",
    proficiency: "ADVANCED",
    level: 90,
    icon: <Database className="w-4 h-4 text-accent" />,
    highlight: "Relational Queries & Schemas"
  },

  // AI / ML
  {
    name: "Agentic AI & MCP",
    category: "AI / ML",
    badge: "AI",
    proficiency: "EXPERT",
    level: 95,
    icon: <Sparkles className="w-4 h-4 text-accent" />,
    highlight: "LangGraph & Model Context Protocol"
  },
  {
    name: "LLMs & Prompt Engineering",
    category: "AI / ML",
    badge: "AI",
    proficiency: "EXPERT",
    level: 92,
    icon: <Cpu className="w-4 h-4 text-accent" />,
    highlight: "Context Tuning & Tool Calling"
  },
  {
    name: "RAG Architecture",
    category: "AI / ML",
    badge: "AI",
    proficiency: "ADVANCED",
    level: 90,
    icon: <Workflow className="w-4 h-4 text-accent" />,
    highlight: "Vector Search & Retrieval"
  },
  {
    name: "LangChain & LangGraph",
    category: "AI / ML",
    badge: "AI",
    proficiency: "EXPERT",
    level: 92,
    icon: <Workflow className="w-4 h-4 text-accent" />,
    highlight: "Stateful Agentic Workflows"
  },
  {
    name: "HuggingFace",
    category: "AI / ML",
    badge: "AI",
    proficiency: "ADVANCED",
    level: 85,
    icon: <CpuIcon className="w-4 h-4 text-accent" />,
    highlight: "Transformers & Pre-trained Models"
  },

  // Frontend
  {
    name: "React.js & Next.js",
    category: "Frontend",
    badge: "WEB",
    proficiency: "EXPERT",
    level: 95,
    icon: <Layers className="w-4 h-4 text-accent" />,
    highlight: "App Router & Component Systems"
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    badge: "WEB",
    proficiency: "EXPERT",
    level: 92,
    icon: <Globe className="w-4 h-4 text-accent" />,
    highlight: "Custom Glassmorphic Styling"
  },
  {
    name: "HTML5 & CSS3",
    category: "Frontend",
    badge: "WEB",
    proficiency: "EXPERT",
    level: 95,
    icon: <Code2 className="w-4 h-4 text-accent" />,
    highlight: "Semantic Layouts & Styling"
  },
  {
    name: "Responsive Design",
    category: "Frontend",
    badge: "WEB",
    proficiency: "EXPERT",
    level: 94,
    icon: <Layers className="w-4 h-4 text-accent" />,
    highlight: "Mobile-First & Cross-Device UI"
  },

  // Backend
  {
    name: "Node.js & Express.js",
    category: "Backend",
    badge: "API",
    proficiency: "EXPERT",
    level: 92,
    icon: <Server className="w-4 h-4 text-accent" />,
    highlight: "REST Services & Middleware"
  },
  {
    name: "FastAPI",
    category: "Backend",
    badge: "API",
    proficiency: "EXPERT",
    level: 90,
    icon: <Server className="w-4 h-4 text-accent" />,
    highlight: "SSE Token Streaming & Async"
  },
  {
    name: "REST APIs & Integration",
    category: "Backend",
    badge: "API",
    proficiency: "EXPERT",
    level: 95,
    icon: <Globe className="w-4 h-4 text-accent" />,
    highlight: "End-to-End API Integration"
  },
  {
    name: "JWT Auth & RBAC",
    category: "Backend",
    badge: "API",
    proficiency: "ADVANCED",
    level: 88,
    icon: <Lock className="w-4 h-4 text-accent" />,
    highlight: "Role Access & Auth Security"
  },
  {
    name: "Microservices & Redis",
    category: "Backend",
    badge: "API",
    proficiency: "ADVANCED",
    level: 88,
    icon: <Server className="w-4 h-4 text-accent" />,
    highlight: "In-Memory Caching & Pub/Sub"
  },

  // Databases
  {
    name: "MongoDB",
    category: "Databases",
    badge: "DATA",
    proficiency: "ADVANCED",
    level: 88,
    icon: <Database className="w-4 h-4 text-accent" />,
    highlight: "NoSQL Document Aggregation"
  },
  {
    name: "MySQL",
    category: "Databases",
    badge: "DATA",
    proficiency: "ADVANCED",
    level: 90,
    icon: <Database className="w-4 h-4 text-accent" />,
    highlight: "Relational Tables & Indexing"
  },
  {
    name: "Database Design & Optimization",
    category: "Databases",
    badge: "DATA",
    proficiency: "ADVANCED",
    level: 86,
    icon: <Database className="w-4 h-4 text-accent" />,
    highlight: "Normalization & Fast Queries"
  },

  // DevOps & Cloud
  {
    name: "Docker & Docker Compose",
    category: "DevOps & Cloud",
    badge: "OPS",
    proficiency: "ADVANCED",
    level: 88,
    icon: <Box className="w-4 h-4 text-accent" />,
    highlight: "Containerization & Multi-Stage Deploys"
  },
  {
    name: "AWS (EC2, S3)",
    category: "DevOps & Cloud",
    badge: "OPS",
    proficiency: "ADVANCED",
    level: 85,
    icon: <Cloud className="w-4 h-4 text-accent" />,
    highlight: "Cloud Hosting & S3 Storage"
  },
  {
    name: "CI/CD & GitHub Actions",
    category: "DevOps & Cloud",
    badge: "OPS",
    proficiency: "ADVANCED",
    level: 88,
    icon: <GitBranch className="w-4 h-4 text-accent" />,
    highlight: "Automated Build Pipelines"
  },
  {
    name: "NGINX & Linux",
    category: "DevOps & Cloud",
    badge: "OPS",
    proficiency: "ADVANCED",
    level: 85,
    icon: <Terminal className="w-4 h-4 text-accent" />,
    highlight: "Reverse Proxy & Bash Scripting"
  },

  // Core CS & Tools
  {
    name: "Data Structures & Algos",
    category: "Core CS & Tools",
    badge: "CORE",
    proficiency: "EXPERT",
    level: 96,
    icon: <Binary className="w-4 h-4 text-accent" />,
    highlight: "Optimization, DP, Trees & Graphs"
  },
  {
    name: "OOP, DBMS & OS",
    category: "Core CS & Tools",
    badge: "CORE",
    proficiency: "ADVANCED",
    level: 90,
    icon: <ShieldCheck className="w-4 h-4 text-accent" />,
    highlight: "CS Core, Networks & Design Patterns"
  },
  {
    name: "Git, GitHub & Postman",
    category: "Core CS & Tools",
    badge: "TOOLS",
    proficiency: "EXPERT",
    level: 94,
    icon: <Wrench className="w-4 h-4 text-accent" />,
    highlight: "Version Control & API Diagnostics"
  },
  {
    name: "Agile, SDLC & Code Reviews",
    category: "Core CS & Tools",
    badge: "TOOLS",
    proficiency: "ADVANCED",
    level: 90,
    icon: <CheckCircle2 className="w-4 h-4 text-accent" />,
    highlight: "System Design & Quality Assurance"
  }
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Initial limit on mobile / collapsed view when viewing "All"
  const INITIAL_LIMIT = 8;

  const categorySkills = selectedCategory === "All"
    ? skillsDataFromTxt
    : skillsDataFromTxt.filter((s) => s.category === selectedCategory);

  const shouldTruncate = selectedCategory === "All" && !isExpanded && categorySkills.length > INITIAL_LIMIT;
  const visibleSkills = shouldTruncate ? categorySkills.slice(0, INITIAL_LIMIT) : categorySkills;

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === "All") {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <section id="skills" className="py-20 md:py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 md:mb-12">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-accent text-xs tracking-widest uppercase">
              // TECHNICAL_CAPABILITIES // ACTIVE_NODES: {skillsDataFromTxt.length}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter">
              SKILLS MATRIX & TECH STACK
            </h2>
          </div>

          {/* Horizontal Scrollable Category Pills on Mobile */}
          <div className="w-full md:w-auto overflow-x-auto pb-2 border-b border-border/60 scrollbar-none">
            <div className="flex gap-2 min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className={`relative px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider rounded transition-all whitespace-nowrap ${
                    selectedCategory === cat 
                      ? "text-bg bg-accent font-bold shadow-[0_0_10px_#00FF9C]" 
                      : "text-muted hover:text-white bg-surface/50 border border-border/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-4">
          <AnimatePresence mode="popLayout">
            {visibleSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: index < INITIAL_LIMIT ? index * 0.02 : 0 }}
                className="bg-surface/80 border border-border p-3.5 md:p-4 flex flex-col justify-between gap-3 relative group hover:border-accent/60 hover:bg-surface transition-all duration-300 rounded-sm overflow-hidden"
              >
                {/* Header Row */}
                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="p-1.5 bg-bg border border-border group-hover:border-accent/40 rounded shrink-0 transition-colors">
                      {skill.icon}
                    </div>
                    <h3 className="text-xs md:text-sm font-display font-bold text-white uppercase truncate group-hover:text-accent transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-[8px] font-mono text-accent bg-accent/10 px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0">
                    {skill.badge}
                  </span>
                </div>

                {/* Highlight line */}
                <div className="text-[10px] md:text-[11px] font-mono text-muted/90 truncate">
                  &gt; {skill.highlight}
                </div>

                {/* Minimal Signal Strength Line */}
                <div className="flex items-center justify-between gap-3 pt-2 border-t border-border/40">
                  <span className="text-[9px] font-mono text-muted uppercase">
                    {skill.proficiency}
                  </span>
                  <div className="flex items-center gap-1">
                    <div className="w-14 md:w-16 h-1 bg-bg border border-border/60 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="h-full bg-accent"
                      />
                    </div>
                    <span className="text-[9px] font-mono text-accent w-6 text-right">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Ambient Hover Glow */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 blur-xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-accent/10 transition-colors" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Expand / Collapse Control Button */}
        {selectedCategory === "All" && (
          <div className="mt-8 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-surface border border-accent/40 hover:border-accent text-accent px-6 py-2.5 rounded-full font-mono text-xs uppercase tracking-widest flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(0,255,156,0.1)] hover:shadow-[0_0_20px_rgba(0,255,156,0.25)]"
            >
              {isExpanded ? (
                <>
                  <span>[-] COLLAPSE_MATRIX</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>[+] VIEW_ALL_{skillsDataFromTxt.length}_SKILLS</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
