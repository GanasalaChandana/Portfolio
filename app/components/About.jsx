import AnimatedSection from "./AnimatedSection";

const About = () => (
  <AnimatedSection id="about" className="max-w-5xl mx-auto px-6 py-16" delay={0.02}>
    <h2 className="text-3xl sm:text-4xl font-serif">About Me</h2>
    <p className="mt-4 leading-7 text-neutral-700 dark:text-neutral-300">
      I'm Chandana Ganasala, a passionate software developer with a Master's in Computer Science from California State University, Fresno.
      I specialize in building full-stack web applications using modern technologies like React, Next.js, Node.js, and Spring Boot.
      With a strong foundation in both frontend and backend development, I enjoy creating seamless user experiences and robust server-side solutions.
    </p>
    <p className="mt-3 leading-7 text-neutral-700 dark:text-neutral-300">
      I enjoy taking ideas from concept to product — writing clean, maintainable code and shipping features that make a difference.
    </p>
  </AnimatedSection>
);

export default About;
