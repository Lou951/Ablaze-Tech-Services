import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactRequestBody = {
  name?: string;
  email?: string;
  business?: string;
  projectType?: string;
  budget?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const business = body.business?.trim();
    const projectType = body.projectType?.trim();
    const budget = body.budget?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please complete your name, email address and message." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) {
      return NextResponse.json(
        { error: "Contact form email settings are missing." },
        { status: 500 },
      );
    }

    const subject = `New website enquiry from ${name}`;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h1 style="color: #0f172a;">New Ablaze Tech Services enquiry</h1>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business / project:</strong> ${business || "Not provided"}</p>
        <p><strong>Project type:</strong> ${projectType || "Not provided"}</p>
        <p><strong>Budget:</strong> ${budget || "Not provided"}</p>

        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />

        <h2 style="color: #0f172a;">Message</h2>
        <p>${message.replace(/\n/g, "<br />")}</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Something went wrong sending your enquiry." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
