
import cl from './Bar.module.scss';
import MadeIn from '@components/madeIn/MadeIn';

const Bar = ({children, classNames}) => {

  return (
    <div className={cl.bar + ` ${classNames}`}>
      <div className={cl.inner}>
        {children}
        <MadeIn classNames={cl.madeIn} />
      </div>
    </div>
  );
};

export default Bar;
