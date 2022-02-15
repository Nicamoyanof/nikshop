import '../../styles/components/ContainerCarouselCategory.css';
import '../assets/img/remera.jpg';
import CarouselCategory from './CarouselCategory';


export default function ContainerCarouselCategory(props) {


    

    return (
        <div className="containerCategory">
            <h2 className='titleCategory'>{props.category}</h2>
            <CarouselCategory propEnviar={props.category} />
        </div>
    )
}