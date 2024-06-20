import { useDispatch } from 'react-redux';
import cl from './BotModal.module.scss';
import { clsx } from 'clsx';

const BotModal = ({
  children,
  overlayCl,
  modalCl,
  innerCl,
  modalIsOpen,
  setModalIsOpen,
}) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setModalIsOpen(false));
  };

  return (
    <div
      className={clsx(`overlay fixed-block ${cl.overlay} ${overlayCl}`, {
        active: modalIsOpen,
      })}
      onClick={closeModal}
    >
      <div
        className={`${cl.modal} ${modalCl}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={`${cl.inner} ${innerCl}`}>
          <span className={cl.line}></span>
          <div className={cl.content}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BotModal;
