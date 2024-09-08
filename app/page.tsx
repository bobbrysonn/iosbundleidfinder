import LookupForm from "@/components/lookupform";
import Navbar from "@/components/navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
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
        <section></section>
      </main>
      <footer className="text-center py-4">
        <p className="mt-4 text-sm text-muted-foreground">
          Made with ❤️ by <a href="https://bobbrysonn.dev">Bob Moriasi</a>
        </p>
      </footer>
    </>
  );
}
