import Link from "next/link";
import { Apple } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-background py-6 px-4 md:px-6">
      <nav className="font-medium flex flex-row items-center justify-between gap-5 text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Apple className="h-6 w-6" />
          <span className="sr-only">Bundle ID Identifier</span>
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Buy me a coffee
        </Link>
      </nav>
    </header>
  );
}
