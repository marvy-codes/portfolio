const articles = [
    {
        title: "Rebuilding Uniswap V3 From Scratch",
        platform: "linkedin",
        url: "https://www.linkedin.com/posts/olowookere-marvellous_github-marvy-codes1uniswapv3clone-ground-up-share-7430102607794311168-OYGm",
    },
    {
        title: "Move Security Thread",
        platform: "twitter",
        url: "https://x.com/_marvyCodes/status/1989475215315759345",
    },
    {
        title: "Options Trading Breakdown",
        platform: "twitter",
        url: "https://x.com/_marvyCodes/status/1959167183566578134",
    },
    {
        title: "Damn Vulnerable DeFi — Free Raider Challenge",
        platform: "twitter",
        url: "https://x.com/_marvyCodes/status/2019253374085173567",
    },
    {
        title: "My Take on AI in Security Research",
        platform: "twitter",
        url: "https://x.com/_marvyCodes/status/2012009670509248633",
    },
    {
        title: "CallData Rabbit Hole and What I Discovered",
        platform: "twitter",
        url: "https://x.com/_marvyCodes/status/2008061393044685173",
    },
];

function PlatformIcon({ platform }: { platform: string }) {
    if (platform === "linkedin") {
        return (
            <div className="writing-card-icon linkedin">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            </div>
        );
    }
    return (
        <div className="writing-card-icon twitter">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        </div>
    );
}

export default function Writing() {
    return (
        <section className="writing section" id="writing">
            <div className="container">
                <div className="section-label reveal">Research</div>
                <h2 className="section-title reveal">
                    Writing &amp; <span className="gradient-text">Research</span>
                </h2>
                <p className="section-subtitle reveal">
                    Technical deep-dives, security threads, and DeFi architecture breakdowns.
                </p>

                <div className="writing-grid reveal-stagger">
                    {articles.map((article, i) => (
                        <a
                            key={i}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="writing-card"
                        >
                            <PlatformIcon platform={article.platform} />
                            <div className="writing-card-content">
                                <h4>{article.title}</h4>
                                <span>
                                    {article.platform === "linkedin" ? "LinkedIn" : "𝕏 / Twitter"}
                                </span>
                            </div>
                            <span className="arrow">→</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
