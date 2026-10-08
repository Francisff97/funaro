import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

const PHONE = '+393494262518';
const MAPS = 'https://maps.google.com/?q=Via+Ripa+Serancia+Orvieto+TR';

const svg = 'h-6 w-6';
const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

export async function MobileActionBar() {
  const t = await getTranslations('mobileBar');
  const cell = 'flex flex-col items-center justify-center gap-1.5 py-3';
  const label = 'font-display text-sm italic';

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 bg-carbone text-gold md:hidden border-gold/20 shadow-[0_0_40px_#00000020]">
      <a href={`tel:${PHONE}`} className={`${cell} border-r border-cream/15`}>
        <svg viewBox="0 0 24 24" className={svg} {...stroke}>
          <path d="M6.5 3.5h-2A1.5 1.5 0 0 0 3 5c0 8.28 6.72 15 15 15a1.5 1.5 0 0 0 1.5-1.5v-2a1 1 0 0 0-.68-.95l-3-1a1 1 0 0 0-1.05.24l-1.1 1.1a12 12 0 0 1-5.3-5.3l1.1-1.1a1 1 0 0 0 .24-1.05l-1-3a1 1 0 0 0-.95-.68z" />
          <path d="M15 3a5 5 0 0 1 5 5M15 6.5a1.5 1.5 0 0 1 1.5 1.5" />
        </svg>
        <span className={label}>{t('call')}</span>
      </a>

      <Link href="mailto:info@dimoradelfunaro.it" className={`${cell} border-r border-cream/15`}>
        <svg viewBox="0 0 24 24" className={svg} {...stroke}>
          <path d="M4 10v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8" />
          <path d="M4 10.5l8 5 8-5" />
          <path d="M12 3v6M9.5 5L12 3l2.5 2" />
        </svg>
        <span className={label}>{t('write')}</span>
      </Link>

      <a href={MAPS} target="_blank" rel="noopener" className={cell}>
        <svg viewBox="0 0 24 24" className={svg} {...stroke}>
          <path d="M9 5L3.5 7v13L9 18l6 2 5.5-2V5L15 7 9 5z" />
          <path d="M9 5v13M15 7v13" />
          <path d="M17.5 3.5a2 2 0 0 1 2 2c0 1.5-2 3.5-2 3.5s-2-2-2-3.5a2 2 0 0 1 2-2z" />
        </svg>
        <span className={label}>{t('map')}</span>
      </a>
    </nav>
  );
}