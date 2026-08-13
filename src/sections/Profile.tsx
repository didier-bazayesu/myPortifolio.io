import { profile } from "../data/cv";

export default function Profile() {
  const [firstLetter, ...rest] = profile.summary;

  return (
    <section className="flex h-full w-full flex-col justify-center bg-paper px-6 py-10 shadow-page sm:px-12 lg:px-24">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 md:grid-cols-[auto_1fr]">
        <div className="flex items-start gap-4 md:flex-col md:items-start">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
            Chapter 01
          </span>
          <h2 className="font-display text-4xl text-ink sm:text-5xl">
            Profile
          </h2>
        </div>

        <div className="max-w-2xl">
          <p className="font-display text-xl leading-relaxed text-ink sm:text-2xl">
            <span className="float-left mr-3 mt-1 font-display text-6xl leading-[0.8] text-rust sm:text-7xl">
              {firstLetter}
            </span>
            {rest.join("")}
          </p>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-rule pt-6 font-mono text-xs uppercase tracking-widest text-ink-soft">
            <span>{profile.phone}</span>
            <span>{profile.email}</span>
            <span>{profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
