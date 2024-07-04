'use client'
import type React from 'react';
import EmblaCarousel from '../ui/EmblaCarousel';
import type { EmblaOptionsType } from 'embla-carousel';
import '../../css/embla.css';

const OPTIONS: EmblaOptionsType = { align: 'start' };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const FeaturedWork: React.FC = () => {
  return(
    <div className='w-full h-full flex flex-col'>
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>

  );
}

export default FeaturedWork;
