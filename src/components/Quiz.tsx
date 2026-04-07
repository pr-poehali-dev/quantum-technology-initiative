import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    q: "В каком году родился И. С. Тургенев?",
    options: ["1812", "1818", "1821", "1825"],
    answer: 1,
  },
  {
    q: "В каком городе родился Тургенев?",
    options: ["Москва", "Санкт-Петербург", "Орёл", "Тула"],
    answer: 2,
  },
  {
    q: "Как называется главный цикл рассказов Тургенева о крестьянской жизни?",
    options: ["Вечера на хуторе", "Записки охотника", "Деревенские были", "Русские картины"],
    answer: 1,
  },
  {
    q: "Кто является главным героем романа «Отцы и дети»?",
    options: ["Онегин", "Печорин", "Базаров", "Рудин"],
    answer: 2,
  },
  {
    q: "Какое направление в философии исповедовал Базаров в романе «Отцы и дети»?",
    options: ["Романтизм", "Нигилизм", "Идеализм", "Материализм"],
    answer: 1,
  },
  {
    q: "Как называется усадьба, где провёл детство Тургенев?",
    options: ["Ясная Поляна", "Спасское-Лутовиново", "Тарханы", "Михайловское"],
    answer: 1,
  },
  {
    q: "Роман «Дворянское гнездо» посвящён образу…",
    options: ["Нигилиста-революционера", "Лишнего человека", "Крестьянина-правдоискателя", "Купца-предпринимателя"],
    answer: 1,
  },
  {
    q: "В какой стране Тургенев провёл значительную часть своей жизни?",
    options: ["Германия", "Англия", "Франция", "Италия"],
    answer: 2,
  },
  {
    q: "Как звали певицу Полину Виардо, ставшую главной любовью Тургенева?",
    options: ["Мария", "Полина", "Наталья", "Елизавета"],
    answer: 1,
  },
  {
    q: "Какое произведение Тургенева вызвало широкий общественный резонанс и было воспринято как антикрепостническое?",
    options: ["Рудин", "Дым", "Муму", "Ася"],
    answer: 2,
  },
  {
    q: "В каком университете учился Тургенев?",
    options: ["Казанский", "Московский", "Санкт-Петербургский", "Харьковский"],
    answer: 2,
  },
  {
    q: "Какой роман Тургенева считается первым в русской литературе о «лишнем человеке»?",
    options: ["Отцы и дети", "Рудин", "Дворянское гнездо", "Накануне"],
    answer: 1,
  },
  {
    q: "Как называется стихотворение в прозе Тургенева, ставшее гимном русскому языку?",
    options: ["Родина", "Русский язык", "Язык мой", "Отечество"],
    answer: 1,
  },
  {
    q: "Кому посвящён роман «Накануне»?",
    options: ["Революционному движению в Болгарии", "Крестьянской реформе в России", "Народническому движению", "Польскому восстанию"],
    answer: 0,
  },
  {
    q: "Где скончался И. С. Тургенев в 1883 году?",
    options: ["Париж", "Берлин", "Буживаль", "Орёл"],
    answer: 2,
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === questions[current].answer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setAnswered(false);
  };

  const getResultText = () => {
    if (score >= 13) return "Превосходно! Вы настоящий знаток Тургенева.";
    if (score >= 10) return "Отлично! Вы хорошо знаете творчество писателя.";
    if (score >= 7) return "Неплохо! Есть что ещё открыть в мире Тургенева.";
    return "Стоит перечитать произведения Тургенева ещё раз!";
  };

  return (
    <div
      id="quiz"
      className="min-h-screen py-20 px-6"
      style={{ background: "#1c1008", backgroundImage: "radial-gradient(ellipse at center, #2a1810 0%, #0f0803 100%)" }}
    >
      <div className="max-w-2xl mx-auto">
        <p className="uppercase tracking-[0.4em] text-xs text-amber-500/70 text-center mb-3">Викторина</p>
        <h2
          className="text-3xl md:text-4xl text-amber-100 text-center mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Русская классика в сетевом пространстве
        </h2>
        <p className="text-amber-400/60 text-center text-sm italic mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
          Творчество И. С. Тургенева
        </p>

        <AnimatePresence mode="wait">
          {!finished ? (
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-amber-500/60 text-xs uppercase tracking-widest">
                  Вопрос {current + 1} из {questions.length}
                </span>
                <span className="text-amber-500/60 text-xs uppercase tracking-widest">
                  Очки: {score}
                </span>
              </div>

              <div className="w-full bg-amber-900/20 h-px mb-8">
                <div
                  className="bg-amber-500/60 h-px transition-all duration-500"
                  style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                />
              </div>

              <div
                className="text-xl md:text-2xl text-amber-50 mb-8 leading-relaxed"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {questions[current].q}
              </div>

              <div className="flex flex-col gap-3 mb-8">
                {questions[current].options.map((opt, idx) => {
                  let style = "border border-amber-800/40 text-amber-200/80 hover:border-amber-500/60 hover:text-amber-100";
                  if (answered) {
                    if (idx === questions[current].answer) {
                      style = "border border-green-500/70 bg-green-900/30 text-green-300";
                    } else if (idx === selected) {
                      style = "border border-red-500/70 bg-red-900/30 text-red-300";
                    } else {
                      style = "border border-amber-900/20 text-amber-200/30";
                    }
                  }
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      className={`text-left px-5 py-4 transition-all duration-200 cursor-pointer ${style}`}
                      style={{ fontFamily: "'Playfair Display', serif", background: "transparent" }}
                    >
                      <span className="text-amber-600/50 mr-3 text-xs">{String.fromCharCode(65 + idx)}.</span>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {answered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-end"
                >
                  <button
                    onClick={handleNext}
                    className="px-8 py-3 border border-amber-500/50 text-amber-200 uppercase tracking-widest text-xs hover:bg-amber-500/20 transition-all duration-300"
                  >
                    {current + 1 >= questions.length ? "Завершить" : "Далее →"}
                  </button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-10"
            >
              <div className="w-20 h-px bg-amber-500/40 mx-auto mb-8" />
              <p className="text-amber-500/70 uppercase tracking-widest text-xs mb-4">Результат</p>
              <div
                className="text-7xl md:text-8xl font-bold text-amber-300 mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {score}
              </div>
              <p className="text-amber-100/40 text-sm mb-6">из {questions.length} вопросов</p>
              <div className="w-16 h-px bg-amber-700/40 mx-auto mb-6" />
              <p
                className="text-amber-100 text-xl md:text-2xl mb-10 italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {getResultText()}
              </p>
              <button
                onClick={handleRestart}
                className="px-8 py-3 border border-amber-500/50 text-amber-200 uppercase tracking-widest text-xs hover:bg-amber-500/20 transition-all duration-300"
              >
                Пройти снова
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
