import { useState, useEffect } from 'react';
import FilterColor from "../components/FilterColor";
import FilterSize from "../components/FilterSize";
import ItemProduct from "../components/ItemProduct";
import '../../styles/pages/CategoryPage.css';
import { FaFilter } from "react-icons/fa";
import { IoCloseOutline } from 'react-icons/io5';


export default function CategoryPage() {

    const [filterCard, setFilterCard] = useState('containerFilterProducts');

    const filterCardFuntion = () => {
        if (filterCard === 'containerFilterProducts') {
            setFilterCard('containerFilterProducts active')
        } else {
            setFilterCard('containerFilterProducts');
        }

    }


    return (
        <main className="mainContainerCategoryPage">
            <span className="controlFilterCategory">
                <p className="routeCategory">Inicio &gt; Categoria</p>
                <span className="containerInputsFilter">
                    <button className="btnFilter" onClick={() => filterCardFuntion()}>FILTRAR <FaFilter className="iconFilterBtn" /> </button>
                    <select className="selectOrderProducts">
                        <option value="" className="itemOrderProduct">Precio: Menor a Mayor</option>
                        <option value="" className="itemOrderProduct">Precio: Mayor a Menor</option>
                        <option value="" className="itemOrderProduct">A - Z</option>
                        <option value="" className="itemOrderProduct">Z - A</option>
                        <option value="" className="itemOrderProduct">Nuevo a Viejo</option>
                        <option value="" className="itemOrderProduct">Viejo a Nuevo</option>
                        <option value="" className="itemOrderProduct">Mas Vendidos</option>
                    </select>
                </span>

            </span>
            <h3 className='titleCategoryPage'>Categoria</h3>
            <div className='containerFilterAndProduct'>
                <div className={filterCard}>
                    <span className='containerTitleFilter'>
                        <IoCloseOutline className="iconCloseFilter" onClick={() => filterCardFuntion()} />
                        <h4 className='titleFilterMobile'>FILTROS</h4>
                    </span>
                    <FilterColor />
                    <FilterSize />
                </div>
                <div className='containerProductsFilterPage'>
                    <div className='productFilterPage'>
                        <ItemProduct url={'/'} img={'./assets/img/remera.jpg'} name={'Remera Marca X'} price={'$2500'} />
                    </div>
                    <div className='productFilterPage'>
                        <ItemProduct url={'/'} img={'./assets/img/remera.jpg'} name={'Remera Marca X'} price={'$2500'} />
                    </div>
                    <div className='productFilterPage'>
                        <ItemProduct url={'/'} img={'./assets/img/remera.jpg'} name={'Remera Marca X'} price={'$2500'} />
                    </div>
                    <div className='productFilterPage'>
                        <ItemProduct url={'/'} img={'./assets/img/remera.jpg'} name={'Remera Marca X'} price={'$2500'} />
                    </div>
                    <div className='productFilterPage'>
                        <ItemProduct url={'/'} img={'./assets/img/remera.jpg'} name={'Remera Marca X'} price={'$2500'} />
                    </div>
                    <div className='productFilterPage'>
                        <ItemProduct url={'/'} img={'./assets/img/remera.jpg'} name={'Remera Marca X'} price={'$2500'} />
                    </div>
                    <div className='productFilterPage'>
                        <ItemProduct url={'/'} img={'./assets/img/remera.jpg'} name={'Remera Marca X'} price={'$2500'} />
                    </div>
                    <div className='productFilterPage'>
                        <ItemProduct url={'/'} img={'./assets/img/remera.jpg'} name={'Remera Marca X'} price={'$2500'} />
                    </div>
                </div>
            </div>

        </main>
    )
}
