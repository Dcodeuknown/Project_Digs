export default function SiteFooter() {
  return (
    <footer className="footer section-wrap" id="contact">
      <div className="footer-top">
        <div><p className="eyebrow">05 / GET IN TOUCH</p><h2>Have a good<br /><span>problem to solve?</span></h2></div>
        <p className="contact-link">Contact details coming soon</p>
      </div>
      <div className="footer-bottom">
        <a className="wordmark" href="#top">DD<span>.</span></a>
        <p>Building, learning, and connecting the dots.</p>
        <span>© {new Date().getFullYear()} DANIEL DIGOL</span>
      </div>
    </footer>
  );
}
