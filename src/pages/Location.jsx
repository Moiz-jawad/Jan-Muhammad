import SectionTitle from '../components/SectionTitle'
import './Location.css'

const nearbyPlaces = [
  { icon: '🏭', name: 'Sugar Mill Ranipur', distance: 'Adjacent to village' },
  { icon: '🏙️', name: 'Khairpur City', distance: '~35 km away' },
  { icon: '🏰', name: 'Kotdiji Fort', distance: '~15 km away' },
  { icon: '🛣️', name: 'Ranipur Town', distance: 'P/O Ranipur' },
]

export default function Location() {
  return (
    <div className="page-enter">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="/images/scenery.png" alt="Village location" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="page-hero-content">
          <h1>Our Location</h1>
          <p>Find us on the map — in the heart of District Khairpur Mirs, Sindh</p>
        </div>
      </section>

      {/* Map & Info */}
      <section className="location-content">
        <div className="location-inner">
          <SectionTitle
            subtitle="Find Us"
            title="Where We Are"
            description="Village Jan Muhammad Vandiar is located near Ranipur, Taluka Kotdiji, in the fertile plains of District Khairpur Mirs, Sindh."
          />
          <div className="location-grid">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57198.0!2d68.5!3d27.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39294b12f0000001%3A0x1!2sRanipur%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1694000000000"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Village Location"
              ></iframe>
            </div>
            <div className="location-info">
              <h3>Getting to Jan Muhammad Vandiar</h3>
              <p>
                Our village is located near Ranipur in Taluka Kotdiji, District Khairpur Mirs, Sindh, Pakistan. 
                The village is situated adjacent to the Sugar Mill Ranipur, making it well-known in the region.
              </p>
              <p>
                Whether you're visiting for the first time or returning home, Village Jan Muhammad Vandiar 
                welcomes you with open arms and the warm hospitality our community is known for.
              </p>

              <div className="location-details">
                <div className="location-detail-item">
                  <div className="location-detail-icon">📍</div>
                  <div className="location-detail-text">
                    <h4>Address</h4>
                    <p>Village Jan Muhammad Vandiar, P/O Ranipur, Taluka Kotdiji, District Khairpur Mirs, Sindh, Pakistan</p>
                  </div>
                </div>
                <div className="location-detail-item">
                  <div className="location-detail-icon">📮</div>
                  <div className="location-detail-text">
                    <h4>Postal Code</h4>
                    <p>66100 — Ranipur</p>
                  </div>
                </div>
                <div className="location-detail-item">
                  <div className="location-detail-icon">🏔️</div>
                  <div className="location-detail-text">
                    <h4>Region</h4>
                    <p>Upper Sindh, near the historic Kotdiji Fort area</p>
                  </div>
                </div>
                <div className="location-detail-item">
                  <div className="location-detail-icon">🌡️</div>
                  <div className="location-detail-text">
                    <h4>Climate</h4>
                    <p>Hot semi-arid climate, with warm winters and hot summers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby */}
      <section className="nearby-section">
        <div className="nearby-inner">
          <SectionTitle
            subtitle="Connectivity"
            title="What's Nearby"
            description="Key landmarks and places close to our village."
          />
          <div className="nearby-grid">
            {nearbyPlaces.map((place, i) => (
              <div className="nearby-card" key={i}>
                <div className="nearby-icon">{place.icon}</div>
                <h4>{place.name}</h4>
                <p>{place.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
