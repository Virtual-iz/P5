import '../styles/Carrousel.scss'
import { useState } from 'react'
import leftarrow from "../assets/carrousel-left-arrow.png"
import rightarrow from "../assets/carrousel-right-arrow.png"

const Carrousel = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => setCurrentIndex((prevIndex) =>
        (prevIndex === 0 ? data.pictures.length - 1 : prevIndex - 1)
    )

    const nextSlide = () => setCurrentIndex((prevIndex) =>
        (prevIndex === data.pictures.length - 1 ? 0 : prevIndex + 1)
    )

    // Masquer les flèches s'il n'y a qu'une seule image
    const showArrows = data.pictures.length > 1

    return (
        <div className="carrousel">
            <img
                src={data.pictures[currentIndex]}
                alt={`Vue ${currentIndex + 1} du logement`}
            />

            {showArrows && (
                <>
                    <div
                        onClick={prevSlide}
                        className="arrow carrousel-arrow-left"
                        aria-label="Image précédente"
                    >
                        <img src={leftarrow} alt="Flèche gauche" />
                    </div>
                    <div
                        onClick={nextSlide}
                        className="arrow carrousel-arrow-right"
                        aria-label="Image suivante"
                    >
                        <img src={rightarrow} alt="Flèche droite" />
                    </div>
                </>
            )}

            {showArrows && (
                <span className="carrousel-index">
                    {currentIndex + 1}/{data.pictures.length}
                </span>
            )}
        </div>
    )
}

export default Carrousel