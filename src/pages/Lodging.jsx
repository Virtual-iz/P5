import '../styles/Lodging.scss'
import { useParams } from "react-router-dom"
import data from "../datas/logements.json"
import Drop from "../components/Drop"
import Carrousel from '../components/Carrousel'
import TagContainer from '../components/TagsContainer'
import Host from '../components/Host'
import ErrorPage from './ErrorPage'

const Lodging = () => {

    const { id } = useParams()
    let lodging

    if (id) {
        lodging = data.find(item => item.id === id)
    }

    if (!lodging) {
        return <ErrorPage />
    }

    console.log(lodging)

    return (
        <main className="lodging">

            <Carrousel data={lodging} />

            <section>
                <article>
                    <h2>{lodging.title}</h2>
                    <p>{lodging.location}</p>
                    <TagContainer className='tags-container' data={lodging.tags} />
                </article>
                <article>     
                    <Host data={lodging}></Host>
                </article>
            </section>

            <section>
                <article >
                    <Drop
                        title="Description"
                        dropcontent={lodging.description}>
                    </Drop>
                </article>
                <article>
                    <Drop 
                        title="Equipements"
                        dropcontent={lodging.equipments}>
                    </Drop>
                </article>
            </section>

        </main>
    )
}

export default Lodging