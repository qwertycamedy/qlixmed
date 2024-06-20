import MyPage from '@components/_UI/MyPage';
import { useParams } from 'react-router-dom';
import cl from './ProductPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getIdOfServiceBySlug,
  getInfoOfServiceSeller,
  productSel,
} from '@store/slices/product/productSlice';
import Header from '@components/product/header/Header';
import Bar from './bar/Bar';
import Hero from './vip/hero/Hero';
import About from './vip/about/About';
import Advantages from './vip/advantages/Advantages';
import Price from './vip/price/Price';
import Works from './vip/works/Works';
import Reviews from './vip/reviews/Reviews';
import Contacts from './vip/contacts/Contacts';
import MainInfo from './standart/mainInfo/MainInfo';
import Descr from './standart/descr/Descr';
import PriceStandart from './standart/price/Price';
import ReviewsStandart from './standart/reviews/Reviews';
import Footer from '@components/footer/Footer';
import Head from './standart/head/Head';
import NotFound from '@components/_UI/notFound/NotFound';
import { loadStatus } from '@store/loadStatus';

const ProductPage = () => {
  const { userSlug, serviceSlug } = useParams();
  const dispatch = useDispatch();
  const { product, productLoadStatus } = useSelector(productSel);

  useEffect(() => {
    dispatch(
      getIdOfServiceBySlug({ user_slug: userSlug, service_slug: serviceSlug }),
    );
  }, [dispatch, userSlug, serviceSlug]);

  useEffect(() => {
    if (product) {
      if (product.card_type !== 'VIP') {
        const sections = document.querySelectorAll('.section');
        const titleBlock = document.querySelectorAll('.title-block');
        document.body.style.background = '#F5F5F5';

        sections.forEach((item) => {
          item.style.marginBottom = '0';
        });
        titleBlock.forEach((item) => {
          item.classList.add('title-block-standart');
        });
      }
      dispatch(getInfoOfServiceSeller({ user_id: product.user_id }));
    }
  }, [dispatch, product]);

  console.log(productLoadStatus);

  return (
    <>
      <MyPage
        classNames={cl.page}
        metaTitle={`${
          product?.company_name ? product.company_name : 'Qlix.kz'
        }`}
        metaDescr={`${product?.description ? product.description : 'Qlix.kz'}`}
      >
        {productLoadStatus === loadStatus.fulfilled ? (
          <>
            {product.card_type === 'VIP' ? (
              <>
                <Header
                  companyNameNeed={true}
                  burgerNeed={true}
                  companyName={product.company_name}
                  headerCl={cl.header}
                  innerCl={cl.header_inner}
                />

                <Hero />
                <About />
                <Advantages />
                <Price />
                <Works />
                <Reviews />
                <Contacts />
              </>
            ) : (
              <>
                <Head />
                <MainInfo />
                <Descr />
                <PriceStandart />
                <ReviewsStandart />
                <Footer />
              </>
            )}

            <Bar />
          </>
        ) : productLoadStatus === loadStatus.rejected ? (
          <NotFound
            classNames={cl.notFound}
            title={'Страница не найдена'}
            subtitle={
              'Данная страница не найдена. Скорее всего Вы ошиблись с запросом. Если же нет, то обратитесь за помощью к службе поддержки'
            }
            innerCl={cl.notFound_inner}
            titleCl={cl.notFound_title}
            subtitleCl={cl.notFound_subtitle}
            goBackNeed={true}
          />
        ) : (
          productLoadStatus === loadStatus.pending && (
            <NotFound
              classNames={cl.notFound}
              innerCl={cl.notFound_inner}
              title={'Загрузка'}
              subtitle={'Идет загрузка страницы, нужно самую малость подождать'}
            />
          )
        )}
      </MyPage>
    </>
  );
};

export default ProductPage;
