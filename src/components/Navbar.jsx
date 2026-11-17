import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Code2, Menu, Moon, Sun, X } from 'lucide-react';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
];

function Navbar({ theme, setTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link to="/" className="brand" aria-label="Desire Chimtsitsi home">
          <span className="brand-mark">DC</span>
          <span className="brand-text">Desire Chimtsitsi</span>
        </Link>

        <nav className={`nav ${mobileOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            className="icon-button github-link"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
          >
            <Code2 size={18} />
          </a>

          <button
            type="button"
            className="icon-button theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileOpen((current) => !current)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
