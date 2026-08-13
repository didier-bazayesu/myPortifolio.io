import ScrambleText from "../components/ScrambleText";
import { profile } from "../data/cv";

export default function Cover() {
  return (
    <section className="flex h-full w-full flex-col justify-between bg-ink px-6 py-10 text-paper sm:px-12 sm:py-14">
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-paper/50">
        <span>Vol. I — Portfolio</span>
        <span>{profile.location}</span>
      </div>

      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold">
            {profile.role}
          </p>
          <ScrambleText
            text={profile.name.toUpperCase()}
            className="cursor-default font-display text-[13vw] font-medium leading-[0.92] tracking-tight sm:text-[9vw] lg:text-[6.4vw]"
          />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-paper/60">
            A working record of design and code — hover the name above,
            then keep scrolling. Each chapter lands on the last.
          </p>
        </div>

        {/* Portrait frame — duotone to sit inside the ink/gold cover palette.
            Drop your photo in /public as portrait.jpg to fill it. */}
        <div className="relative h-40 w-40 shrink-0 self-start justify-self-start sm:h-52 sm:w-52 lg:h-64 lg:w-64 lg:justify-self-end">
          <div className="absolute inset-0 translate-x-2 translate-y-2 border border-gold/40" />
          <div className="relative h-full w-full overflow-hidden border border-gold/70 bg-paper-deep/10">
            <img
              src="/portrait.jpg"
              alt={profile.name}
              className="h-full w-full object-cover grayscale"
              style={{ mixBlendMode: "luminosity" }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/25 via-transparent to-ink/60" />
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div className="flex gap-6 font-mono text-xs text-paper/50">
          <a href={`https://${profile.github}`} className="transition hover:text-gold">
            {profile.github}
          </a>
          <a href={`mailto:${profile.email}`} className="transition hover:text-gold">
            {profile.email}
          </a>
        </div>
        <div className="flex flex-col items-end gap-2 text-paper/40">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <span className="h-10 w-px animate-pulse bg-gold" />
        </div>
      </div>
    </section>
  );
}
