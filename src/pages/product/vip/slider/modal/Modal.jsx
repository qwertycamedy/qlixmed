import { forwardRef, useRef } from "react";

import MyModal from "@components/_UI/modal/MyModal";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderBtn from "@components/_UI/slider/sliderBtn/SliderBtn";

import cl from "./Modal.module.scss";
import { useSelector } from "react-redux";
import { productSel, setModalIsOpen } from "@store/slices/product/productSlice";
import useWindowWidth from "@hooks/windowWidth";

const Modal = forwardRef(
  (
    {
      sliderCl,
      slideCl,
      slides,
      slider1,
      slider2,
    },
    ref
  ) => {
    const {modalIsOpen} = useSelector(productSel);

    const windowWidth = useWindowWidth();


    const goPrev = useRef(null);
    const goNext = useRef(null);

    return (
      <MyModal modalCl={cl.modal} innerCl={`${cl.inner}`} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          grabCursor={true}
          speed={500}
          navigation={{
            prevEl: goPrev.current,
            nextEl: goNext.current,
          }}
          onSwiper={swiper => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = goPrev.current;
              swiper.params.navigation.nextEl = goNext.current;

              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          onSlideChange={swiper => {
            slider2.current.swiper.slideTo(swiper.activeIndex);
            windowWidth >= 1280 && slider1.current.swiper.slideTo(swiper.activeIndex);
          }}
          ref={ref}
          className={`${sliderCl} ${cl.slider} slider swiper`}
        >
          {slides.map(slide => (
            <SwiperSlide
              className={`${slideCl} ${cl.slide} slider-slide swiper-slide`}
              key={slide.id}
            >
              <div className={cl.content}>
                <img className={cl.img} src={slide.img} alt="img" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
          <div className={`${cl.nav} slider-nav`}>
            <SliderBtn classNames={`${cl.prev} prev`} ref={goPrev} />
            <SliderBtn classNames={`${cl.next} next`} ref={goNext} />
          </div>
      </MyModal>
    );
  }
);

export default Modal;
