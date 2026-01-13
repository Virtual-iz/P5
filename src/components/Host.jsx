import '../styles/Host.scss'

const Host = ({ data }) => {

    return (
        <div className="host">
            <div className="profil">
                <p>{data.host.name}</p>
                <img src={data.host.picture}></img>
            </div>
            <div className='rating'>{data.host.rating}</div> 
        </div>

    )
}

export default Host


