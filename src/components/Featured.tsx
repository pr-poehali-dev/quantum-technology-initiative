export default function Featured() {
  const facts = [
    { num: "1818", label: "Год рождения", desc: "Родился 9 ноября в Орле" },
    { num: "36", label: "Произведений", desc: "В цикле «Записки охотника»" },
    { num: "1883", label: "Год ухода", desc: "Скончался в Буживале, Франция" },
  ];

  return (
    <div
      id="about"
      className="min-h-screen px-6 py-20 lg:py-32 flex flex-col justify-center"
      style={{ background: "#f5ede0", backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c4a882' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <p className="uppercase tracking-[0.3em] text-xs text-amber-700/70 mb-4">О писателе</p>
            <h2
              className="text-3xl lg:text-5xl text-stone-800 leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              «Природа не храм, а мастерская, и человек в ней — работник»
            </h2>
            <div className="w-16 h-px bg-amber-600/50 mb-6" />
            <p className="text-stone-600 leading-relaxed text-base lg:text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
              Иван Тургенев — один из крупнейших русских писателей XIX века. Его романы, повести и рассказы
              раскрывают глубину человеческих переживаний, образы «лишнего человека» и красоту русской природы.
              Он стал первым русским писателем, получившим широкое признание в Европе.
            </p>
            <a
              href="#quiz"
              className="inline-block mt-8 bg-stone-800 text-amber-100 px-6 py-3 uppercase tracking-widest text-xs hover:bg-amber-800 transition-colors duration-300"
            >
              Пройти викторину
            </a>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            {facts.map((f) => (
              <div key={f.num} className="flex gap-6 items-start p-5 border border-amber-700/20" style={{ background: "rgba(255,255,255,0.5)" }}>
                <div className="text-3xl font-bold text-amber-700" style={{ fontFamily: "'Playfair Display', serif" }}>{f.num}</div>
                <div>
                  <div className="uppercase tracking-widest text-xs text-stone-500 mb-1">{f.label}</div>
                  <div className="text-stone-700" style={{ fontFamily: "'Playfair Display', serif" }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
