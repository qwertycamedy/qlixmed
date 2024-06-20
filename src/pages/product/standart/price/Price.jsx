import MySection from '@components/_UI/MySection';
import cl from './Price.module.scss';
import { useSelector } from 'react-redux';
import { productSel } from '@store/slices/product/productSlice';

const Price = () => {
  const { product } = useSelector(productSel);

  return (
    <MySection classNames={cl.descr} innerCl={cl.inner}>
      <h3 className={cl.title + ' title title-block'}>Цены</h3>
      <ul className={cl.list}>
        {product.price[0]?.details.map((price) => (
          <li
            className={`${cl.item} flex items-center justify-between`}
            key={price.name}
          >
            <span className={cl.key}>{price.name}</span>
            <span className={cl.val}>{price.price}</span>
          </li>
        ))}
      </ul>
    </MySection>
  );
};

export default Price;
