import { useDispatch } from 'react-redux';
import cl from './ScreenModal.module.scss';
import { clsx } from 'clsx';
import { enableScroll } from '@hooks/enableScroll';

const ScreenModal = ({
  children,
  overlayCl,
  modalCl,
  innerCl,
  headerCl,
  closeCl,
  otherCloseFunc,
  titleCl,
  title,
  contentCl,
  modalIsOpen,
  setModalIsOpen,
}) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    enableScroll();
    dispatch(setModalIsOpen(false));
  };

  return (
    <div
      className={clsx(`overlay fixed-block ${cl.overlay} ${overlayCl}`, {
        active: modalIsOpen,
      })}
      onClick={otherCloseFunc ? otherCloseFunc :  closeModal}
    >
      <div
        className={`${cl.modal} ${modalCl}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={cl.header + ` ${headerCl}`}>
          <div className="container">
            <div className={cl.header_inner}>
            <button className={cl.close + ` ${closeCl}`} onClick={otherCloseFunc ? otherCloseFunc :  closeModal}>
              Назад
            </button>
            <h5 className={cl.title + ` ${titleCl}`}>{title}</h5>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={cl.inner + ` ${innerCl}`}>
            <div className={`${cl.content} ${contentCl}`}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenModal;
