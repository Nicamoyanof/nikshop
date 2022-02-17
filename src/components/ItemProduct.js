import { Link } from "react-router-dom";
import '../../styles/components/ItemProduct.css'


export default function ItemProduct(props) {
    return (
        <article className="containerProduct">
            <Link to={`/${props.url}`}><img src={props.img} className='imgProduct' /></Link>
            
            <div className="descriptionProduct">
                <Link to={`/${props.url}`} className="containerTitleProduct"><h1 className="titleProduct">{props.name}</h1></Link>
                <h4 className="priceProduct">{props.price}</h4>
                <p className="cardProduct">Hata 6 coutas sin interes</p>
                <Link to={`/${props.url}`} className='btnProduct infoItem'>VER PRODUCTO</Link>
                <button className='btnProduct addShopping'>AÑADIR AL CARRITO</button>
            </div>
        </article>
    )
}