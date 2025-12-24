import '../styles/Thumb.scss'

const Thumb = ({ item }) => {
    return (
        <article className="thumb">
            <img src={item.cover} />
            <p>{item.title}</p>
        </article>
    )
}
export default Thumb