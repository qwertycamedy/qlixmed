import MySection from '@components/_UI/MySection';
import cl from './Contacts.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getCity, productSel } from '@store/slices/product/productSlice';
import { useEffect } from 'react';
import Map from './map/Map';

const Contacts = () => {
  const dispatch = useDispatch();
  const {product, /* serviceCity */} = useSelector(productSel);

  useEffect(() => {
    dispatch(getCity({city_id: 3}))
  }, [dispatch, product])

  return (
    <MySection>
      <h3 className={cl.title + ' title title-section'}>наш адрес</h3>
      <div className={cl.content}>
        <div className={cl.info}>
          <div className={cl.address}>
            {/* <span className={cl.address_city}>г. {serviceCity?.name},</span>{' '} */}
            <span className={cl.address_street}>{product.address}</span>
          </div>
        </div>
        <Map />
      </div>
    </MySection>
  );
};

export default Contacts;
