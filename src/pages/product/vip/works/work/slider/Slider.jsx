import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';
import cl from './Slider.module.scss';

const Slider = ({ classNames, sliderCl, slideCl, slides }) => {
  return (
    <div className={`${classNames} ${cl.outer}`}>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        grabCursor={true}
        speed={500}
        pagination={{
          type: 'fraction',
          horizontalClass: cl.pagination,
        }}
        className={`${sliderCl} ${cl.slider} swiper`}
      >
        {slides?.map((slide, i) => (
          <SwiperSlide
            className={`${slideCl} ${cl.slide} swiper-slide`}
            key={i}
          >
            <div className={cl.content}>
              <img
                className={cl.img}
                src={slide}
                // src={`${process.env.REACT_APP_IMAGES_URL}${slide.image_path}`}
                alt="img"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
