"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import LoadingScreen from "./LoadingScreen";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import ProjectGallery from "./ProjectGallery";
import GithubActivity from "./GithubActivity";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Contact from "./Contact";
import Footer from "./Footer";
import AIChat from "./AIChat";
import VoiceAssistant from "./VoiceAssistant";
import ButterflyScene from "./ButterflyScene";

export default function HomeClient({ githubProfile, githubRepos, content }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <main>
        <ButterflyScene />

        <Navbar />

        <div id="home">
          <Hero content={content.hero} social={content.social} />
        </div>

        <div id="about">
          <About content={content.about} />
        </div>

        <div id="projects">
          <Projects
            items={content.projects}
            githubRepos={githubRepos}
            social={content.social}
          />
        </div>

        <div id="github">
          <GithubActivity profile={githubProfile} repos={githubRepos} />
        </div>

        <ProjectGallery repos={githubRepos} />

        <div id="education">
          <Education items={content.education} />
        </div>

        <div id="experience">
          <Experience items={content.experience} />
        </div>

        <div id="skills">
          <Skills items={content.skills} />
        </div>

        <div id="certifications">
          <Certifications items={content.certifications} />
        </div>

        <div id="contact">
          <Contact content={content} />
        </div>

        <Footer
          githubProfile={githubProfile}
          social={content.social}
          name={`${content.hero.firstName} ${content.hero.lastName}`}
        />

        <AIChat />

        <VoiceAssistant />
      </main>
    </>
  );
}
