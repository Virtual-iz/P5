import '../styles/Host.scss'
import starActive from '../assets/star-active.png'
import starInactive from '../assets/star-inactive.png'

const Host = ({ data }) => {
  return (
    <div className="host">
      <div className="profil">
        <p>{data.host.name}</p>
        <img src={data.host.picture} alt={`${data.host.name} profile`} />
      </div>
      <div className="rating">
        {[...Array(5)].map((_, idx) => (
          <img
            key={idx}
            src={idx < data.rating ? starActive : starInactive}
            alt="star"
          />
        ))}
      </div>
    </div>
  )
}

export default Host
