import AnimatedSection from "./AnimatedSection";

const Card = ({ children }) => (
  <div className="rounded-2xl border p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
    {children}
  </div>
);

export const Education = () => (
  <AnimatedSection id="education" className="max-w-5xl mx-auto px-6 py-16">
    <h2 className="text-3xl sm:text-4xl font-serif">Education</h2>
    <div className="mt-8 grid gap-6">
      <Card>
        <h3 className="text-xl font-semibold">Master of Science in Computer Science</h3>
        <p className="text-muted-foreground">California State University, Fresno — Aug 2022 – May 2024</p>
      </Card>
      <Card>
        <h3 className="text-xl font-semibold">Bachelor of Technology in Computer Science</h3>
        <p className="text-muted-foreground">Koneru Lakshmaiah Educational Foundation — Jul 2017 – Apr 2021</p>
      </Card>
    </div>
  </AnimatedSection>
);

export default Education;
