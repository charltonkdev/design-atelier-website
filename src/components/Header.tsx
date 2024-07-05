'use client'
import { useState, useEffect } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';

export default function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showMenu, setShowMenu] = useState(false);

    const controlHeader = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY < lastScrollY) {
                setShowHeader(true);
            } else {
                setShowHeader(false);
            }
            setLastScrollY(window.scrollY);
        }
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlHeader);

            return () => {
                window.removeEventListener('scroll', controlHeader);
            };
        }
    }, [lastScrollY]);

    return (
        <>
            <header className={`flex justify-between px-12 py-6 w-full bg-black header ${showHeader ? '' : 'hide'}`}>
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
                    <HiMenuAlt4 className="menu-button text-2xl" onClick={toggleMenu} />
                </div>
            </header>

            <div className={`offcanvas-menu ${showMenu ? 'show' : ''}`}>
                <IoCloseOutline className="close-button" onClick={toggleMenu} />
                <ul className="flex flex-col gap-6 text-lg font-semibold">
                    <li>
                        <a href="/" onClick={toggleMenu}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" onClick={toggleMenu}>
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#studio" onClick={toggleMenu}>
                            Studio
                        </a>
                    </li>
                    <li>
                        <a href="#lab" onClick={toggleMenu}>
                            Lab
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={toggleMenu}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}
