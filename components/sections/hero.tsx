"use client";

import { ArrowButton } from "../site-header";

const referenceImage =
  "hero.png";

export function Hero() {
  return (
    <section id="top" className="hero section-shell">
      <div
        className="hero-media"
        style={{ backgroundImage: `url(${referenceImage})` }}
        aria-label="Players on a sunlit padel court"
        role="img"
      />
      <div className="hero-wash" />
      <div className="hero-content reveal" style={{ marginTop: "-8px" }}>
        <span className="eyebrow">HORIZON COURTS</span>
        <h1>
          Unleash Your Inner
          <br />
          Champion Today.
          <br />
          <em>All In One Place.</em>
        </h1>
        <p>
          Join the ultimate tennis experience — where passion meets performance,
          and every swing brings you closer to victory.
        </p>
        <div className="hero-cta-wrap">
          <ArrowButton>Start your own journey</ArrowButton>
        </div>
      </div>
      <div className="hero-meta reveal delay-2" style={{ marginTop: "12px" }}>
        <div className="hero-meta-copy">
          <strong>Train with top professionals</strong>
          <span>Get the real results.</span>
        </div>
        <div className="avatar-stack">
          <i>AM</i>
          <i>DC</i>
          <i>SR</i>
        </div>
      </div>
      <div className="hero-social">
        <a href="#contact">Instagram →</a>
        <a href="#contact">Facebook →</a>
        <a href="#contact">TikTok →</a>
      </div>
    </section>
  );
}
