export function Section({
  children, dark = false, tint = false, className = '',
}: { children: React.ReactNode; dark?: boolean; tint?: boolean; className?: string }) {
  const bg = dark ? 'bg-carbone text-cream' : tint ? 'bg-paper-2' : 'bg-paper';
  return <section className={`${bg} ${className}`}>{children}</section>;
}

export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`}>{children}</div>;
}