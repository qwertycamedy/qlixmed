import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle'

import cl from './Big.module.scss';

const Big = ({ classNames, sliderCl, slideCl, slides }) => {
  return (
    <div className={`${classNames} ${cl.outer}`}>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        grabCursor={true}
        speed={500}
        pagination={{
          type: 'fraction',
          horizontalClass: cl.pagination
        }}
        className={`${sliderCl} ${cl.slider} swiper`}
      >
        {slides?.map((slide) => (
          <SwiperSlide
            className={`${slideCl} ${cl.slide} swiper-slide`}
            key={slide.id}
          >
            <div className={cl.content}>
              <img className={cl.img} src={`${process.env.REACT_APP_IMAGES_URL}${slide.image_path}`} alt="img" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Big;
