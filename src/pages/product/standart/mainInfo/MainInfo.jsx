import { useSelector } from 'react-redux';
import cl from './MainInfo.module.scss';
import { productSel } from '@store/slices/product/productSlice';
import MyBtn from '@components/_UI/btns/MyBtn';
import SellerLink from '@components/sellerLink/SellerLink';
import MySection from '@components/_UI/MySection';
import { useState } from 'react';
import { formatPhoneNumber } from '@hooks/formatPhoneNum';
import { reviewsSel } from '@store/slices/reviews/reviewsSlice';

const MainInfo = () => {
  const { product } = useSelector(productSel);
  const {reviews} = useSelector(reviewsSel);
  const [numShow, setNumShow] = useState(false);

  const num = formatPhoneNumber(product.phone);

  const onCopyLink = () => {
    const currentURL = window.location.href;

    const tempInput = document.createElement('input');
    tempInput.value = currentURL;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert('Ссылка на текущую страницу скопирована');

    // Устанавливаем флаг "скопировано" и обновляем состояние компонента
    // setCopied(true);

    // Сброс флага "скопировано" через некоторое время (например, через 2 секунды)
    // setTimeout(() => {
    //   setCopied(false);
    // }, 2000);
  };

  const averageRating = (reviews) => {
    let sum = 0;
    for (var i = 0; i < reviews?.length; i++) {
      sum += reviews[i].rating;
    }
    const average = sum / reviews?.length;
    return Math.ceil(average);
  };

  console.log(averageRating(reviews));

  return (
    <MySection classNames={cl.mainInfo} innerCl={cl.inner}>
      <div className={cl.top}>
        <div className={`${cl.top_head} flex items-center justify-between`}>
          <h3 className={cl.title + ' title title-section'}>{product?.name}</h3>
          <MyBtn classNames={cl.share} onClick={onCopyLink}>
            <svg
              className="ico-24 stroke"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 6L12 2L8 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </MyBtn>
        </div>

        {
          product?.reviews && reviews?.length > 0 &&
          <div className={cl.rating}>
            <div className={cl.stars}>
              {[...Array(averageRating(product?.reviews))].map((_, i) => (
                <svg
                  className="ico-20 fill yellow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  key={i}
                >
                  <path
                    d="M9.02447 0.463526C9.17415 0.00287084 9.82585 0.00287008 9.97553 0.463525L11.7451 5.90983C11.8121 6.11584 12.0041 6.25532 12.2207 6.25532H17.9473C18.4316 6.25532 18.633 6.87513 18.2411 7.15983L13.6082 10.5258C13.433 10.6532 13.3597 10.8788 13.4266 11.0848L15.1962 16.5312C15.3459 16.9918 14.8187 17.3749 14.4268 17.0902L9.79389 13.7242C9.61865 13.5968 9.38135 13.5968 9.20611 13.7242L4.5732 17.0902C4.18135 17.3749 3.65411 16.9918 3.80378 16.5312L5.57339 11.0848C5.64033 10.8788 5.567 10.6532 5.39176 10.5258L0.758856 7.15983C0.366999 6.87513 0.568387 6.25532 1.05275 6.25532H6.77933C6.99594 6.25532 7.18792 6.11584 7.25486 5.90983L9.02447 0.463526Z"
                    fill="currentColor"
                  />
                </svg>
              ))}

              {[...Array(5 - averageRating(reviews))].map((_, i) => (
                <svg
                  className="ico-20 fill gray"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  key={i}
                >
                  <path
                    d="M9.02447 0.463526C9.17415 0.00287084 9.82585 0.00287008 9.97553 0.463525L11.7451 5.90983C11.8121 6.11584 12.0041 6.25532 12.2207 6.25532H17.9473C18.4316 6.25532 18.633 6.87513 18.2411 7.15983L13.6082 10.5258C13.433 10.6532 13.3597 10.8788 13.4266 11.0848L15.1962 16.5312C15.3459 16.9918 14.8187 17.3749 14.4268 17.0902L9.79389 13.7242C9.61865 13.5968 9.38135 13.5968 9.20611 13.7242L4.5732 17.0902C4.18135 17.3749 3.65411 16.9918 3.80378 16.5312L5.57339 11.0848C5.64033 10.8788 5.567 10.6532 5.39176 10.5258L0.758856 7.15983C0.366999 6.87513 0.568387 6.25532 1.05275 6.25532H6.77933C6.99594 6.25532 7.18792 6.11584 7.25486 5.90983L9.02447 0.463526Z"
                    fill="currentColor"
                  />
                </svg>
              ))}
            </div>
            <span className={cl.rate}>{product?.reviews?.length} отзывов</span>
          </div>
        }
      </div>
      <div className={cl.bot}>
        <SellerLink
          classNames={cl.seller}
          ratingCl={cl.rating}
          arrowCl={cl.arrow}
        />
        <div className={cl.num}>
          {numShow ? (
            num
          ) : (
            <>
              {num.substring(0, 9)}
              <button className={cl.num_show} onClick={() => setNumShow(true)}>
                Показать телефон
              </button>
            </>
          )}
        </div>
        <p className={cl.address}>{product.address}</p>
      </div>
    </MySection>
  );
};

export default MainInfo;
