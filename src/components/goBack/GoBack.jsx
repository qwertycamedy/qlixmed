import { useNavigate } from 'react-router-dom';
import cl from './GoBack.module.scss';

const GoBack = () => {
  const navigate = useNavigate();
  return (
    <button
      className={cl.goBack + ' link link-accent'}
      onClick={() => navigate(-1)}
    >
      <svg
        className="ico-40 stroke"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M25 11L15 20L25 29"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export default GoBack;
