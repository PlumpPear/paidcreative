"use client";
import Image from "next/image";

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
            involved. If you&apos;re a DTC brand spending more than $3M+
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
    <main>
      <AboutLetter />
    </main>
  );
}
