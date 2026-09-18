import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="bg-surface py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10">
        <div className="aspect-[4/5] w-full overflow-hidden rounded-sm md:order-2">
          <img
            src="/images/about/maya-reynolds-portrait.png"
            alt="Portrait of Dr. Maya Reynolds, PsyD"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="md:order-1">
          <p className="font-body text-xs font-medium uppercase tracking-wide2 text-walnut">
            {about.credentials}
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            {about.heading}
          </h2>
          <div className="mt-6 space-y-5">
            {about.body.map((para, i) => (
              <p
                key={i}
                className="max-w-prose font-body text-base leading-relaxed text-ink-soft"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
