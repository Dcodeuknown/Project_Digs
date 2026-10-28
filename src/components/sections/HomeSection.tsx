export default function HomeSection() {
  return (
    <section className="hero section-wrap" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> IT · SYSTEMS · SOFTWARE</p>
        <h1>I build systems<br />that <span>make things</span><br />work better.</h1>
        <p className="hero-intro">I&apos;m Daniel — a practical builder working across software, business systems, and automation. I turn messy processes and good ideas into useful tools.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↘</span></a>
          <a className="text-link" href="#about">A little about me <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="hero-art" aria-label="A visual map of Daniel&apos;s technical journey" role="img">
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="orbit orbit-three" />
        <span className="orbit-label label-it">IT</span>
        <span className="orbit-label label-systems">SYSTEMS</span>
        <span className="orbit-label label-automation">AUTOMATION</span>
        <span className="orbit-label label-software">SOFTWARE</span>
        <div className="core"><span>DD</span><i>BUILDING<br />IN PROGRESS</i></div>
        <span className="art-coordinate">SYSTEMS<br />SOFTWARE</span>
        <span className="art-caption">FROM CONNECTING SYSTEMS<br />TO BUILDING THEM.</span>
      </div>
      <div className="hero-bottom"><span>INDEPENDENT BUILDER</span><span>SCROLL TO EXPLORE <b>↓</b></span></div>
    </section>
  );
}
