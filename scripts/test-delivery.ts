/**
 * Sends one realistic intake submission through the real delivery code
 * (src/lib/deliver.ts) to confirm email delivery end to end.
 *
 * Run with env loaded from .env.local:
 *   set -a && source .env.local && set +a && npx tsx scripts/test-delivery.ts
 */
import { deliverSubmission } from "../src/lib/deliver";
import type { Submission } from "../src/lib/intake";

const sample: Submission = {
  name: "Test Submission (delivery check)",
  businessName: "The Admin Reset",
  email: "theadminreset44@gmail.com",
  phone: "(555) 010-0000",
  website: "https://theadminreset.com",
  industry: "Administrative services",
  needs: [
    "Spreadsheet or tracker cleanup / creation",
    "File / folder organization",
  ],
  needsOther: "",
  problem:
    "This is a test of the intake form email delivery. If this arrived at " +
    "daniellew@theadminreset.com, everything is working.",
  success: "This email lands in the right inbox, formatted and readable.",
  currentProcess: "Submitted directly through the site's delivery code.",
  timeline: "Within 1 week",
  timelineOther: "",
  urgency: "Low — helpful, but not time-sensitive",
  deadlineDetail: "",
  projectSize: "Small — one clearly defined task",
  tools: "Next.js, Resend",
  access: "No",
  contactPreference: "Email",
  anythingElse: "Safe to delete — sent by the delivery test script.",
};

deliverSubmission(sample).then((result) => {
  console.log("Result:", result);
  if (!result.delivered) process.exit(1);
});
