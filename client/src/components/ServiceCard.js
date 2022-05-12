import "./ServiceCard.scss";

const ServiceCard = ({color, title,icon, subtitle})=> {
  return (
      <div className="content-cards">
          <div className={`content-icon ${color}`}>{icon}</div>
          <div className="content-text">
              <h3 className="title-card">{title}</h3>
              <p className="subtitle-card">{subtitle}</p>
          </div>
      </div>
  )  
}

export default ServiceCard;