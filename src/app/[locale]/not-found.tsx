import { Link } from '@/i18n/navigation';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center gap-6 px-6">
      <h1 className="text-6xl">404</h1>
      <p className="text-ink-muted">Pagina non trovata / Page not found.</p>
      <Link href="/" className="btn btn-gold">Torna alla home</Link>
    </section>
  );
}