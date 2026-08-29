import { SectionPill } from "../site-header";

export function About() {
  return (
    <>
      <section id="about" className="about section-wrap reveal">
        <SectionPill>About Horizon</SectionPill>
        <p className="about-lead">
          At Horizon, we don&apos;t just play tennis — we live it. Since 2021,
          our club has been a home for players of all levels, from eager
          beginners to seasoned pros.
        </p>
      </section>
      <section className="feature-grid section-wrap">
        <article className="feature-card dark-card reveal shine">
          <span className="feature-icon">▥</span>
          <h3>Professional hard courts</h3>
          <p>
            with tournament-grade lighting &amp; climate control — play in
            perfect conditions, in any season.
          </p>
          <div className="toggle-row">
            <span className="toggle">
              <i />
            </span>{" "}
            Game Mode
          </div>
        </article>
        <article
          className="feature-card photo-card reveal shine"
          style={{
            backgroundImage:
              "url('about.png')",
          }}
        >
          <span className="glass-label">Private &amp; Group Lessons</span>
        </article>
        <article className="feature-card stat-card reveal">
          <strong>
            100+
          </strong>
          <h3>Pro Coaches</h3>
          <p>
            Certified professionals ready to boost your game from first serve to
            tournament level.
          </p>
          {["Beginner", "Intermediate", "Advanced"].map((item, i) => (
            <div className="skill" key={item}>
              <span>{item}</span>
              <div>
                {Array.from({ length: 8 - i }, (_, n) => (
                  <i key={n} />
                ))}
              </div>
              <small>{55 - i * 15}</small>
            </div>
          ))}
        </article>
      </section>
    </>
  );
}
