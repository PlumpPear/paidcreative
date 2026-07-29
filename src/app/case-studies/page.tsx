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
    {
      href: "/the-perfect-jean",
      logo: "/tpj_logo copy.png",
      logoAlt: "The Perfect Jean",
      blurb:
        "How we led a team of ad agencies for one of the largest men's DTC denim brands to increase spend while decreasing CAC and having their most profitable year ever.",
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

export default function CaseStudies() {
  return (
    <main>
      <Hero />
      <CaseStudyGrid />
    </main>
  );
}
