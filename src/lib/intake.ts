/**
 * The client intake form, transcribed from
 * "The Admin Reset — Client Intake Form".
 *
 * The field list lives here so the form UI and the notification email stay in
 * sync: add a question once and it renders and reports automatically.
 */

export const NEEDS_OPTIONS = [
  "Spreadsheet or tracker cleanup / creation",
  "Document formatting or organization",
  "File / folder organization",
  "Client or customer follow-up organization",
  "Administrative research",
  "Task / priority organization",
  "Checklist or simple workflow creation",
  "Scheduling / coordination support",
  "Recruiting / hiring administrative support",
  "Other administrative support",
] as const;

/** The "Other" checkbox — picking it makes the describe box required. */
export const OTHER_NEED = "Other administrative support";

export const TIMELINE_OPTIONS = [
  "This weekend",
  "Within 1 week",
  "Within 2 weeks",
  "Flexible / no firm deadline",
  "Other",
] as const;

export const URGENCY_OPTIONS = [
  "Low — helpful, but not time-sensitive",
  "Medium — I would like this handled soon",
  "High — there is a specific upcoming deadline",
] as const;

export const SIZE_OPTIONS = [
  "Small — one clearly defined task",
  "Focused — a few related administrative tasks",
  "Weekend Reset — several related loose ends / organization needs",
  "Larger project — more substantial cleanup, organization, or setup",
  "I'm not sure — I need Danielle to help me determine the scope",
] as const;

export const ACCESS_OPTIONS = [
  "No",
  "Possibly — we can discuss on the discovery call",
  "Yes — details will be discussed securely",
] as const;

export const CONTACT_OPTIONS = [
  "Email",
  "Phone call for scheduled check-ins",
  "Either is fine",
] as const;

export const ACKNOWLEDGEMENTS = [
  {
    name: "ackNoGuarantee",
    label:
      "I understand that submitting this form does not guarantee acceptance of my project.",
  },
  {
    name: "ackScope",
    label:
      "I understand that project scope, pricing, timing, and deliverables will be confirmed before work begins.",
  },
  {
    name: "ackExtraWork",
    label:
      "I understand that work outside the agreed project scope may require additional approval and payment.",
  },
] as const;

export type Submission = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  website: string;
  industry: string;
  needs: string[];
  needsOther: string;
  problem: string;
  success: string;
  currentProcess: string;
  timeline: string;
  timelineOther: string;
  urgency: string;
  deadlineDetail: string;
  projectSize: string;
  tools: string;
  access: string;
  contactPreference: string;
  anythingElse: string;
};

