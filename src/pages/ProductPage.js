import ProductPageComponent from '../components/ProductPageComponent';
import '../assets/img/remera.jpg';
import ProductsJson from '../assets/json/Products.json'

export default function ProductPage() {


    const urlProduct = window.location.href.split('/')[4]

    const ProductsJsonFiltrer = ProductsJson;

    const filtrerItems = ProductsJsonFiltrer.filter(item=> item.url == urlProduct);

    return (
        <main>
            <ProductPageComponent urlProducto={filtrerItems[0].id} />
            <h5 className="moreProductsRelation">Productos Relacionados</h5>

        </main>
    )
}