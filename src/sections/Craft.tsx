import SkillColumn from "../components/SkillColumn";
import { designTools, devSkills, softSkills } from "../data/cv";

export default function Craft() {
  return (
    <section className="flex h-full w-full flex-col justify-center bg-forest px-6 py-10 text-paper shadow-page sm:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
              Chapter 02
            </span>
            <h2 className="font-display text-4xl sm:text-5xl">The Craft</h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm text-paper/60 md:block">
            Development, design, and the habits that hold both together —
            each column keeps its own pace.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-6">
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-paper/50">
              Dev
            </p>
            <SkillColumn items={devSkills} duration={26} />
          </div>
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-paper/50">
              Design
            </p>
            <SkillColumn items={designTools} duration={34} reverse />
          </div>
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-paper/50">
              Practice
            </p>
            <SkillColumn items={softSkills} duration={40} />
          </div>
        </div>
      </div>
    </section>
  );
}
