"use client";

import { useState } from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import VoiceAssistant from "../components/VoiceAssistant";
import ButterflyScene from "../components/ButterflyScene";
import AIChat from "../components/AIChat";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";

import Education from "../components/Education";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
export default function Home() {
  const [ready, setReady] = useState(false);

  return (
    <>
      {!ready && <Intro onFinish={() => setReady(true)} />}

      {ready && (
        <>
          <ButterflyScene />

          <main className="container">
            <Hero />
            <About />
            <Projects />
            <VoiceAssistant />
            <AIChat />
            <Navbar />
            <Hero />
            <About />
            <Projects />
            
            <Education />
            <Skills />
            <Contact />
          </main>
 
        </>
      )}
    </>
  );
}