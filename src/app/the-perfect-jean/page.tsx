"use client";
import Link from "next/link";

function Hero() {
  return (
    <section className="casestudy-hero casestudy-hero--tpj">
      <div className="casestudy-hero-content fade-in-up">
        <p className="casestudy-label">Case Study</p>
        <h1>
          Leading a<br />
          $30M content team.
        </h1>
        <img
          src="/tpj_logo copy.png"
          alt="The Perfect Jean"
          className="casestudy-brand-logo"
        />
      </div>
    </section>
  );
}

function ContextStrip() {
  const details = [
    { label: "Industry", value: "Men’s Apparel" },
    { label: "Main Platforms", value: "Meta, TV, YouTube, Website" },
    { label: "Timeline", value: "2025–Present" },
    {
      label: "Our Role",
      value: (
        <>
          Paid Ads Creative Director<br />Head of Creative Ops
        </>
      ),
    },
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
            The Perfect Jean built a successful paid ads strategy leveraging
            multiple agencies. Creative diversity and content volume was at an
            all time high, but CAC was rising and creative quality felt
            &ldquo;off.&rdquo;
          </p>
          <p>
            Paid Creative was contracted for two things. Add our own ads into the
            content mix and act as a &ldquo;creative quartermaster&rdquo; to keep
            quality high across all agencies. Our most impactful improvements came
            from helping decide the creative strategy across 5-7 agencies at a
            time. Once we were focused on making the right content, improving the
            output was more straightforward.
          </p>
          <p>
            We review EVERY piece of content from EVERY agency and provide
            detailed comments to improve the quality of the creative. This spans
            static images, UGC briefs and videos, TV commercials, etc.
          </p>
          <p>
            Over time we helped hire and fire agencies. Working more with high
            performers, cutting laggards and finding new partners to test several
            times per quarter.
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
          With a slogan like, &ldquo;#F#%K YOUR KHAKIS&rdquo; you can tell that The
          Perfect Jean doesn&apos;t take themselves too seriously. But they do make
          an amazing product that men everywhere love. The mass demand for products
          like denim, khaki pants, t-shirts, shorts and hoodies combined with their
          everyday guy humorous brand allowed us to scale revenue and lower CPAs
          quickly with better creative. Here are examples of hero ads either
          produced entirely by Paid Creative or greatly assisted through creative
          strategy and revising the output.
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
      title: "Start with Creative Strategy",
      description:
        "Getting better results from your advertising is a lot easier when you focus on what really moves the needle. What are our customers telling us about how they use our products, their pain points, barriers & motivators to purchase? What products drive the highest LTV, what offers increase conversion rate the most, what skus do we need to sell to best free up cash? Merging business and content strategy together is going to beat “let’s throw spaghetti against the wall and see what sticks” every time.",
    },
    {
      number: "02",
      title: "Getting The Details Right",
      description:
        "Reviewing hundreds of videos and static assets monthly is pain to be honest. But it is required to be successful. What is the hook, the timing of value props, editing style, captioning, who to cast, all these things add up to make ads appealing to customers and beat out other competitors in the auction.",
    },
    {
      number: "03",
      title: "Scale Volume",
      description:
        "Only with the right strategy and a thorough review process does it make sense to start scaling volume. Through offering creative strategy and content best practice leadership we were able to elevate agency partners & The Perfect Jean’s performance.",
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
      description: "Top-tier access to Meta’s support and beta features",
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
          &ldquo;So fun working with Sam and Madison from Paid Creative! They&apos;ve
          become a swiss army knife on our creative team. We needed a TV commercial,
          they shot one. We needed 500 product shots touched up? They handled it. We
          needed to push agencies on script and creator quality? They stepped in.
          Sorta like the friend who &ldquo;has a a guy for it.&rdquo; They just get
          stuff done and WELL.&rdquo;
        </blockquote>
        <div className="casestudy-testimonial-author">
          <img
            src="/paid_creative_testimonial_3.jpeg"
            alt="Ovadia Labaton"
            className="casestudy-testimonial-image"
          />
          <div className="casestudy-testimonial-info">
            <h4>Ovadia Labaton</h4>
            <p>Co-Founder, <span className="company">The Perfect Jean</span></p>
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

export default function ThePerfectJean() {
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
