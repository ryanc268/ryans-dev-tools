import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center">
      <h1 className="text-3xl md:text-5xl">Welcome to Ryan&apos;s Dev Tools</h1>
      <h4 className="text-zinc-300 md:text-xl my-8">
        Your 1 stop shop for all tools dev-related!
      </h4>
      <h5 className="mt-40">
        Want to see more of my work? Click{" "}
        <Link
          className="text-cyan-custom"
          href="https://www.ryancoppa.com"
          target="_blank"
        >
          here
        </Link>{" "}
        to see my Portfolio!
      </h5>
    </main>
  );
}
