import '../styles/Carrousel.scss'
import { useState } from 'react'
import leftarrow from "../assets/carrousel-left-arrow.png"
import rightarrow from "../assets/carrousel-right-arrow.png"

const Carrousel = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.pictures.length - 1 : prevIndex - 1))
    const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex === data.pictures.length - 1 ? 0 : prevIndex + 1))

    return (
        <div className="carrousel">
            <img src={data.pictures[currentIndex]}></img>
            <div onClick={prevSlide} className="arrow carrousel-arrow-left"> <img src={leftarrow}></img></div>
            <div onClick={nextSlide} className="arrow carrousel-arrow-right"> <img src={rightarrow}></img></div>
            <span className="carrousel-index">{currentIndex + 1}/{data.pictures.length}</span>
        </div>
    )
}

export default Carrousel