import { useState, useEffect } from 'react';
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faUser } from '@fortawesome/free-solid-svg-icons';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
import { AiOutlineMenu, AiOutlineShopping } from "react-icons/ai";
import '../styles/App.css';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import { Link } from "react-router-dom";

export default function App() {


    const [classNavBar, setClassNavBar] = useState('navBar');

    const deployMenu = () => {
        classNavBar === 'navBar' ?
            setClassNavBar('navBar active')
            :
            setClassNavBar('navBar');
        console.log(classNavBar);

    }


    return (
        <div className='containerApp'>
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
                        <AiOutlineShopping />
                        <figcaption className='textUtilities'>  Mi Carrito  </figcaption>
                    </figure>
                </div>

            </header>
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
                <Route exact path="/about"  element={<ProductPage />} />
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