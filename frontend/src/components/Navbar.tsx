import { useState } from 'react';

const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Technical Focus', href: '#technical-focus' },
  { label: 'Contact', href: '#contact' },
];

/** Provides the portfolio wordmark and keyboard-accessible section navigation. */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Thando Majola, home">
          <span className="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" focusable="false">
              <path d="M8 11h24M20 11v18M8 29h24" />
              <circle cx="8" cy="11" r="3" />
              <circle cx="32" cy="11" r="3" />
              <circle cx="20" cy="29" r="3" />
            </svg>
          </span>
          <span className="brand__text">
            <strong>Thando Majola</strong>
            <span>Systems &amp; practical software</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className="primary-navigation"
          data-open={menuOpen}
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="navigation-cta" href="#contact" onClick={closeMenu}>
            Let's Connect <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
