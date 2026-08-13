import { achievements, education, languages } from "../data/cv";

export default function IndexSection() {
  return (
    <section className="flex h-full w-full flex-col justify-center bg-ink px-6 py-10 text-paper shadow-page sm:px-12 lg:px-24">
      <div className="mx-auto grid w-full max-w-5xl gap-12 md:grid-cols-2">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
            Chapter 04
          </span>
          <h2 className="mb-6 font-display text-4xl sm:text-5xl">Index</h2>

          <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-paper/50">
            Education
          </p>
          <ul className="mb-8 space-y-4">
            {education.map((e) => (
              <li key={e.title} className="flex justify-between gap-4 border-b border-paper/10 pb-3">
                <div>
                  <p className="font-display text-lg">{e.title}</p>
                  <p className="text-sm text-paper/60">{e.place}</p>
                </div>
                <span className="whitespace-nowrap font-mono text-xs text-gold">
                  {e.period}
                </span>
              </li>
            ))}
          </ul>

          <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-paper/50">
            Languages
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-paper/70">
            {languages.map((l) => (
              <li key={l.name}>
                {l.name} <span className="text-gold">— {l.level}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 mt-1 font-mono text-[11px] uppercase tracking-widest text-paper/50 md:mt-[3.85rem]">
            Achievements &amp; Hackathons
          </p>
          <ul className="space-y-4">
            {achievements.map((a, i) => (
              <li key={a} className="flex gap-4">
                <span className="font-display text-sm text-rust">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-paper/75">{a}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
