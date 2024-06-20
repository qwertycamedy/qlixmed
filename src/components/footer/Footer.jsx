import MyBtn from '@components/_UI/btns/MyBtn';
import cl from './Footer.module.scss';
import { Link } from 'react-router-dom';
import PoweredByBrsys from '@components/poweredByBrsys/PoweredByBrsys';

const Footer = () => {
  return (
    <footer className={cl.footer}>
      <div className="container">
        <div className={cl.inner}>
          <div className={cl.top}>
            <Link to="https://wa.me/77089813966" target="_blank">
              <MyBtn classNames={cl.btn + ' btn-accent'}>
                Хочу такой же сайт
              </MyBtn>
            </Link>
            <div className={cl.top_info}>
              <p className={cl.madeIn}>
                Сделано на
                <Link className="link link-underline" to="/">
                  qlix.kz
                </Link>
              </p>
              <Link
                className={`${cl.whatsapp} link link-underline`}
                to="https://wa.me/77089813966"
                target="_blank"
              >
                Whatsapp
              </Link>
            </div>
          </div>
          <div className={cl.bot}>
            <p className={cl.policy}>2023</p>
            <PoweredByBrsys classNames={cl.brsys} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
