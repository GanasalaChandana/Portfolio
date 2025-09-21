"use client";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function AnimatedSection({ id, className, children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("show");
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: "easeOut", delay },
        },
      }}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.section>
  );
}
