import MySection from '@components/_UI/MySection';
import cl from './Advantages.module.scss';
import { useSelector } from 'react-redux';
import { productSel } from '@store/slices/product/productSlice';

const Advantages = () => {
  const {product} = useSelector(productSel);
  return (
    <MySection id={'advantages'}>
      <h3 className={cl.title + ' title title-section'}>почему <br/> выбирают нас</h3>
      <div className={cl.advs}>
        {product.unique_trading_offers?.map((adv, i) => (
          <div className={cl.adv} key={i}>
            <div className={cl.ico_border}>
              <div className={cl.ico_outer}>
                <img className={cl.ico} src={adv.image_path} alt={adv.name} />
              </div>
            </div>
            <p className={cl.name}>{adv.name}</p>
          </div>
        ))}
      </div>
    </MySection>
  );
};

export default Advantages;
