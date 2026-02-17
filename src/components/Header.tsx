import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="site-nav">
      <div className="nav-container">
        <Link href="/">
          <Image
            src="/paid-creative-pigeon-logo.png"
            alt="Paid Creative"
            width={60}
            height={60}
            className="nav-logo-img"
          />
        </Link>
      </div>
    </nav>
  );
}
