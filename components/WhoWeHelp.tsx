import { whoWeHelp } from "@/lib/content";

export default function WhoWeHelp() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-prose">
          <h2 className="font-display text-3xl text-ink md:text-4xl">
            {whoWeHelp.heading}
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-ink-soft">
            {whoWeHelp.intro}
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {whoWeHelp.groups.map((group) => (
            <div key={group.title}>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-sm bg-sand">
                <img
                  src={group.img}
                  alt={group.alt}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-5 font-display text-xl text-ink">
                {group.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink-soft">
                {group.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
