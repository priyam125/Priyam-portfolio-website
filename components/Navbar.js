import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <Link href="/home">Home</Link>
        <Link href="/about">about</Link>
        <Link href="/Projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <nav>
        <Link href="/" target={"_blank"}>
          LinkedIn
        </Link>
        <Link href="/" target={"_blank"}>
          Github
        </Link>
      </nav>
      <div className="absolute left-1/2 top-2 -translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
}
