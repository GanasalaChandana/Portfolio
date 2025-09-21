"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.08 * i } }),
};

export default function Header() {
  return (
    <section id="top" className="relative max-w-5xl mx-auto px-6 pt-36 pb-16 text-center">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full relative group"
      >
        <div className="relative w-full h-full rounded-full ring-2 ring-neutral-200 dark:ring-neutral-700 overflow-hidden shadow-lg">
          <Image
            src="/chandana.jpg"
            alt="Chandana Ganasala"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority
          />
        </div>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        custom={1}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-6 text-4xl sm:text-6xl font-serif tracking-tight"
      >
        Hi, I’m Chandana 👋
      </motion.h1>

      <motion.p
        variants={fadeUp}
        custom={2}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-4 text-2xl font-semibold"
      >
        Full Stack Software Developer — <span className="font-bold">React.js</span> ·{" "}
        <span className="font-bold">Spring Boot</span> · <span className="font-bold">AWS</span>
      </motion.p>

      <motion.p
        variants={fadeUp}
        custom={3}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-4 mx-auto prose-narrow text-base sm:text-lg text-neutral-700 dark:text-neutral-300"
      >
        I design and build scalable web apps and secure APIs. Recently helped apps scale to{" "}
        <strong>5,000+ users</strong>, improved performance by <strong>40%</strong>, and delivered
        sub-<strong>500ms</strong> API response times.
      </motion.p>

      <motion.div
        variants={fadeUp}
        custom={4}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
      >
        <a
          href="#work"
          className="px-6 py-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          View My Work →
        </a>
        <a
          href="/ChandanaGanasala_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full border border-neutral-900 dark:border-neutral-100 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:shadow"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-neutral-100 dark:hover:bg-neutral-800"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
