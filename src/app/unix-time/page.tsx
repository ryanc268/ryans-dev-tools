import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unix Time - Ryan's Dev Tools",
  description:
    "Random tooling surrounding Unix Time and other time formats / conversions",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center">
      <h1 className="text-white text-5xl">Unix Time</h1>
    </main>
  );
}
