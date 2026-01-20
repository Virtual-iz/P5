import '../styles/Drop.scss'
import { useState } from 'react'
import arrow from '../assets/drop-arrow-up.png'; 

const Drop = ({ title, dropcontent }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <details className="drop" open={isOpen} onToggle={(e) => setIsOpen(e.target.open)}>
            <summary className="drop-header">
                <h2>{title}</h2>
                <img src={arrow} alt="Toggle dropdown"
                className={`arrow ${isOpen ? 'open' : ''}`}
                />
            </summary>
            <div className="drop-content">
                {Array.isArray(dropcontent) ? (
                    <ul className="equipment-list">
                        {dropcontent.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{dropcontent}</p>
                )}
            </div>
        </details>
    )
}

export default Drop