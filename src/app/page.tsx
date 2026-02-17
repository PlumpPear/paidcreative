"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.setAttribute("webkit-playsinline", "true");
    video.play().catch(() => {});
  }, []);

  return (
    <section className="hero">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/Paid_Creative_SizzleReel.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-content fade-in-up">
        <h1>
          Men&apos;s Apparel<br />
          strategy that <span className="hero-accent">scales</span><br />
          <span className="hero-accent">your brand</span>
        </h1>
        <p className="hero-description">
          Improve Meta ROAS in 2 weeks through better creative and a
          merchandising focused account structure.
        </p>
        <Link href="/birddogs" className="cta-button">
          $100M Case Study
        </Link>
      </div>
    </section>
  );
}

function TrustSection() {
  const clients = [
    { name: "Birddogs", logo: "/birddogs_logo_1.png", height: 35 },
    { name: "Poncho", logo: "/poncho_logo.png", height: 26 },
    { name: "The Perfect Jean", logo: "/tpj_logo copy.png", height: 42 },
    { name: "Stately", logo: "/stately_logo.png", height: 24 },
    { name: "Diamond Cross Ranch", logo: "/DCR_Logo.png", height: 45 },
  ];

  return (
    <section className="trust-section">
      <div className="trust-content">
        <div className="section-header">
          <h2 className="section-title">
            We help <strong>Men&apos;s Apparel leaders</strong> build<br />
            highly diversified creative portfolios
          </h2>
          <p className="section-subtitle">
            Trusted by fast moving founders and GTM teams.
          </p>
        </div>
        <div className="logo-grid">
          {clients.map((client) => (
            <div key={client.name} className="client-logo">
              <img
                src={client.logo}
                alt={client.name}
                className="client-logo-img"
                style={{ height: client.height }}
              />
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
      image: "/paid_creative_testimonial_1.jpg",
    },
    {
      quote:
        "The guys behind Paid Creative run our entire marketing team. Creative quality has notably improved.",
      name: "Ovadia Labaton",
      role: "Co-Founder",
      company: "The Perfect Jean",
      image: "/paid_creative_testimonial_2.jpeg",
    },
    {
      quote:
        "Paid Creative shipped us our highest spending & converting ads in Q4. Plus, they manage all our paid channels.",
      name: "Clayton Spencer",
      role: "Founder",
      company: "Poncho",
      image: "/paid_creative_testimonial_3.jpeg",
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
              <img src={t.image} alt={t.name} className="author-image" />
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
      label: "Brands Scaled to $50M+",
      description: "We’ve helped multiple men’s apparel brands surpass $50M in annual revenue",
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
        <a href="https://calendar.app.google/rrGjcCYtfnHjAqvz7" target="_blank" rel="noopener noreferrer" className="cta-button">
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
          <a href="https://calendar.app.google/rrGjcCYtfnHjAqvz7" target="_blank" rel="noopener noreferrer" className="cta-button">
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

export default function Home() {
  return (
    <>
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
