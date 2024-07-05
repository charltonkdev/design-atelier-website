const social = () => [
    { social: "Facebook", link: "https://www.facebook.com" },
    { social: "Instagram", link: "https://www.instagram.com" },
    { social: "Twitter", link: "https://www.twitter.com" },
    { social: "Behance", link: "https://www.behance.net" },
    { social: "Dribbble", link: "https://www.dribbble.com" },
    { social: "YouTube", link: "https://www.youtube.com" },
    { social: "Vimeo", link: "https://www.vimeo.com" },
    { social: "Pinterest", link: "https://www.pinterest.com" },
    { social: "LinkedIn", link: "https://www.linkedin.com" }
];

export default function Footer() {
    return (
        <footer className="relative flex flex-col w-full h-screen px-12">
            <div className="socialFooter flex flex-col md:grid md:grid-cols-9 space-x-4 py-7 text-2xl font-semibold border-b-2 mb-7 ">
                {social().map((item, index) => (
                    <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
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
            <span className="text-[calc(25vw)] font-semibold">Footer<sub className="text-xl">&copy;</sub></span>
        </footer>
    );
}
