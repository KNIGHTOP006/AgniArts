import { EnquiryForm } from "../../components/EnquiryForm";
import { PageHero } from "../../components/PageHero";
import { SectionHeader } from "../../components/SectionHeader";

export default function WorkshopsPage() {
  return (
    <main>
      <PageHero label="06 — LEARNING SPACES" title="Join a workshop." text="Learn folk arts through rhythm, movement and collective practice." image="/media/8.jpg" />
      <section className="section container workshop-intro">
        <div>
          <SectionHeader number="THE RHYTHM TRAVELS" kicker="WHERE WE GATHER" title="Every month, somewhere close." />
          <p>Agni conducts workshops across Bengaluru, Hosur, Chennai and different parts of Tamil Nadu.</p>
        </div>
        <div className="location-list">
          <span>Bengaluru</span>
          <span>Hosur</span>
          <span>Chennai</span>
          <span>Tamil Nadu</span>
        </div>
      </section>
      <section className="section container">
        <SectionHeader number="LEARN WITH AGNI" kicker="WORKSHOPS" title="A welcoming space to begin." />
        <p className="large-copy">Whether you&apos;re picking up the sticks for the very first time or looking to deepen your understanding of Parai, our workshops are designed to be welcoming, immersive and accessible. Alongside rhythm and technique, participants explore the history, significance and cultural context.</p>
        <p className="large-copy">Agni actively collaborates with educational institutions, non-profit organizations and community initiatives to support social awareness programs, corporate events and community gatherings.</p>
      </section>
      <section className="form-section">
        <div className="container form-layout">
          <div>
            <p className="eyebrow">MAKE AN ENQUIRY</p>
            <h2>Find your rhythm.</h2>
            <p>Tell us how you&apos;d like to learn. We&apos;ll share the next suitable workshop or program.</p>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </main>
  );
}
