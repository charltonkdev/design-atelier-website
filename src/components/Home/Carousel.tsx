'use client'
import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { LuChevronLeftSquare, LuChevronRightSquare } from 'react-icons/lu';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  const items = [
    { image: '/work01.jpg', title: 'Title 1', subtitle: 'Subtitle 1', link: '/link1' },
    { image: '/work02.jpg', title: 'Title 2', subtitle: 'Subtitle 2', link: '/link2' },
    { image: '/work03.jpg', title: 'Title 3', subtitle: 'Subtitle 3', link: '/link3' },
    { image: '/work04.jpg', title: 'Title 4', subtitle: 'Subtitle 4', link: '/link4' },
    { image: '/work05.jpg', title: 'Title 5', subtitle: 'Subtitle 5', link: '/link5' },
    { image: '/work06.jpg', title: 'Title 6', subtitle: 'Subtitle 6', link: '/link6' },
  ];

  const handleNext = () => {
    if (currentIndex < items.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleDrag = (event, info) => {
    const dragDistance = info.offset.x;
    const itemWidth = window.innerWidth / 3; 
    const newIndex = Math.round(-dragDistance / itemWidth);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <button
        onClick={handlePrev}
        className="absolute left-0 z-10 p-2 bg-gray-300 rounded-full hover:bg-gray-400"
      >
        <LuChevronLeftSquare className="w-6 h-6" />
      </button>

      <motion.div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(${currentIndex * (100 / 3)}%)` }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.8}
        onDrag={handleDrag}
        animate={controls}
      >
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex-none w-1/3 p-2 relative"
          >
            <div
              className="p-4 bg-white rounded-lg shadow-lg"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px', // Adjust height as needed
              }}
            >
              <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-400">{item.subtitle}</p>
              </div>
            </div>
          </a>
        ))}
      </motion.div>

      <button
        onClick={handleNext}
        className="absolute right-0 z-10 p-2 bg-gray-300 rounded-full hover:bg-gray-400"
      >
        <LuChevronRightSquare className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Carousel;
