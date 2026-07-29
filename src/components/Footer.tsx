import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Paid Creative</h3>
          <p>
            Men&apos;s lifestyle creative agency specializing in performance
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
