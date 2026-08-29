export function Newsletter() {
  return (
    <section id="newsletter" className="newsletter section-wrap reveal">
      <img
        className="newsletter-visual"
        src="/cta.png"
        alt=""
        aria-hidden="true"
      />
      <div className="newsletter-copy">
        <h2>Stay in the Loop</h2>
        <p>Get updates on events, tips, and exclusive offers.</p>
      </div>
      <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
        <div className="newsletter-input-wrap">
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <button className="button button-dark" type="submit">
          Subscribe <span>→</span>
        </button>
      </form>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div>
          <a className="brand brand-footer" href="#top">
            <span className="brand-mark">◌</span> Horizon Courts
          </a>
          <p>Where passion meets performance.</p>
          <div className="socials">
            <a href="#contact">◎</a>
            <a href="#contact">f</a>
            <a href="#contact">♪</a>
            <a href="#contact">▶</a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#club-life">Club Life</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contacts</a>
        </div>
        <div>
          <h4>Services</h4>
          <a href="#services">Training Programs</a>
          <a href="#services">Court Rental</a>
          <a href="#services">Private Lessons</a>
          <a href="#experience">Match Nights</a>
          <a href="#about">Memberships</a>
        </div>
        <div>
          <h4>Contact Us</h4>
          <a href="tel:+12545678900">+1 (254) 567-8900</a>
          <a href="mailto:info@horizoncourts.com">info@horizoncourts.com</a>
          <span>
            123 Tennis Avenue
            <br />
            Sports City, ST 10001
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Horizon Courts. All rights reserved.</span>
        <span>
          <a href="#top">Privacy Policy</a>
          <a href="#top">Terms &amp; Conditions</a>
        </span>
      </div>
    </footer>
  );
}
