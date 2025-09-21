"use client";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const ExpCard = ({ children, index = 0 }) => (
  <motion.div
    // enter animation
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: 0.06 * index }}
    // hover animation (match Work.jsx vibe)
    whileHover={{ scale: 1.03, rotate: -0.5 }}
    className="rounded-2xl border p-6 will-change-transform transition-shadow hover:shadow-xl"
  >
    {children}
  </motion.div>
);

const Bullet = ({ children, i }) => (
  <motion.li
    initial={{ opacity: 0, y: 6 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35, delay: 0.04 * i }}
    // subtle hover on each bullet
    whileHover={{ x: 4 }}
    className="leading-relaxed"
  >
    {children}
  </motion.li>
);

const Item = ({ role, company, place, dates, bullets, index }) => (
  <ExpCard index={index}>
    <h3 className="text-xl font-semibold">{role}</h3>
    <p className="text-muted-foreground">
      {company}{place ? ` — ${place}` : ""}
    </p>
    <p className="text-sm text-muted-foreground">{dates}</p>
    <ul className="mt-3 list-disc pl-5 space-y-2">
      {bullets.map((b, i) => (
        <Bullet key={i} i={i}>{b}</Bullet>
      ))}
    </ul>
  </ExpCard>
);

const Experience = () => (
  <AnimatedSection id="experience" className="max-w-5xl mx-auto px-6 py-16">
    <h2 className="text-3xl sm:text-4xl font-serif">My Journey</h2>

    <div className="mt-8 grid gap-6">
      <Item
        index={0}
        role="Software Developer"
        company="ZenSpaceIT LLC"
        place="Charlotte, North Carolina"
        dates="Sep 2024 – Present"
        bullets={[
          "Architected and delivered secure e-commerce app with Clerk authentication, reducing login issues by ~45% and supporting 1,000+ users.",
          "Designed RESTful APIs (15+ endpoints) for product management; cut inventory update time from 5 min to ~30 sec; integrated Cloudinary for faster uploads (~30%).",
          "Optimized DB with compound indexes/aggregations, improving response times from ~1.2s to ~300ms for cart/order ops.",
          "Improved frontend performance with Next.js SSR, achieving ~50% faster page loads and better SEO.",
          "Implemented Redis caching and Kafka for realtime order notifications; increased customer satisfaction by ~25%."
        ]}
      />
      <Item
        index={1}
        role="Program Analyst"
        company="Cognizant Technology Services"
        place="Hyderabad, India"
        dates="Sep 2021 – Aug 2022"
        bullets={[
          "Built full-stack apps with React.js and Spring Boot microservices, serving 5,000+ users with sub-600ms APIs.",
          "Led code reviews and integrated OAuth2/JWT, decreasing security vulnerabilities by ~40%.",
          "Used Java 8 (Lambdas, Streams) to improve processing by ~25%.",
          "Containerized services with Docker, reducing release cycles by ~50%; maintained 85%+ unit-test coverage."
        ]}
      />
      <Item
        index={2}
        role="Software Development Intern"
        company="Cognizant Technology Services"
        place="Hyderabad, India"
        dates="Feb 2021 – Aug 2021"
        bullets={[
          "Built responsive React.js web app (mobile-first), boosting engagement by ~30%.",
          "Created reusable components, reducing CSS footprint by ~40%.",
          "Deployed on AWS (S3, EC2) with 99%+ uptime."
        ]}
      />
      <Item
        index={3}
        role="Web Development Intern"
        company="ECIL"
        place="Hyderabad, India"
        dates="May 2019 – Oct 2019"
        bullets={[
          "Developed mobile-responsive agricultural web app with weather-based crop prediction for 500+ farmers.",
          "Used Bootstrap for responsive layouts and cross-browser compatibility."
        ]}
      />
    </div>
  </AnimatedSection>
);

export default Experience;
