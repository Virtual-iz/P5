import '../styles/Drop.scss'

const Drop = ({title, dropcontent}) => {
    return (
        <ul className="drop">
            <h2>{title}</h2>
            <li className="drop-content">
                {dropcontent}
            </li>
            <div className="arrow-up"></div>
        </ul>
    )
}

export default Drop