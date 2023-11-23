import React from 'react';
import Link from 'next/link';

function Footer() {
    return (
        <footer>
            <section className="footer-top">
                <h2 className="logo">
                    <Link href="/">Chris Centrella</Link>
                </h2>
            </section>
            <section className="footer-main">
                <div className="footer-section">
                    <h4 className="footer-heading">
                        <Link href="/">About Me</Link>
                    </h4>
                    <hr className="footer-heading-decorator" />
                    <p>
                        <Link href="/" className="footer-link">
                            Home
                        </Link>
                    </p>
                    <p>
                        <Link href="/highlights" className="footer-link">
                            highlights
                        </Link>
                    </p>
                    <p>
                        <Link href="/specialties" className="footer-link">
                            Specialties
                        </Link>
                    </p>
                    <p>
                        <Link href="/interests" className="footer-link">
                            Interests
                        </Link>
                    </p>
                    <p>
                        <Link href="/contact" className="footer-link">
                            Contact Me
                        </Link>
                    </p>
                </div>
                <div className="footer-section">
                    <h4 className="footer-heading">
                        <Link href="/resume">Work Experience</Link>
                    </h4>
                    <hr className="footer-heading-decorator" />

                    <p>
                        <Link href="/resume" className="footer-link">
                            Resume
                        </Link>
                    </p>
                    <p>
                        <a
                            href="https://github.com/ccentrella"
                            target="_blank"
                            className="footer-link">
                            GitHub
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://linkedin.com/in/ccentrella"
                            target="_blank"
                            className="footer-link">
                            LinkedIn
                        </a>
                    </p>
                </div>
                <div className="footer-section">
                    <h4 className="footer-heading">
                        <Link href="/blog">Content</Link>
                    </h4>
                    <hr className="footer-heading-decorator" />

                    <p>
                        <Link href="/blog" className="footer-link">
                            Blog
                        </Link>
                    </p>
                    <p>
                        <a
                            href="https://lightroom.adobe.com/gallery/35c62e7ff3ce476f9ae5b07994eb6f15"
                            target="_blank"
                            className="footer-link">
                            Photos
                        </a>
                    </p>
                </div>
            </section>
            <section className="footer-bottom">
                <p className="copyright">
                    Proudly built with <i className="heart"></i>. &copy; 2021 – 2023
                    Christopher Michael Centrella. All rights reserved.
                </p>
            </section>
        </footer>
    );
}

export default Footer;
