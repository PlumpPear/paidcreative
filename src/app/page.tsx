import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <nav className="site-nav">
      <div className="nav-container">
        <Link href="/">
          <Image
            src="/paid-creative-pigeon-logo.png"
            alt="Paid Creative"
            width={80}
            height={80}
            className="nav-logo-img"
          />
        </Link>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Paid_Creative_SizzleReel.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-content fade-in-up">
        <h1>
          Men&apos;s Apparel strategy that <em>scales your brand</em>
        </h1>
        <p className="hero-description">
          Improve Meta ROAS in 2 weeks through better creative and a
          merchandising focused account structure.
        </p>
        <Link href="#case-studies" className="cta-button">
          $100M Case Study
        </Link>
      </div>
    </section>
  );
}

function TrustSection() {
  const clients = ["Birddogs", "Poncho", "DCR", "The Perfect Jean", "Stately"];

  return (
    <section className="trust-section">
      <div className="trust-content">
        <div className="section-header">
          <p className="section-label">
            Trusted by Fast Moving Founders and GTM Teams
          </p>
          <h2 className="section-title">
            We help <strong>Men&apos;s Apparel leaders</strong> build highly
            diversified creative portfolios
          </h2>
        </div>
        <div className="logo-grid">
          {clients.map((client) => (
            <div key={client} className="client-logo">
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Sam and Madison built birddogs with me. Two amazing operators who were key to the founding team",
      name: "Peter Baldwin",
      role: "Founder & CEO",
      company: "birddogs",
    },
    {
      quote:
        "The guys behind Paid Creative run our entire marketing team. Creative quality has notably improved.",
      name: "Ovadia Labaton",
      role: "Co-Founder",
      company: "The Perfect Jean",
    },
    {
      quote:
        "Paid Creative shipped us our highest spending & converting ads in Q4. Plus, they manage all our paid channels.",
      name: "Clayton Spencer",
      role: "Founder",
      company: "Poncho",
    },
  ];

  return (
    <section className="testimonials">
      <div className="section-header">
        <p className="section-label">Client Stories</p>
        <h2 className="section-title">Trusted by 8 and 9 figure Founders</h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div key={t.name} className="testimonial-card">
            <p className="quote">&ldquo;{t.quote}&rdquo;</p>
            <div className="author">
              <div className="author-image" />
              <div className="author-info">
                <h4>{t.name}</h4>
                <p>
                  {t.role}, <span className="company">{t.company}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    {
      value: "$100M+",
      label: "Annual Spend",
      description: "Managed across Meta platforms with proven performance",
    },
    {
      value: "250+",
      label: "Videos Per Month",
      description:
        "High-volume creative production without compromising quality",
    },
    {
      value: "Meta",
      label: "Disruptors Partners",
      description: "Official Meta partnership for creative excellence",
    },
    {
      value: "5",
      label: "Brands Scaled to $10M+",
      description: "We scaled birddogs to well over $80M",
    },
  ];

  return (
    <section className="stats">
      <div className="section-header">
        <h2 className="section-title">
          <strong>We don&apos;t guess.</strong> Our Work is Proven At Scale.
        </h2>
      </div>
      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="stat-item">
            <div className="stat-number">{s.value}</div>
            <div className="stat-label">{s.label}</div>
            <p className="stat-description">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta-content">
        <h2>Partner with us</h2>
        <p>We&apos;re a hands on, founder lead service.</p>
        <Link href="#contact" className="cta-button">
          Schedule Strategy Session
        </Link>
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
          <Link href="#contact" className="cta-button">
            Get Started
          </Link>
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
            <li>
              <Link href="/contact" className="footer-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <ul className="footer-links">
            <li>
              <Link href="#" className="footer-link">
                Creative Strategy
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                Video Production
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                Media Buying
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul className="footer-links">
            <li>
              <Link href="#" className="footer-link">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Paid Creative. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <Testimonials />
        <Stats />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
