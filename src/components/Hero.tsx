import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ background: "#1a0e05" }}
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/06c7c67c-c9e9-46c6-85a6-452084d9a2a6/files/459495f8-b385-4f74-8a72-56960cca6bfa.jpg"
          alt="Портрет И. С. Тургенева"
          className="w-full h-full object-cover"
          style={{ filter: "sepia(40%) brightness(0.65)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(15,8,2,0.3) 0%, rgba(15,8,2,0.1) 40%, rgba(15,8,2,0.7) 100%)" }} />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center px-6">
        <p className="text-amber-300/80 uppercase tracking-[0.4em] text-xs mb-6">Русская классика в сетевом пространстве</p>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-amber-50 leading-tight mb-4"
          style={{ fontFamily: "'Playfair Display', serif", textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}
        >
          Иван Сергеевич
          <br />
          <span className="italic text-amber-200">Тургенев</span>
        </h1>
        <div className="w-24 h-px bg-amber-400/60 mx-auto my-6" />
        <p className="text-amber-100/80 text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
          Проверьте свои знания о жизни и творчестве великого русского писателя
        </p>
        <motion.a
          href="#quiz"
          className="inline-block mt-8 px-8 py-3 border border-amber-400/60 text-amber-200 uppercase tracking-widest text-xs hover:bg-amber-400/20 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
        >
          Начать викторину
        </motion.a>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-12 bg-amber-400/40 mx-auto"
        />
      </div>
    </div>
  );
}
