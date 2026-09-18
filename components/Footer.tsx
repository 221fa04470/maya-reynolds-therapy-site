import { footer, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer id="contact" className="bg-pine-deep py-16 text-sand">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl">{site.name}</p>
            <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-sand/70">
              {site.tagline}. Reach out to schedule a consultation — I'll get
              back to you within one business day.
            </p>
          </div>

          <div>
            <p className="font-body text-xs font-medium uppercase tracking-wide2 text-gold">
              Office
            </p>
            <p className="mt-3 font-body text-sm text-sand/80">
              {footer.location}
            </p>
            <p className="mt-1 font-body text-sm text-sand/70">
              {footer.note}
            </p>
          </div>

          <div>
            <p className="font-body text-xs font-medium uppercase tracking-wide2 text-gold">
              Get in touch
            </p>
            <a
              href="mailto:hello@mayareynoldstherapy.com"
              className="mt-3 block font-body text-sm text-sand/80 hover:text-sand"
            >
              hello@mayareynoldstherapy.com
            </a>
            <a
              href="#top"
              className="mt-6 inline-block rounded-full border border-sand/30 px-5 py-2.5 font-body text-sm transition-colors hover:bg-sand hover:text-pine-deep"
            >
              Book a Consultation
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-sand/15 pt-6 font-body text-xs text-sand/50">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
          Fictional practice created for a design exercise.
        </div>
      </div>
    </footer>
  );
}
