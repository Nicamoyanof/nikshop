import '../../styles/components/ItemProduct.css'

export default function ItemProduct() {
    return (
        <article className="containerProduct">
            <img src="assets/img/remera.jpg" className='imgProduct'/>
            <div className="descriptionProduct">
                <h1 className="titleProduct">REMERA MARCA X </h1>
                <h4 className="priceProduct">$2500.00</h4>
                <p className="cardProduct">Hata 6 coutas sin interes</p>
                <button className='bottomProduct infoItem'>VER PRODUCTO</button>
                <button className='bottomProduct addShopping'>AÑADIR AL CARRITO</button>
            </div>
        </article>
    )
}