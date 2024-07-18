'use client'
import type React from 'react';
import { useEffect, useState } from 'react';
import EmblaCarousel from '../ui/EmblaCarousel';
import type { EmblaOptionsType } from 'embla-carousel';
import '../../css/embla.css';

interface SlideData {
  imageUrl: string;
  text: string;
  desc: string;
}

const FeaturedWork: React.FC = () => {
  const [isClient, setIsClient] = useState(false); // Track if component is on client-side

  useEffect(() => {
    setIsClient(true); // Set to true on client-side
  }, []);

  const SLIDES_DATA: SlideData[] = [
    {
      imageUrl: '/work01.jpg',
      text: 'TechSavvy',
      desc: 'Immerse yourself'
    },
    {
      imageUrl: '/work02.jpg',
      text: 'EcoMate',
      desc: 'Stay hydrated',
    },
    {
      imageUrl: '/work03.jpg',
      text: 'SpeedyCharge',
      desc: 'Fast and reliable',
    },
    {
      imageUrl: '/work04.jpg',
      text: 'ComfortGrip',
      desc: 'Enhance productivity',
    },
    {
      imageUrl: '/work05.jpg',
      text: 'BrightView',
      desc: 'lluminate your workspace',
    },
    {
      imageUrl: '/work06.jpg',
      text: 'Futuristic Footwear',
      desc: 'Cutting-Edge Sneaker Design',
    },
    {
      imageUrl: '/work07.jpg',
      text: 'Sleek Workstations',
      desc: 'Enhancing Productivity',
    },
    {
      imageUrl: '/work08.jpg',
      text: 'Smart Accessories',
      desc: 'Integrating Tech with Style',
    },
    {
      imageUrl: '/work09.jpg',
      text: 'Interactive Retail',
      desc: 'Tech-Driven Shoe Store',
    },
  ];

  const OPTIONS: EmblaOptionsType = { align: 'start' };

  const slides = SLIDES_DATA.map((slide, index) => (
    <div key={slide.text} className="embla__slide">
      <img src={slide.imageUrl} alt="Slide" className="w-full h-full object-cover rounded-xl" />
      <div className="embla__slide__inner relative pt-3 left-3 w-full">
        <p className="text-white text-2xl font-semibold">{slide.text}</p>
        <p className="text-neutral-500 text-lg">{slide.desc}</p>
      </div>
    </div>
  ));

  return (
    <div className='w-full h-full flex flex-col'>
      {isClient && (
        <EmblaCarousel slides={slides} options={OPTIONS} />
      )}
    </div>
  );
}

export default FeaturedWork;