export type FormState =
  | { status: "idle" }
  | { status: "error"; errors: Record<string, string>; values: Submission }
  | { status: "success"; name: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Trimmed string, capped so a pasted essay can't blow up the email. */
function str(data: FormData, key: string, max = 4000): string {
  const raw = data.get(key);
  return typeof raw === "string" ? raw.trim().slice(0, max) : "";
}

export function parseSubmission(data: FormData): Submission {
  return {
    name: str(data, "name", 200),
    businessName: str(data, "businessName", 200),
    email: str(data, "email", 200),
    phone: str(data, "phone", 60),
    website: str(data, "website", 300),
    industry: str(data, "industry", 200),
    needs: data
      .getAll("needs")
      .filter((v): v is string => typeof v === "string")
      .filter((v) => (NEEDS_OPTIONS as readonly string[]).includes(v)),
    needsOther: str(data, "needsOther", 1000),
    problem: str(data, "problem"),
    success: str(data, "success"),
    currentProcess: str(data, "currentProcess"),
    timeline: str(data, "timeline", 100),
    timelineOther: str(data, "timelineOther", 200),
    urgency: str(data, "urgency", 100),
    deadlineDetail: str(data, "deadlineDetail", 1000),
    projectSize: str(data, "projectSize", 200),
    tools: str(data, "tools"),
    access: str(data, "access", 100),
    contactPreference: str(data, "contactPreference", 100),
    anythingElse: str(data, "anythingElse"),
  };
}

export function validate(
  submission: Submission,
  data: FormData,
): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!submission.name) errors.name = "Please tell me your name.";
  if (!submission.businessName) {
    errors.businessName = "Please enter your business name.";
  }

  if (!submission.email) {
    errors.email = "I need an email address to reply to.";
  } else if (!EMAIL_RE.test(submission.email)) {
    errors.email = "That doesn't look like a valid email address.";
  }

  if (!submission.phone) errors.phone = "Please enter a phone number.";
  if (!submission.website) {
    errors.website = "Please share your website or a social media page.";
  }
  if (!submission.industry) {
    errors.industry = "Please tell me your type of business or industry.";
  }

  if (submission.needs.length === 0) {
    errors.needs = "Pick at least one area of support.";
  }
  if (submission.needs.includes(OTHER_NEED) && !submission.needsOther) {
    errors.needsOther =
      "You selected Other — please describe what you need help with.";
  }

  if (!submission.problem) {
    errors.problem = "A sentence or two about what feels messy is enough.";
  }

  if (!submission.success) {
    errors.success = "A sentence or two about the end result is enough.";
  }
  if (!submission.currentProcess) {
    errors.currentProcess =
      'Briefly describe it — or just say "nothing yet".';
  }

  if (!submission.timeline) errors.timeline = "Choose a rough timeline.";
  if (submission.timeline === "Other" && !submission.timelineOther) {
    errors.timelineOther =
      "You chose Other — let me know when you'd like this completed.";
  }
  if (!submission.urgency) errors.urgency = "Choose an urgency level.";

  if (!submission.projectSize) {
    errors.projectSize = "Choose a size — a guess is fine.";
  }

  if (!submission.tools) {
    errors.tools = 'List the tools involved — or just say "none".';
  }
  if (!submission.access) {
    errors.access = "Choose the option that fits best.";
  }
  if (!submission.contactPreference) {
    errors.contactPreference = "Choose how you'd like to hear from me.";
  }

  for (const ack of ACKNOWLEDGEMENTS) {
    if (data.get(ack.name) !== "on") {
      errors[ack.name] = "Please confirm this before submitting.";
    }
  }

  return errors;
}

/** Plain-text summary of a submission, ordered the way the PDF form is. */
export function formatSubmission(s: Submission): string {
  const timeline =
    s.timeline === "Other" && s.timelineOther
      ? `Other — ${s.timelineOther}`
      : s.timeline;

  const needs = [
    ...s.needs,
    ...(s.needsOther ? [`Other — ${s.needsOther}`] : []),
  ];

  const blocks: [string, string][] = [
    [
      "ABOUT",
      [
        `Name:      ${s.name}`,
        `Business:  ${s.businessName || "—"}`,
        `Email:     ${s.email}`,
        `Phone:     ${s.phone || "—"}`,
        `Website:   ${s.website || "—"}`,
        `Industry:  ${s.industry || "—"}`,
      ].join("\n"),
    ],
    ["NEEDS HELP WITH", needs.map((n) => `• ${n}`).join("\n")],
    ["WHAT FEELS MESSY", s.problem],
    ["WHAT SUCCESS LOOKS LIKE", s.success || "—"],
    ["CURRENT PROCESS", s.currentProcess || "—"],
    [
      "TIMING",
      [
        `Timeline:  ${timeline}`,
        `Urgency:   ${s.urgency || "—"}`,
        `Deadline:  ${s.deadlineDetail || "—"}`,
      ].join("\n"),
    ],
    ["ESTIMATED SIZE", s.projectSize],
    [
      "TOOLS & ACCESS",
      [`Tools:  ${s.tools || "—"}`, `Access: ${s.access || "—"}`].join("\n"),
    ],
    [
      "COMMUNICATION",
      [
        `Prefers: ${s.contactPreference || "—"}`,
        `Notes:   ${s.anythingElse || "—"}`,
      ].join("\n"),
    ],
  ];

  return blocks
    .map(([heading, body]) => `${heading}\n${"-".repeat(heading.length)}\n${body}`)
    .join("\n\n");
}
