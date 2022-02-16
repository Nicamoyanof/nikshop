import { useState, useEffect } from 'react';
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faUser } from '@fortawesome/free-solid-svg-icons';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
import { AiOutlineMenu, AiOutlineShopping } from "react-icons/ai";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { BiTrash } from "react-icons/bi";
import '../styles/App.css';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import { Link } from "react-router-dom";
import './assets/img/remera.jpg';
import './assets/img/accesorio.jpg';
import './assets/img/jean.jpg';
import './assets/img/buzo.jpg';

export default function App() {


    const [classNavBar, setClassNavBar] = useState('navBar');

    const deployMenu = () => {
        if (classNavBar === 'navBar' ){
            setClassNavBar('navBar active')
            setOverlayModalStyle('block')
        }else{
            setClassNavBar('navBar');
            setOverlayModalStyle('none')
        }

    }

    const [cartShop, setCartShop] = useState('containerCartList');

    const deployCartShop = () => {
        if (cartShop === 'containerCartList' ){
            setCartShop('containerCartList active')
            setOverlayModalStyle('block')
        }else{
            setCartShop('containerCartList');
            setOverlayModalStyle('none')
        }

    }

    document.addEventListener("click", function(e){
        var clic = e.target;
        if(clic == document.querySelector('.overlayModal')){
         if (cartShop === 'containerCartList active' ){
            setCartShop('containerCartList');
            setOverlayModalStyle('none')
         }else if (classNavBar === 'navBar active'){
            setClassNavBar('navBar');
            setOverlayModalStyle('none')
         }
        }
        }, false);

    const [overlayModalStyle, setOverlayModalStyle] = useState('none');


    const styleModal = {
        display: overlayModalStyle,
    }

    return (
        <div className='containerApp' >
            <div className='overlayModal' style={styleModal}></div>
            <header className="headerHome">
                <AiOutlineMenu className='iconHamburger' onClick={() => deployMenu()} />
                <Link to='/'> <img src='assets/img/logo.jpg' className='logoHeader' /> </Link>

                <form className='searchHeader'>
                    <input type='search' class='inputSearchHeader' placeholder='Buscar' />
                    <IoSearchOutline className='iconSearchHeader' />
                </form>
                <div className='utilitiesContainer'>
                    <figure className='figureContainer helpHeader'>
                        <FontAwesomeIcon icon={faComments} />
                        <figcaption className='textUtilities'>  Ayuda  </figcaption>
                    </figure>
                    <figure className='figureContainer profileHeader'>
                        <FontAwesomeIcon icon={faUser} />
                        <figcaption className='textUtilities'>  Mi Perfil  </figcaption>
                    </figure>
                    <figure className='figureContainer shoppingHeader' >
                        <AiOutlineShopping className='iconCartShopping' onClick={() => deployCartShop()} />
                        <figcaption className='textUtilities' onClick={() => deployCartShop()} >  Mi Carrito  </figcaption>
                    </figure>
                </div>
            </header>


            <div id='menuCartShop' className={cartShop}>
                <span className='containerTitleCartList'>
                    <IoCloseOutline className='bntCloseCart' onClick={() => deployCartShop()}  />
                    <h4 className='titleCartList'>Mi Carrito de Compras</h4>
                </span>
                <div className='cartPreductAdd'>
                    <article>
                        <img src="assets/img/remera.jpg" className='' />
                        <span>
                            <h6>Remera Marca X</h6>
                            <div>
                                <span className='boxAddproduct'>
                                    <GrFormSubtract className='iconAddProducts' />
                                    <p className='quantityProductsAdd'>1</p>
                                    <GrFormAdd className='iconAddProducts' />
                                </span>
                                <h6>$2500.00</h6>
                            </div>
                        </span>
                        <BiTrash />
                    </article>
                </div>
                <span className='cartVoid'>
                    <h6 className='titleCartVoid'>No hay productos en tu carrito</h6>
                    <button className='btnStartShop'>INICIAR COMPRA</button>
                </span>

            </div>




            <nav className={classNavBar} >
                <IoCloseOutline className='closeNavBar' onClick={() => deployMenu()} />
                <ul className='listNavBar'>
                    <li className='itemListNavBar'>
                        Remeras
                    </li>
                    <li className='itemListNavBar'>
                        Buzos y Hoodies
                    </li>
                    <li className='itemListNavBar'>
                        Jeans
                    </li>
                    <li className='itemListNavBar'>
                        Accesorios
                    </li>
                </ul>
            </nav>
            <span className='generateMarginBottom'></span>

            <Routes >
                <Route path="/" element={<Home />} />
                <Route exact path="/:name" element={<ProductPage />} />
            </Routes>


            <footer className="footer">
                <ul>
                    <li>Whatsapp</li>
                    <li>Mail</li>
                    <li>UBicaciones</li>
                </ul>
            </footer>
        </div>
    )
}