import type React from 'react';
import Hero from '@/components/Home/Hero';
import VideoBg from '@/components/Home/VideoBg';
import FeaturedWork from '@/components/Home/FeaturedWork';
import HoverImageLinks from '@/components/Home/HoverImageLinks';
import FeaturedHero from '@/components/Home/FeaturedHero';
import About from '@/components/Home/About';

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 overflow-hidden">
      <Hero />
      <VideoBg />
      <FeaturedWork />
      <FeaturedHero />
      <HoverImageLinks />
      <About />
    </main>
  );
};

export default Home;
