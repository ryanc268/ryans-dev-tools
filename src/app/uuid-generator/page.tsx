import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UUID Generation - Ryan's Dev Tools",
  description: "All-purpose UUID Generation tooling",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center">
      <h1 className="text-white text-5xl">UUID Generator Tool</h1>
    </main>
  );
}
