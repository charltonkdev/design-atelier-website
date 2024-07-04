'use client'
import type React from 'react';
import { useEffect, useState } from 'react';
import EmblaCarousel from '../ui/EmblaCarousel';
import type { EmblaOptionsType } from 'embla-carousel';
import '../../css/embla.css';

interface SlideData {
  imageUrl: string;
  text: string;
}

const FeaturedWork: React.FC = () => {
  const [isClient, setIsClient] = useState(false); // Track if component is on client-side

  useEffect(() => {
    setIsClient(true); // Set to true on client-side
  }, []);

  const SLIDES_DATA: SlideData[] = [
    {
      imageUrl: '/work01.jpg',
      text: 'Slide 1 Text',
    },
    {
      imageUrl: '/work02.jpg',
      text: 'Slide 2 Text',
    },
    {
      imageUrl: '/work03.jpg',
      text: 'Slide 3 Text',
    },
    {
      imageUrl: '/work04.jpg',
      text: 'Slide 4 Text',
    },
    {
      imageUrl: '/work05.jpg',
      text: 'Slide 5 Text',
    },
  ];

  const OPTIONS: EmblaOptionsType = { align: 'start' };

  const slides = SLIDES_DATA.map((slide, index) => (
    <div key={index} className="embla__slide">
      <img src={slide.imageUrl} alt="Slide" className="w-full h-full object-cover" />
      <div className="embla__slide__inner relative bottom-10 left-3 w-full">
        <p className="text-white text-3xl font-bold">{slide.text}</p>
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
