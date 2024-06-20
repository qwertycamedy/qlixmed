import cl from './MadeIn.module.scss';

const MadeIn = ({ classNames, circleCl }) => {
  return (
    <div className={cl.made + ` ${classNames}`}>
      Сделано на <span className={cl.made_circle + ` ${circleCl}`}></span> qlix
    </div>
  );
};

export default MadeIn;
