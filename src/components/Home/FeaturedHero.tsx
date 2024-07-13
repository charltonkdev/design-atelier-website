import React from 'react'

const FeaturedHero = () => {
    return (
        <div className="relative flex flex-col w-full h-[50vh] md:h-screen px-12 py-24 my-32 items-stretch justify-between overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[50vh] md:h-full rounded-3xl overflow-hidden z-0">
                <iframe
                    title="videobg"
                    src="https://player.vimeo.com/video/977868150?background=1&autoplay=1&loop=1&byline=0&title=0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="absolute relataive top-0 w-full h-[70vh] md:h-full"
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <h2 className="relative text-3xl md:text-6xl font-bold leading-none z-10 text-white">
                Rediscover simplicity,<br />intuition, and inspiration.
            </h2>
            <p className="absolute bottom-0 md:bottom-10 px-12 right-20 text-xl max-w-xl leading-snug items-end z-10 text-white">
                Big companies or small local businesses, we work with everyone. Our goal is simple, to create designs that are <b>real</b>, <b>practical</b>, and <b>beautiful</b>.
            </p>
        </div>
    )
}

export default FeaturedHero
