import UuidPage from "@/components/UuidPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UUID Generation - Ryan's Dev Tools",
  description: "All-purpose UUID Generation tooling",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center">
      <h1 className="text-xl md:text-4xl">UUID V4 Generator</h1>
      <UuidPage />
    </main>
  );
}
