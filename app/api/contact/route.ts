import { NextRequest, NextResponse } from "next/server";

// TODO: Wire this up to an email provider (e.g. Resend, Postmark, or SMTP)
// before deploying to production. Currently this validates and logs the
// submission server-side so the form works end-to-end in the meantime.
//
// Example with Resend:
//   import { Resend } from "resend";
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   await resend.emails.send({
//     from: "portfolio@yourdomain.com",
//     to: "iammugesh07@gmail.com",
//     subject: `Portfolio contact from ${name}`,
//     text: message,
//   });

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // eslint-disable-next-line no-console
    console.log("New portfolio contact submission:", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
