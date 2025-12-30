import '../styles/DropContainer.scss'
import Drop from "../components/Drop"


const DropContainer = () => {
    return (
        <section className="drop-container">
            <Drop>Fiabilité</Drop>
            <Drop>Respect</Drop>
            <Drop>Service</Drop>
            <Drop>Sécurité</Drop>
        </section>
    )
}
export default DropContainer