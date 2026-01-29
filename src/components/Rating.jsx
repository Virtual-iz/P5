import starActive from '../assets/star-active.png'
import starInactive from '../assets/star-inactive.png'

const Rating = ({ data }) => {
    return (
        <div className="rating">
            {[...Array(5)].map((_, idx) => (
                <img
                    key={`${idx}-rating`}
                    src={idx < data.rating ? starActive : starInactive}
                    alt="star"
                />
            ))}
        </div>
    )
}

export default Rating