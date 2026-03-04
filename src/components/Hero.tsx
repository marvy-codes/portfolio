import Image from "next/image";

export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-inner">
                    <div className="hero-content">
                        <div className="hero-status">
                            <span className="hero-status-dot"></span>
                            Available for Audits &amp; Collaborations
                        </div>

                        <h1>
                            Full-Stack &amp;{" "}
                            <span className="gradient-text">Blockchain Engineer</span>
                        </h1>

                        <p className="hero-subtitle">
                            Smart Contract Security Researcher with 5+ years building
                            production-grade software across Web2 and Web3. I help teams build
                            secure, scalable blockchain and backend systems that don&apos;t
                            break in production.
                        </p>

                        <div className="hero-cta">
                            <a href="#audit" className="btn-hero">
                                See My Work
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path
                                        d="M3 8h10M9 4l4 4-4 4"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                            <a
                                href="/RESUME.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-hero-outline"
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div className="hero-image">
                        <div className="hero-image-glow"></div>
                        <div className="hero-image-wrapper">
                            <Image
                                src="/profile.jpg"
                                alt="Marvellous — Full-Stack & Blockchain Engineer"
                                width={340}
                                height={420}
                                priority
                            />
                        </div>
                        <div className="hero-image-dots"></div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <span>Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
}
