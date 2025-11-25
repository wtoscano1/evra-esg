// api/contact.js  (ESM)
import nodemailer from 'nodemailer';

function readJson(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (c) => (data += c));
    req.on('end', () => {
      try { resolve(data ? JSON.parse(data) : {}); }
      catch (e) { reject(e); }
    });
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const { name, email, message, honeypot } = await readJson(req);

    if (honeypot) return res.status(200).json({ ok: true }); // bot trap
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Missing fields' });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE || 'true') === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const to = process.env.MAIL_TO || process.env.SMTP_USER;

    await transporter.sendMail({
      from: `"ESG Evra Site" <${process.env.SMTP_USER}>`,
      to,
      replyTo: email,
      subject: `Website contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr/>
        <p>${String(message).replace(/\n/g, '<br/>')}</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: 'Email send failed' });
  }
}
