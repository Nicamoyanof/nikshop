import { Link } from "react-router-dom";
import '../../styles/components/ItemProduct.css'


export default function ItemProduct() {
    return (
        <article className="containerProduct">
            <Link to='/about'><img src="assets/img/remera.jpg" className='imgProduct' /></Link>
            
            <div className="descriptionProduct">
                <Link to="/about" className="containerTitleProduct"><h1 className="titleProduct">REMERA MARCA X </h1></Link>
                <h4 className="priceProduct">$2500.00</h4>
                <p className="cardProduct">Hata 6 coutas sin interes</p>
                <Link to="/about" className='btnProduct infoItem'>VER PRODUCTO</Link>
                <button className='btnProduct addShopping'>AÑADIR AL CARRITO</button>
            </div>
        </article>
    )
}