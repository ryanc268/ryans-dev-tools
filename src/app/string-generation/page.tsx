import { Metadata } from "next";

export const metadata: Metadata = {
  title: "String Generation - Ryan's Dev Tools",
  description: "Random string generation tools",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center">
      <h1 className="text-white text-5xl">Random String Generation</h1>
    </main>
  );
}
