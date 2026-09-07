"use client";

import { useActionState, useState } from "react";
import { submitIntake } from "@/app/actions";
import {
  ACCESS_OPTIONS,
  ACKNOWLEDGEMENTS,
  CONTACT_OPTIONS,
  NEEDS_OPTIONS,
  OTHER_NEED,
  SIZE_OPTIONS,
  TIMELINE_OPTIONS,
  URGENCY_OPTIONS,
  type FormState,
  type Submission,
} from "@/lib/intake";
import { CalendarCheck, CheckCircle, Envelope } from "./icons";

const EMAIL = "daniellew@theadminreset.com";

const fieldBase =
  "w-full rounded-lg border border-gold-line bg-cream px-4 py-2.5 text-body " +
  "outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25";

function Section({
  step,
  title,
  hint,
  children,
}: {
  step: number;
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  // Not `first:` — React prepends hidden action inputs, so the first section is
  // never actually :first-child.
  return (
    <section className={step === 1 ? "" : "border-t border-gold-line pt-8"}>
      <div className="flex items-baseline gap-3">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-white">
          {step}
        </span>
        <h2 className="font-display text-xl font-bold uppercase tracking-[0.08em] text-ink">
          {title}
        </h2>
      </div>
      {hint ? <p className="mt-2 pl-10 text-sm text-muted">{hint}</p> : null}
      <div className="mt-5 pl-0 sm:pl-10">{children}</div>
    </section>
  );
}

function RequiredMark() {
  // The "* Required" note at the top of the form explains the symbol; screen
  // readers hear the input's own required/aria-required state instead.
  return (
    <span
      aria-hidden="true"
      className="ml-1 align-middle text-xl font-bold leading-none text-rose"
    >
      *
    </span>
  );
}

function Field({
  label,
  name,
  required,
  error,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-semibold text-ink"
      >
        {label}
        {required ? <RequiredMark /> : null}
      </label>
      {children}
      {error ? (
        <p role="alert" className="mt-1.5 text-sm font-medium text-rose">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Text({
  label,
  name,
  type = "text",
  required,
  defaultValue,
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <Field label={label} name={name} required={required} error={error}>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        aria-invalid={error ? true : undefined}
        className={fieldBase}
      />
    </Field>
  );
}

function TextArea({
  label,
  name,
  rows = 4,
  required,
  defaultValue,
  error,
}: {
  label: string;
  name: string;
  rows?: number;
  required?: boolean;
  defaultValue?: string;
  error?: string;
}) {
  return (
    <Field label={label} name={name} required={required} error={error}>
      <textarea
        id={name}
        name={name}
        rows={rows}
        required={required}
        defaultValue={defaultValue}
        aria-invalid={error ? true : undefined}
        className={`${fieldBase} resize-y`}
      />
    </Field>
  );
}

function Choice({
  type,
  name,
  value,
  defaultChecked,
  onChange,
}: {
  type: "radio" | "checkbox";
  name: string;
  value: string;
  defaultChecked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-lg px-3 py-2 transition hover:bg-blush/60">
      <input
        type={type}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        onChange={onChange}
        className="mt-1 size-4 shrink-0 accent-[#c17c2c]"
      />
      <span className="text-body">{value}</span>
    </label>
  );
}

function ChoiceGroup({
  legend,
  required,
  children,
  error,
}: {
  legend: string;
  required?: boolean;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <fieldset aria-required={required || undefined}>
      <legend className="mb-1.5 text-sm font-semibold text-ink">
        {legend}
        {required ? <RequiredMark /> : null}
      </legend>
      <div className="-mx-3">{children}</div>
      {error ? (
        <p role="alert" className="mt-1.5 px-3 text-sm font-medium text-rose">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}

function Confirmation({ name }: { name: string }) {
  const calendly = process.env.NEXT_PUBLIC_CALENDLY_URL;
  const firstName = name.split(" ")[0];

  return (
    <div className="py-6 text-center">
      <CheckCircle className="mx-auto size-14 text-gold" />

      <h1 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl">
        Thank you{firstName ? `, ${firstName}` : ""}.
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-lg text-body">
        Your intake form is in. I&rsquo;ll read it before we talk so our call
        can start with the actual problem instead of the background.
      </p>

      <div className="mx-auto my-9 flex max-w-sm items-center gap-3">
        <span className="rule-fade flex-1" />
        <CalendarCheck className="size-5 text-gold" />
        <span className="rule-fade flex-1" />
      </div>

      <h2 className="font-script text-4xl text-rose">One more step</h2>
      <p className="mx-auto mt-3 max-w-xl text-body">
        Book your discovery call — about 15&ndash;20 minutes. We&rsquo;ll talk
        through the problem, agree on scope, and decide together whether The
        Admin Reset is the right fit. Neither of us is committed to anything
        until then.
      </p>

      {calendly ? (
        <a
          href={calendly}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-full bg-rose px-9 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-sm transition hover:bg-[#9c434e]"
        >
          Book your discovery call
        </a>
      ) : (
        <a
          href={`mailto:${EMAIL}?subject=Discovery%20call`}
          className="mt-8 inline-flex items-center gap-3 rounded-full border border-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-gold transition hover:bg-gold hover:text-white"
        >
          <Envelope className="size-5" />
          Email me to schedule
        </a>
      )}
    </div>
  );
}

const empty = {} as Partial<Submission>;

export function IntakeForm() {
  const [state, formAction, pending] = useActionState<FormState, FormData>(
    submitIntake,
    { status: "idle" },
  );

  const errors = state.status === "error" ? state.errors : {};
  const values = state.status === "error" ? state.values : empty;

  // Choosing "Other" makes its describe box required, live.
  const [otherNeed, setOtherNeed] = useState(
    values.needs?.includes(OTHER_NEED) ?? false,
  );
  const [otherTimeline, setOtherTimeline] = useState(
    values.timeline === "Other",
  );

  if (state.status === "success") return <Confirmation name={state.name} />;

  return (
    <form action={formAction} className="space-y-10" noValidate>
      {errors.form ? (
        <p
          role="alert"
          className="rounded-xl border border-rose/40 bg-rose/10 px-5 py-4 font-medium text-rose"
        >
          {errors.form}
        </p>
      ) : null}

      <p className="text-sm text-muted">
        Questions marked <span className="font-semibold text-rose">*</span> are
        required.
      </p>

      <Section step={1} title="About you & your business">
        <div className="grid gap-5 sm:grid-cols-2">
          <Text
            label="Your name"
            name="name"
            required
            autoComplete="name"
            defaultValue={values.name}
            error={errors.name}
          />
          <Text
            label="Business name"
            name="businessName"
            required
            autoComplete="organization"
            defaultValue={values.businessName}
            error={errors.businessName}
          />
          <Text
            label="Email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={values.email}
            error={errors.email}
          />
          <Text
            label="Phone number"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            defaultValue={values.phone}
            error={errors.phone}
          />
          <Text
            label="Website / social media"
            name="website"
            required
            defaultValue={values.website}
            error={errors.website}
          />
          <Text
            label="Type of business / industry"
            name="industry"
            required
            defaultValue={values.industry}
            error={errors.industry}
          />
        </div>
      </Section>

      <Section
        step={2}
        title="What do you need help with?"
        hint="Check all that may apply. We'll confirm the actual project scope together."
      >
        <div className="space-y-6">
          <ChoiceGroup legend="Areas of support" required error={errors.needs}>
            <div className="sm:columns-2">
              {NEEDS_OPTIONS.map((option) => (
                <div key={option} className="break-inside-avoid">
                  <Choice
                    type="checkbox"
                    name="needs"
                    value={option}
                    defaultChecked={values.needs?.includes(option)}
                    onChange={
                      option === OTHER_NEED
                        ? (e) => setOtherNeed(e.currentTarget.checked)
                        : undefined
                    }
                  />
                </div>
              ))}
            </div>
          </ChoiceGroup>

          <Text
            label="If you selected Other, please describe"
            name="needsOther"
            required={otherNeed}
            defaultValue={values.needsOther}
            error={errors.needsOther}
          />

          <TextArea
            label="In your own words, what feels messy, unfinished, time-consuming, or difficult right now?"
            name="problem"
            rows={5}
            required
            defaultValue={values.problem}
            error={errors.problem}
          />
        </div>
      </Section>

      <Section step={3} title="What would success look like?">
        <div className="space-y-6">
          <TextArea
            label="When this project is finished, what would you like to have, know, or be able to do more easily?"
            name="success"
            required
            defaultValue={values.success}
            error={errors.success}
          />
          <TextArea
            label="Are you currently using any spreadsheet, document, system, or process for this work? If yes, briefly describe it."
            name="currentProcess"
            rows={3}
            required
            defaultValue={values.currentProcess}
            error={errors.currentProcess}
          />
        </div>
      </Section>

      <Section step={4} title="Timing & priority">
        <div className="space-y-6">
          <ChoiceGroup
            legend="When would you ideally like this completed?"
            required
            error={errors.timeline}
          >
            {TIMELINE_OPTIONS.map((option) => (
              <Choice
                key={option}
                type="radio"
                name="timeline"
                value={option}
                defaultChecked={values.timeline === option}
                onChange={() => setOtherTimeline(option === "Other")}
              />
            ))}
          </ChoiceGroup>

          <Text
            label="If you chose Other, when?"
            name="timelineOther"
            required={otherTimeline}
            defaultValue={values.timelineOther}
            error={errors.timelineOther}
          />

          <ChoiceGroup
            legend="How urgent is this project?"
            required
            error={errors.urgency}
          >
            {URGENCY_OPTIONS.map((option) => (
              <Choice
                key={option}
                type="radio"
                name="urgency"
                value={option}
                defaultChecked={values.urgency === option}
              />
            ))}
          </ChoiceGroup>

          <TextArea
            label="If there is a specific deadline, please provide the date and explain why."
            name="deadlineDetail"
            rows={3}
            defaultValue={values.deadlineDetail}
          />
        </div>
      </Section>

      <Section
        step={5}
        title="Estimated project size"
        hint="Don't worry if you're unsure — this simply helps me prepare for our call."
      >
        <ChoiceGroup legend="Project size" required error={errors.projectSize}>
          {SIZE_OPTIONS.map((option) => (
            <Choice
              key={option}
              type="radio"
              name="projectSize"
              value={option}
              defaultChecked={values.projectSize === option}
            />
          ))}
        </ChoiceGroup>
      </Section>

      <Section step={6} title="Files, tools & access">
        <div className="space-y-6">
          <TextArea
            label="What tools or platforms are involved, if any? (Excel, Google Sheets, Google Drive, email, calendar, etc.)"
            name="tools"
            rows={3}
            required
            defaultValue={values.tools}
            error={errors.tools}
          />

          <ChoiceGroup
            legend="Will this project require access to any business accounts or confidential information?"
            required
            error={errors.access}
          >
            {ACCESS_OPTIONS.map((option) => (
              <Choice
                key={option}
                type="radio"
                name="access"
                value={option}
                defaultChecked={values.access === option}
              />
            ))}
          </ChoiceGroup>

          <p className="rounded-xl border border-gold-line bg-blush px-5 py-4 text-sm text-body">
            <strong className="font-bold text-ink">Please don&rsquo;t</strong>{" "}
            put passwords, account credentials, Social Security numbers,
            financial account numbers, or other highly sensitive information in
            this form. We&rsquo;ll handle anything like that securely, later.
          </p>
        </div>
      </Section>

      <Section step={7} title="Communication">
        <div className="space-y-6">
          <ChoiceGroup
            legend="Preferred communication for project updates"
            required
            error={errors.contactPreference}
          >
            {CONTACT_OPTIONS.map((option) => (
              <Choice
                key={option}
                type="radio"
                name="contactPreference"
                value={option}
                defaultChecked={values.contactPreference === option}
              />
            ))}
          </ChoiceGroup>

          <TextArea
            label="Is there anything else I should know before our discovery call?"
            name="anythingElse"
            rows={3}
            defaultValue={values.anythingElse}
          />
        </div>
      </Section>

      <Section
        step={8}
        title="Before you submit"
        hint="All three boxes must be checked before your form can be submitted."
      >
        <div className="-mx-3 space-y-1">
          {ACKNOWLEDGEMENTS.map((ack) => (
            <div key={ack.name}>
              <label className="flex cursor-pointer items-start gap-3 rounded-lg px-3 py-2 transition hover:bg-blush/60">
                <input
                  type="checkbox"
                  name={ack.name}
                  required
                  className="mt-1 size-4 shrink-0 accent-[#c17c2c]"
                />
                <span className="text-body">
                  {ack.label}
                  <RequiredMark />
                </span>
              </label>
              {errors[ack.name] ? (
                <p role="alert" className="px-3 text-sm font-medium text-rose">
                  {errors[ack.name]}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      {/* Honeypot — hidden from people, irresistible to bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label>
          Company website
          <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="border-t border-gold-line pt-8 text-center">
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-rose px-10 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-sm transition hover:bg-[#9c434e] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Sending…" : "Submit & book a call"}
        </button>
        <p className="mt-4 text-sm text-muted">
          You&rsquo;ll be able to schedule your discovery call on the next
          screen.
        </p>
      </div>
    </form>
  );
}
