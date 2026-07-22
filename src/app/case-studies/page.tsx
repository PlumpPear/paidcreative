import Link from "next/link";

function Hero() {
  return (
    <section className="casestudy-hero casestudy-hero--casestudies">
      <div className="casestudy-hero-content fade-in-up">
        <p className="casestudy-label">Our Work</p>
        <h1>Case Studies</h1>
      </div>
    </section>
  );
}

function CaseStudyGrid() {
  const caseStudies = [
    {
      href: "/birddogs",
      logo: "/birddogs_logo_1.png",
      logoAlt: "birddogs",
      blurb:
        "$0 to $50M in 5 years. A brand Sam & Madison (Co-Founders of Paid Creative) built personally without raising venture funds. This is where we learned how to design a great product and scale a brand with paid ads.",
    },
    {
      href: "/bluechew",
      logo: "/bluechew_logo1.svg",
      logoAlt: "BlueChew",
      blurb:
        "How we made multiple top 10 spending ads inside a $400M men's health company's ad portfolio in 1 month AND smashed their CPA goal.",
    },
  ];

  return (
    <section className="testimonials">
      <div className="section-header">
        <h2 className="section-title">Selected Work</h2>
      </div>
      <div className="testimonials-grid">
        {caseStudies.map((cs) => (
          <Link
            key={cs.href}
            href={cs.href}
            className="testimonial-card testimonial-card--case"
          >
            <img src={cs.logo} alt={cs.logoAlt} className="case-card-logo" />
            <p className="quote">{cs.blurb}</p>
            <span className="case-card-link">See the case study</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Paid Creative</h3>
          <p>
            Men&apos;s apparel creative agency specializing in performance
            marketing and brand growth. We help 8 and 9-figure brands build
            diversified creative portfolios.
          </p>
          <a
            href="https://calendar.app.google/rrGjcCYtfnHjAqvz7"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Get Started
          </a>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul className="footer-links">
            <li>
              <Link href="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="footer-link">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <ul className="footer-links">
            <li>Creative Strategy</li>
            <li>Video Production</li>
            <li>Media Buying</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul className="footer-links">
            <li>
              <Link href="/case-studies" className="footer-link">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Paid Creative. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function CaseStudies() {
  return (
    <>
      <main>
        <Hero />
        <CaseStudyGrid />
      </main>
      <Footer />
    </>
  );
}
