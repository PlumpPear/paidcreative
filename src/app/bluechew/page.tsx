"use client";
import Link from "next/link";

function Hero() {
  return (
    <section className="casestudy-hero casestudy-hero--sm casestudy-hero--bluechew">
      <div className="casestudy-hero-content fade-in-up">
        <p className="casestudy-label">Case Study</p>
        <h1>
          How comedy drove 100M+ impressions and account-leading
          performance for America&rsquo;s #1 men&rsquo;s health brand
        </h1>
        <img
          src="/bluechew_logo1.svg"
          alt="BlueChew"
          className="casestudy-brand-logo"
        />
      </div>
    </section>
  );
}

function ContextStrip() {
  const details = [
    { label: "Industry", value: "Men’s Health" },
    { label: "Main Platforms", value: "Meta, YouTube" },
    { label: "Timeline", value: "2026" },
    { label: "Our Role", value: "Performance & Branded Creative Production" },
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
            BlueChew is a $600M+ men&apos;s health brand spending millions a WEEK on
            paid media. They hired Paid Creative to do one thing: make
            branded-comedy ads that build the brand AND convert.
          </p>
          <p>
            Within 30 days we delivered 15 finished ads across 5 distinct
            production shoots. A week after launching the first batch of creative
            it was clear we had produced several winners. Multiple of our ads
            landed in the top 10 spend &amp; purchase volume reports within a week,
            upsetting creative that had been running for months.
          </p>
          <p>
            The result: a 6 month trial renewal and buy-in across the organization
            that allowed us to double down on production quality, talent, and
            editing. Every single batch of creative has produced a top 25% creative
            by spend and purchase volume in their portfolio.
          </p>
        </div>
      </div>
    </section>
  );
}

function BrandShowcase() {
  const items: {
    type: "video" | "image";
    youtubeId?: string;
    src?: string;
    alt: string;
  }[] = [
    { type: "video", youtubeId: "sqsBkqhVyHQ", alt: "BlueChew branded video 1" },
    { type: "video", youtubeId: "GoVR5i8NIcs", alt: "BlueChew branded video 2" },
    { type: "video", youtubeId: "ynfPhxvGFLo", alt: "BlueChew branded video 3" },
    { type: "video", youtubeId: "OHHBTPmsGWY", alt: "BlueChew branded video 4" },
    { type: "video", youtubeId: "4EkxvfUIIgA", alt: "BlueChew branded video 5" },
    { type: "video", youtubeId: "bY7YZQqRJ7o", alt: "BlueChew branded video 6" },
    { type: "video", youtubeId: "V86KEX9uGTg", alt: "BlueChew branded video 7" },
    { type: "video", youtubeId: "qnDP3MYZQm8", alt: "BlueChew branded video 8" },
  ];

  return (
    <section className="casestudy-brand">
      <div className="casestudy-brand-content">
        <h2 className="casestudy-story-heading">The Brand</h2>
        <p className="casestudy-brand-body">
          Sex sells, but BlueChew recognized the need to establish brand credibility
          in additional ways. As a mature Direct To Consumer brand that deeply
          understands their customers and core marketing personas they contracted us
          to add humor to their portfolio in addition to serious science based and
          seductive advertisements. The result is a blend of comedy and promiscuity
          that drives efficient performance while building strong brand recognition.
        </p>
        <div className="casestudy-brand-grid">
          {items.map((item, i) => (
            <div
              key={item.youtubeId ?? item.src ?? i}
              className={
                item.type === "video"
                  ? "casestudy-brand-image-wrapper casestudy-brand-image-wrapper--video"
                  : "casestudy-brand-image-wrapper"
              }
            >
              {item.type === "video" ? (
                <iframe
                  className="casestudy-brand-video"
                  src={`https://www.youtube.com/embed/${item.youtubeId}`}
                  title={item.alt}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <img src={item.src} alt={item.alt} className="casestudy-brand-image" />
              )}
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
      title: "High Quality Branded Content",
      description:
        "Each and every concept was custom scripted, cast, shot and edited with BlueChew in mind. We married custom production with e-commerce best practices, shooting each concept in a way to get several storylines and test different hooks, value props and call to actions.",
    },
    {
      number: "02",
      title: "UGC Support",
      description:
        "Alongside each and every higher production shoot, we filmed quicker UGC scripts and high quality b-roll to supplement the more polished shots on goal. Each shoot resulted in a variety of concepts to increase the likelihood of finding a winner.",
    },
    {
      number: "03",
      title: "Fresh Ideas Plus Remixing",
      description:
        "Learnings from the previous month and the rest of BlueChew's portfolio are constantly evaluated to improve our future creative. We also throw in some totally net new ideas and concepts to keep things fresh. Making effective advertising is a blend of art and (data) science.",
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
      value: "100M",
      label: "Conversion Objective Impressions",
      description: "Over $100k in spend on our ads within 30 days",
    },
    {
      value: "3",
      label: "Hero Ads",
      description: "Top 10 conversion driving ads in the entire portfolio",
    },
    {
      value: "1",
      label: "Month Till First Delivery",
      description:
        "5 net new scripted, cast, produced and edited concepts with 15 final assets total",
    },
    {
      value: "6",
      label: "Month Contract Renewal",
      description: "Expanded scope and timeline quickly",
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

export default function Bluechew() {
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
