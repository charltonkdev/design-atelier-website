'use client'
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import type React from "react";
import { useRef } from "react";
import { MdArrowOutward } from "react-icons/md";

interface LinkProps {
  heading: string;
  subheading: string;
  imgSrc: string;
  href: string;
}

export const HoverImageLinks = () => {
  return (
    <section className="bg-black px-12 py-24 w-full h-full relative ">
      <h4 className="font-semibold text-3xl">Services</h4>
      <div className="mx-auto w-full">
        <Link
          heading="Branding"
          subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis."
          imgSrc="/work06.jpg"
          href="#"
        />
        <Link
          heading="Motion graphics"
          subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis."
          imgSrc="/work07.jpg"
          href="#"
        />
        <Link
          heading="Video editing"
          subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis."
          imgSrc="/work08.jpg"
          href="#"
        />
        <Link
          heading="3D animation"
          subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis."
          imgSrc="/work09.jpg"
          href="#"
        />
        <Link
          heading="Web design"
          subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis."
          imgSrc="/work05.jpg"
          href="#"
        />
      </div>
    </section>
  );
};

const Link: React.FC<LinkProps> = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split('').map((l, index) => (
            <motion.span
              variants={{
                initial: { opacity: 0.2 },
                whileHover: { opacity: 1 },
              }}
              transition={{ type: "tween" }}
              className="inline-block"
              key={`${heading}-${index}`}
            >
              {l === ' ' ? '\u00A0' : l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-[calc(30vw)] md:w-[30vw]"
        alt={`Title ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <MdArrowOutward className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};


export default HoverImageLinks;
