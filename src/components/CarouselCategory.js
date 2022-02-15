import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ItemProduct from './ItemProduct';
import { useLayoutEffect, useState } from 'react';
import ProductsJson from '../assets/json/Products.json'

export default function CarouselCategory({propEnviar}) {

    const breackpointSwiper = {
        300: {
            width: 300,
            slidesPerView: 1.5,
        },
        375: {
            width: 375,
            slidesPerView: 1.7,
        },
        425: {
            width: 425,
            slidesPerView: 2,
        },
        // when window width is >= 640px
        640: {
            width: 640,
            slidesPerView: 2.8,
        },
        // when window width is >= 768px
        768: {
            width: 768,
            slidesPerView: 3.5,
        },
        1024: {
            width: 1024,
            slidesPerView: 4,
        },
        1440: {
            width: 1440,
            slidesPerView: 5,
        },
    }
    const ProductsJsonFiltrer = ProductsJson;

    const filtrerItems = ProductsJsonFiltrer.filter(item=> item.category == propEnviar)

    return (
        <Swiper className='categoryProductsCategory swiper' spaceBetween={50} breakpoints={breackpointSwiper}>
            {filtrerItems.map(product =>
                <SwiperSlide><ItemProduct key={product.id} name={product.name} price={product.price} img={product.img} /></SwiperSlide>
            )}
        </Swiper>
    )
}