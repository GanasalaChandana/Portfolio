import React from 'react'


const Footer = () => (
  <footer className="mt-20 py-12 border-t">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <div className="space-x-5">
        <a className="underline" href="mailto:chandanacherry869@gmail.com">Email</a>
        <a className="underline" href="https://www.linkedin.com/in/chandana-ganasala-656255191/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="underline" href="https://github.com/GanasalaChandana" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div className="mt-4 text-sm text-muted-foreground">
        Built with React • Next.js • Tailwind CSS • Framer Motion
      </div>
      <div className="mt-2 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Chandana Ganasala. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
