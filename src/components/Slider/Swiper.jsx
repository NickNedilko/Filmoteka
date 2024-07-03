
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const ImageSwiper = ({images, title}) => {
  return (
   
      <Swiper
          modules={[ Pagination, Navigation, EffectCoverflow]}
          pagination={true}
          navigation={true}
          loop={true}
          grabCursor={true}
          slidesPerView={2}
          effect={'coverflow'}
          centeredSlides={true}
          coverflowEffect={{rotate: 1, stretch: 100, depth: 150, modifier: 3}}
          >
    
              <SwiperSlide >
              <img src={images[0]} alt={title} loading="lazy"/>
          </SwiperSlide>
          <SwiperSlide >
              <img src={images[1]} alt={title} loading="lazy"/>
      </SwiperSlide>
       <SwiperSlide >
              <img src={images[2]} alt={title} loading="lazy"/>
      </SwiperSlide>
       <SwiperSlide >
              <img src={images[3]} alt={title} loading="lazy"/>
      </SwiperSlide>
       <SwiperSlide >
              <img src={images[4]} alt={title} loading="lazy"/>
      </SwiperSlide>
       <SwiperSlide >
              <img src={images[5]} alt={title} loading="lazy"/>
      </SwiperSlide>
       <SwiperSlide >
              <img src={images[6]} alt={title} loading="lazy"/>
      </SwiperSlide>
       <SwiperSlide >
              <img src={images[7]} alt={title} loading="lazy"/>
      </SwiperSlide>
       <SwiperSlide >
              <img src={images[8]} alt={title} loading="lazy"/>
      </SwiperSlide>
       <SwiperSlide >
              <img src={images[9]} alt={title} loading="lazy"/>
      </SwiperSlide>
       <SwiperSlide >
              <img src={images[10]} alt={title} loading="lazy"/>
      </SwiperSlide>
       <SwiperSlide >
              <img src={images[11]} alt={title} loading="lazy"/>
      </SwiperSlide>
       <SwiperSlide >
              <img src={images[12]} alt={title} loading="lazy"/>
            </SwiperSlide>
           
          
          </Swiper>
  )
}

