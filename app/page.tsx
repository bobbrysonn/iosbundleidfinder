import Link from "next/link";
import { Apple } from "lucide-react";

import LookupForm from "@/components/lookupform";

export default function Navbar() {
  return (
    <>
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
      <main className="min-h-[80vh] mt-3 px-4">
        <section className="text-center">
          <h1 className="text-3xl font-bold">IOS Bundle ID Identifier</h1>
          <p className="mt-1 text-muted-foreground">
            Discover the Bundle ID Identifier for any app present in the
            AppStore and in any country or region
          </p>
        </section>
        <section className="max-w-[30rem] mt-6 lg:mt-10 mx-auto px-1.5">
          <LookupForm />
        </section>
      </main>
      <footer className="text-center py-4">
        <p className="mt-4 text-sm text-muted-foreground">
          Made with ❤️ by{" "}
          <a href="https://bobbrysonn.dev" className="text-white">
            Bob Moriasi
          </a>
        </p>
      </footer>
    </>
  );
}
