import type React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Home/Hero';
import VideoBg from '@/components/Home/VideoBg';
import FeaturedWork from '@/components/Home/FeaturedWork';
import HoverImageLinks from '@/components/Home/HoverImageLinks';
import FeaturedHero from '@/components/Home/FeaturedHero';
import About from '@/components/Home/About';

const Home: React.FC = () => {
  return (
    <main className="relative flex h-full flex-col items-center justify-between pt-24 overflow-hidden">
      <Header />
      <Hero />
      <VideoBg />
      <FeaturedWork />
      <FeaturedHero />
      <HoverImageLinks />
      <About />
      <Footer />
    </main>
  );
};

export default Home;
