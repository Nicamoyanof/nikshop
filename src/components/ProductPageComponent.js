import '../../styles/components/ProductPageComponent.css';
import { BsCreditCard2Back, BsCash } from "react-icons/bs";


export default function ProductPageComponent() {
    return (
        <div className="containerProductPages">
            <div className="containerImages">
                <div className='swiperImages'>
                    <img src="../assets/img/remera.jpg" className='imageProductPage' />
                    <img src="../assets/img/remera.jpg" className='imageProductPage' />
                    <img src="../assets/img/remera.jpg" className='imageProductPage' />
                </div>
                <p className='paginationImg'>1/3</p>
            </div>


            <span className='containerCategoryPages'><p>Inicio &gt; Remeras &gt; Remera Marca X</p></span>
            <h1 className='titleProductPage'>Remera Marca X</h1>
            <h3 className='priceProductPage'>$2500.00</h3>
            <div className='payMethodsProduct'>
                <span className='itemMethodsPay'><BsCreditCard2Back className='iconItemsPay' /> <p className='textMethodsPay'> 6 coutas sin interes de $416.66</p> </span>
                <span className='itemMethodsPay'><BsCreditCard2Back className='iconItemsPay' /> <p className='textMethodsPay'>  6 coutas sin interes de $416.66</p></span>
                <span className='itemMethodsPay'><BsCash className='iconItemsPay cashIcon' /> <p className='textMethodsPay'> 5% de descuento pagando con Transferencia Bancaria</p></span>
            </div>
            <span className='containerColorsProduct'>
                <h4 className='titleColorProduct'>Color</h4>
                <div className='containerBoxColor'>
                    <span className='BoxColor'></span>
                    <span className='BoxColor'></span>
                    <span className='BoxColor'></span>
                </div>
            </span>
            <span className='containerSizeProduct'>
                <h4 className='titleSizeProduct'>Talle</h4>
                <div className='containerBoxSize'>
                    <span className='BoxSize'>XS</span>
                    <span className='BoxSize'>S</span>
                    <span className='BoxSize'>M</span>
                    <span className='BoxSize'>L</span>
                    <span className='BoxSize'>XL</span>
                    <span className='BoxSize'>XXL</span>
                    <span className='BoxSize'>XXXL</span>
                </div>
            </span>
            <div className='quintityProduct'>Cantiddad</div>
            <button className='btnAddShopping'>Agregar al carriot</button>
            <span className='formShipping'>Envio</span>
            <div className='moreInfo'>Mas info</div>
        </div>
    )
}