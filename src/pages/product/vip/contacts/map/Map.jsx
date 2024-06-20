import React from 'react';
import cl from './Map.module.scss';
import { useSelector } from 'react-redux';
import { productSel } from '@store/slices/product/productSlice';

const Map = () => {
  const { product } = useSelector(productSel);
  return (
    <div className={cl.map} dangerouslySetInnerHTML={{ __html: product.map }} />
  );
};

export default Map;
