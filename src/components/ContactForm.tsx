'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact.form');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // TODO: collega a /api/contact o a un servizio (Resend / Formspree)
    console.log(data);
    setSent(true);
  };

  const field = 'w-full bg-transparent border-b border-ink/25 py-2 focus:border-gold outline-none';
  const lbl = 'eyebrow block mb-2';

  if (sent) return <p className="text-lg">{t('thanks')}</p>;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div><label className={lbl}>{t('firstName')}</label><input name="firstName" required className={field} placeholder={t('firstNamePh')} /></div>
        <div><label className={lbl}>{t('lastName')}</label><input name="lastName" required className={field} placeholder={t('lastNamePh')} /></div>
        <div><label className={lbl}>Email</label><input name="email" type="email" required className={field} placeholder="nome@email.com" /></div>
        <div><label className={lbl}>{t('phone')}</label><input name="phone" className={field} placeholder="+39 333 333 3333" /></div>
        <div><label className={lbl}>{t('checkin')}</label><input name="checkin" type="date" className={field} /></div>
        <div><label className={lbl}>{t('checkout')}</label><input name="checkout" type="date" className={field} /></div>
      </div>
      <div><label className={lbl}>{t('message')}</label><textarea name="message" rows={3} className={field} placeholder={t('messagePh')} /></div>
      <label className="flex items-start gap-3 text-xs text-ink-muted">
        <input type="checkbox" name="privacy" required className="mt-1" />
        <span>{t('privacy')}</span>
      </label>
      <button type="submit" className="btn btn-dark w-full">{t('submit')}</button>
    </form>
  );
}