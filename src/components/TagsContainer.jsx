import '../styles/TagsContainer.scss'
import Tag from "../components/Tag"

const TagContainer = ({ data }) => {
    return (
        <div className="tags-container">
            {data.map((item, index) => <Tag key={`${index}-tag`} item={item} />)}
        </div>
    )
}
export default TagContainer