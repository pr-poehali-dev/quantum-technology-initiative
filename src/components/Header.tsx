interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-amber-100 text-sm uppercase tracking-widest font-light italic" style={{ fontFamily: "'Playfair Display', serif" }}>
          И. С. Тургенев
        </div>
        <nav className="flex gap-8">
          <a
            href="#quiz"
            className="text-amber-100 hover:text-amber-300 transition-colors duration-300 uppercase text-xs tracking-widest"
          >
            Викторина
          </a>
          <a
            href="#about"
            className="text-amber-100 hover:text-amber-300 transition-colors duration-300 uppercase text-xs tracking-widest"
          >
            О писателе
          </a>
        </nav>
      </div>
    </header>
  );
}
