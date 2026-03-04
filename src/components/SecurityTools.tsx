const tools = [
    {
        icon: "⚡",
        name: "Gas Optimization",
        description: "Identifying and fixing gas inefficiencies in smart contract code",
    },
    {
        icon: "🔬",
        name: "Manual Exploit Simulation",
        description: "Crafting attack scenarios to test protocol resilience",
    },
    {
        icon: "🔧",
        name: "Foundry",
        description: "Advanced testing, fuzzing, and invariant testing with Forge",
    },
    {
        icon: "🧩",
        name: "Invariant Testing",
        description: "State reachability analysis and invariant break detection",
    },
];

export default function SecurityTools() {
    return (
        <section className="tools section" id="tools">
            <div className="container">
                <div className="section-label reveal">Toolkit</div>
                <h2 className="section-title reveal">
                    Security <span className="gradient-text">Tools &amp; Methods</span>
                </h2>
                <p className="section-subtitle reveal">
                    Battle-tested tools and methodologies for finding vulnerabilities.
                </p>

                <div className="tools-grid reveal-stagger">
                    {tools.map((tool, i) => (
                        <div key={i} className="tool-card">
                            <div className="tool-icon">{tool.icon}</div>
                            <h4>{tool.name}</h4>
                            <p>{tool.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
