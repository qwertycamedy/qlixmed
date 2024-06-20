import MySection from '@components/_UI/MySection';
import cl from './About.module.scss';
import { useSelector } from 'react-redux';
import { productSel } from '@store/slices/product/productSlice';

const About = () => {
  const {product} = useSelector(productSel);
  return (
    <MySection classNames={cl.about} id={'about'}>
      <h3 className={cl.title + ' title title-section'}>кто мы такие</h3>
      <div className={cl.content}>
        <p className={cl.text}  dangerouslySetInnerHTML={{ __html: product.description }}/>
        {/* <img className={cl.img} src={product.gallery[0]} alt="img" /> */}
      </div>
    </MySection>
  );
};

export default About;
