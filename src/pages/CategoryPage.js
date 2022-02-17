import { useState, useEffect } from 'react';
import FilterColor from "../components/FilterColor";
import FilterSize from "../components/FilterSize";
import ItemProduct from "../components/ItemProduct";
import '../../styles/pages/CategoryPage.css';
import { FaFilter } from "react-icons/fa";
import { IoCloseOutline } from 'react-icons/io5';
import { BrowserRouter as Switch, useParams, Navigate } from "react-router-dom";
import ProductJson from '../assets/json/Products.json'



export default function CategoryPage() {

    const { nameCategory } = useParams();

    useEffect(() => {
        urlCoincide();
    });



    const categoriasLista = [
        {
            category: 'Remeras'
        },
        {
            category: 'Buzo'
        },
        {
            category: 'Jean'
        },
        {
            category: 'Accesorio'
        }
    ]

    
    
    const [filterCard, setFilterCard] = useState('containerFilterProducts');
    
    const filterCardFuntion = () => {
        if (filterCard === 'containerFilterProducts') {
            setFilterCard('containerFilterProducts active')
        } else {
            setFilterCard('containerFilterProducts');
        }
        
    }


    const [coincideUrl, setCoincideUrl] = useState(true);
    
    const urlCoincide = () => {
        for (var i = 0; i < categoriasLista.length; i++) {
            if (categoriasLista[i].category.toLowerCase() == nameCategory.toLowerCase()) {
                setCoincideUrl(true)
                return
            } else {
                setCoincideUrl(false)
            }
        }
    }



    const filterItems = ProductJson.filter(item=> item.category == nameCategory);

    
    if (coincideUrl) {
        return (
            <main className="mainContainerCategoryPage">
                <span className="controlFilterCategory">
                    <p className="routeCategory">Inicio &gt; {nameCategory}</p>
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
                <h3 className='titleCategoryPage'>{nameCategory.toUpperCase()}</h3>
                <div className='containerFilterAndProduct'>
                    <div className={filterCard}>
                        <span className='containerTitleFilter'>
                            <IoCloseOutline className="iconCloseFilter" onClick={() => filterCardFuntion()} />
                            <h4 className='titleFilterMobile'>FILTROS</h4>
                        </span>
                        <FilterColor prodCat={nameCategory} />
                        <FilterSize prodCat={nameCategory} />
                    </div>
                    <div className='containerProductsFilterPage'>
                        {filterItems.map(item =>
                            <div className='productFilterPage'>
                                <ItemProduct url={item.url} img={item.img} name={item.name} price={item.price} />
                            </div>

                        )}
                    </div>
                </div>

            </main>
        )
    }
    else {
        return (
            <>
                <Navigate to="/" />
            </>
        )
    }

}
