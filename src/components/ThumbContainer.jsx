import '../styles/ThumbContainer.scss'
import Thumb from "../components/Thumb"
import data from "../datas/logements.json"

const ThumbContainer = () => {
    return (
        <section className="thumb-container">
            {data.map((item, index) => <Thumb key={`${index}-thumb`} item={item} />)}
        </section>
    )
}
export default ThumbContainer