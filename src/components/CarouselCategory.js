import { useState } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import '../../styles/components/CarouselCategory.css';
import ItemProduct from "../components/ItemProduct";

export default function CarouselCategory() {

    const [styleCarousel, setStyleCarousel] = useState(0)

    const ArrowRight = ()=>{ 
        
    }
    const style ={
        marginLeft: `${styleCarousel}px`,
    }
    return (
        <div className="containerCategory">
            <h2 className='titleCategory'>Remeras</h2>
            <MdOutlineKeyboardArrowLeft className='arrowCarrouselCategory arrowLeft' />
            <div className='categoryProductsCategory' style={style}>
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
            </div>
            <MdOutlineKeyboardArrowRight className='arrowCarrouselCategory arrowRigth' onClick={()=>setStyleCarousel(styleCarousel-200)} />
        </div>
    )
}