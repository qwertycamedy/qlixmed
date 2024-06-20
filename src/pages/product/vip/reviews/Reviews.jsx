import cl from './Reviews.module.scss';
import Review from './review/Review';
import MySection from '@components/_UI/MySection';
import { useDispatch, useSelector } from 'react-redux';
import { productSel } from '@store/slices/product/productSlice';
import NotFound from '@components/_UI/notFound/NotFound';
import All from './all/All';
import SendNew from './sendNew/SendNew';
import {
  getReviews,
  reviewsSel,
  setAllIsOpen,
  setIsOnAdding,
} from '@store/slices/reviews/reviewsSlice';
import { disableScroll } from '@hooks/disableScroll';
import { useEffect } from 'react';
import MyBtn from '@components/_UI/btns/MyBtn';

const Reviews = () => {
  const dispatch = useDispatch();
  const { product } = useSelector(productSel);
  const { allIsOpen, reviews } = useSelector(reviewsSel);

  useEffect(() => {
    dispatch(getReviews({ card_id: product.id }));
  }, [dispatch, product]);

  const onIsAll = () => {
    disableScroll();
    dispatch(setAllIsOpen(true));
  };

  const toAdding = () => {
    dispatch(setIsOnAdding(true));
  };

  return (
    <>
      <All
        reviews={reviews}
        title={'Отзывы'}
        modalIsOpen={allIsOpen}
        setModalIsOpen={setAllIsOpen}
      />
      <SendNew />
      <MySection classNames={`${cl.section}`} innerCl={cl.inner} id={'reviews'}>
        <div className={cl.head}>
          <h3 className={cl.title + ' title title-section'}>
            ОТЗЫВЫ <br />
            КЛИЕНТОВ
          </h3>
        </div>

        {reviews && reviews.length > 0 ? (
          <>
            <div className={cl.reviews}>
              {reviews
                ?.slice(-2)
                .reverse()
                .map((review) => (
                  <Review review={review} key={review.id} />
                ))}
            </div>
            {reviews?.length > 2 ? (
              <button className={cl.more + ' btn'} onClick={onIsAll}>
                <svg
                  className={`ico-14 stroke ${cl.more_ico}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                >
                  <path
                    d="M1 1L6.5 6.5L12 1"
                    stroke="currentColor"
                    strokeWidth="1.57143"
                    strokeLinecap="round"
                  />
                </svg>
                Просмотреть все отзывы
              </button>
            ) : (
              <MyBtn classNames={cl.btn + ' btn-accent'} onClick={toAdding}>
                Оставить отзыв
              </MyBtn>
            )}
          </>
        ) : (
          <>
            <NotFound
              title={'Нет отзывов'}
              subtitle={'Станьте первым, кто оставит отзыв о данной услуге'}
            />
            <MyBtn classNames={cl.btn + ' btn-accent'} onClick={toAdding}>
              Оставить отзыв
            </MyBtn>
          </>
        )}
      </MySection>
    </>
  );
};

export default Reviews;
