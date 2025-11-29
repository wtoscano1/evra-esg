// api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  try {
    const { name, email, message, subject } = req.body || {};

    if (!name || !email || !message) {
      res.status(400).json({ ok: false, error: 'Missing fields' });
      return;
    }

    // Build transporter using Infomaniak SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,          // mail.infomaniak.com
      port: Number(process.env.SMTP_PORT),  // 587
      secure: process.env.SMTP_SECURE === 'true', // false for 587/STARTTLS
      auth: {
        user: process.env.SMTP_USER,        // full email
        pass: process.env.SMTP_PASS,        // mailbox password
      },
    });

    const toEmail = process.env.TO_EMAIL || process.env.SMTP_USER;

    const mailSubject =
      subject && subject.trim()
        ? subject.trim()
        : 'New message from ESG Evra website';

    const textBody = `
New message from ESG Evra website:

Name: ${name}
Email: ${email}

Message:
${message}
`.trim();

    const htmlBody = `
      <p><strong>New message from ESG Evra website</strong></p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `;

    await transporter.sendMail({
      from: `"ESG Evra Website" <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
      to: toEmail,
      replyTo: email,
      subject: mailSubject,
      text: textBody,
      html: htmlBody,
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    res.status(500).json({ ok: false, error: 'Email send failed' });
  }
}
