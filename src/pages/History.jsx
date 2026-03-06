import SectionTitle from '../components/SectionTitle'
import './History.css'

const timelineData = [
  {
    year: '1940',
    title: 'The Founding',
    text: 'Village Jan Muhammad Vandiar was founded by Jan Muhammad Vandiar in 1940. He settled in this area near Ranipur, Taluka Kotdiji, District Khairpur Mirs, establishing the village that would bear his name for generations to come. The fertile land along the plains of Sindh attracted farming families who joined the settlement.',
  },
  {
    year: '1950s – 1960s',
    title: 'Growing Roots',
    text: 'Though small — with fewer than 100 people, all closely related to one another — the village grew stronger through unity. The community mosque became the center of daily life, and farming techniques improved. The Sugar Mill Ranipur nearby brought economic opportunities to the region.',
  },
  {
    year: '1970s – 1980s',
    title: 'Infrastructure & Development',
    text: 'The village saw the construction of improved roads connecting to Ranipur and Kotdiji. Electricity reached the village, transforming daily life and enabling small-scale businesses to flourish. The nearby Sugar Mill Ranipur provided employment to many villagers.',
  },
  {
    year: '1990s – 2000s',
    title: 'Modern Progress',
    text: 'The village welcomed its first telephone connections and later mobile networks. Better roads linked the village to Khairpur city and beyond. A girls\' school was opened, and the community center was built to host meetings, weddings, and cultural events.',
  },
  {
    year: '2010s – Present',
    title: 'A Connected Community',
    text: 'With access to the internet and improved roads connecting to Ranipur, Kotdiji, and Khairpur Mirs, Village Jan Muhammad Vandiar has embraced modern life while preserving its core traditions. The younger generation is pursuing education while staying deeply connected to their roots.',
  },
]

const cultureData = [
  {
    icon: '🎵',
    title: 'Folk Music & Dance',
    text: 'Traditional Sindhi music echoes through the village during festivals. The rhythmic beats of the dholak and soulful melodies of folk songs bring the community together.',
  },
  {
    icon: '🍛',
    title: 'Traditional Cuisine',
    text: 'From freshly baked tandoori rotis to aromatic Sindhi biryani and sweet mithai, the village cuisine reflects the warmth and generosity of our people.',
  },
  {
    icon: '👘',
    title: 'Handicrafts & Art',
    text: 'Local artisans create beautiful Ajrak prints, embroidered fabrics, and handcrafted pottery — each piece telling a story of our rich cultural heritage.',
  },
  {
    icon: '🌾',
    title: 'Agricultural Life',
    text: 'Farming is the backbone of our village. Our fields produce wheat, cotton, rice, and seasonal vegetables, sustaining families and the local economy. The Sugar Mill Ranipur adds to the agricultural significance of the region.',
  },
  {
    icon: '🤝',
    title: 'Community Gatherings',
    text: 'Whether it\'s an Eid celebration, a wedding, or a simple evening gathering at the otaq, the spirit of community is at the heart of village life.',
  },
  {
    icon: '📖',
    title: 'Education & Values',
    text: 'Elders pass down wisdom through stories and proverbs. Today, education is highly valued, with families investing in their children\'s future.',
  },
]

export default function History() {
  return (
    <div className="page-enter">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="/images/history.png" alt="Village history" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="page-hero-content">
          <h1>Our Village History</h1>
          <p>A journey through the rich heritage of Jan Muhammad Vandiar — since 1940</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="history-content">
        <div className="history-inner">
          <SectionTitle
            subtitle="Our Journey"
            title="How Our Village Was Established"
            description="Founded by Jan Muhammad Vandiar in 1940 — from a small farming settlement to a thriving community. Discover the milestones that shaped our village."
          />
          <div className="timeline">
            {timelineData.map((item, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-card">
                  <span className="year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <div className="timeline-dot"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="culture-section">
        <div className="culture-inner">
          <SectionTitle
            subtitle="Culture & Lifestyle"
            title="Traditions That Define Us"
            description="The vibrant culture of Village Jan Muhammad Vandiar is a tapestry woven with music, food, art, and the unwavering spirit of community."
          />
          <div className="culture-grid">
            {cultureData.map((item, i) => (
              <div className="culture-card" key={i}>
                <div className="culture-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
