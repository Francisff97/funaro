'use client';
import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const t = useTranslations('contact.form');
  const [status, setStatus] = useState<Status>('idle');
  const [checkin, setCheckin] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const field = 'w-full bg-transparent border-b border-ink/25 py-2 focus:border-gold outline-none';
  const lbl = 'eyebrow block mb-2';

  if (status === 'sent') return <p className="text-lg" role="status">{t('thanks')}</p>;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot anti-spam: invisibile agli utenti, i bot lo compilano */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label>Company<input name="company" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div><label htmlFor="cf-first" className={lbl}>{t('firstName')}</label><input id="cf-first" name="firstName" required maxLength={80} autoComplete="given-name" className={field} placeholder={t('firstNamePh')} /></div>
        <div><label htmlFor="cf-last" className={lbl}>{t('lastName')}</label><input id="cf-last" name="lastName" required maxLength={80} autoComplete="family-name" className={field} placeholder={t('lastNamePh')} /></div>
        <div><label htmlFor="cf-email" className={lbl}>Email</label><input id="cf-email" name="email" type="email" required maxLength={120} autoComplete="email" className={field} placeholder="nome@email.com" /></div>
        <div><label htmlFor="cf-phone" className={lbl}>{t('phone')}</label><input id="cf-phone" name="phone" type="tel" maxLength={40} autoComplete="tel" className={field} placeholder="+39 333 333 3333" /></div>
        <div><label htmlFor="cf-in" className={lbl}>{t('checkin')}</label><input id="cf-in" name="checkin" type="date" className={field} value={checkin} onChange={(e) => setCheckin(e.target.value)} /></div>
        <div><label htmlFor="cf-out" className={lbl}>{t('checkout')}</label><input id="cf-out" name="checkout" type="date" className={field} min={checkin || undefined} /></div>
      </div>
      <div>
  <label htmlFor="cf-msg" className={lbl}>{t('message')}</label>
  <textarea
    id="cf-msg"
    name="message"
    rows={3}
    maxLength={4000}
    className={field}
    placeholder={t('messagePh')}
  />
</div>

<div className="flex items-start gap-3 text-xs text-ink-muted">
  <input id="cf-privacy" type="checkbox" name="privacy" required className="mt-1" />
  <label htmlFor="cf-privacy">
    {t.rich('privacy', {
      link: (chunks) => (
        <Link
          href="/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-ink"
        >
          {chunks}
        </Link>
      ),
    })}
  </label>
</div>

      {status === 'error' && (
        <p className="text-sm text-red-700" role="alert">{t('error')}</p>
      )}

      <button type="submit" disabled={status === 'sending'} className="btn btn-dark disabled:opacity-60">
        {status === 'sending' ? t('sending') : t('submit')}
      </button>
    </form>
  );
}