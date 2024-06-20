import MySection from '@components/_UI/MySection';
import cl from './Price.module.scss';
import { useSelector } from 'react-redux';
import { productSel } from '@store/slices/product/productSlice';
import { clsx } from 'clsx';
import { useEffect, useState } from 'react';
import AccItem from './accItem/AccItem';


const Price = () => {
  const { product } = useSelector(productSel);
  const [curAcc, setCurAcc] = useState(null);

  useEffect(()=> {
    setCurAcc(product.price[0]);
  }, [product])

  const onAcc = (cur) => {
    if (curAcc === cur) {
      setCurAcc(null);
    } else {
      setCurAcc(cur);
    }
  };

  return (
    <MySection classNames={cl.descr} innerCl={cl.inner} id={'price'}>
      <h3 className={cl.title + ' title title-section'}>Прайс лист</h3>
      <div className={cl.accs}>
        {product.price?.map((acc, i) => (
          <div className={cl.acc} key={i}>
            <button
              className={clsx(cl.acc_btn, {
                [cl.acc_btn_active]: acc === curAcc,
              })}
              onClick={() => onAcc(acc)}
            >
              <span>{acc.title}</span>{' '}
              <svg
                className="ico ico-14 stroke"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
              >
                <path
                  d="M13 8L7.75926 1.8858C7.36016 1.42019 6.63984 1.42019 6.24074 1.8858L1 8"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <ul className={clsx(cl.list, { [cl.list_active]: acc === curAcc })}>
              {acc?.details?.map((price) => (
                <AccItem
                  acc={acc}
                  curAcc={curAcc}
                  price={price}
                  key={price.name}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </MySection>
  );
};

export default Price;
