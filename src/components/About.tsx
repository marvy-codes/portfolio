export default function About() {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="section-label reveal">About</div>
                <h2 className="section-title reveal">
                    Building Secure Systems,{" "}
                    <span className="gradient-text">Breaking Unsafe Ones</span>
                </h2>

                <div className="about-grid">
                    <div className="about-text reveal">
                        <p>
                            I&apos;m a Full-Stack, Blockchain Engineer and Security Researcher
                            with 5+ years of experience building production-grade software
                            across Web2 and Web3.
                        </p>
                        <p>
                            From writing and securing Solidity smart contracts to designing
                            APIs and full-stack applications, I ship systems that are both
                            functional and attack-resistant.
                        </p>
                        <p>
                            Over the past few years, I&apos;ve specialized in DeFi
                            architecture and smart contract security analysing invariant
                            violations, vault accounting models, and protocol-level risks
                            across competitive audits and independent research.
                        </p>

                        <div className="about-mindset reveal-stagger">
                            <div className="mindset-card">
                                <div className="icon">🔨</div>
                                <h4>Builder&apos;s Mindset</h4>
                                <p>Shipping reliable, production-ready systems</p>
                            </div>
                            <div className="mindset-card">
                                <div className="icon">🎯</div>
                                <h4>Attacker&apos;s Mindset</h4>
                                <p>Stress-testing assumptions &amp; breaking invariants</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-stats reveal-stagger">
                        <div className="stat-card">
                            <div className="stat-number">5+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">25+</div>
                            <div className="stat-label">Audit Contests</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">10+</div>
                            <div className="stat-label">Public Findings</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">7k+</div>
                            <div className="stat-label">nSLoC Reviewed</div>
                        </div>
                        <div className="stat-card featured">
                            <div className="stat-number">B.Sc</div>
                            <div className="stat-label">Software Engineering</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
