import Carousel from "@/components/Home/Carousel";
import Hero from "@/components/Home/Hero";
import VideoBg from "@/components/Home/VideoBg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 overflow-hidden">
      <Hero />
      <VideoBg />
      <Carousel />
    </main>
  );
}
