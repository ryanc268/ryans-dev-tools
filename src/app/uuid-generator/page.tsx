import { Metadata } from "next";
import UuidPageWrapper from "./_components/UuidPageWrapper";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "UUID Generation - Ryan's Dev Tools",
  description: "All-purpose UUID Generation tooling",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center">
      <h1 className="text-lg md:text-3xl">UUID V4 Generator</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <UuidPageWrapper />
      </Suspense>
    </main>
  );
}
