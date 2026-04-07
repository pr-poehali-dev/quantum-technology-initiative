import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/06c7c67c-c9e9-46c6-85a6-452084d9a2a6/files/459495f8-b385-4f74-8a72-56960cca6bfa.jpg"
            alt="Тургенев — классик русской литературы"
            className="w-full h-full object-cover"
            style={{ filter: "sepia(60%) brightness(0.5)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,5,2,0.7) 0%, rgba(30,15,5,0.5) 100%)" }} />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-amber-400/80 uppercase z-10 text-xs tracking-widest italic" style={{ fontFamily: "'Playfair Display', serif" }}>
        1818 — 1883
      </h3>

      <p className="absolute bottom-12 right-6 text-amber-50 text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl z-10 italic leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
        «Берегите наш язык, наш прекрасный русский язык,
        это клад, это достояние, переданное нам нашими предшественниками»
      </p>

      <div className="absolute bottom-12 left-6 z-10">
        <div className="w-px h-16 bg-amber-500/30" />
      </div>
    </div>
  );
}
