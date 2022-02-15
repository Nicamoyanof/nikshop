import ContainerCarouselCategory from "../components/ContainerCarouselCategory";
import '../../styles/pages/Home.css';
import ArrayCategory from "../utils/ArrayCategory";


export default function Home() {

    const objeto1 = [
        {
            category: 'Remeras'
        },
        {
            category: 'Buzo'
        },
        {
            category: 'Jean'
        },
        {
            category: 'Accesorio'
        }
    ]

    console.log(
        ArrayCategory, objeto1
    )

    return (
        <main className="mainContainer">
            {objeto1.map(item =>
                <ContainerCarouselCategory category ={item.category} />
            )}
        </main>
    )
}