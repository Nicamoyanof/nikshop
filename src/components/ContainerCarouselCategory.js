import { useState } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import '../../styles/components/ContainerCarouselCategory.css';
import ItemProduct from "./ItemProduct";
import '../assets/img/remera.jpg'

export default function ContainerCarouselCategory() {

    const [styleCarousel, setStyleCarousel] = useState(0)

    const ArrowRight = ()=>{ 
        if (styleCarousel==1000){
            setStyleCarousel(0);
            console.log("cero")
        }
        else{
            setStyleCarousel(styleCarousel-200);
        }
    }
    const ArrowLeft = ()=>{ 
        if (styleCarousel==0){
            setStyleCarousel(0);
        }
        else{
            setStyleCarousel(styleCarousel+200);
        }
    }

    const styleScroll ={
        marginLeft: `${styleCarousel}px`,
    }
    return (
        <div className="containerCategory">
            <h2 className='titleCategory'>Remeras</h2>
            <MdOutlineKeyboardArrowLeft className='arrowCarrouselCategory arrowLeft' onClick={ArrowLeft}/>
            <div className='categoryProductsCategory' style={styleScroll} >
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
            </div>
            <MdOutlineKeyboardArrowRight className='arrowCarrouselCategory arrowRigth' onClick={ArrowRight} />
        </div>
    )
}