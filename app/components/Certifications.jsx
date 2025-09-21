import AnimatedSection from "./AnimatedSection";

const Certifications = () => (
  <AnimatedSection id="certifications" className="max-w-5xl mx-auto px-6 py-16">
    <h2 className="text-3xl sm:text-4xl font-serif">Certifications</h2>
    <ul className="mt-6 list-disc pl-5 space-y-2">
      <li className="transition-transform duration-200 hover:translate-x-1">Salesforce Certified Administrator (SCA)</li>
      <li className="transition-transform duration-200 hover:translate-x-1">Advanced RPA Professional — Automation Anywhere</li>
      <li className="transition-transform duration-200 hover:translate-x-1">Cisco Certified Network Associate (CCNA Industrial)</li>
    </ul>
  </AnimatedSection>
);

export default Certifications;
