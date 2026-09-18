import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-prose">
          <h2 className="font-display text-3xl text-ink md:text-4xl">
            {services.heading}
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-ink-soft">
            {services.intro}
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-walnut/15 md:grid-cols-3">
          {services.items.map((item) => (
            <div key={item.title} className="bg-sand p-8">
              <h3 className="font-display text-xl text-pine">{item.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
