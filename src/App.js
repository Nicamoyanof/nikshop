import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faUser } from '@fortawesome/free-solid-svg-icons';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
import { AiOutlineMenu, AiOutlineShopping } from "react-icons/ai";
import '../styles/App.css';


export default function App() {

    const [classNavBar, setClassNavBar] = useState('navBar');

    const deployMenu = ()=>{ 
        classNavBar==='navBar' ? 
            setClassNavBar('navBar active')
          : 
          setClassNavBar('navBar');
          console.log(classNavBar);
          
    }



    return (
        <div>
            <header className="headerHome">
                <AiOutlineMenu className='iconHamburger' onClick={()=>deployMenu()} />
                <img src='img/logo.jpgn' className='logoHeader' />
                <form className='searchHeader'>
                    <input type='search' class='inputSearchHeader' placeholder='Buscar' />
                    <IoSearchOutline className='iconSearchHeader' />
                </form>
                <AiOutlineShopping className='shoppingHeader'  />
                <FontAwesomeIcon icon={faComments} className='helpHeader' />
                <FontAwesomeIcon icon={faUser} className='profileHeader' />
            </header>
            <nav className={classNavBar} >
                <IoCloseOutline className='closeNavBar' onClick={()=>deployMenu()}/>
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
            <footer>
                <ul>
                    <li>whatsapp</li>
                    <li>mail</li>
                    <li>ubicaciones</li>
                </ul>
            </footer>
        </div>
    )
}