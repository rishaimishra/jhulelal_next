import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Log the message to console as requested
    console.log("--- New Contact Form Submission ---");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log("------------------------------------");

    // In a real production app, you would use a service like Resend, Nodemailer, or SendGrid here
    // example:
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'buildersjhulelal@gmail.com',
    //   subject: `New Inquiry: ${subject}`,
    //   html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    // });

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
