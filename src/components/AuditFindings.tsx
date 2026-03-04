interface Finding {
    label: string;
    severity: "high" | "medium";
    url: string;
}

interface AuditRow {
    date: string;
    provider: string;
    providerUrl: string;
    project: string;
    findings: Finding[];
    language: string;
}

const solidityFindings: AuditRow[] = [
    {
        date: "11.2025",
        provider: "Sherlock",
        providerUrl: "https://audits.sherlock.xyz/contests/1203",
        project: "Insurance",
        findings: [
            { label: "1H", severity: "high", url: "https://audits.sherlock.xyz/contests/1203/voting/867" },
            { label: "1M", severity: "medium", url: "https://audits.sherlock.xyz/contests/1203/voting/832" },
        ],
        language: "Solidity",
    },
    {
        date: "10.2025",
        provider: "Sherlock",
        providerUrl: "https://audits.sherlock.xyz/contests/1197",
        project: "Derivatives",
        findings: [
            { label: "1M", severity: "medium", url: "https://audits.sherlock.xyz/contests/1197/voting/274" },
        ],
        language: "Solidity",
    },
    {
        date: "09.2025",
        provider: "Sherlock",
        providerUrl: "https://audits.sherlock.xyz/contests/1171",
        project: "Liquidity",
        findings: [
            { label: "1H", severity: "high", url: "https://audits.sherlock.xyz/contests/1171/voting/710" },
        ],
        language: "Solidity",
    },
    {
        date: "09.2025",
        provider: "Sherlock",
        providerUrl: "https://audits.sherlock.xyz/contests/1054",
        project: "AMM",
        findings: [
            { label: "1M", severity: "medium", url: "https://audits.sherlock.xyz/contests/1054/voting/568" },
            { label: "1M", severity: "medium", url: "https://audits.sherlock.xyz/contests/1054/voting/572" },
        ],
        language: "Solidity",
    },
    {
        date: "08.2024",
        provider: "Sherlock",
        providerUrl: "https://audits.sherlock.xyz/contests/1073",
        project: "Collateralized Debt Position",
        findings: [
            { label: "1M", severity: "medium", url: "https://audits.sherlock.xyz/contests/1073/voting/988" },
        ],
        language: "Solidity",
    },
];

const moveFindings: AuditRow[] = [
    {
        date: "12.2025",
        provider: "Code4rena",
        providerUrl: "https://code4rena.com/",
        project: "Interoperability",
        findings: [
            { label: "1H", severity: "high", url: "https://code4rena.com/audits/2025-01-initia-move/submissions/F-1" },
            { label: "1H", severity: "high", url: "https://code4rena.com/audits/2025-01-initia-move/submissions/F-5" },
            { label: "1M", severity: "medium", url: "https://code4rena.com/audits/2025-01-initia-move/submissions/F-11" },
        ],
        language: "Move",
    },
    {
        date: "01.2026",
        provider: "Code4rena",
        providerUrl: "https://code4rena.com/",
        project: "Liquid Staking",
        findings: [
            { label: "1H", severity: "high", url: "https://code4rena.com/audits/2025-04-cabal-liquid-staking-token/submissions/F-156" },
            { label: "1M", severity: "medium", url: "https://code4rena.com/audits/2025-04-cabal-liquid-staking-token/submissions/F-27" },
            { label: "1M", severity: "medium", url: "https://code4rena.com/audits/2025-04-cabal-liquid-staking-token/submissions/F-83" },
        ],
        language: "Move",
    },
];

function FindingsTable({ rows }: { rows: AuditRow[] }) {
    return (
        <table className="audit-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Provider</th>
                    <th>Project</th>
                    <th>Findings</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => (
                    <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{row.date}</td>
                        <td>
                            <a
                                href={row.providerUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="provider-link"
                            >
                                {row.provider}
                            </a>
                        </td>
                        <td>{row.project}</td>
                        <td>
                            <div className="finding-badges">
                                {row.findings.map((f, j) => (
                                    <a
                                        key={j}
                                        href={f.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`finding-badge ${f.severity === "high" ? "finding-high" : "finding-medium"
                                            }`}
                                    >
                                        {f.label}
                                    </a>
                                ))}
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default function AuditFindings() {
    return (
        <section className="audit section" id="audit">
            <div className="container">
                <div className="section-label reveal">Security Research</div>
                <h2 className="section-title reveal">
                    Audit <span className="gradient-text">Findings</span>
                </h2>
                <p className="section-subtitle reveal">
                    Competitive audit contests and protocol security reviews across
                    Solidity and Move ecosystems.
                </p>

                <div className="audit-stats reveal-stagger">
                    <div className="audit-stat">
                        <div className="audit-stat-number">25+</div>
                        <div className="audit-stat-label">Contests</div>
                    </div>
                    <div className="audit-stat">
                        <div className="audit-stat-number">10+</div>
                        <div className="audit-stat-label">M/H Findings</div>
                    </div>
                    <div className="audit-stat">
                        <div className="audit-stat-number">7k+</div>
                        <div className="audit-stat-label">nSLoC Reviewed</div>
                    </div>
                    <div className="audit-stat">
                        <div className="audit-stat-number">2</div>
                        <div className="audit-stat-label">Private Audits</div>
                    </div>
                </div>

                <div className="audit-table-section reveal">
                    <div className="audit-table-title">
                        Solidity Findings
                        <span className="badge badge-solidity">EVM</span>
                    </div>
                    <FindingsTable rows={solidityFindings} />
                </div>

                <div className="audit-table-section reveal">
                    <div className="audit-table-title">
                        Move Findings
                        <span className="badge badge-move">Move</span>
                    </div>
                    <FindingsTable rows={moveFindings} />
                </div>
            </div>
        </section>
    );
}
