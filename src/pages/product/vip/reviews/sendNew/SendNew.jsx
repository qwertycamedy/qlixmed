import cl from './SendNew.module.scss';
import {
  addReview,
  reviewsSel,
  setAllIsOpen,
  setIsOnAdding,
  setNewReviewEmail,
  setNewReviewGrade,
  setNewReviewName,
  setNewReviewText,
  setNewReview
} from '@store/slices/reviews/reviewsSlice';
import { productSel } from '@store/slices/product/productSlice';
import MyInput from '@components/_UI/fields/MyInput';
import { clsx } from 'clsx';
import MyTextarea from '@components/_UI/fields/MyTextarea';
import MyBtn from '@components/_UI/btns/MyBtn';
import thanksImg from '@assets/img/thanks_img.png';
import { useDispatch, useSelector } from 'react-redux';
import ScreenModal from '@components/_UI/screenModal/ScreenModal';
import Bar from '@components/product/bar/Bar';
import { enableScroll } from '@hooks/enableScroll';

const SendNew = () => {
  const dispatch = useDispatch();
  const { product } = useSelector(productSel);
  const { isOnAdding, isSent, newReview } = useSelector(reviewsSel);

  const onAddReview = (e) => {
    e.preventDefault();

    if (newReview.grade < 1) {
      return alert('Укажите рейтинг по пятизвездочной шкале, пожалуйста');
    }

    dispatch(addReview({ newReview, card_id: product.id })).then((action) => {
      dispatch(setNewReview(action.payload.review));
    });
  };

  const goBack = () => {
    dispatch(setIsOnAdding(false));
  };

  const goMain = () => {
    enableScroll();
    dispatch(setIsOnAdding(false));
    dispatch(setAllIsOpen(false));
  };

  return (
    <ScreenModal
      title={'Ваш отзыв'}
      modalIsOpen={isOnAdding}
      setModalIsOpen={setIsOnAdding}
      contentCl={cl.content}
      modalCl={cl.modal}
      otherCloseFunc={goBack}
    >
      {!isSent ? (
        <form className={cl.form} onSubmit={(e) => onAddReview(e)}>
          <div className={cl.name_email}>
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
          </div>
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
          <Bar>
            <div className={cl.btns}>
              <MyBtn
                classNames={cl.addReview + ` ${cl.btn} btn-accent`}
                type="submit"
              >
                Отправить
              </MyBtn>
            </div>
          </Bar>
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
          <Bar>
            <div className={cl.btns}>
              <MyBtn
                classNames={cl.goBack + ` ${cl.btn} btn-accent`}
                onClick={goMain}
              >
                Вернуться на страницу
              </MyBtn>
            </div>
          </Bar>
        </>
      )}
    </ScreenModal>
  );
};

export default SendNew;
