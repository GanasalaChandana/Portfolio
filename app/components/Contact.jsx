import AnimatedSection from "./AnimatedSection";

const Contact = () => (
  <AnimatedSection id="contact" className="max-w-5xl mx-auto px-6 py-16">
    <h2 className="text-3xl sm:text-4xl font-serif">Contact Me</h2>
    <p className="mt-2 text-neutral-700 dark:text-neutral-300">
      Fresno, CA • <a href="tel:+15597099339" className="underline">+1 (559) 709-9339</a> •{" "}
      <a className="underline" href="mailto:chandanacherry869@gmail.com">chandanacherry869@gmail.com</a>
    </p>

    <form className="mt-6 grid gap-4 max-w-lg mx-auto">
      <input type="text" placeholder="Your Name"
        className="border rounded px-3 py-2 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white" />
      <input type="email" placeholder="Your Email"
        className="border rounded px-3 py-2 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white" />
      <textarea rows="5" placeholder="Your Message"
        className="border rounded px-3 py-2 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white" />
      <button
        type="submit"
        className="px-6 py-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      >
        Submit
      </button>
    </form>
  </AnimatedSection>
);

export default Contact;
