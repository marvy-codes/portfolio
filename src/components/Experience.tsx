const experiences = [
    {
        date: "Feb 2021 – Oct 2022",
        role: "Front-End Developer",
        company: "DotCircle Labs",
        type: "Remote",
        points: [
            "Built complex UI/UX interfaces for blockchain and traditional platforms",
            "Integrated Web3 functionality using React.js, web3.js, and modern frontend tooling",
            "Translated product designs into scalable, reusable components",
            "Collaborated with backend and smart contract engineers to deliver end-to-end features",
        ],
    },
    {
        date: "Nov 2021 – Feb 2022",
        role: "Full-Stack Developer",
        company: "Master Neo Moderation Agency",
        type: "",
        points: [
            "Led frontend architecture and implementation",
            "Built and launched the company's production web platform",
            "Implemented backend logic and handled deployment processes",
            "Delivered a fully functional system from concept to production",
        ],
    },
    {
        date: "Mar 2020 – Dec 2021",
        role: "Lead Developer",
        company: "ILearnBlock",
        type: "",
        points: [
            "Managed and maintained the core codebase",
            "Designed and shipped new UI components and major product features",
            "Improved system performance and stability across web applications",
            "Led development decisions and technical direction",
        ],
    },
];

export default function Experience() {
    return (
        <section className="experience section" id="experience">
            <div className="container">
                <div className="section-label reveal">Experience</div>
                <h2 className="section-title reveal">
                    Where I&apos;ve{" "}
                    <span className="gradient-text">Made an Impact</span>
                </h2>
                <p className="section-subtitle reveal">
                    Building production-grade systems across Web2 and Web3.
                </p>

                <div className="experience-timeline">
                    {experiences.map((exp, i) => (
                        <div key={i} className="experience-card reveal">
                            <div className="experience-date">
                                {exp.date}
                                {exp.type && ` · ${exp.type}`}
                            </div>
                            <h3>{exp.role}</h3>
                            <div className="experience-company">{exp.company}</div>
                            <ul>
                                {exp.points.map((point, j) => (
                                    <li key={j}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
