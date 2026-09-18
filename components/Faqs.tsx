import { faqs } from "@/lib/content";

export default function Faqs() {
  return (
    <section id="faqs" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <h2 className="text-center font-display text-3xl text-ink md:text-4xl">
          {faqs.heading}
        </h2>

        <div className="mt-12 divide-y divide-walnut/15 border-y border-walnut/15">
          {faqs.items.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-body text-base font-medium text-ink">
                {item.q}
                <span className="ml-4 shrink-0 font-display text-xl text-walnut transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-prose font-body text-sm leading-relaxed text-ink-soft">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
