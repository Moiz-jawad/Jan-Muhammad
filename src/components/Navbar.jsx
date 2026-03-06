import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/history', label: 'History' },
  { path: '/places', label: 'Places' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/location', label: 'Location' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const navClass = [
    'navbar',
    scrolled ? 'scrolled' : '',
    isHome && !scrolled ? 'at-top' : '',
  ].filter(Boolean).join(' ')

  return (
    <>
      <nav className={navClass} id="main-nav">
        <div className="navbar-inner">
          <Link to="/" className="navbar-brand">
            <span className="brand-icon">🌿</span>
            <span className="brand-text">JM Vandiar</span>
          </Link>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div
        className={`mobile-overlay ${menuOpen ? 'visible' : ''}`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  )
}
