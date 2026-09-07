import Image from "next/image";
import Link from "next/link";
import { Wordmark } from "@/components/wordmark";
import {
  CalendarCheck,
  ChartUp,
  CheckBullet,
  CheckCircle,
  ClipboardCheck,
  Clock,
  Document,
  Envelope,
  Folder,
  Heart,
  House,
  MapPin,
  Person,
  Briefcase,
  Search,
  Spreadsheet,
  Target,
  Users,
} from "@/components/icons";

const EMAIL = "daniellew@theadminreset.com";

const services = [
  {
    icon: CalendarCheck,
    title: "Calendar & scheduling assistance",
    body: "Stay on top of appointments and deadlines.",
  },
  {
    icon: Envelope,
    title: "Inbox organization",
    body: "Clear the clutter and focus on what matters.",
  },
  {
    icon: Users,
    title: "Client follow-up",
    body: "Timely communication that keeps relationships strong.",
  },
  {
    icon: Document,
    title: "Document formatting",
    body: "Polished, professional, and on-brand.",
  },
  {
    icon: Spreadsheet,
    title: "Spreadsheet & tracker maintenance",
    body: "Accurate, organized, and easy to use.",
  },
  {
    icon: Folder,
    title: "File organization",
    body: "Find what you need—fast.",
  },
  {
    icon: Search,
    title: "Research & administrative projects",
    body: "Reliable support for the tasks you don't have time for.",
  },
  {
    icon: ClipboardCheck,
    title: "General administrative support",
    body: "Flexible help tailored to your business.",
  },
];

const resetFor = [
  "Don't have time to keep up with admin tasks",
  "Need help getting organized",
  "Want to start each week with clarity and a plan",
  "Are ready to hand it off and get results",
];

const idealFor = [
  { icon: Person, label: "Small Business\nOwners" },
  { icon: Briefcase, label: "Consultants\n& Coaches" },
  { icon: House, label: "Solo\nProfessionals" },
  { icon: ChartUp, label: "Growing\nBusinesses" },
];

const steps = [
  {
    title: "Share the details",
    body: "A short intake form tells me what's messy and what you need it to look like.",
  },
  {
    title: "Discovery call",
    body: "A 15–20 minute call to talk through the problem and agree on the scope.",
  },
  {
    title: "Scope & quote",
    body: "A written summary of the deliverables, price, and completion date — before work starts.",
  },
  {
    title: "Hand it off",
    body: "I do the work and deliver it finished, organized, and ready to use.",
  },
];

const promises = [
  {
    icon: Clock,
    title: "Save Time",
    body: "Get more done without the stress.",
  },
  {
    icon: Target,
    title: "Stay Focused",
    body: "I'll handle the details so you can focus on growth.",
  },
  {
    icon: CheckCircle,
    title: "Get Results",
    body: "Reliable support you can count on.",
  },
];

