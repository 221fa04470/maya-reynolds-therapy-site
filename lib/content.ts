// All copy here is derived from Dr. Maya Reynolds' profile doc.
// TODO(Harsha): the shared doc only rendered its meta description + the bio
// paragraphs you pasted in chat — if the full doc has a credentials list,
// modalities (CBT/EMDR/etc.), session length, fees, or insurance info,
// fold those into `faqs` and `about.credentials` below before you submit.

export const site = {
  name: "Maya Reynolds, PsyD",
  tagline: "Trauma-informed therapy for adults in Santa Monica, CA",
  phoneCtaLabel: "Book a Consultation",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Office", href: "#office" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Trauma & Anxiety Therapy in Santa Monica, CA",
  headline: "Slow down, feel steady again, and reconnect with yourself.",
  sub: "Dr. Maya Reynolds, PsyD offers trauma-informed therapy for adults navigating anxiety, burnout, and the weight of always pushing through — in person in Santa Monica, or by telehealth anywhere in California.",
  cta: "Book a Consultation",
};

export const whoWeHelp = {
  heading: "Who I work with",
  intro:
    "My practice is built around adults carrying more than they let on — whether that shows up as trauma, anxiety, or the quiet exhaustion of chronic overachieving.",
  groups: [
    {
      title: "Adults Healing from Trauma",
      body: "I work with single-incident trauma as well as more complex, long-standing patterns rooted in childhood, relationships, or chronic stress. We move at a pace that keeps you safe and stabilized, not just during our sessions, but in your daily life.",
      img: "/images/services/trauma-healing.jpg",
      alt: "A quiet moment by a sunlit window",
    },
    {
      title: "Entrepreneurs & Creatives",
      body: "Many of my clients are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress. Therapy becomes a space to slow down, reconnect, and build a more sustainable way of working.",
      img: "/images/services/entrepreneur-creative.jpg",
      alt: "A calm, minimal workspace with a laptop and candle",
    },
    {
      title: "High-Achievers & Perfectionists",
      body: "If high internal pressure and perfectionism have started to cost you more than they give you, we'll work on loosening that grip — without losing what makes you good at what you do.",
      img: "/images/services/perfectionism-balance.jpg",
      alt: "A person balanced mid-stretch, embodying discipline and focus",
    },
  ],
};

export const services = {
  heading: "How I can help",
  intro:
    "Three areas clients most often bring into our work together.",
  items: [
    {
      title: "Trauma Therapy",
      body: "A carefully paced approach to single-incident and long-standing trauma, centered on safety and stabilization first — so healing doesn't come at the cost of feeling more overwhelmed.",
    },
    {
      title: "Anxiety & Burnout Support",
      body: "For the anxiety that builds quietly and the burnout that follows years of pushing through. We work toward feeling regulated in daily life, not just in the therapy room.",
    },
    {
      title: "Therapy for Entrepreneurs & Perfectionists",
      body: "Practical tools paired with depth-oriented work for professionals, founders, and creatives ready to trade high internal pressure for a more sustainable relationship with their work and themselves.",
    },
  ],
};

export const about = {
  heading: "About Dr. Reynolds",
  body: [
    "I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal isn't just symptom relief — it's helping you develop insight, resilience, and a stronger relationship with yourself over time.",
    "I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located anywhere in California.",
    "If you're looking for a therapist who combines practical tools with depth-oriented work — and who understands what it's like to live and work in a fast-paced environment — I may be a good fit.",
  ],
  credentials: "Licensed Clinical Psychologist, PsyD",
  img: "maya-reynolds-portrait.jpg",
};

export const office = {
  heading: "Our Office",
  sub: "A calm space for healing",
  body: "My Santa Monica office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease the moment they arrive.",
  details: [
    "123 1/2 Street, 45 W, Santa Monica, CA 90401 (verify exact address from profile)",
    "In-person and telehealth sessions available",
    "Telehealth available to clients located anywhere in California",
    "A private, uncluttered space with natural light",
  ],
  images: [
    { file: "office-waiting-area.jpg", label: "Waiting area" },
    { file: "office-therapy-room.jpg", label: "Therapy room" },
    { file: "office-entrance.jpg", label: "Office entrance" },
  ],
};

export const faqs = {
  heading: "Frequently Asked Questions",
  items: [
    {
      q: "Do you offer telehealth sessions?",
      a: "Yes. Alongside in-person sessions at my Santa Monica office, I offer secure telehealth for clients located anywhere in California.",
    },
    {
      q: "What do you help clients with?",
      a: "Most of my work is with adults navigating trauma, anxiety, professional burnout, and perfectionism — including many entrepreneurs, creatives, and professionals under high internal pressure.",
    },
    {
      q: "What's your approach to trauma work?",
      a: "I pace things carefully, with an emphasis on safety and stabilization first, so you leave sessions feeling more regulated in daily life — not just processed in the moment.",
    },
    {
      q: "What can I expect from the first session?",
      a: "We'll spend time understanding what's bringing you in, what you've already tried, and what a sustainable pace of therapy looks like for you — you stay an active, informed participant throughout.",
    },
    {
      q: "Where is your office located?",
      a: "My office is in Santa Monica, CA — a quiet, private, and uncluttered space designed to feel calm from the moment you arrive.",
    },
  ],
};

export const footer = {
  location: "Santa Monica, CA",
  note: "In-person sessions in Santa Monica · Telehealth across California",
};
