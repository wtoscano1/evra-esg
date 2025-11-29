// api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only accept POST
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const { name, email, message, honeypot } = req.body || {};

    // Simple spam honeypot: if this hidden field is filled, ignore
    if (honeypot) {
      return res.status(200).json({ ok: true });
    }

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Missing fields' });
    }

    // Nodemailer SMTP transport using env vars from Vercel
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,           // e.g. "mail.infomaniak.com"
      port: Number(process.env.SMTP_PORT),   // e.g. 465 or 587
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,         // full email, e.g. "wtoscano@esg-evra.ch"
        pass: process.env.SMTP_PASS          // the mailbox password
      }
    });

    const toAddress = process.env.CONTACT_TO || 'wtoscano@esg-evra.ch';

    const info = await transporter.sendMail({
      from: `"ESG Evra Website" <${process.env.SMTP_USER}>`,
      to: toAddress,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p>${(message || '').replace(/\n/g, '<br>')}</p>
      `
    });

    console.log('Mail sent:', info.messageId);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact error:', err);
    return res.status(500).json({
      ok: false,
      error: err.message || 'Server error'
    });
  }
}
