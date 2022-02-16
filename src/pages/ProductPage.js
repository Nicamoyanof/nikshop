import ProductPageComponent from '../components/ProductPageComponent';
import '../assets/img/remera.jpg';
import ProductsJson from '../assets/json/Products.json'

export default function ProductPage() {


    const urlProduct = window.location.href.split('/')[4]

    const ProductsJsonFilter = ProductsJson;

    const filterItems = ProductsJsonFilter.filter(item=> item.url == urlProduct);

    return (
        <main>
            <ProductPageComponent urlProducto={filterItems[0].id} />
            <h5 className="moreProductsRelation">Productos Relacionados</h5>

        </main>
    )
}