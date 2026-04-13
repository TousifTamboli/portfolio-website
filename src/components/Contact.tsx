import { motion } from "motion/react";
import React, { useState, useRef } from "react";

/**
 * GOOGLE FORM INTEGRATION INSTRUCTIONS:
 * 1. Create a Google Form with 3 fields: Name, Email, and Message.
 * 2. Click "Get pre-filled link" in the Google Form settings.
 * 3. Type dummy values into the fields and click "Get link".
 * 4. In the generated link, find the entry IDs (e.g., entry.123456789).
 * 5. Replace the placeholder IDs below with your actual IDs.
 * 6. Replace the GOOGLE_FORM_ID with your form's unique ID from the URL.
 */
const GOOGLE_FORM_CONFIG = {
  FORM_ID: "1FAIpQLSc8HcNoSb4BihV6iLPUgFnCWZWw87sx9R5d2IQhElami1Ky5g",
  ENTRY_NAME: "entry.81845247",
  ENTRY_EMAIL: "entry.2135171622",
  ENTRY_MESSAGE: "entry.1116473924",
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    // We let the form submit naturally to the hidden iframe by NOT calling e.preventDefault()
    setStatus("loading");
    
    // Provide visual feedback for the transmission process
    setTimeout(() => {
      setStatus("success");
      // Reset the form after a short delay to clear the fields
      if (formRef.current) formRef.current.reset();
    }, 2000);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Hidden Iframe to prevent page redirect on form submission */}
      <iframe 
        name="hidden_iframe" 
        id="hidden_iframe" 
        style={{ display: 'none' }} 
      />

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h2 className="text-[25vw] font-display font-bold text-white/[0.03] leading-none whitespace-nowrap">
          LET'S TALK LET'S TALK
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-2 mb-16 items-center text-center">
            <span className="font-mono text-accent text-xs tracking-widest uppercase">// ESTABLISH_CONNECTION</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter">
              YOUR NEXT HIRE<br/>
              IS ONE MESSAGE AWAY.
            </h2>
          </div>

          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            target="hidden_iframe"
            action={`https://docs.google.com/forms/d/e/${GOOGLE_FORM_CONFIG.FORM_ID}/formResponse`}
            method="POST"
            className="flex flex-col gap-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col gap-4">
                <label className="text-[10px] font-mono text-muted uppercase tracking-[0.3em]">USER_NAME_IDENTIFIER</label>
                <div className="flex items-center gap-4 border-b border-border focus-within:border-accent transition-colors pb-2 group">
                  <span className="text-accent font-mono">&gt;</span>
                  <input 
                    required
                    name={GOOGLE_FORM_CONFIG.ENTRY_NAME}
                    type="text" 
                    placeholder="type your name ..." 
                    className="bg-transparent border-none outline-none w-full font-mono text-accent placeholder:text-muted/30"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label className="text-[10px] font-mono text-muted uppercase tracking-[0.3em]">ACCESS_PROTOCOL (EMAIL)</label>
                <div className="flex items-center gap-4 border-b border-border focus-within:border-accent transition-colors pb-2 group">
                  <span className="text-accent font-mono">&gt;</span>
                  <input 
                    required
                    name={GOOGLE_FORM_CONFIG.ENTRY_EMAIL}
                    type="email" 
                    placeholder="example@domain.com" 
                    className="bg-transparent border-none outline-none w-full font-mono text-accent placeholder:text-muted/30"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-[10px] font-mono text-muted uppercase tracking-[0.3em]">TRANSMISSION_PAYLOAD (MESSAGE)</label>
              <div className="flex items-start gap-4 border-b border-border focus-within:border-accent transition-colors pb-2 group">
                <span className="text-accent font-mono mt-1">&gt;</span>
                <textarea 
                  required
                  name={GOOGLE_FORM_CONFIG.ENTRY_MESSAGE}
                  rows={4}
                  placeholder="enter project details or inquiry ..." 
                  className="bg-transparent border-none outline-none w-full font-mono text-accent placeholder:text-muted/30 resize-none"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status !== "idle"}
              className={`w-full py-6 font-display font-bold text-lg flex items-center justify-center gap-4 transition-all ${
                status === "success" ? "bg-white text-bg" : "bg-accent text-bg hover:shadow-[0_0_30px_rgba(0,255,156,0.3)]"
              }`}
            >
              {status === "idle" && (
                <>EXECUTE_TRANSMISSION <span className="text-xl">➤</span></>
              )}
              {status === "loading" && (
                <div className="flex gap-1">
                  <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-2 h-2 bg-bg rounded-full" />
                  <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 bg-bg rounded-full" />
                  <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 bg-bg rounded-full" />
                </div>
              )}
              {status === "success" && (
                <>TRANSMISSION_COMPLETE <span className="text-xl">✓</span></>
              )}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
