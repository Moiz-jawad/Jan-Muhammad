import SectionTitle from '../components/SectionTitle'
import PlaceCard from '../components/PlaceCard'
import './Places.css'

const places = [
  {
    image: '/images/boys_school.png',
    name: 'Boys High School',
    icon: '🏫',
    description:
      'The Boys High School serves the male students of the village and surrounding areas, providing education up to matriculation level. It has been a cornerstone of the community\'s commitment to educating the next generation.',
  },
  {
    image: '/images/girls_school.png',
    name: 'Girls Secondary School',
    icon: '🏫',
    description:
      'The Girls Secondary School provides education for the young women of our village up to secondary level. It plays a vital role in empowering girls through education and ensuring equal opportunities for all.',
  },
  {
    image: '/images/health_unit.png',
    name: 'Basic Health Unit (BHU)',
    icon: '🏥',
    description:
      'The Basic Health Unit provides essential healthcare services to villagers including vaccinations, maternal care, and emergency first aid. A team of healthcare workers serves this close-knit community.',
  },
  {
    image: '/images/village_mosque.png',
    name: 'Jama Masjid',
    icon: '🕌',
    description:
      'The central mosque of the village serves as both a place of worship and community gathering. It hosts daily prayers, Friday sermons, and religious education classes for children.',
  },
  {
    image: '/images/sugar_mill.png',
    name: 'Sugar Mill Ranipur',
    icon: '🏭',
    description:
      'The Sugar Mill Ranipur is a major industrial landmark near our village. It provides employment opportunities to many villagers and plays a vital role in the local economy, processing sugarcane from the surrounding agricultural lands.',
  },
]

export default function Places() {
  return (
    <div className="page-enter">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="/images/community.png" alt="Important places" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="page-hero-content">
          <h1>Important Places</h1>
          <p>Key landmarks and institutions serving our community</p>
        </div>
      </section>

      {/* Places Grid */}
      <section className="places-content">
        <div className="places-inner">
          <SectionTitle
            subtitle="Landmarks"
            title="Serving Our Community"
            description="These are the places that form the backbone of daily life in Village Jan Muhammad Vandiar — from education and health to faith and industry."
          />
          <div className="places-grid">
            {places.map((place, i) => (
              <PlaceCard key={i} {...place} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
