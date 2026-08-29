import { ArrowButton, SectionPill } from "../site-header";

export function Services() {
  return (
    <section id="services" className="services section-wrap reveal">
      <div className="services-copy">
        <SectionPill>Services</SectionPill>
        <h2>
          Explore our full range of coaching, training, and tennis experiences.
        </h2>
        <p>
          From first serve to match point — we&apos;ve got the right program for
          you.
        </p>
        <ArrowButton />
      </div>
      <article
        className="service-image service-main"
        style={{
          backgroundImage:
            "url('tennis2.png')",
        }}
      >
        <span className="glass-label" style={{ color: "var(--navy)" }}>
          Training Programs
        </span>
        <p>
          Programs designed for
          <br />
          all ages and abilities.
        </p>
      </article>
      <article
        className="service-image service-side"
        style={{
          backgroundImage:
            "url('tennis.png')",
        }}
      >
        <span className="glass-label" style={{ color: "var(--navy)" }}>
          Court Access
        </span>
        <div>
          <strong>Hourly Court Rental</strong>
          <p>
            Step into a space built for players — to grow, compete, and thrive.
          </p>
        </div>
      </article>
    </section>
  );
}
