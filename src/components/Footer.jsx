import { ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { contactEmail, contactFallbackMessage } from '../contact';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-brand">
          <span className="footer-mark">Desire Chimtsitsi</span>
          <p>Building Secure Digital Experiences.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
        </nav>

        <div className="footer-links">
          <a
            href="https://github.com/desire1515"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub size={16} aria-hidden="true" focusable="false" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/desire-chimtsitsi-6a9821301/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin size={16} aria-hidden="true" focusable="false" />
            LinkedIn
          </a>
          <a
            href={contactEmail ? `mailto:${contactEmail}` : undefined}
            aria-disabled={!contactEmail}
            title={!contactEmail ? contactFallbackMessage : undefined}
          >
            {contactEmail ? <>Contact <ArrowUpRight size={16} /></> : contactFallbackMessage}
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Desire Chimtsitsi. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
