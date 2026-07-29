export function SectionHeader({ number, title, kicker }: { number: string; title: string; kicker?: string }) {
  return <div className="section-header"><p className="eyebrow">{number} — {kicker}</p><h2>{title}</h2></div>;
}
