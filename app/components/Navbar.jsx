import React from "react";

const LinkItem = ({ href, children }) => (
  <a
    href={href}
    className="relative px-1 py-0.5 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
  >
    {children}
  </a>
);

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/85 dark:bg-neutral-900/85 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#top" className="text-xl font-bold">Chandana</a>

        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><LinkItem href="#top">Home</LinkItem></li>
          <li><LinkItem href="#about">About</LinkItem></li>
          <li><LinkItem href="#education">Education</LinkItem></li>
          <li><LinkItem href="#skills">Skills</LinkItem></li>
          <li><LinkItem href="#experience">Experience</LinkItem></li>
          <li><LinkItem href="#work">My Work</LinkItem></li>
          <li><LinkItem href="#certifications">Certifications</LinkItem></li>
          <li><LinkItem href="#contact">Contact</LinkItem></li>
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle dark mode"
            className="px-3 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
            title={isDarkMode ? "Switch to Light" : "Switch to Dark"}
          >
            {isDarkMode ? "🌞" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
