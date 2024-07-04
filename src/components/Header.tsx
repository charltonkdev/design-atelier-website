export default function Header() {
    return (
        <header className="flex justify-between px-12 py-6 w-full">
            <div className="flex flex-col w-full">
                <a className="font-semibold text-xl" href="/">
                Design Atelier<sup>&copy;</sup>
                </a>
            </div>
            <div className="flex w-full relative items-center justify-end">
                <ul className="menuLink flex gap-6 text-lg font-semibold">
                    <li>
                        <a href="/">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#studio">
                            Studio
                        </a>
                    </li>
                    <li>
                        <a href="#lab">
                            Lab
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}