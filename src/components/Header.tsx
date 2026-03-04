"use client";

import { useState, useEffect } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = () => {
        setMobileOpen(false);
    };

    return (
        <>
            <header className={`header ${scrolled ? "scrolled" : ""}`}>
                <div className="container header-inner">
                    <a href="#" className="header-logo">
                        <span className="logo-mark">M</span>
                        <span>Marvellous</span>
                    </a>

                    <nav className="header-nav">
                        <a href="#about">About</a>
                        <a href="#experience">Experience</a>
                        <a href="#audit">Audit</a>
                        <a href="#writing">Writing</a>
                    </nav>

                    <div className="header-actions">
                        <a
                            href="/RESUME.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ marginRight: "6px", display: "inline-block", verticalAlign: "-2px" }}
                            >
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Resume
                        </a>
                        <a href="#contact" className="btn-primary">
                            Let&apos;s Talk
                        </a>
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setMobileOpen(true)}
                            aria-label="Open menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation */}
            <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
                <button
                    className="mobile-nav-close"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                >
                    ✕
                </button>
                <a href="#about" onClick={handleNavClick}>About</a>
                <a href="#experience" onClick={handleNavClick}>Experience</a>
                <a href="#audit" onClick={handleNavClick}>Audit</a>
                <a href="#writing" onClick={handleNavClick}>Writing</a>
                <a href="#contact" onClick={handleNavClick}>Contact</a>
            </div>
        </>
    );
}
