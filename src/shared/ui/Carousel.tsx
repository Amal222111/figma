// Carousel.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Carousel.css';

export default function Carousel() {
    return (
        <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
            loop={true} // бесконечный цикл
        >
            <SwiperSlide className="flex justify-center items-center bg-gray-100">
                <img 
                    src="./public/Tabpanel.png" 
                    alt="Slide 1" 
                    className="w-full h-auto object-contain" 
                />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center bg-gray-100">
                <img 
                    src="./public/Tabpanel2.png" 
                    alt="Slide 2" 
                    className="w-full h-auto object-contain" 
                />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center bg-gray-100">
                <img 
                    src="./public/Tabpanel3.png" 
                    alt="Slide 3" 
                    className="w-full h-auto object-contain" 
                />
            </SwiperSlide>
        </Swiper>
    );
}