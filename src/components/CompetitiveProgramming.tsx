import { motion } from "motion/react";
import { useEffect, useState } from "react";

const leetcodeStats = [
  { label: "EASY_SOLVED", value: 342, total: 410, color: "#00FF9C" },
  { label: "MED_SOLVED", value: 512, total: 910, color: "#FFD700" },
  { label: "HARD_SOLVED", value: 89, total: 400, color: "#FF4D4D" },
];

const recentProblems = [
  { name: "Longest Valid Parentheses", difficulty: "Hard", lang: "C++", time: "2ms" },
  { name: "Merge K Sorted Lists", difficulty: "Hard", lang: "Rust", time: "0ms" },
  { name: "Container With Most Water", difficulty: "Medium", lang: "Go", time: "12ms" },
  { name: "Two Sum", difficulty: "Easy", lang: "TypeScript", time: "56ms" },
];

function ProgressRing({ value, total, color, label }: any) {
  const percentage = (value / total) * 100;
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center gap-6 bg-surface/20 p-4 border border-border/50">
      <div className="relative w-20 h-20 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="4"
            className="text-border"
          />
          <motion.circle
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            cx="40"
            cy="40"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-xs font-mono font-bold">{Math.round(percentage)}%</span>
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-mono text-muted uppercase tracking-widest">{label}</span>
        <span className="text-sm font-display font-bold text-white">{value} / {total}</span>
      </div>
    </div>
  );
}

export default function CompetitiveProgramming() {
  const [data, setData] = useState<any>(null);

  const [recentFullDetails, setRecentFullDetails] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://alfa-leetcode-api.onrender.com/userProfile/Tousif3")
      .then(res => res.json())
      .then(json => {
        if (!json.errors && json.totalSolved !== undefined) {
          setData(json);
          
          const accepted = json.recentSubmissions
            .filter((s:any) => s.statusDisplay === "Accepted")
            .filter((s:any, i:number, arr:any[]) => arr.findIndex(t => t.title === s.title) === i)
            .slice(0, 4);

          Promise.all(accepted.map((s:any) => 
            fetch(`https://alfa-leetcode-api.onrender.com/select?titleSlug=${s.titleSlug}`)
              .then(res => res.json())
              .then(details => ({
                ...s,
                difficulty: details.difficulty
              }))
          )).then(fullDetails => {
            setRecentFullDetails(fullDetails);
          });
        }
      })
      .catch(err => console.error(err));
  }, []);

  const currentStats = data ? [
    { label: "EASY_SOLVED", value: data.easySolved, total: data.totalEasy, color: "#00FF9C" },
    { label: "MED_SOLVED", value: data.mediumSolved, total: data.totalMedium, color: "#FFD700" },
    { label: "HARD_SOLVED", value: data.hardSolved, total: data.totalHard, color: "#FF4D4D" },
  ] : leetcodeStats;

  const currentRecent = recentFullDetails.length > 0 ? 
    recentFullDetails.map((s:any) => ({
      name: s.title,
      difficulty: s.difficulty || "-",
      lang: s.lang === "cpp" ? "C++" : s.lang === "python3" ? "Python" : s.lang,
      time: new Date(parseInt(s.timestamp) * 1000).toLocaleDateString()
    })) : (data ? [] : recentProblems);

  const rankText = data && data.ranking ? `#${data.ranking.toLocaleString()}` : "TOP 15%";

  return (
    <section id="terminal" className="py-32 relative bg-bg/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-2 mb-12">
          <span className="font-mono text-accent text-xs tracking-widest uppercase">// LEETCODE_STATS</span>
          <div className="flex justify-between items-end">
             <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter">
               ALGORITHMIC MASTERY
             </h2>
             <div className="hidden md:flex gap-8 text-[10px] font-mono uppercase tracking-widest text-muted">
               <div className="flex flex-col items-end">
                 <span>RANK</span>
                 <span className="text-white font-bold">{rankText}</span>
               </div>
               <div className="flex flex-col items-end">
                 <span>STREAK</span>
                 <span className="text-accent font-bold">250+ DAYS</span>
               </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Stats & Badges */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {currentStats.map((stat, i) => (
              <ProgressRing key={i} {...stat} />
            ))}
            
            <div className="bg-surface/20 p-6 border border-border/50">
              <span className="text-[10px] font-mono text-muted uppercase tracking-widest block mb-4">UNLOCKED_ACHIEVEMENTS</span>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-yellow-500/20 border border-yellow-500/50 flex items-center justify-center rounded text-xl grayscale hover:grayscale-0 transition-all cursor-help" title="Top 100">🥇</div>
                <div className="w-10 h-10 bg-accent/20 border border-accent/50 flex items-center justify-center rounded text-xl grayscale hover:grayscale-0 transition-all cursor-help" title="Daily Streak">🔥</div>
                <div className="w-10 h-10 bg-muted/20 border border-border flex items-center justify-center rounded text-xl grayscale hover:grayscale-0 transition-all cursor-help" title="365 Days">🔒</div>
              </div>
            </div>
          </div>

          {/* Right: Heatmap & Table */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Heatmap Placeholder */}
            <div className="bg-surface/20 p-6 border border-border/50 overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-mono text-muted uppercase tracking-widest">CONTRIBUTION_HEATMAP_2025_26</span>
                <a href="https://leetcode.com/u/Tousif3/" target="_blank" className="text-[10px] font-mono text-accent hover:underline">VIEW_PROFILE</a>
              </div>
              <div className="flex flex-wrap gap-1">
                {Array.from({ length: 365 }).map((_, i) => {
                  const intensity = Math.random();
                  return (
                    <div 
                      key={i} 
                      className="w-2 h-2 rounded-[1px]" 
                      style={{ 
                        backgroundColor: intensity > 0.8 ? '#00FF9C' : intensity > 0.5 ? '#00804D' : intensity > 0.2 ? '#1A3329' : '#141414' 
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Recent Problems Table */}
            <div className="bg-surface/20 border border-border/50 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="p-4 text-[10px] font-mono text-muted uppercase tracking-widest">PROBLEM_NAME</th>
                    <th className="p-4 text-[10px] font-mono text-muted uppercase tracking-widest">DIFFICULTY</th>
                    <th className="p-4 text-[10px] font-mono text-muted uppercase tracking-widest">LANGUAGE</th>
                    <th className="p-4 text-[10px] font-mono text-muted uppercase tracking-widest">DATE</th>
                  </tr>
                </thead>
                <tbody>
                  {currentRecent.map((prob:any, i:number) => (
                    <tr key={i} className="border-b border-border/20 hover:bg-white/5 transition-colors group">
                      <td className="p-4 text-sm font-sans text-white/80 group-hover:text-white">{prob.name}</td>
                      <td className="p-4">
                        <span className={`text-[9px] font-mono px-2 py-0.5 rounded ${
                          prob.difficulty === 'Hard' ? 'bg-red-500/10 text-red-500' : 
                          prob.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-accent/10 text-accent'
                        }`}>
                          {prob.difficulty}
                        </span>
                      </td>
                      <td className="p-4 text-xs font-mono text-muted">{prob.lang}</td>
                      <td className="p-4 text-xs font-mono text-accent">{prob.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
