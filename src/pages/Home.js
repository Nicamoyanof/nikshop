import ContainerCarouselCategory from "../components/ContainerCarouselCategory";
import '../../styles/pages/Home.css'


export default function Home() {
    return (
        <main className="mainContainer">
            <ContainerCarouselCategory />
            <ContainerCarouselCategory />
            <ContainerCarouselCategory />
        </main>
    )
}