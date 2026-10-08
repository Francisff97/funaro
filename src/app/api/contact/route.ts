// src/app/api/contact/route.ts
import nodemailer from 'nodemailer';

export const runtime = 'nodejs'; // nodemailer non gira sull'edge runtime

const MAX = { name: 80, email: 120, phone: 40, message: 4000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

const clean = (v: unknown, max: number) =>
  String(v ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const itDate = (d: string) => (DATE_RE.test(d) ? d.split('-').reverse().join('/') : '');

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  // Honeypot: un utente vero lascia vuoto il campo nascosto "company".
  // Ai bot rispondiamo "ok" senza inviare nulla.
  if (clean(body.company, 200)) return Response.json({ ok: true });

  const firstName = clean(body.firstName, MAX.name);
  const lastName = clean(body.lastName, MAX.name);
  const email = clean(body.email, MAX.email);
  const phone = clean(body.phone, MAX.phone);
  const checkin = clean(body.checkin, 10);
  const checkout = clean(body.checkout, 10);
  const message = String(body.message ?? '').trim().slice(0, MAX.message); // qui gli a capo restano
  const privacy = body.privacy === 'on' || body.privacy === true;

  if (!firstName || !lastName || !EMAIL_RE.test(email) || !privacy) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const rows: [string, string][] = [
    ['Nome', `${firstName} ${lastName}`],
    ['Email', email],
    ['Telefono', phone || '—'],
    ['Check-in', itDate(checkin) || '—'],
    ['Check-out', itDate(checkout) || '—'],
  ];

  const text =
    rows.map(([k, v]) => `${k}: ${v}`).join('\n') +
    `\n\nMessaggio:\n${message || '—'}\n\n— Inviato dal modulo contatti del sito`;

  const html = `
    <table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
      ${rows.map(([k, v]) => `<tr><td style="color:#666">${k}</td><td><strong>${esc(v)}</strong></td></tr>`).join('')}
    </table>
    <p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap">${esc(message || '—')}</p>
    <p style="font-family:Arial,sans-serif;font-size:12px;color:#999">Inviato dal modulo contatti del sito. Rispondi a questa mail per scrivere direttamente al cliente.</p>`;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: process.env.SMTP_SECURE !== 'false',
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM, // deve coincidere con SMTP_USER
      to: process.env.MAIL_TO,
      replyTo: { name: `${firstName} ${lastName}`, address: email },
      subject: `Richiesta dal sito – ${firstName} ${lastName}${checkin ? ` (${itDate(checkin)})` : ''}`,
      text,
      html,
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error('[contact] invio fallito:', err instanceof Error ? err.message : err);
    return Response.json({ ok: false }, { status: 500 });
  }
}