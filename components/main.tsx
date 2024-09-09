"use client";

import { useState } from "react";
import LookupForm from "@/components/lookupform";
import ResultsList from "@/components/resultslist";
import { Results } from "@/types/results";

export default function Main() {
  const [results, setResults] = useState<Results>();
  const [loading, setLoading] = useState(false);

  return (
    <main className="min-h-[80vh] mt-3 px-4">
      <section className="text-center">
        <h1 className="text-3xl font-bold">IOS Bundle ID Identifier</h1>
        <p className="mt-1 text-muted-foreground">
          Discover the Bundle ID Identifier for any app present in the AppStore
          and in any country or region
        </p>
      </section>
      <section className="max-w-[30rem] mt-6 lg:mt-10 mx-auto px-1.5">
        <LookupForm setResults={setResults} setLoading={setLoading} />
      </section>
      <section className="max-w-[30rem] mt-6 lg:mt-10 mx-auto px-1.5">
        <ResultsList results={results} loading={loading} />
      </section>
    </main>
  );
}
