import { office } from "@/lib/content";

export default function OurOffice() {
  return (
    <section id="office" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="font-body text-xs font-medium uppercase tracking-wide2 text-walnut">
              {office.heading}
            </p>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              {office.sub}
            </h2>
            <p className="mt-6 max-w-prose font-body text-base leading-relaxed text-ink-soft">
              {office.body}
            </p>

            <ul className="mt-8 space-y-3">
              {office.details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-3 font-body text-sm text-ink-soft"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                    aria-hidden
                  />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 aspect-[16/10] w-full overflow-hidden rounded-sm">
              <img
                src="/images/office/office-waiting-area.jpg"
                alt="Sunlit lounge area with exposed brick, wood floors, and tall windows"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-square w-full overflow-hidden rounded-sm">
              <img
                src="/images/office/office-therapy-room.jpg"
                alt="A cozy reading corner with a leather armchair and bookshelf"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-square w-full overflow-hidden rounded-sm">
              <img
                src="/images/office/office-entrance.png"
                alt="Warm, welcoming office entrance with glass doors and greenery"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
