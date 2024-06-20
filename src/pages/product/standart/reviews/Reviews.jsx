import MyBtn from '@components/_UI/btns/MyBtn';
import cl from './Reviews.module.scss';
import Review from './review/Review';
import MySection from '@components/_UI/MySection';
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import BotModal from '@components/_UI/botModal/BotModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  addReview,
  getReviews,
  reviewsSel,
  setIsOnAdding,
  setNewReviewEmail,
  setNewReviewGrade,
  setNewReviewName,
  setNewReviewText,
  setNewReview
} from '@store/slices/reviews/reviewsSlice';
import MyInput from '@components/_UI/fields/MyInput';
import MyTextarea from '@components/_UI/fields/MyTextarea';
import thanksImg from '@assets/img/thanks_img.png';
import { productSel } from '@store/slices/product/productSlice';
import NotFound from '@components/_UI/notFound/NotFound';

const Reviews = () => {
  const dispatch = useDispatch();
  const { isOnAdding, isSent, reviews, newReview } = useSelector(reviewsSel);
  const { product } = useSelector(productSel);
  const [isAll, setIsAll] = useState(false);

  useEffect(() => {
    dispatch(getReviews({ card_id: product.id }));
  }, [dispatch, product]);

  const onIsAll = () => {
    setIsAll(!isAll);
  };

  console.log(newReview);

  const onAddReview = (e) => {
    e.preventDefault();

    if (newReview.grade < 1) {
      return alert('Укажите рейтинг по пятизвездочной шкале, пожалуйста');
    }

    dispatch(addReview({ newReview, card_id: product.id })).then((action) => {
      dispatch(setNewReview(action.payload.review));
    });
  };

  return (
    <>
      <BotModal modalIsOpen={isOnAdding} setModalIsOpen={setIsOnAdding}>
        {!isSent ? (
          <form className={cl.form} onSubmit={(e) => onAddReview(e)}>
            <MyInput
              classNames={cl.input}
              placeholder="Имя"
              value={newReview.name}
              setValue={setNewReviewName}
              required
            />
            <MyInput
              classNames={cl.input}
              placeholder="E-mail"
              value={newReview.email}
              setValue={setNewReviewEmail}
              type="email"
              required
            />
            <div className={cl.grade}>
              <span className={cl.grade_title}>Ваша оценка</span>

              <div className={cl.stars}>
                {[...Array(5)].map((_, i) => (
                  <button
                    className={clsx(cl.star, {
                      [cl.star_selected]: i < newReview.grade,
                    })}
                    key={i}
                    type="button"
                    onClick={() => dispatch(setNewReviewGrade(i + 1))}
                  >
                    <svg
                      className={`${cl.star_ico} ico-20 fill`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                    >
                      <path
                        d="M9.02447 0.463526C9.17415 0.00287084 9.82585 0.00287008 9.97553 0.463525L11.7451 5.90983C11.8121 6.11584 12.0041 6.25532 12.2207 6.25532H17.9473C18.4316 6.25532 18.633 6.87513 18.2411 7.15983L13.6082 10.5258C13.433 10.6532 13.3597 10.8788 13.4266 11.0848L15.1962 16.5312C15.3459 16.9918 14.8187 17.3749 14.4268 17.0902L9.79389 13.7242C9.61865 13.5968 9.38135 13.5968 9.20611 13.7242L4.5732 17.0902C4.18135 17.3749 3.65411 16.9918 3.80378 16.5312L5.57339 11.0848C5.64033 10.8788 5.567 10.6532 5.39176 10.5258L0.758856 7.15983C0.366999 6.87513 0.568387 6.25532 1.05275 6.25532H6.77933C6.99594 6.25532 7.18792 6.11584 7.25486 5.90983L9.02447 0.463526Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
            <MyTextarea
              classNames={cl.area}
              placeholder="Отзыв"
              value={newReview.text}
              setValue={setNewReviewText}
              required
            />
            <div className={cl.btns}>
              <MyBtn
                classNames={cl.addReview + ` ${cl.btn} btn-accent`}
                type="submit"
              >
                Отправить
              </MyBtn>
              <MyBtn
                classNames={cl.cancel + ` ${cl.btn}`}
                type={'button'}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(setIsOnAdding(false));
                }}
              >
                Отмена
              </MyBtn>
            </div>
          </form>
        ) : (
          <>
            <div className={cl.thanks}>
              <img
                className={cl.thanks_img}
                src={thanksImg}
                alt="thanks for review"
              />
              <h3 className={cl.thanks_title + ' title'}>Спасибо за отзыв!</h3>
              <p className={cl.thanks_subtitle}>
                Ваш отзыв отправлен на модерацию и будет опубликован в ближайшее
                время!
              </p>
            </div>
            <MyBtn
              classNames={cl.goBack + ` ${cl.btn} btn-accent`}
              onClick={() => dispatch(setIsOnAdding(false))}
            >
              Вернуться на страницу
            </MyBtn>
          </>
        )}
      </BotModal>
      <MySection classNames={`${cl.section}`} innerCl={cl.inner}>
        <div className={cl.head}>
          <h3 className={cl.title + ' title title-block'}>Отзывы</h3>
          <MyBtn
            classNames={cl.add + ' btn btn-accent'}
            onClick={() => dispatch(setIsOnAdding(true))}
          >
            Оставить отзыв
          </MyBtn>
        </div>

        {reviews && reviews.length > 0 ? (
          <div className={cl.reviews}>
            {isAll ? (
              reviews &&
              reviews
                ?.map((review) => <Review review={review} key={review.id} />)
                .reverse()
            ) : (
              <>
                {reviews &&
                  reviews
                    .slice(-3)
                    .reverse()
                    .map((review) => (
                      <Review review={review} key={review.id} />
                    ))}
              </>
            )}
          </div>
        ) : (
          <NotFound
            title={'Нет отзывов'}
            subtitle={'Станьте первым, кто оставит отзыв о данной услуге'}
          />
        )}
      </MySection>
      {reviews && reviews.length > 3 && (
        <button className={cl.more + ' btn'} onClick={onIsAll}>
          <svg
            className={clsx(`ico-14 stroke ${cl.more_ico}`, {
              [cl.more_ico_active]: isAll,
            })}
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
          {isAll ? <>Скрыть отзывы</> : <>Просмотреть все отзывы</>}
        </button>
      )}
    </>
  );
};

export default Reviews;
