'use client'

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import MenuIcon from '@/icons/menu.svg';
import Image from "next/image";

function Header() {
    const location = usePathname();
    const [isFloating, setIsFloating] = useState(false);

    const activeClass = (path) => location === path ? 'active' : null;

    function updateIsFloating() {
        const header = document.getElementsByTagName('header')[0];
        const position = header.getBoundingClientRect();
        setIsFloating(position.bottom <= position.height / 2);
    }

    useEffect(() => {
        document.onscroll = location !== '/' ? updateIsFloating : null;
        return () => (document.onscroll = null);
    }, [location]);

    if (location === '/') {
        return;
    }

    const stickyNavbar = (
        <div className="navbar-sticky">
            <h1 className="logo">
                <Link href="/">Chris Centrella</Link>
            </h1>
        </div>
    );

    return (
        <>
            <header>
                <img
                    src="/images/favicon.png"
                    alt="profile image"
                    className="logo-image"
                />
                <h1 className="logo">
                    <Link href="/">Chris Centrella</Link>
                </h1>
                <label className="menu-toggle" htmlFor="toggle">
                    <Image src={MenuIcon} alt="menu icon" className="menu-toggle-image" />
                </label>
                <input type="checkbox" id="toggle" />
                <nav className="navbar">
                    <ul>
                        <li className="nav-item">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/resume" className={activeClass('/resume')}>Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/highlights" className={activeClass('/highlights')}>Highlights</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/specialties" className={activeClass('/specialties')}>Specialties</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/interests" className={activeClass('/interests')}>Interests</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/blog" className={activeClass('/blog')}>Blog</Link>
                        </li>
                        <li className="nav-item">
                            <a
                                target="_blank"
                                href="https://lightroom.adobe.com/gallery/35c62e7ff3ce476f9ae5b07994eb6f15">
                                Photo Gallery
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact" className={activeClass('/contact')}>Contact Me</Link>
                        </li>
                    </ul>
                </nav>
                {isFloating && stickyNavbar}
            </header>
        </>
    );
}

export default Header;
