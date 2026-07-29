import Link from "next/link";
import { PageHero } from "../../components/PageHero";
import { SectionHeader } from "../../components/SectionHeader";
import { site } from "../../data/site";

export default function ParaiPage() {
  return (
    <main>
      <PageHero label="02 — THE ART" title="Parai." text="The rhythm that refuses to fade." image={site.paraiImage} />
      <section className="section container parai-page-intro">
        <div>
          <p className="eyebrow">THE RHYTHM THAT REFUSES TO FADE</p>
          <h2>More than an instrument.</h2>
        </div>
        <p className="large-copy">
          Long before written history, rhythm was one of humanity&apos;s first languages. Across generations, the Parai emerged as one of the oldest percussion instruments of Tamil culture, accompanying harvests, celebrations, ceremonies, deaths and important community gatherings.
        </p>
      </section>
      <section className="story-section">
        <div className="container">
          <SectionHeader number="A CULTURAL NARRATIVE" kicker="BIRTH & EVOLUTION" title="Sound, carried forward." />
          <div className="narrative-grid">
            <p>Over time, changing social structures altered how the instrument was perceived. Yet despite centuries of marginalization, Parai endured through the resilience of the communities who protected its traditions.</p>
            <p>Today, Parai stands not only as an instrument but as a powerful expression of identity and resilience. Every rhythm carries stories that continue to echo through generations.</p>
          </div>
          <div className="from-to light">
            <span>From survival</span>
            <i>to expression.</i>
          </div>
          <div className="narrative-grid">
            <p>Parai continues to speak through performance, learning and collective memory. It gathers people, carries history and keeps living traditions present in the everyday.</p>
            <p className="narrative-final">And today,<br />it continues to speak.</p>
          </div>
          <small>This page presents Agni&apos;s cultural narrative; add academic sources here when they are available.</small>
        </div>
      </section>
      <section className="section container">
        <SectionHeader number="WHAT IT HOLDS" kicker="WHY PARAI" title="A living expression." />
        <div className="meaning-grid">
          {[["Communication", "A rhythm used to communicate and gather communities."], ["Protection", "Sound as a tool of warning and protection."], ["Celebration", "Rhythm as part of collective celebration."], ["Identity", "A living expression of community, history and culture."]].map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="learn-banner container">
        <img src="/media/7.jpg" alt="Parai workshop" />
        <div>
          <p className="eyebrow">COME CLOSER</p>
          <h2>Learn the rhythm.</h2>
          <Link className="button" href="/workshops">Join a workshop ↗</Link>
        </div>
      </section>
    </main>
  );
}
