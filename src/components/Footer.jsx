import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="brand-name">🌿 JM Vandiar</div>
          <p>Village Jan Muhammad Vandiar — a peaceful village near Sugar Mill Ranipur, rich in history since 1940. Explore our community and discover the beauty of village life.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/history">Village History</Link>
          <Link to="/places">Important Places</Link>
          <Link to="/gallery">Photo Gallery</Link>
          <Link to="/location">Location</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📍 Village Jan Muhammad Vandiar, P/O Ranipur, Taluka Kotdiji, District Khairpur Mirs</p>
          <p>📮 Postal Code: 66100</p>
          <p>🇵🇰 Sindh, Pakistan</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Village Jan Muhammad Vandiar. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  )
}
