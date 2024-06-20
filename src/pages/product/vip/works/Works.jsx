import MySection from '@components/_UI/MySection';
import cl from './Works.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';
import Work from './work/Work';
import { useDispatch, useSelector } from 'react-redux';
import {
  getWorks,
  productSel,
  setCurWork,
  setWorkModalIsOpen,
} from '@store/slices/product/productSlice';
import { disableScroll } from '@hooks/disableScroll';
import { useEffect } from 'react';

const Works = () => {
  const dispatch = useDispatch();
  const { workModalIsOpen, works, product, curWork } = useSelector(productSel);

  useEffect(() => {
    dispatch(getWorks({ card_id: product.id }));
  }, [dispatch, product]);

  const onModal = (work) => {
    disableScroll();
    dispatch(setWorkModalIsOpen(true));
    dispatch(setCurWork(work));
  };

  return (
    <MySection classNames={cl.works} innerCl={cl.inner} id={'works'}>
      <h3 className={cl.title + ' title title-section'}>наши работы</h3>
      <div className={`${cl.slider_outer}`}>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={14}
          grabCursor={true}
          speed={500}
          className={` ${cl.slider} swiper`}
          breakpoints={{
            1170: {
              spaceBetween: 30
            }
          }}
        >
          {works?.map((work) => (
            <SwiperSlide
              className={` ${cl.slide} swiper-slide`}
              key={work.id}
              onClick={() => onModal(work)}
            >
              <div className={cl.content}>
                <img className={cl.img} src={work.gallery[0]} alt="img" />
                <div className={cl.info}>
                  <p className={cl.cat}>{work.name}</p>
                  <p className={cl.descr} dangerouslySetInnerHTML={{ __html: work.description }} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Work
          modalIsOpen={workModalIsOpen}
          setModalIsOpen={setWorkModalIsOpen}
          curWork={curWork}
        />
      </div>
    </MySection>
  );
};

export default Works;
