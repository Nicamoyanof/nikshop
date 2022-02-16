import '../../styles/components/ProductPageComponent.css';
import { BsCreditCard2Back, BsCash, BsTruck } from "react-icons/bs";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import '../assets/img/remera.jpg';
import ProductsJson from '../assets/json/Products.json'


export default function ProductPageComponent({urlProducto}) {
    const ProductsJsonFilter = ProductsJson;

    const filterItems = ProductsJsonFilter.filter(item=> item.id == urlProducto)

    console.log(filterItems)

    return (
        <div className="containerProductPages">
            <div className="containerImages">
                <img src={filterItems[0].img} className='imageProductPrincipal' />
                <div className='swiperImages'>
                    <img src={filterItems[0].img} className='imageProductPage' />
                    <img src={filterItems[0].img} className='imageProductPage' />
                    <img src={filterItems[0].img} className='imageProductPage' />
                    <img src={filterItems[0].img} className='imageProductPage' />
                    <img src={filterItems[0].img} className='imageProductPage' />
                    <img src={filterItems[0].img} className='imageProductPage' />
                    <img src={filterItems[0].img} className='imageProductPage' />
                    <img src={filterItems[0].img} className='imageProductPage' />
                    <img src={filterItems[0].img} className='imageProductPage' />
                </div>
                <p className='paginationImg'>1/3</p>
            </div>
            <div className='containerInfoProductPage'>
                <span className='containerCategoryPages'><p>Inicio &gt; Remeras &gt; Remera Marca X</p></span>
                <h1 className='titleProductPage'> {filterItems[0].name} </h1>
                <h3 className='priceProductPage'>{filterItems[0].price}</h3>
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
                <div className='quintityProduct'>
                    <span className='boxAddproduct'>
                        <GrFormSubtract className='iconAddProducts' />
                        <p className='quantityProductsAdd'>1</p>
                        <GrFormAdd className='iconAddProducts' />
                    </span>
                    <button className='btnAddShopping'>AGREGAR AL CARRITO</button>
                </div>
                <div className='formShipping'>
                    <span className='containerTextShipping'> <BsTruck className='iconTruckShipping' /> <p className='textMethodsShipping'>Medio de envio</p> </span>
                    <form className='formAddress'>
                        <input type="text" className='inputCodeAddress' placeholder="Tu codigo postal" />
                        <input type="submit" className='btnSubmitAddress' value="CALCULAR" />
                    </form>
                    <p className='moreInfoAddress'>No se mi codigo postal</p>
                </div>
            </div>

        </div>
    )
}