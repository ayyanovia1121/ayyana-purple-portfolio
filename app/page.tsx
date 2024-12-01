import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className=""
    >
      <div className="max-w-7xl w-full">
        <h1 className="text-3xl font-bold underline">Hellow Word</h1>
        <Header />
        <Hero />
      </div>
    </main>
  );
}
