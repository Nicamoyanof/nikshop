import { useState } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import '../../styles/components/ContainerCarouselCategory.css';
import ItemProduct from "./ItemProduct";
import '../assets/img/remera.jpg';
import CarouselCategory from './CarouselCategory';


export default function ContainerCarouselCategory() {
    return (
        <div className="containerCategory">
            <h2 className='titleCategory'>Remeras</h2>
            <CarouselCategory />
        </div>
    )
}