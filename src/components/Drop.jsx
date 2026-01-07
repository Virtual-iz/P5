import '../styles/Drop.scss'
import { useState } from 'react'

const Drop = ({ title, dropcontent }) => {
    const [isShown, setIsShown] = useState(false)

    return (
        <ul className="drop">
            <h2>{title}</h2>
            {isShown && (
                <li className="drop-content">
                    {dropcontent}
                </li>
            )}
            <div onClick={() => setIsShown(!isShown)}
                className={isShown ? "arrow-down" : "arrow-up"}>
            </div>
        </ul>
    )
}

export default Drop