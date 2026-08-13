import { useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface ScrambleTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "span";
}


export default function ScrambleText({
  text,
  className = "",
  as = "h1",
}: ScrambleTextProps) {
  const ref = useRef<HTMLElement>(null);
  const frame = useRef<number | null>(null);
  const iteration = useRef(0);

  const stop = () => {
    if (frame.current) window.clearInterval(frame.current);
  };

  const scramble = () => {
    stop();
    iteration.current = 0;
    const el = ref.current;
    if (!el) return;

    frame.current = window.setInterval(() => {
      const revealed = Math.floor(iteration.current);
      el.innerText = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < revealed) return text[i];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      if (revealed >= text.length) {
        stop();
        el.innerText = text;
      }
      iteration.current += 1 / 2.4;
    }, 28);
  };

  const reset = () => {
    stop();
    if (ref.current) ref.current.innerText = text;
  };

  const Tag = as as unknown as "h1";

  return (
    <Tag
      ref={ref as never}
      onMouseEnter={scramble}
      onMouseLeave={reset}
      className={className}
    >
      {text}
    </Tag>
  );
}
