import Logo from '@components/_UI/logo/Logo';
import heroImg from '@assets/img/hero_img.png';
import cl from './Hero.module.scss';

import MySection from '@components/_UI/MySection';
import MyBtn from '@components/_UI/btns/MyBtn';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <MySection classNames={cl.hero} innerCl={cl.inner}>
      <div className={cl.head}>
        <Logo classNames={cl.logo} />
      </div>
      <div className={cl.img_outer}>
        <img className={cl.img} src={heroImg} alt="hero img klix.kz" />
      </div>
      <div className={cl.info}>
        <h1 className={cl.title + ' title'}>
          Если вы хотите завести себе страницу в QLIX, свяжитесь с нами
        </h1>
        <Link className='w-full' to={'https://wa.me/77089813966'} target='_blank'>
          <MyBtn classNames={cl.btn + ' btn-accent'}>Хочу свой сайт</MyBtn>
        </Link>
        <div className={cl.warn}>
          <p>
            Сервис на стадии тестирования и разработки, надеемся на понимание
          </p>
        </div>
      </div>
    </MySection>
  );
};

export default Hero;
