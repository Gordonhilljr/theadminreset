import { Resend } from "resend";

import { formatSubmission, type Submission } from "./intake";

/**
 * Delivers a completed intake form to Danielle.
 *
 * Configured entirely through env vars so the form works the moment the
 * credentials land, with no code change:
 *
 *   RESEND_API_KEY     API key from resend.com
 *   INTAKE_TO_EMAIL    inbox that receives submissions
 *   INTAKE_FROM_EMAIL  verified sender, e.g. "intake@theadminreset.com"
 *
 * Until those are set the submission is logged to the server console instead,
 * so local development works without an account.
 */
export async function deliverSubmission(
  submission: Submission,
): Promise<{ delivered: boolean; reason?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INTAKE_TO_EMAIL;
  const from = process.env.INTAKE_FROM_EMAIL;

  const body = formatSubmission(submission);
  const subject = `New intake — ${submission.name}${
    submission.businessName ? ` (${submission.businessName})` : ""
  }`;

  if (!apiKey || !to || !from) {
    console.warn(
      "[intake] Email is not configured (RESEND_API_KEY / INTAKE_TO_EMAIL / " +
        "INTAKE_FROM_EMAIL). Logging the submission instead.",
    );
    console.info(`[intake] ${subject}\n\n${body}`);
    return { delivered: false, reason: "not-configured" };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: submission.email,
      subject,
      text: body,
    });

    if (error) {
      // Log the submission so a provider outage never loses a lead.
      console.error(`[intake] Delivery failed (${error.name}): ${error.message}`);
      console.info(`[intake] Undelivered submission:\n\n${body}`);
      return { delivered: false, reason: error.name };
    }

    return { delivered: true };
  } catch (error) {
    console.error("[intake] Delivery threw:", error);
    console.info(`[intake] Undelivered submission:\n\n${body}`);
    return { delivered: false, reason: "exception" };
  }
}
