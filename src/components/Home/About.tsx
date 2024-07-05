import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

export default function About() {
    return (
        <div className="relative grid md:grid-cols-2 w-full py-24 px-12 gap-9 ">
            <div className="relative flex flex-col xl:flex-row xl:justify-end p-2 gap-10 xl:gap-0">
                <h1 className="lg:absolute -right-[calc(27vw)] z-50 text-8xl font-semibold mix-blend-difference">
                    About Design.
                </h1>
                <Image src="/mockup01.jpg" alt="" width={500} height={500} className="relative" />
            </div>

            <div className="flex flex-col gap-10">
                <p className="mt-[calc(10vw)] para-two text-xl">
                    Great design never goes out of style. It inspires right away and stays relevant for years. With our creative freedom, we focus on fewer projects, diving deep into the smart, practical, and artistic sides of business. Our goal is to create meaningful ideas, timeless designs, and bring beauty into everyday life.
                </p>
                <span className="text-4xl font-semibold">
                    Aren&apos;t we all love cool things?
                </span>
                <button type="button" className="flex items-center text-xl gap-5 group">
                    Explore more
                    <GoArrowRight className="p-5 text-6xl text-black bg-white rounded-full scale-90 group-hover:scale-100 duration-300"/>
                </button>
            </div>
        </div>
    )
}