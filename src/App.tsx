/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import CompetitiveProgramming from "./components/CompetitiveProgramming";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="relative min-h-screen bg-bg selection:bg-accent selection:text-bg">
      {/* Global Background Effects */}
      <svg style={{ position: 'fixed', width: 0, height: 0 }}>
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      
      <div className="noise-overlay" />
      <div className="vignette" />

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <CompetitiveProgramming />
      <Contact />
      <Footer />
    </main>
  );
}
