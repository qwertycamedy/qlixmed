import ScreenModal from '@components/_UI/screenModal/ScreenModal';
import cl from './All.module.scss';
import outerCl from '../Reviews.module.scss';
import Bar from '@components/product/bar/Bar';
import { useDispatch } from 'react-redux';
import MyBtn from '@components/_UI/btns/MyBtn';
import Review from '../review/Review';
import {  setIsOnAdding } from '@store/slices/reviews/reviewsSlice';

const All = ({ reviews, title, modalIsOpen, setModalIsOpen }) => {
  const dispatch = useDispatch();

  const toAdding = () => {
    dispatch(setIsOnAdding(true))
  }

  return (
    <>
      <ScreenModal
        modalCl={cl.modal}
        title={title}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        contentCl={cl.content}
      >
        <div className={outerCl.reviews}>
          {reviews && reviews.map((review) => (
              <Review review={review} key={review.id} />
            )).reverse()}
        </div>
        <Bar classNames={cl.bar}>
          <MyBtn
            classNames={cl.btn + ' btn-accent'}
            onClick={toAdding}
          >
            Оставить отзыв
          </MyBtn>
        </Bar>
      </ScreenModal>
    </>
  );
};

export default All;
