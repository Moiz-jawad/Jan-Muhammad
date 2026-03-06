import { useState, useEffect, useCallback } from 'react'
import SectionTitle from '../components/SectionTitle'
import './Gallery.css'

const photos = [
  { src: '/images/scenery.png', caption: 'Village Scenery', category: 'scenery', featured: true },
  { src: '/images/houses.png', caption: 'Traditional Houses', category: 'houses' },
  { src: '/images/farms.png', caption: 'Agricultural Fields', category: 'farms' },
  { src: '/images/festival.png', caption: 'Village Festival', category: 'festivals', featured: true },
  { src: '/images/daily.png', caption: 'Daily Life', category: 'daily' },
  { src: '/images/sunset.png', caption: 'Sunset Over the Village', category: 'scenery' },
  { src: '/images/mosque.png', caption: 'Jamia Masjid', category: 'houses' },
  { src: '/images/school.png', caption: 'Village School', category: 'daily' },
  { src: '/images/community.png', caption: 'Community Center', category: 'daily' },
  { src: '/images/hero.png', caption: 'Panoramic View', category: 'scenery' },
  { src: '/images/hospital.png', caption: 'Health Clinic', category: 'daily' },
  { src: '/images/history.png', caption: 'Heritage View', category: 'houses' },
]

const categories = ['all', 'scenery', 'houses', 'farms', 'festivals', 'daily']

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = activeFilter === 'all'
    ? photos
    : photos.filter(p => p.category === activeFilter)

  const openLightbox = (i) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filtered.length)
    }
  }, [lightboxIndex, filtered.length])

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)
    }
  }, [lightboxIndex, filtered.length])

  useEffect(() => {
    const handleKey = (e) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex, goNext, goPrev])

  return (
    <div className="page-enter">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="/images/sunset.png" alt="Gallery" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="page-hero-content">
          <h1>Photo Gallery</h1>
          <p>Capturing the beauty and spirit of Village Jan Muhammad Vandiar</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-content">
        <div className="gallery-inner">
          <SectionTitle
            subtitle="Gallery"
            title="Life in Pictures"
            description="Browse through photos of our village — from scenic landscapes and traditional houses to festivals and everyday moments."
          />

          {/* Filters */}
          <div className="gallery-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-pill ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => { setActiveFilter(cat); setLightboxIndex(null) }}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="gallery-grid">
            {filtered.map((photo, i) => (
              <div
                key={photo.src + activeFilter}
                className={`gallery-item ${photo.featured && activeFilter === 'all' ? 'featured' : ''}`}
                onClick={() => openLightbox(i)}
              >
                <img src={photo.src} alt={photo.caption} loading="lazy" />
                <div className="gallery-item-overlay">
                  <span>{photo.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>✕</button>
          <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); goPrev() }}>‹</button>
          <img
            src={filtered[lightboxIndex].src}
            alt={filtered[lightboxIndex].caption}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); goNext() }}>›</button>
          <div className="lightbox-caption">{filtered[lightboxIndex].caption}</div>
        </div>
      )}
    </div>
  )
}
