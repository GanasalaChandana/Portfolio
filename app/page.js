'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";       // ⬅️ new
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Certifications from "./components/Certifications"; // ⬅️ new
import Contact from "./components/Contact"; 
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(localStorage.theme === 'dark' || (!('theme' in localStorage) && prefersDark));
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      {/* Add scroll-mt-24 on each section container to avoid being hidden under fixed navbar */}
      <Header isDarkMode={isDarkMode} />
      <div className="scroll-mt-24" id="about"><About isDarkMode={isDarkMode} /></div>
      <div className="scroll-mt-24" id="education"><Education /></div>
      <div className="scroll-mt-24" id="skills"><Skills isDarkMode={isDarkMode} /></div>
      <div className="scroll-mt-24" id="experience"><Experience isDarkMode={isDarkMode} /></div>
      <div className="scroll-mt-24" id="work"><Work isDarkMode={isDarkMode} /></div>
      <div className="scroll-mt-24" id="certifications"><Certifications /></div>
      <div className="scroll-mt-24" id="contact"><Contact isDarkMode={isDarkMode} /></div>
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
