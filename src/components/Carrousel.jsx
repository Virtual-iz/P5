import '../styles/Carrousel.scss'


const Carrousel = ({ img, title }) => {
    return (
        <div className="carrousel">
            <img src={img}></img>
        </div>
    )
}

export default Carrousel