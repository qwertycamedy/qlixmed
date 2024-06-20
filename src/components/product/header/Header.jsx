import MyBtn from '@components/_UI/btns/MyBtn';
import cl from './Header.module.scss';
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-scroll';
import { disableScroll } from '@hooks/disableScroll';
import { enableScroll } from '@hooks/enableScroll';
import useWindowWidth from '@hooks/windowWidth';
import MadeIn from '@components/madeIn/MadeIn';

const Header = ({
  headerCl,
  innerCl,
  companyNameNeed = false,
  burgerNeed = false,
  companyName,
}) => {
  const [isBurger, setIsBurger] = useState(false);
  const [madeInIsShow, setMadeInIsShow] = useState(false);
  const windowWidth = useWindowWidth();

  const isMobileWidth = windowWidth < 1170;

  const onBurger = () => {
    setIsBurger(!isBurger);
    if (isBurger) {
      enableScroll();
    } else {
      disableScroll();
    }
  };

  const closeBurger = () => {
    setIsBurger(false);
    enableScroll();
  };

  useEffect(() => {
    setMadeInIsShow(true)
    setTimeout(() => {
      setMadeInIsShow(false);
      console.log('hello')
    }, 4000)
  }, []);

  return (
    <div className={cl.header + ` ${headerCl}`}>
      {!isMobileWidth && (
        <MadeIn classNames={clsx(cl.madeIn, {[cl.madeIn_show]: madeInIsShow})} />
      )}
      <div className="container">
        <div className={cl.inner + ` ${innerCl}`}>
          {companyNameNeed && (
            <p
              className={clsx(cl.companyName, {
                [cl.companyName_burger]: isBurger,
              })}
            >
              {companyName}
            </p>
          )}
          {burgerNeed && (
            <>
              <MyBtn
                classNames={clsx(cl.burger, { [cl.burger_active]: isBurger })}
                onClick={onBurger}
              ></MyBtn>
              <nav
                className={clsx(cl.list_outer, {
                  [cl.list_outer_burger_active]: isBurger,
                  [cl.list_outer_burger]: isMobileWidth,
                })}
              >
                <ul
                  className={clsx(cl.list, {
                    [cl.list_burger]: isMobileWidth,
                  })}
                >
                  <li
                    className={clsx(cl.list_item, {
                      [cl.list_item_burger]: isMobileWidth,
                    })}
                  >
                    <Link
                      className={clsx(cl.list_link, {
                        [cl.list_link_burger]: isMobileWidth,
                        'link-underline': !isMobileWidth,
                      })}
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      to="about"
                      onClick={closeBurger}
                    >
                      О нас
                    </Link>
                  </li>
                  <li
                    className={clsx(cl.list_item, {
                      [cl.list_item_burger]: isMobileWidth,
                    })}
                  >
                    <Link
                      className={clsx(cl.list_link, {
                        [cl.list_link_burger]: isMobileWidth,
                        'link-underline': !isMobileWidth,
                      })}
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      to="advantages"
                      onClick={closeBurger}
                    >
                      Почему мы
                    </Link>
                  </li>
                  <li
                    className={clsx(cl.list_item, {
                      [cl.list_item_burger]: isMobileWidth,
                    })}
                  >
                    <Link
                      className={clsx(cl.list_link, {
                        [cl.list_link_burger]: isMobileWidth,
                        'link-underline': !isMobileWidth,
                      })}
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      to="price"
                      onClick={closeBurger}
                    >
                      Прайс
                    </Link>
                  </li>
                  <li
                    className={clsx(cl.list_item, {
                      [cl.list_item_burger]: isMobileWidth,
                    })}
                  >
                    <Link
                      className={clsx(cl.list_link, {
                        [cl.list_link_burger]: isMobileWidth,
                        'link-underline': !isMobileWidth,
                      })}
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      to="works"
                      onClick={closeBurger}
                    >
                      Работы
                    </Link>
                  </li>
                  <li
                    className={clsx(cl.list_item, {
                      [cl.list_item_burger]: isMobileWidth,
                    })}
                  >
                    <Link
                      className={clsx(cl.list_link, {
                        [cl.list_link_burger]: isMobileWidth,
                        'link-underline': !isMobileWidth,
                      })}
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      to="reviews"
                      onClick={closeBurger}
                    >
                      Отзывы
                    </Link>
                  </li>
                </ul>
              </nav>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
