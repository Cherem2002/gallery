import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import one from './1.jpg';
import two from './2.jpg';
import three from './3.jpg';
import four from './4.jpg';
import five from './5.jpg';
import 'swiper/css';
import './cl.css'

const Cl = () => {

    return (
        <div className='class'>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img className="swiper-image" src={one} alt='Картина 1' />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-image" src={two} alt='Картина 2' />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-image" src={three} alt='Картина 3' />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-image" src={four} alt='Картина 3' />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-image" src={five} alt='Картина 3' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
export default Cl;