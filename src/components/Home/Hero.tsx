import React from "react";
import { FlipWords } from "../ui/FlipWords";

export default function Hero() {
    const words = ["creativity.", "branding.", "packaging.", "strategy."];

  return (
    <div className="flex flex-col w-full relative px-12">
        <div className="text-4xl md:text-7xl font-semibold text-white">
        Aesthetic Works 
         <br />
        for everlasting<FlipWords words={words} />
      </div>
    </div>
  );
}