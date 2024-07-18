const social = () => [
    { social: "Facebook", link: "https://www.facebook.com" },
    { social: "Instagram", link: "https://www.instagram.com" },
    { social: "Twitter", link: "https://www.twitter.com" },
    { social: "Behance", link: "https://www.behance.net" },
    { social: "Dribbble", link: "https://www.dribbble.com" },
    { social: "YouTube", link: "https://www.youtube.com" },
    { social: "Vimeo", link: "https://www.vimeo.com" },
    { social: "Pinterest", link: "https://www.pinterest.com" },
];

export default function Footer() {    
    return (
        <footer className="relative flex flex-col w-full justify-end px-12 mt-24">
            <div className="socialFooter grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-row flex-wrap w-full justify-between font-semibold border-b-2 pb-7 mb-7 gap-12 ">
                {social().map((item, index) => (
                    <a key={item.social} href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.social}
                    </a>
                ))}
            </div>
            <div className="flex w-full flex-col md:flex-row justify-between gap-10 text-neutral-500">
                <span>
                    Small is beautiful.
                </span>
                <div className="flex">
                    <ul className="footerLink flex flex-col md:flex-row gap-6">
                        <li>Guide</li>
                        <li>Imprint</li>
                        <li>Privacy policy</li>
                        <li>&copy; Design Atelier</li>
                    </ul>
                </div>
            </div>
            <span className="block text-[calc(30vw)] font-semibold leading-[0.5em] pt-24 -ml-12">
                Footer<sub className="text-xl align-baseline">&copy;</sub>
            </span>
        </footer>
    );
}
