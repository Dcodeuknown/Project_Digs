const projects = [
  {
    number: "01",
    title: "A point of sale built around real workflows.",
    description:
      "An evolving full-stack project exploring how a small business can manage products, sales, and day-to-day operations in one place.",
    tags: ["Next.js", "FastAPI", "MySQL"],
  },
  {
    number: "02",
    title: "Research and content, connected end to end.",
    description:
      "A practical automation concept connecting research inputs, AI-assisted processing, and the tools teams already use.",
    tags: ["n8n", "APIs", "AI workflows"],
  },
  {
    number: "03",
    title: "Making transportation data more useful.",
    description:
      "A planned exploration of transportation data, route finding, and graph-based problem solving.",
    tags: ["Python", "Graph algorithms", "Data"],
  },
];

export default function WorkSection() {
  return (
    <section className="work-section" id="work">
      <div className="section-wrap">
        <div className="section-heading"><div><p className="eyebrow">03 / SELECTED WORK</p><h2>Projects &amp;<br /><span>experiments.</span></h2></div><p className="heading-note">Sample project cards — I&apos;ll add details as I build and document each project.</p></div>
        <div className="project-list">{projects.map((project) => <article className="project" key={project.number}><div className="project-number mono">{project.number}</div><div className="project-main"><p className="eyebrow">SAMPLE PROJECT</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><span className="project-arrow" aria-hidden="true">↗</span></article>)}</div>
        <p className="project-note">These sample cards are placeholders. I&apos;ll replace them with real project details as the work takes shape.</p>
      </div>
    </section>
  );
}
