export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div
            className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between"
            style={{ background: "#0f0803" }}
          >
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-amber-700/60 text-xs tracking-widest">Произведения</h3>
                <span className="text-amber-200/70 text-sm sm:text-base" style={{ fontFamily: "'Playfair Display', serif" }}>Отцы и дети</span>
                <span className="text-amber-200/70 text-sm sm:text-base" style={{ fontFamily: "'Playfair Display', serif" }}>Записки охотника</span>
                <span className="text-amber-200/70 text-sm sm:text-base" style={{ fontFamily: "'Playfair Display', serif" }}>Дворянское гнездо</span>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-amber-700/60 text-xs tracking-widest">Викторина</h3>
                <a
                  href="#quiz"
                  className="text-amber-200/70 hover:text-amber-300 transition-colors duration-300 text-sm sm:text-base"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Начать
                </a>
                <a
                  href="#about"
                  className="text-amber-200/70 hover:text-amber-300 transition-colors duration-300 text-sm sm:text-base"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  О писателе
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1
                className="text-[14vw] sm:text-[13vw] lg:text-[11vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 font-bold tracking-tight italic"
                style={{ fontFamily: "'Playfair Display', serif", color: "#c4853a" }}
              >
                ТУРГЕНЕВ
              </h1>
              <p className="text-amber-700/50 text-sm sm:text-base">{new Date().getFullYear()} · Русская классика</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
