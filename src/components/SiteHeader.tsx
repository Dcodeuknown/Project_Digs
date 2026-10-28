export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Daniel Digol home">DD<span>.</span></a>
      <nav aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#journey">Journey</a>
        <a className="nav-contact" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}
