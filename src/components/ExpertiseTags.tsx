const tags = [
    "Solidity",
    "EVM",
    "Move",
    "Node.js",
    "React",
    "Next.js",
    "TypeScript",
    "Express",
    "MongoDB",
    "DeFi",
    "Smart Contract Security",
    "Foundry",
];

export default function ExpertiseTags() {
    return (
        <section className="expertise">
            <div className="container">
                <div className="expertise-tags reveal-stagger">
                    {tags.map((tag) => (
                        <span key={tag} className="expertise-tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