/** Small caps label with a gold hairline on either side. */
function RuledLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="rule-fade flex-1" />
      <span className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-gold">
        {children}
      </span>
      <span className="rule-fade flex-1" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="band-gold h-2 w-full" />

      <header className="sticky top-0 z-50 border-b border-gold-line/70 bg-cream/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <a href="#top" className="shrink-0">
            <Wordmark className="text-lg" />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold tracking-wide text-body md:flex">
            <a className="transition hover:text-gold" href="#services">
              Services
            </a>
            <a className="transition hover:text-gold" href="#reset">
              Weekend Reset
            </a>
            <a className="transition hover:text-gold" href="#about">
              About
            </a>
          </nav>
          <Link
            href="/get-started"
            className="shrink-0 rounded-full bg-rose px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-sm transition hover:bg-[#9c434e]"
          >
            Get started
          </Link>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* ---------------------------------------------------------- Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:py-24">
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[999px] ring-1 ring-gold/60 ring-offset-4 ring-offset-cream">
              <Image
                src="/danielle-watkins.jpg"
                alt="Danielle Watkins, founder of The Admin Reset"
                fill
                priority
                sizes="(min-width: 1024px) 24rem, 80vw"
                className="object-cover object-top"
              />
            </div>

            <div className="absolute -bottom-4 -left-2 flex size-36 flex-col items-center justify-center rounded-full bg-ink text-center ring-2 ring-gold sm:-left-6 sm:size-40">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                Details
              </span>
              <span className="font-script text-2xl leading-tight text-gold-soft">
                handled.
              </span>
              <Heart className="my-1 size-3 text-gold" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                Success
              </span>
              <span className="font-script text-2xl leading-tight text-gold-soft">
                unlocked.
              </span>
            </div>
          </div>

          <div>
            <div className="mb-5 flex justify-center lg:justify-start">
              <CalendarCheck className="size-9 text-gold" />
            </div>

            <h1 className="text-center lg:text-left">
              <span className="block font-display text-4xl font-medium uppercase tracking-[0.18em] text-ink sm:text-5xl">
                The
              </span>
              <span className="-mt-1 block font-display text-6xl font-bold uppercase tracking-[0.02em] text-ink sm:text-8xl">
                Admin
              </span>
              <span className="block font-script text-7xl leading-[1.05] text-gold sm:-mt-3 sm:pl-10 sm:text-[7rem]">
                Reset
              </span>
            </h1>

            <p className="mt-2 text-center text-sm font-bold uppercase tracking-[0.12em] text-ink sm:text-base lg:text-left">
              Virtual Administrative &amp; Business Support
            </p>

            <div className="my-7 flex items-center gap-3">
              <span className="rule-fade flex-1" />
              <span className="size-1.5 rounded-full bg-gold" />
              <span className="rule-fade flex-1" />
            </div>

            <p className="text-center font-display text-2xl leading-snug sm:text-3xl lg:text-left">
              <span className="font-bold text-ink">
                Less admin. Less chaos.
              </span>
              <br />
              <span className="font-bold text-gold">
                More time for your business.
              </span>
            </p>

            <div className="mt-8 flex items-center gap-4 rounded-xl bg-ink px-6 py-5">
              <CalendarCheck className="hidden size-9 shrink-0 text-gold sm:block" />
              <p className="text-lg leading-snug text-white sm:text-xl">
                You run your business.
                <br />
                <span className="font-script text-3xl text-gold-soft sm:text-4xl">
                  I&rsquo;ll handle the details.
                </span>
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                href="/get-started"
                className="rounded-full bg-rose px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-sm transition hover:bg-[#9c434e]"
              >
                Get started
              </Link>
              <a
                href="#services"
                className="rounded-full border border-gold px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-gold transition hover:bg-gold hover:text-white"
              >
                See what I handle
              </a>
            </div>

            <p className="mt-5 text-center text-sm text-muted lg:text-left">
              Packages starting at{" "}
              <span className="font-bold text-ink">$45</span> &middot; Weekend
              availability &middot; Scope and price confirmed before any work
              begins
            </p>
          </div>
        </section>

        {/* ------------------------------------------------- Trust band */}
        <section className="band-gold">
          <ul className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-ink sm:text-sm">
            <li>Virtual</li>
            <li aria-hidden="true" className="opacity-40">
              |
            </li>
            <li>Reliable</li>
            <li aria-hidden="true" className="opacity-40">
              |
            </li>
            <li>Confidential</li>
            <li aria-hidden="true" className="opacity-40">
              |
            </li>
            <li>Dedicated to your success</li>
            <li>
              <Heart className="size-3.5" />
            </li>
          </ul>
        </section>

        {/* ----------------------------------------------------- About */}
        <section id="about" className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="font-script text-5xl text-rose sm:text-6xl">
            Danielle Watkins
          </p>
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-ink">
            Founder &amp; Admin Support Specialist
          </p>

          <div className="my-6 flex items-center justify-center gap-3">
            <span className="rule-fade w-24" />
            <Heart className="size-4 text-gold" />
            <span className="rule-fade w-24" />
          </div>

          <p className="text-lg leading-relaxed text-body">
            I help business owners stay organized, productive, and focused by
            handling the administrative details so you can focus on{" "}
            <span className="font-bold text-rose">what you do best.</span>
          </p>
        </section>

        {/* -------------------------------------------------- Services */}
        <section id="services" className="mx-auto max-w-5xl px-6 pb-20">
          <div className="flex justify-center">
            <h2 className="rounded-full bg-rose px-8 py-2.5 text-sm font-bold uppercase tracking-[0.18em] text-white sm:text-base">
              Administrative Support
            </h2>
          </div>

          <div className="mt-8 rounded-3xl border border-gold-line bg-shell p-6 shadow-[0_1px_30px_rgba(193,124,44,0.07)] sm:p-10">
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {services.map(({ icon: Glyph, title, body }) => (
                <li
                  key={title}
                  className="flex items-start gap-4 border-b border-gold-line/60 py-5 last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
                >
                  <Glyph className="mt-0.5 size-8 shrink-0 text-gold" />
                  <div>
                    <h3 className="font-bold text-ink">{title}</h3>
                    <p className="mt-0.5 text-body/85">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ------------------------------------------ Signature service */}
        <section id="reset" className="mx-auto max-w-5xl px-6 pb-20">
          <div className="rounded-3xl bg-blush px-6 py-12 sm:px-12">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex items-center justify-center gap-4">
                <span className="rule-fade w-16" />
                <p className="font-script text-3xl text-rose">
                  Signature Service
                </p>
                <span className="rule-fade w-16" />
              </div>

              <h2 className="mt-3">
                <span className="block font-display text-4xl font-medium uppercase tracking-[0.1em] text-ink sm:text-5xl">
                  Weekend
                </span>
                <span className="block font-display text-4xl font-bold uppercase tracking-[0.02em] text-rose sm:text-5xl">
                  Business Reset
                </span>
              </h2>

              <div className="mx-auto my-6 h-0.5 w-28 rounded-full bg-gold/70" />

              <div className="flex items-start justify-center gap-4 text-left">
                <CalendarCheck className="mt-1 size-9 shrink-0 text-gold" />
                <p className="text-lg leading-relaxed text-body">
                  Hand off the week&rsquo;s unfinished admin and start Monday{" "}
                  <span className="font-bold text-ink">
                    organized, focused, and ready
                  </span>{" "}
                  to move forward.
                </p>
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-2xl">
              <p className="font-script text-2xl text-rose">
                Perfect for busy business owners who:
              </p>
              <ul className="mt-4 space-y-3">
                {resetFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckBullet className="mt-0.5 size-5 shrink-0 text-gold" />
                    <span className="text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mx-auto mt-12 max-w-3xl">
              <RuledLabel>Ideal for</RuledLabel>
              <ul className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {idealFor.map(({ icon: Glyph, label }) => (
                  <li
                    key={label}
                    className="flex flex-col items-center gap-3 border-gold-line/70 text-center sm:not-last:border-r"
                  >
                    <Glyph className="size-9 text-ink/80" />
                    <span className="whitespace-pre-line text-sm font-semibold leading-tight text-body">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------- How it works */}
        <section className="mx-auto max-w-5xl px-6 pb-20">
          <div className="flex justify-center">
            <h2 className="rounded-full bg-rose px-8 py-2.5 text-sm font-bold uppercase tracking-[0.18em] text-white sm:text-base">
              How it works
            </h2>
          </div>

          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative rounded-2xl border border-gold-line bg-shell px-6 py-7"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-gold font-display text-lg font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-bold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-body/85">{step.body}</p>
              </li>
            ))}
          </ol>

          <p className="mx-auto mt-8 max-w-2xl text-center text-body">
            You&rsquo;ll always know the scope, the price, and the completion
            date{" "}
            <span className="font-bold text-ink">before any work starts</span> —
            and nothing outside that scope happens without your approval.
          </p>
        </section>

        {/* -------------------------------------------------- Promises */}
        <section className="mx-auto max-w-5xl px-6 pb-20">
          <ul className="grid gap-6 sm:grid-cols-3">
            {promises.map(({ icon: Glyph, title, body }) => (
              <li
                key={title}
                className="rounded-2xl border border-gold-line bg-shell px-6 py-7 text-center"
              >
                <Glyph className="mx-auto size-9 text-ink" />
                <h3 className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-body/85">{body}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* --------------------------------------------------- Contact */}
        <section className="mx-auto max-w-5xl px-6 pb-24">
          <div className="rounded-3xl border border-gold-line bg-shell px-6 py-12 text-center sm:px-12">
            <h2 className="font-display text-3xl font-bold text-rose sm:text-4xl">
              Let&rsquo;s talk about how I can
              <br className="hidden sm:block" /> support your business.
            </h2>

            <div className="mt-8 flex flex-col items-center gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-lg text-body transition hover:text-gold"
              >
                <Envelope className="size-6 text-gold" />
                {EMAIL}
              </a>
              <p className="flex items-center gap-3 text-body">
                <MapPin className="size-6 text-rose" />
                Proudly supporting businesses locally and virtually
              </p>
            </div>

            <Link
              href="/get-started"
              className="mt-9 inline-block rounded-full bg-rose px-9 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-sm transition hover:bg-[#9c434e]"
            >
              Get started
            </Link>
            <p className="mt-4 text-sm text-muted">
              Takes about five minutes. No obligation on either side.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 pb-6 text-center">
          <Wordmark className="text-base" />
          <p className="text-sm text-muted">
            Virtual administrative &amp; business support.
          </p>
        </div>
        <div className="band-gold h-2 w-full" />
      </footer>
    </>
  );
}
