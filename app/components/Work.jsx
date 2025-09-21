"use client";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const ProjectCard = ({ title, dates, stack, points, demo, code }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45 }}
    whileHover={{ scale: 1.03, rotate: -0.5 }}
    className="rounded-2xl border p-6 will-change-transform transition-transform"
  >
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-sm text-muted-foreground">{dates}</p>
    <p className="mt-2 text-sm"><strong>Tech:</strong> {stack}</p>
    <ul className="mt-3 list-disc pl-5 space-y-2">
      {points.map((p, i) => <li key={i}>{p}</li>)}
    </ul>
    <div className="mt-4 flex gap-3">
      {demo && (
        <a className="px-4 py-2 rounded-full border transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:shadow"
           href={demo} target="_blank" rel="noreferrer">
          Live Demo
        </a>
      )}
      {code && (
        <a className="px-4 py-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black transition-transform duration-300 hover:scale-105 hover:shadow-lg"
           href={code} target="_blank" rel="noreferrer">
          GitHub
        </a>
      )}
    </div>
  </motion.div>
);

const Work = () => (
  <AnimatedSection id="work" className="max-w-5xl mx-auto px-6 py-16">
    <h2 className="text-3xl sm:text-4xl font-serif">My Work</h2>
    <p className="mt-2 text-neutral-700 dark:text-neutral-300">
      A selection of projects that showcase my skills and problem-solving.
    </p>
    <div className="mt-8 grid gap-6">
      <ProjectCard
        title="Sentiment Analysis on Google Gemini LLM"
        dates="Mar 2024 – May 2024"
        stack="Python, Google Gemini LLM API, React.js, Naive Bayes, Neural Networks, Logistic Regression"
        points={[
          "Analyzed 50,000 IMDB reviews using Gemini LLM; achieved ~95% accuracy on the test dataset.",
          "Benchmarked classical and neural models with 84–87% accuracy for robustness.",
          "Built a React.js UI for real-time sentiment analysis with simple data visualizations."
        ]}
        demo=""  // add your live demo link
        code=""  // add your GitHub link
      />
      {/* Add more ProjectCard components here */}
    </div>
  </AnimatedSection>
);

export default Work;
