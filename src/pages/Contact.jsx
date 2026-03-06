import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import './Contact.css'

const villageInfo = [
  { icon: '👥', label: 'Population', value: 'Less than 100 — all close relatives' },
  { icon: '🏫', label: 'Schools', value: 'Boys High School & Girls Secondary School' },
  { icon: '🏥', label: 'Healthcare', value: 'Basic Health Unit (BHU)' },
  { icon: '🏛️', label: 'District', value: 'Khairpur Mirs, Sindh' },
  { icon: '📮', label: 'Postal Code', value: '66100 — Ranipur' },
  { icon: '🗣️', label: 'Languages', value: 'Sindhi, Urdu' },
  { icon: '🌾', label: 'Main Occupation', value: 'Agriculture & Farming' },
  { icon: '🏭', label: 'Nearby Landmark', value: 'Sugar Mill Ranipur' },
  { icon: '📅', label: 'Founded', value: '1940 — by Jan Muhammad Vandiar' },
]

const admins = [
  {
    name: 'Ali Hassan Sahito',
    role: 'Village Head',
    phone: '0301 3415393',
    avatar: '👤',
  },
  {
    name: 'Zulfiqar Ali Sahito',
    role: 'Council Secretary',
    phone: '0300 3031666',
    avatar: '👤',
  },
  {
    name: 'Moiz Sahito',
    role: 'Youth Representative',
    phone: '0303 5414205',
    avatar: '👤',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="page-enter">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="/images/daily.png" alt="Contact us" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="page-hero-content">
          <h1>Contact & Information</h1>
          <p>Get in touch and learn more about our village</p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="contact-content">
        <div className="contact-inner">
          <SectionTitle
            subtitle="Get In Touch"
            title="Village Information & Contact"
            description="Reach out to us or browse essential information about Village Jan Muhammad Vandiar."
          />
          <div className="contact-grid">
            {/* Village Info */}
            <div className="village-info-card">
              <h3>About Jan Muhammad Vandiar</h3>
              <div className="info-list">
                {villageInfo.map((item, i) => (
                  <div className="info-item" key={i}>
                    <div className="info-icon">{item.icon}</div>
                    <div className="info-text">
                      <h4>{item.label}</h4>
                      <p>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-card">
              <h3>Send a Message</h3>
              <p>Have a question or suggestion? We'd love to hear from you.</p>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">
                  {submitted ? '✓ Message Sent!' : 'Send Message →'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Admin */}
      <section className="admin-section">
        <div className="admin-inner">
          <SectionTitle
            subtitle="Administration"
            title="Village Leadership"
            description="Meet the people who serve and lead our village community."
          />
          <div className="admin-grid">
            {admins.map((admin, i) => (
              <div className="admin-card" key={i}>
                <div className="admin-avatar">{admin.avatar}</div>
                <h4>{admin.name}</h4>
                <div className="role">{admin.role}</div>
                <p>📞 {admin.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
