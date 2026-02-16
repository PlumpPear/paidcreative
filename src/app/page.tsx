import Link from "next/link";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Paid Creative
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="/case-studies"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Case Studies
          </Link>
          <Link
            href="/contact"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-40 pb-24 md:pt-52 md:pb-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
          Men&apos;s Apparel strategy that{" "}
          <span className="italic font-normal text-muted">
            scales your brand
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
          Improve Meta ROAS in 2 weeks through better creative and a
          merchandising focused account structure.
        </p>
        <div className="mt-10">
          <Link
            href="/birddogs"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-8 py-3.5 text-sm font-medium hover:bg-accent transition-colors"
          >
            $100M Case Study
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const clients = ["Birddogs", "Poncho", "DCR", "The Perfect Jean", "Stately"];

  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            We help{" "}
            <span className="font-bold">Men&apos;s Apparel leaders</span>{" "}
            <span className="font-bold">
              build highly diversified creative portfolios
            </span>
          </h2>
          <p className="mt-4 text-muted">
            Trusted by fast moving founders and GTM teams.
          </p>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {clients.map((client) => (
            <div
              key={client}
              className="text-lg md:text-xl font-semibold text-muted/60 tracking-wide uppercase"
            >
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
      title: "Founder & CEO, birddogs",
    },
    {
      quote:
        "The guys behind Paid Creative run our entire marketing team. Creative quality has notably improved.",
      name: "Ovadia Labaton",
      title: "Co-Founder, The Perfect Jean",
    },
    {
      quote:
        "Paid Creative shipped us our highest spending & converting ads in Q4. Plus, they manage all our paid channels.",
      name: "Clayton Spencer",
      title: "Founder, Poncho",
    },
  ];

  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">
          Trusted by 8 and 9 figure Founders
        </h2>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-card p-8 flex flex-col justify-between"
            >
              <blockquote className="text-base leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-sm text-muted mt-0.5">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  const stats = [
    {
      value: "$100M+",
      label: "Annual Spend",
      description: "Managed across our portfolio of men's apparel brands.",
    },
    {
      value: "250+",
      label: "Videos Per Month",
      description: "High-volume creative production at scale.",
    },
    {
      value: "Meta",
      label: "Disruptors Partners",
      description: "Recognized partner in the Meta ecosystem.",
    },
    {
      value: "5",
      label: "Brands scaled to $10M+",
      description: "We scaled birddogs to well over $80M.",
    },
  ];

  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">
          We don&apos;t guess. Our Work is{" "}
          <span className="font-bold">Proven At Scale.</span>
        </h2>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <p className="text-3xl md:text-4xl font-bold tracking-tight">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground/80">
                {s.label}
              </p>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Partner with us
        </h2>
        <p className="mt-4 text-lg text-muted">
          We&apos;re a hands on, founder lead service.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-8 py-3.5 text-sm font-medium hover:bg-accent transition-colors"
          >
            Schedule Strategy Session
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm font-semibold tracking-tight">Paid Creative</p>
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="/case-studies"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Case Studies
          </Link>
          <Link
            href="/contact"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>
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
        <SocialProof />
        <Testimonials />
        <Credentials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
