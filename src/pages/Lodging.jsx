import '../styles/Lodging.scss'
import { useParams } from "react-router-dom"
import data from "../datas/logements.json"
import Drop from "../components/Drop"
import Tag from "../components/Tag"
import Carrousel from '../components/Carrousel'
import TagContainer from '../components/TagsContainer'
import Host from '../components/Host'

const Lodging = () => {

    const { id } = useParams()
    let lodging

    if (id) {
        lodging = data.find(item => item.id === id)
    }

    console.log(lodging)

    return (
        <main className="lodging">

            <Carrousel>
                {lodging.pictures}
            </Carrousel>  

            <section>
                <article>
                    <h2>{lodging.title}</h2>
                    <p>{lodging.location}</p>
                    <TagContainer className='tags-container'>
                        <Tag>{lodging.tags}</Tag>
                        <Tag>{lodging.tags}</Tag>
                        <Tag>{lodging.tags}</Tag>
                    </TagContainer>
                </article>
                <aside>
                    <Host></Host>
                    <div>{lodging.rating}</div>
                </aside>
            </section>

            <section>
                <article>
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