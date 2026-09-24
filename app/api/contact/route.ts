import { NextResponse } from "next/server";
import { CONTACT } from "@/lib/constants";

/**
 * Contact endpoint. Validates the incoming request, then forwards it to
 * FormSubmit (https://formsubmit.co) which emails the submission straight
 * to CONTACT.email — no API key or signup required.
 *
 * Deliberately uses the plain endpoint (not /ajax/<email>) with a JSON
 * Accept header: FormSubmit only sends its one-time activation email in
 * response to a POST on the plain endpoint — the /ajax/ endpoint silently
 * skips activation entirely, which would leave this permanently broken.
 * The plain endpoint still returns JSON as long as Accept: application/json
 * is set, so behavior here is otherwise identical to using /ajax/.
 *
 * One-time setup: the first submission after deploying triggers that
 * activation email to CONTACT.email. Someone has to open it and click the
 * confirmation link once; every submission after that delivers
 * automatically. Until activated, FormSubmit responds 200 OK with
 * {"success":"false"} rather than an error status, so the success field is
 * checked explicitly below rather than trusting response.ok alone.
 */

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/${encodeURIComponent(CONTACT.email)}`;

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, projectType, budget, message } = body;

  if (!name || !email || !phone || !projectType || !message) {
    return NextResponse.json(
      { error: "Please fill out all required fields." },
      { status: 400 }
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  try {
    const forwardResponse = await fetch(FORMSUBMIT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        "Project Type": projectType,
        "Estimated Budget": budget || "Not provided",
        message,
        _subject: `New quote request from ${name} — Alta Renovations website`,
        _template: "table",
        _captcha: "false",
      }),
    });

    if (!forwardResponse.ok) {
      throw new Error(`FormSubmit responded with ${forwardResponse.status}`);
    }

    const forwardResult = await forwardResponse.json();
    if (String(forwardResult?.success) !== "true") {
      console.error(
        "FormSubmit did not confirm delivery — likely still needs one-time activation.",
        "Check the inbox for CONTACT.email for a confirmation link.",
        forwardResult
      );
      throw new Error("FormSubmit did not report success.");
    }
  } catch (error) {
    console.error("Failed to forward contact form submission:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your request. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
