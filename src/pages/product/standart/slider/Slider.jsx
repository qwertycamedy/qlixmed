
import { useSelector } from "react-redux";
import Big from "./big/Big";

import cl from "./Slider.module.scss";
import { productSel } from "@store/slices/product/productSlice";

const Slider = ({ classNames }) => {
  const {product} = useSelector(productSel);

  return (
    <div className={`${classNames} ${cl.sliders}`}>
      <Big
        slides={product.gallery}
      />
    </div>
  );
};

export default Slider;
