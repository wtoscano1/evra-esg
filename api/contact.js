// api/contact.js  (MUST be at project root: esg-evra/api/contact.js)

export default async function handler(req, res) {
  // Only allow POST from the form
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  try {
    const { name, email, message, subject = '' } = req.body || {};

    // Basic validation
    if (!name || !email || !message) {
      res.status(400).json({ ok: false, error: 'Missing fields' });
      return;
    }

    // For now: just log to Vercel function logs. No SMTP yet.
    console.log('Contact form submission:', { name, email, subject, message });

    // If we got here, tell the front-end it worked
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact handler error:', err);
    res.status(500).json({ ok: false, error: 'Server error' });
  }
}
