import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ItemProduct from './ItemProduct';

export default function CarouselCategory() {
    return (
        <Swiper className='categoryProductsCategory'  >
            <SwiperSlide><ItemProduct /></SwiperSlide>
            <SwiperSlide><ItemProduct /></SwiperSlide>
            <SwiperSlide><ItemProduct /></SwiperSlide>
            <SwiperSlide><ItemProduct /></SwiperSlide>
            <SwiperSlide><ItemProduct /></SwiperSlide>
            <SwiperSlide><ItemProduct /></SwiperSlide>
            <SwiperSlide><ItemProduct /></SwiperSlide>
            <SwiperSlide><ItemProduct /></SwiperSlide>
            <SwiperSlide><ItemProduct /></SwiperSlide>
        </Swiper>
    )
}