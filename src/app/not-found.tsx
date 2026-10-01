import Link from "next/link";
import { BagelBreak } from "@/components/pigeon/scenes";

export default function NotFound() {
  return (
    <main className="notfound">
      <BagelBreak />
      <h1>This page flew the coop.</h1>
      <p>Our pigeon would help you look, but he&apos;s on his bagel break.</p>
      <Link href="/" className="cta-button">
        Back to Home
      </Link>
    </main>
  );
}
