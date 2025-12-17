import Banner from "../components/Banner"
import ThumbContainer from "../components/ThumbContainer"
import Thumb from "../components/Thumb"

const Home = () => {
    return (
    <main>
        <Banner />
        <ThumbContainer>
            <Thumb/>
            <Thumb/>
            <Thumb/>
            <Thumb/>
            <Thumb/>
            <Thumb/>
        </ThumbContainer>
    </main>
    )
}

export default Home