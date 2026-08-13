import { useEffect, useState } from "react";

interface SpineProps {
  chapters: { id: string; label: string }[];
}

export default function Spine({ chapters }: SpineProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight / 2;
      let current = 0;
      chapters.forEach((c, i) => {
        const el = document.getElementById(c.id);
        if (el && el.getBoundingClientRect().top <= mid) current = i;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [chapters]);

  return (
    <nav
      aria-label="Chapters"
      className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-end gap-4 md:flex lg:right-8"
    >
      {chapters.map((c, i) => (
        <a
          key={c.id}
          href={`#${c.id}`}
          className="group flex items-center gap-3"
        >
          <span
            className={`font-mono text-[11px] tracking-widest transition-all duration-300 ${
              active === i
                ? "translate-x-0 text-gold opacity-100"
                : "translate-x-2 text-paper opacity-0 group-hover:translate-x-0 group-hover:opacity-70"
            }`}
          >
            {c.label}
          </span>
          <span
            className={`h-[2px] rounded-full transition-all duration-300 ${
              active === i ? "w-8 bg-gold" : "w-3 bg-paper/40 group-hover:bg-gold/70"
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
