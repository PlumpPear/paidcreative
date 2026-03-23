"use client";
import Link from "next/link";

function Hero() {
  return (
    <section className="casestudy-hero">
      <div className="casestudy-hero-content fade-in-up">
        <p className="casestudy-label">Case Study</p>
        <h1>
          $0 to $50M<br />
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

function ContextStrip() {
  const details = [
    { label: "Industry", value: "Men\u2019s Activewear" },
    { label: "Main Platforms", value: "Meta, TV, YouTube" },
    { label: "Timeline", value: "2015 \u2013 2019" },
    { label: "Our Role", value: "Founding Team, Creative & Media" },
  ];

  return (
    <section className="casestudy-context">
      <div className="casestudy-context-grid">
        {details.map((d) => (
          <div key={d.label} className="casestudy-context-item">
            <span className="casestudy-context-label">{d.label}</span>
            <span className="casestudy-context-value">{d.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Challenge() {
  return (
    <section className="casestudy-story">
      <div className="casestudy-story-content">
        <h2 className="casestudy-story-heading">The Challenge</h2>
        <div className="casestudy-story-body">
          <p>
            birddogs had a clear thesis. Activewear had split into two dead
            ends: stuffy brands that took themselves too seriously, and brands
            that were funny but didn&apos;t prioritize a quality product. We set out to
            be both the brand men actually wanted to hear from, and the best
            shorts they&apos;d ever worn.
          </p>
          <p>
            But we had no outside funding, no agency, and no proven playbook for
            scaling a men&apos;s DTC brand past the first million.
          </p>
          <p>
            The founding team needed to build a creative engine that could produce, test, and
            scale ad concepts fast enough to sustain profitable growth on Meta. We did that, and
            expanded into TV, YouTube, and AppLovin without losing the direct response DNA that built the
            business.
          </p>
        </div>
      </div>
    </section>
  );
}

function BrandShowcase() {
  const images = [
    { src: "/birddogs_case_study_brand_1.jpg", alt: "birddogs branded creative 1" },
    { src: "/birddogs_case_study_brand_2.jpg", alt: "birddogs branded creative 2" },
    { src: "/birddogs_case_study_brand_3.jpg", alt: "birddogs branded creative 3" },
    { src: "/birddogs_case_study_brand_4.jpg", alt: "birddogs branded creative 4" },
  ];

  return (
    <section className="casestudy-brand">
      <div className="casestudy-brand-content">
        <h2 className="casestudy-story-heading">The Brand</h2>
        <p className="casestudy-brand-body">
          We built a creative identity rooted in humor, irreverence, and scroll-stopping
          visuals. Our assets were engineered to entertain first AND convert.
          Every piece of content was designed to feel native to the feed while driving
          measurable performance.
        </p>
        <div className="casestudy-brand-grid">
          {images.map((img) => (
            <div key={img.src} className="casestudy-brand-image-wrapper">
              <img src={img.src} alt={img.alt} className="casestudy-brand-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const steps = [
    {
      number: "01",
      title: "Creative Sprints, Not Campaigns",
      description:
        "We ran weekly production cycles like a dev team: scripting, shooting, and editing 20\u201350 ad variations per week. Every concept was built to test a single variable: hook, offer, format, or audience angle.",
    },
    {
      number: "02",
      title: "Test Fast, Scale Winners",
      description:
        "New concepts launched weekly. This cycle ran every week for five years. We produced well over 10,000 creatives total.",
    },
    {
      number: "03",
      title: "From Performance Ads to Primetime TV",
      description:
        "As Meta scaled, we brought the same direct response discipline to television. We aired primetime commercials on ESPN, CNN, and Golf Channel. Every TV spot was built to convert, not just build awareness.",
    },
  ];

  return (
    <section className="casestudy-approach">
      <div className="casestudy-approach-content">
        <h2 className="casestudy-story-heading">The Approach</h2>
        <div className="casestudy-approach-steps">
          {steps.map((s) => (
            <div key={s.number} className="casestudy-step">
              <div className="casestudy-step-number">{s.number}</div>
              <div className="casestudy-step-body">
                <h3 className="casestudy-step-title">{s.title}</h3>
                <p className="casestudy-step-description">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  const stats = [
    {
      value: "$100M+",
      label: "Annual Revenue",
      description: "From zero to nine figures in five years, bootstrapped",
    },
    {
      value: "$58M+",
      label: "Ad Spend Managed",
      description: "Deployed profitably at a 1.4x NC ROAS average",
    },
    {
      value: "10,000+",
      label: "Creatives Produced",
      description: "Weekly sprints across Meta, TV, and Google",
    },
    {
      value: "4+",
      label: "Years in Meta Disruptors",
      description: "Top-tier access to Meta\u2019s support and beta features",
    },
  ];

  return (
    <section className="casestudy-results">
      <div className="section-header">
        <h2 className="section-title">The Results</h2>
      </div>
      <div className="casestudy-results-grid casestudy-results-grid--four">
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

function Testimonial() {
  return (
    <section className="casestudy-testimonial">
      <div className="casestudy-testimonial-content">
        <blockquote className="casestudy-pullquote">
          &ldquo;Madison, Sam and myself built birddogs from the ground up. Sam&apos;s
          creative instinct, direction and production combined with Madison&apos;s
          growth marketing leadership were the magic behind building a massive
          brand totally bootstrapped with zero resources. You won&apos;t find a
          better team to advise and scale a brand online than these two.&rdquo;
        </blockquote>
        <div className="casestudy-testimonial-author">
          <img
            src="/paid_creative_testimonial_1.jpg"
            alt="Peter Baldwin"
            className="casestudy-testimonial-image"
          />
          <div className="casestudy-testimonial-info">
            <h4>Peter Baldwin</h4>
            <p>Founder &amp; CEO, <span className="company">birddogs</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="casestudy-contact">
      <div className="casestudy-contact-content">
        <p className="casestudy-contact-label">Ready to scale?</p>
        <h2>Let&apos;s build your creative engine</h2>
        <p className="casestudy-contact-sub">
          We take on a limited number of brands. Book a strategy session to see if
          we&apos;re the right fit.
        </p>
        <a
          href="https://calendar.app.google/rrGjcCYtfnHjAqvz7"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Schedule Strategy Session
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
      <main>
        <Hero />
        <ContextStrip />
        <Challenge />
        <BrandShowcase />
        <Approach />
        <Results />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
