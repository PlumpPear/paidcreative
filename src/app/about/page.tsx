"use client";
import Link from "next/link";
import Image from "next/image";

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

function AboutLetter() {
  return (
    <section className="about-letter">
      <div className="about-letter-content fade-in-up">
        <h1 className="about-heading">Who we are</h1>
        <p className="about-subheading">
          We&apos;re founders who built the agency we wish we had.
        </p>

        <div className="about-body">
          <p>
            Paid Creative is run by Sam and Madison, Co-Founder and CMO of{" "}
            <strong>birddogs</strong>, a DTC apparel brand we launched and
            scaled over the last decade through paid advertising.
          </p>

          <h2>Why we exist</h2>
          <p>
            We didn&apos;t use agencies when building birddogs. Most
            agencies tell you how to grow your brand yet they&apos;ve never
            owned one themselves.
          </p>
          <p>
            So we built an agency we would&apos;ve hired, one that
            operates like an owner, not a vendor.
          </p>
          <p>We&apos;re a hands-on, founder-lead service.</p>

          <h2>Our approach</h2>
          <p>
            Creative is the biggest driver of paid performance. We manage your
            advertising with a focus on results and long-term brand equity
            through: <strong>creative strategy, ad production, and media buying.</strong>
          </p>

          <h2>Who we work with</h2>
          <p>
            We take on a limited number of partners so we can stay deeply
            involved. If you&apos;re a DTC brand spending more than $1M+
            annually on paid advertising and looking to improve your creative
            team, send us a note.
          </p>

          <div className="about-signoff">
            <p>Thanks,</p>
            <Image
              src="/paid_creative_signatures.png"
              alt="Sam Hodgman & Madison Hofmeester signatures"
              width={320}
              height={80}
              className="about-signatures"
            />
            <p className="about-names">Sam Hodgman &amp; Madison Hofmeester</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <main>
        <AboutLetter />
      </main>
      <Footer />
    </>
  );
}
