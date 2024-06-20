import MySection from '@components/_UI/MySection';
import cl from './Hero.module.scss';
import { useSelector } from 'react-redux';
import {
  productSel,
} from '@store/slices/product/productSlice';
import SellerLink from '@components/sellerLink/SellerLink';
import Breadcrumbs from '@components/breadcrumbs/Breadcrumbs';

const Hero = () => {
  const { product } = useSelector(productSel);

  return (
    <MySection classNames={cl.hero} innerCl={cl.inner}>
      <img className={cl.img} src={product.gallery[0]} alt="hero img" />
      <div className={cl.info}>
        <h1 className={cl.title}>{product.name}</h1>
        <p className={cl.subtitle}>{product.unique_trading_offers[0].name}</p>
      </div>
      <SellerLink classNames={cl.seller} />
      <Breadcrumbs classNames={cl.crumbs} linkCl={cl.crumbs_link} />
    </MySection>
  );
};

export default Hero;
