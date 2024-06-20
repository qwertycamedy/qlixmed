import MySection from '@components/_UI/MySection';
import cl from './Descr.module.scss';
import { useSelector } from 'react-redux';
import { productSel } from '@store/slices/product/productSlice';

const Descr = () => {
  const {product} = useSelector(productSel);

  return (
    <MySection classNames={cl.descr} innerCl={cl.inner}>
      <h3 className={cl.title + ' title title-block'}>Описание</h3>

      <p className={cl.text} dangerouslySetInnerHTML={{ __html: product.description }} />
    </MySection>
  );
};

export default Descr;
