import Banner from "../components/Banner"
import ThumbContainer from "../components/ThumbContainer"
import banner1 from '../assets/banner1.png'

const Home = () => {
    return (
        <main>
            <Banner img={banner1} title="Chez vous, partout et ailleurs" />
            <ThumbContainer></ThumbContainer>
        </main>
    )
}

export default Home