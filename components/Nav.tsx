import { nav, site } from "@/lib/content";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-walnut/15 bg-sand/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="font-display text-xl leading-none text-ink">
          Maya Reynolds
          <span className="block font-body text-[0.65rem] font-medium tracking-wide2 text-walnut">
            PSYCHOLOGIST, PSYD
          </span>
        </a>

        <nav className="hidden items-center gap-8 font-body text-sm text-ink-soft md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-pine"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-pine px-5 py-2.5 font-body text-sm font-medium text-sand transition-colors hover:bg-pine-deep"
        >
          {site.phoneCtaLabel}
        </a>
      </div>
    </header>
  );
}
