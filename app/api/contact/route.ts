import { NextResponse } from "next/server";

/**
 * Placeholder contact endpoint.
 *
 * This validates the incoming request and returns success, but does not
 * send an email or store a lead anywhere — no email provider or database
 * has been configured. Before launch, wire this up to a real service
 * (e.g. Resend, SendGrid, Formspree, or your CRM's API) and see the
 * "Wiring up the contact form" section of README.md.
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

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, projectType, message } = body;

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

  // TODO: send an email / create a lead record here.
  return NextResponse.json({ success: true });
}
