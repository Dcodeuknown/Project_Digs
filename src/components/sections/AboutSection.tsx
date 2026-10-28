const capabilities = [
  { index: "01", title: "Web applications", copy: "Interfaces and software shaped around real user needs." },
  { index: "02", title: "Automation & integrations", copy: "Connecting APIs, tools, and repeatable business workflows." },
  { index: "03", title: "AI-assisted workflows", copy: "Applying AI where it can make a process more useful." },
  { index: "04", title: "Business systems", copy: "Bringing CRM, data, and operations into a clearer picture." },
];

export default function AboutSection() {
  return (
    <>
      <section className="intro-band" id="about">
        <div className="section-wrap intro-grid">
          <p className="eyebrow">01 / THE THROUGH LINE</p>
          <div><h2>Curious about how things work.<br /><span>Driven to make them work better.</span></h2>
            <p className="body-copy">My path has moved through information technology, business systems, websites, SEO, and automation. Each step brought me closer to the part I enjoy most: understanding a problem, connecting the pieces, and building a solution that people can actually use.</p>
            <p className="body-copy">Now I&apos;m taking that systems mindset deeper into software development—learning by building, staying honest about what I know, and getting better with every project.</p>
          </div>
        </div>
      </section>

      <section className="section-wrap capabilities" id="what-i-build">
        <div className="section-heading"><div><p className="eyebrow">02 / WHAT I BUILD</p><h2>Useful things,<br /><span>thoughtfully connected.</span></h2></div><p className="heading-note">I like working where technology meets real-world needs.</p></div>
        <div className="capability-list">{capabilities.map((item) => <article className="capability" key={item.index}><span className="mono muted">{item.index}</span><h3>{item.title}</h3><p>{item.copy}</p><span className="capability-arrow" aria-hidden="true">↗</span></article>)}</div>
      </section>
    </>
  );
}
