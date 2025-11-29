// api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  try {
    const { name, email, message, honeypot } = req.body || {};

    // Basic validation
    if (!name || !email || !message) {
      res.status(400).json({ ok: false, error: 'Missing fields' });
      return;
    }

    // Honeypot (spam bot) – if filled, silently succeed without sending
    if (honeypot) {
      res.status(200).json({ ok: true });
      return;
    }

    // Create SMTP transporter (Infomaniak)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false, // STARTTLS on 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toAddress = process.env.SMTP_TO || process.env.SMTP_USER;

    const mailOptions = {
      from: `"ESG-Evra Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: toAddress,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact API mail error:', err);
    res.status(500).json({ ok: false, error: 'Mail error' });
  }
}
