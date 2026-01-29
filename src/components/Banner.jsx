import '../styles/Banner.scss'


const Banner = ({ img, title }) => {
    return (
        <div className="banner">
            <img src={img}></img>
            <h1>{title}</h1>
        </div>
    )
}

export default Banner

