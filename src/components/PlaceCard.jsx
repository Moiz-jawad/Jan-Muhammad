import './PlaceCard.css'

export default function PlaceCard({ image, name, description, icon }) {
  return (
    <div className="place-card">
      <div className="place-card-img-wrapper">
        <img className="place-card-img" src={image} alt={name} loading="lazy" />
      </div>
      <div className="place-card-body">
        {icon && <div className="place-card-icon">{icon}</div>}
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
