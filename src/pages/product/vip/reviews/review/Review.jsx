import React from 'react';
import cl from './Review.module.scss';
import { formatDate } from '@hooks/formatDate';

const Review = ({ review }) => {
  const updDate = formatDate(
    review?.created_at,
    true,
    true,
    true,
    false,
    false,
  );

  return (
    <div className={cl.item}>
      <div className={cl.info}>
        <div className={cl.stars}>
          {[...Array(Number(review?.rating))].map((_, i) => (
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
          {[...Array(5 - Number(review?.rating))].map((_, i) => (
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
          ))
          }
        </div>
        <div>
          <p className={cl.user}>{review?.user_name}</p>
          <p className={cl.date}>{updDate}</p>
        </div>
      </div>
      <p className={cl.text}>{review?.description}</p>
    </div>
  );
};

export default Review;
