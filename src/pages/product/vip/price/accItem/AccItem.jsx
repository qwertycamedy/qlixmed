import { useRef } from 'react';
import cl from '../Price.module.scss';

const AccItem = ({ curAcc, acc, price }) => {
  const itemRef = useRef(null);

  return (
    <li
      className={`${cl.item} flex items-center justify-between`}
      style={curAcc === acc ? {maxHeight: itemRef.current.scrollHeight + 'px'} : {height: '0px'}}
      ref={itemRef}
    >
        <span className={cl.key}>{price?.name}</span>
        <span className={cl.val}>{price?.price}</span>
    </li>
  );
};

export default AccItem;
