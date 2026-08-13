import { profile } from "../data/cv";

export default function Colophon() {
  return (
    <section className="flex h-full w-full flex-col justify-between bg-paper px-6 py-10 shadow-page sm:px-12 sm:py-14 lg:px-24">
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-ink-soft/60">
        <span>Colophon</span>
        <span>Rwanda, {new Date().getFullYear()}</span>
      </div>

      <div>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
          Chapter 05
        </span>
        <h2 className="mb-6 font-display text-5xl leading-tight text-ink sm:text-7xl">
          Let's write
          <br /> the next one.
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="inline-block border-b-2 border-rust font-display text-xl text-ink transition hover:text-rust sm:text-2xl"
        >
          {profile.email}
        </a>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-6 border-t border-rule pt-6">
        <div className="flex gap-6 font-mono text-xs uppercase tracking-widest text-ink-soft">
          <a href={`https://${profile.github}`} className="transition hover:text-rust">
            GitHub
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="transition hover:text-rust">
            {profile.phone}
          </a>
        </div>
        <p className="font-mono text-[11px] text-ink-soft/60">
          Set in Domine &amp; Space Grotesk.
        </p>
      </div>
    </section>
  );
}
