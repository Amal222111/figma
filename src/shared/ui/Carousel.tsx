import { Swiper, SwiperSlide } from 'swiper/react';



import './Carousel.css';


import { Pagination } from 'swiper/modules';


export default function Carousel() {
    const pagination = {
        clickable: true,
        renderBullet: function (index:any, className: any) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="./public/122.png" alt="01" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./public/Tabpanel.png" alt="02" />
                </SwiperSlide>
            </Swiper>
            
        </>
    );
}