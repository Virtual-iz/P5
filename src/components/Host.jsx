import '../styles/Host.scss'
import data from "../datas/logements.json"

const Host = ({}) => {

    return (
        <div className="host">
            <p>
                {data.map((item, index) => <Host key={`${index}-host`} item={lodging.host.name} />)}
            </p>
            <img src={lodging.host.picture}></img>
        </div>
    )
}

export default Host


                    