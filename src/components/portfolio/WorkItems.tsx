import { type Project } from "./Data"

const WorkItems = ({ item }: { item: Project }) => {
  return (
    <div className="work__card" key={item.id}>
      {item.mediaType === 'video' ? (
        <video className="work__img" autoPlay muted loop playsInline>
          <source src={item.image} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img className="work__img" src={item.image} alt={item.title} />
      )}

      <h3 className="work__title">{item.title}</h3>
      <a href={item.url} className="work__button" target="_blank" rel="noopener noreferrer">
        View Repository <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  )
}

export default WorkItems