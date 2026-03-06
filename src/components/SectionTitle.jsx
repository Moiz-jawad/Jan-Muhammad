import './SectionTitle.css'

export default function SectionTitle({ subtitle, title, description }) {
  return (
    <div className="section-title">
      {subtitle && <span className="subtitle">{subtitle}</span>}
      <h2>{title}</h2>
      <div className="divider"></div>
      {description && <p>{description}</p>}
    </div>
  )
}
