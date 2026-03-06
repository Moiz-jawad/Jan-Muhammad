import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import './Home.css'

export default function Home() {
  return (
    <div className="page-enter">
      {/* ===== Hero ===== */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <img src="/images/hero.png" alt="Jan Muhammad Vandiar village landscape" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <span className="hero-badge">🌿 Welcome to Our Village</span>
          <h1>Jan Muhammad Vandiar</h1>
          <p className="tagline">Where Nature Meets Heritage — Since 1940</p>
          <p className="hero-desc">
            Discover the peaceful beauty, rich culture, and warm community of Village Jan Muhammad Vandiar — 
            a timeless place near Ranipur, District Khairpur Mirs, where traditions thrive and nature flourishes.
          </p>
          <div className="hero-buttons">
            <Link to="/history" className="btn btn-primary">Explore History</Link>
            <Link to="/gallery" className="btn btn-white">View Gallery</Link>
          </div>
        </div>
        <div className="hero-scroll">
          <span></span>
        </div>
      </section>

      {/* ===== Welcome ===== */}
      <section className="welcome" id="welcome">
        <div className="welcome-grid">
          <div className="welcome-image">
            <img src="/images/scenery.png" alt="Village scenery" />
          </div>
          <div className="welcome-text">
            <h2>Welcome to Jan Muhammad Vandiar</h2>
            <div className="accent-line"></div>
            <p>
              Village Jan Muhammad Vandiar is a small, close-knit village located in P/O Ranipur, 
              Taluka Kotdiji, District Khairpur Mirs, Sindh, Pakistan. Founded by Jan Muhammad 
              Vandiar in 1940, our village is home to fewer than 100 people — all closely related 
              to one another, forming one big extended family.
            </p>
            <p>
              Situated near the Sugar Mill Ranipur, life here revolves around agriculture, 
              strong family bonds, and age-old traditions passed down through generations. 
              Despite its small size, our village proudly has two schools — a Boys High School 
              and a Girls Secondary School — along with a Basic Health Unit serving the community.
            </p>
            <Link to="/history" className="btn btn-outline" style={{ marginTop: '0.5rem' }}>
              Learn Our History →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="stats" id="stats">
        <div className="stats-inner">
          <div className="stat-item">
            <div className="stat-number">85+</div>
            <div className="stat-label">Years of Heritage</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">~100</div>
            <div className="stat-label">Residents</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Landmarks</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Community Spirit</div>
          </div>
        </div>
      </section>

      {/* ===== Preview Sections ===== */}
      <section className="previews" id="previews">
        <div className="previews-inner">
          <SectionTitle
            subtitle="Discover More"
            title="Explore Our Village"
            description="Dive deeper into the history, landmarks, and vibrant life of Village Jan Muhammad Vandiar."
          />
          <div className="previews-grid">
            <Link to="/history" className="preview-card">
              <div className="preview-card-img-wrap">
                <img className="preview-card-img" src="/images/history.png" alt="Village history" />
              </div>
              <div className="preview-card-body">
                <h3>Village History</h3>
                <p>Learn about the rich heritage and cultural traditions since the founding by Jan Muhammad Vandiar in 1940.</p>
                <span className="card-link">Read More →</span>
              </div>
            </Link>

            <Link to="/places" className="preview-card">
              <div className="preview-card-img-wrap">
                <img className="preview-card-img" src="/images/mosque.png" alt="Important places" />
              </div>
              <div className="preview-card-body">
                <h3>Important Places</h3>
                <p>Discover the key landmarks including the nearby Sugar Mill Ranipur and institutions that serve our community.</p>
                <span className="card-link">Explore Places →</span>
              </div>
            </Link>

            <Link to="/gallery" className="preview-card">
              <div className="preview-card-img-wrap">
                <img className="preview-card-img" src="/images/sunset.png" alt="Photo gallery" />
              </div>
              <div className="preview-card-body">
                <h3>Photo Gallery</h3>
                <p>Browse beautiful photographs capturing the scenic beauty and daily life of our village.</p>
                <span className="card-link">View Gallery →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
