import type { Metadata } from "next";
import Link from "next/link";
import { IntakeForm } from "@/components/intake-form";
import { Wordmark } from "@/components/wordmark";

export const metadata: Metadata = {
  title: "Get Started — The Admin Reset",
  description:
    "Tell me what needs a reset. This short intake form helps me understand your business and administrative needs before our discovery call.",
};

export default function GetStarted() {
  return (
    <>
      <div className="band-gold h-2 w-full" />

      <header className="border-b border-gold-line/70">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-6 px-6 py-4">
          <Link href="/">
            <Wordmark className="text-lg" />
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-body transition hover:text-gold"
          >
            &larr; Back to home
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold uppercase tracking-[0.06em] text-ink sm:text-5xl">
              Client Intake Form
            </h1>
            <p className="mt-3 font-script text-4xl text-rose">
              Tell me what needs a reset.
            </p>

            <div className="my-8 flex items-center gap-3">
              <span className="rule-fade flex-1" />
              <span className="size-1.5 rounded-full bg-gold" />
              <span className="rule-fade flex-1" />
            </div>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-body">
              This form helps me understand your business and administrative
              needs before our discovery call. Completing it{" "}
              <span className="font-bold text-ink">
                does not obligate either of us
              </span>{" "}
              to move forward.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-gold-line bg-shell px-6 py-10 shadow-[0_1px_30px_rgba(193,124,44,0.07)] sm:px-10">
            <IntakeForm />
          </div>
        </div>
      </main>

      <footer>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 px-6 pb-6 text-center">
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
