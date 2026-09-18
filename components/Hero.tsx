import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-14 md:px-10 md:pb-28 md:pt-20">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="aspect-[4/5] w-full overflow-hidden rounded-sm md:aspect-[3/4]">
          <img
            src="/images/office/office-waiting-area.jpg"
            alt="A bright, sunlit lounge area in Dr. Reynolds' Santa Monica office"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="font-body text-xs font-medium uppercase tracking-wide2 text-walnut">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] text-ink md:text-5xl lg:text-[3.4rem]">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-prose font-body text-base leading-relaxed text-ink-soft md:text-lg">
            {hero.sub}
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block border-b-2 border-gold pb-1 font-body text-sm font-medium tracking-wide2 text-pine transition-colors hover:border-pine"
          >
            {hero.cta.toUpperCase()}
          </a>
        </div>
      </div>
    </section>
  );
}
