import { projects } from "../data/cv";

export default function Work() {
  return (
    <section className="flex h-full w-full flex-col justify-center overflow-y-auto bg-paper px-6 py-10 shadow-page sm:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-10">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
            Chapter 03
          </span>
          <h2 className="font-display text-4xl text-ink sm:text-5xl">Work</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.title}
              href={`https://${p.link}`}
              className="group flex flex-col justify-between rounded-lg border border-rule bg-paper-deep/50 p-6 shadow-card transition hover:-translate-y-1 hover:border-gold"
            >
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-xs text-rust">{p.year}</span>
                  <span className="font-mono text-[11px] text-ink-soft opacity-0 transition group-hover:opacity-100">
                    {p.link} ↗
                  </span>
                </div>
                <h3 className="font-display text-xl leading-snug text-ink">
                  {p.title}
                </h3>
                <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-ink-soft">
                  {p.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-gold">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-rule pt-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-rule px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
