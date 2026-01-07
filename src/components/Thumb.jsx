import '../styles/Thumb.scss'
import { Link } from 'react-router-dom'

const Thumb = ({ item }) => {
    return (
        <Link
            to={`/lodging/${item.id}`}>
            <article className="thumb">
                <img src={item.cover} />
                <p>{item.title}</p>
            </article>
        </Link>

    )
}
export default Thumb