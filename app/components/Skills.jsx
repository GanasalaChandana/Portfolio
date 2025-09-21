"use client";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const Pill = ({ children, delay = 0 }) => (
  <motion.span
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ duration: 0.35, ease: "easeOut", delay }}
    className="inline-block rounded-full border px-3 py-1 text-sm mr-2 mb-2 transition-colors duration-200 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
  >
    {children}
  </motion.span>
);

const Card = ({ children }) => (
  <div className="rounded-2xl border p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
    {children}
  </div>
);

const Skills = () => (
  <AnimatedSection id="skills" className="max-w-5xl mx-auto px-6 py-16" delay={0.05}>
    <h2 className="text-3xl sm:text-4xl font-serif">Skills</h2>

    <div className="mt-8 grid md:grid-cols-2 gap-6">
      <Card>
        <h3 className="font-semibold">Frontend</h3>
        <div className="mt-3">
          <Pill delay={0.02}>React.js</Pill><Pill delay={0.04}>Next.js</Pill><Pill delay={0.06}>Angular</Pill>
          <Pill delay={0.08}>Redux</Pill><Pill delay={0.10}>Tailwind CSS</Pill><Pill delay={0.12}>Bootstrap</Pill>
        </div>
      </Card>

      <Card>
        <h3 className="font-semibold">Backend</h3>
        <div className="mt-3">
          <Pill delay={0.02}>Java</Pill><Pill delay={0.04}>Spring Boot</Pill><Pill delay={0.06}>Node.js</Pill>
          <Pill delay={0.08}>Express.js</Pill><Pill delay={0.10}>REST APIs</Pill><Pill delay={0.12}>Microservices</Pill>
          <Pill delay={0.14}>Spring Cloud</Pill>
        </div>
      </Card>

      <Card>
        <h3 className="font-semibold">Databases</h3>
        <div className="mt-3">
          <Pill delay={0.02}>MongoDB</Pill><Pill delay={0.04}>MySQL</Pill><Pill delay={0.06}>PostgreSQL</Pill>
          <Pill delay={0.08}>Redis</Pill>
        </div>
      </Card>

      <Card>
        <h3 className="font-semibold">Cloud / DevOps / Tools</h3>
        <div className="mt-3">
          <Pill delay={0.02}>AWS</Pill><Pill delay={0.04}>Docker</Pill><Pill delay={0.06}>Kubernetes</Pill>
          <Pill delay={0.08}>Jenkins</Pill><Pill delay={0.10}>Apache Kafka</Pill><Pill delay={0.12}>Maven</Pill>
          <Pill delay={0.14}>Git</Pill><Pill delay={0.16}>CI/CD</Pill>
        </div>
      </Card>

      <Card className="md:col-span-2">
        <h3 className="font-semibold">Security / Testing</h3>
        <div className="mt-3">
          <Pill delay={0.02}>JWT</Pill><Pill delay={0.04}>OAuth 2.0</Pill><Pill delay={0.06}>SSL/TLS</Pill>
          <Pill delay={0.08}>Jest</Pill><Pill delay={0.10}>JUnit</Pill><Pill delay={0.12}>Unit & Integration Testing</Pill>
        </div>
      </Card>
    </div>
  </AnimatedSection>
);

export default Skills;
