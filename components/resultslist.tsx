"use client";

import { Results } from "@/types/results";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Copy, Lightbulb } from "lucide-react";

export default function ResultsList({
  results,
  loading,
}: {
  results: Results | undefined;
  loading: boolean;
}) {
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Copied to clipboard");
        // You can add a toast notification here if desired
        toast({
          title: "Alert",
          description: "Bundle ID copied to clipboard!",
        });
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  if (results === null || results === undefined) {
    if (loading === false) {
      return (
        <Card className="pb-6">
          <CardHeader>
            <CardTitle>No results yet</CardTitle>
            <CardDescription>
              Perform a search to see the results here.
            </CardDescription>
          </CardHeader>
        </Card>
      );
    }
  }

  if (loading === true) {
    return (
      <Card className="pb-6">
        <CardHeader>
          <CardTitle>Loading...</CardTitle>
          <CardDescription>
            Please wait while we fetch the results.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <>
      {results.results?.map((value) => (
        <Card key={value.bundleId} className="flex mb-4">
          <Image
            src={value.artworkUrl512}
            alt={value.trackCensoredName}
            height={100}
            width={100}
            className="rounded-l-xl"
          />
          <CardHeader>
            <CardTitle>{value.trackCensoredName}</CardTitle>
            <CardDescription>{value.bundleId}</CardDescription>
            <Copy
              className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors duration-300 -translate-x-1"
              height={15}
              onClick={() => copyToClipboard(value.bundleId)}
            />
          </CardHeader>
        </Card>
      ))}

      <Alert className="mt-8">
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          Try changing your country if you can&apos;t find an app.
        </AlertDescription>
      </Alert>
    </>
  );
}
