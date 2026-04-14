import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    // ── Email to ADMIN ──
    await resend.emails.send({
      from: "Girl's Future Bright <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL!,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:24px;border:1px solid #e9d5ff;border-radius:12px;">
          <h2 style="color:#6d28d9;margin-bottom:20px;">New Message Received</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#7c3aed;font-size:12px;width:80px;">Name</td><td style="padding:8px 0;font-weight:600;color:#2d1b69;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#7c3aed;font-size:12px;">Email</td><td style="padding:8px 0;font-weight:600;color:#2d1b69;">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#7c3aed;font-size:12px;">Phone</td><td style="padding:8px 0;font-weight:600;color:#2d1b69;">${phone || "Not provided"}</td></tr>
            <tr><td style="padding:8px 0;color:#7c3aed;font-size:12px;vertical-align:top;">Message</td><td style="padding:8px 0;color:#2d1b69;line-height:1.6;">${message}</td></tr>
          </table>
        </div>
      `,
    });

    // ── Confirmation email to USER ──
    await resend.emails.send({
      from: "Girl's Future Bright <onboarding@resend.dev>",
      to: email,
      subject: "We received your message — Girl's Future Bright",
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:24px;border:1px solid #e9d5ff;border-radius:12px;">
          <h2 style="color:#6d28d9;">Thank you, ${name}! 🌸</h2>
          <p style="color:#4c1d95;line-height:1.7;">We have received your message and will get back to you within 24 hours.</p>
          <div style="background:#fdf4ff;border-left:4px solid #a855f7;padding:14px 18px;border-radius:8px;margin:20px 0;">
            <p style="margin:0;color:#4c1d95;font-style:italic;line-height:1.6;">"${message}"</p>
          </div>
          <p style="color:#7c3aed;font-size:13px;">📍 Janakpur, Madhesh Province, Nepal<br/>📞 +977-041-XXXXXX</p>
          <p style="color:#be185d;font-weight:600;font-size:13px;margin-top:24px;">— Girl's Future Bright Team</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json(
      { error: "Failed to send email something went wrng" },
      { status: 500 },
    );
  }
}
