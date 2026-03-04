import dynamic from 'next/dynamic';

const PingPongAnimation = dynamic(() => import('./PingPongAnimation'), {
    ssr: false,
});

export default function Hobby() {
    return (
        <section className="hobby section">
            <div className="container">
                <div className="hobby-card reveal">
                    <div className="hobby-ps mb-0px">P.S.</div>
                    <div className="hobby-card-inner">
                        <div className="hobby-content">
                            <div className="hobby-emoji">🏓</div>
                            <h3>
                                I also play table tennis.{" "}
                                <span className="gradient-text">Competitively.</span>
                            </h3>
                            <p>
                                When I&apos;m not auditing smart contracts or shipping code,
                                you&apos;ll find me at the table. I take my smashes as
                                seriously as my invariant tests  and I rarely lose either.
                            </p>
                            <div className="hobby-challenge">
                                <span className="hobby-challenge-dot"></span>
                                Think you can take a game off me? Challenge accepted.
                            </div>
                            <a
                                href="https://x.com/_marvyCodes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hobby-cta"
                            >
                                Challenge Me
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
                        </div>
                        <PingPongAnimation />
                    </div>
                </div>
            </div>
        </section>
    );
}
