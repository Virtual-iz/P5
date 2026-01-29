import '../styles/Host.scss'
import Rating from './Rating'

const Host = ({ data }) => {
  return (
    <div className="host">
      <div className="profil">
        <p>{data.host.name}</p>
        <img src={data.host.picture} alt={`${data.host.name} profile`} />
      </div>
      <Rating data={data} />
    </div>
  )
}

export default Host
 