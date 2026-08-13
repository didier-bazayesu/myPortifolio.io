interface SkillColumnProps {
  items: string[];
  duration: number;
  reverse?: boolean;
}

export default function SkillColumn({
  items,
  duration,
  reverse = false,
}: SkillColumnProps) {
  const doubled = [...items, ...items];

  return (
    <div className="marquee-col h-[420px]">
      <div
        className={`marquee-track ${reverse ? "reverse" : ""}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="whitespace-nowrap rounded-md border border-rule bg-paper-deep/60 px-4 py-3 font-mono text-sm text-ink-soft"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
