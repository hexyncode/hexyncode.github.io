import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primary/80 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-accent">
          Callum Howell
        </Link>
        <nav className="space-x-6">
          <Link href="#about" className="hover:text-accent transition-colors">
            About
          </Link>
          <Link href="#projects" className="hover:text-accent transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-accent transition-colors">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-accent transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;