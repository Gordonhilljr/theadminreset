"use server";

import { deliverSubmission } from "@/lib/deliver";
import { parseSubmission, validate, type FormState } from "@/lib/intake";

export async function submitIntake(
  _prev: FormState,
  data: FormData,
): Promise<FormState> {
  const submission = parseSubmission(data);

  // Bots fill every field they find; humans never see this one.
  if (typeof data.get("company_website") === "string" && data.get("company_website")) {
    return { status: "success", name: submission.name };
  }

  const errors = validate(submission, data);
  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values: submission };
  }

  const { delivered, reason } = await deliverSubmission(submission);

  // "not-configured" still counts as received: it lands in the server log, and
  // blocking the client on missing credentials would only lose the lead.
  if (!delivered && reason !== "not-configured") {
    return {
      status: "error",
      errors: {
        form:
          "Something went wrong sending your form. Please email " +
          "theadminreset44@gmail.com directly and I'll pick it up from there.",
      },
      values: submission,
    };
  }

  return { status: "success", name: submission.name };
}
