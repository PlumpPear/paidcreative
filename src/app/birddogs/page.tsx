"use client";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <nav className="site-nav casestudy-nav">
      <div className="nav-container">
        <Link href="/">
          <Image
            src="/paid-creative-pigeon-logo.png"
            alt="Paid Creative"
            width={60}
            height={60}
            className="nav-logo-img"
          />
        </Link>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="casestudy-hero">
      <div className="casestudy-hero-content fade-in-up">
        <p className="casestudy-label">Case Study</p>
        <h1>
          $0 to $100M<br />
          in 5 years
        </h1>
        <img
          src="/birddogs_logo_1.png"
          alt="birddogs"
          className="casestudy-brand-logo"
        />
      </div>
    </section>
  );
}

function BrandStory() {
  return (
    <section className="casestudy-story">
      <div className="casestudy-story-content">
        <h2 className="casestudy-story-heading">The Brand</h2>
        <div className="casestudy-story-body">
          <p>
            birddogs didn&apos;t start with venture funding or a playbook. It was built bootstrapped and
            obsessed with what actually worked.
          </p>
          <p>
            The founding question was simple: <strong>What if we paired the way Chubbies spoke to male
            audiences directly with a product engineered at the level of Lululemon?</strong>
          </p>
          <p>
            That question became birddogs — a men&apos;s activewear brand built on humor, performance
            fabric, and relentless direct response marketing.
          </p>
          <p>
            From the start, the creative was the growth engine. Early Facebook ads were self-produced,
            irreverent, and built to stop the scroll. The team ran weekly creative sprints like a dev
            team — testing, iterating, and scaling what worked while killing what didn&apos;t.
          </p>
          <p>
            As the brand grew, so did the creative ambition. What started with scrappy performance ads
            evolved into primetime TV commercials airing on ESPN, FOX, and Golf Channel — all while
            keeping the same direct response DNA that built the business.
          </p>
          <p>
            A five-person team took birddogs from zero to <strong>$100M+ in annual revenue</strong>,
            proving that creative-led growth, when paired with rigorous performance marketing, can
            scale a brand to nine figures without outside capital.
          </p>
        </div>
      </div>
    </section>
  );
}

function Results() {
  const stats = [
    {
      value: "$58M+",
      label: "Ad Spend Over 5 Years",
      description: "Spent at average 1.5 NC ROAS",
    },
    {
      value: "10,000+",
      label: "Creatives Produced",
      description: "Weekly sprints like a dev team",
    },
    {
      value: "4+",
      label: "Years In Meta Disruptors",
      description: "Access to Meta's top support team",
    },
  ];

  return (
    <section className="casestudy-results">
      <div className="section-header">
        <h2 className="section-title">The Results</h2>
      </div>
      <div className="casestudy-results-grid">
        {stats.map((s) => (
          <div key={s.label} className="casestudy-stat-item">
            <div className="stat-number">{s.value}</div>
            <div className="stat-label">{s.label}</div>
            <p className="stat-description">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="casestudy-contact">
      <div className="casestudy-contact-content">
        <h2>Say Hello</h2>
        <a
          href="https://calendar.app.google/rrGjcCYtfnHjAqvz7"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Schedule 30 Minutes
        </a>
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
              <Link href="/birddogs" className="footer-link">
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

export default function Birddogs() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandStory />
        <Results />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
