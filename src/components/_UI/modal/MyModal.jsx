import { useDispatch } from "react-redux";
import cl from "./MyModal.module.scss";
import { clsx } from "clsx";
import { onHide } from "@hooks/toHide";

const MyModal = ({
  children,
  overlayCl,
  modalCl,
  innerCl,
  closeCl,
  modalIsOpen,
  setModalIsOpen,
  closeIsNeed = true,
}) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setModalIsOpen(false));
    onHide(modalIsOpen);
  };

  return (
    <div
      className={clsx(
        `overlay modal__overlay fixed-block ${cl.overlay} ${overlayCl}`,
        { active: modalIsOpen }
      )}
      onClick={closeModal}
    >
      <div
        className={`modal ${cl.modal} ${modalCl}`}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {closeIsNeed && (
          <button
            className={`modal__close ${cl.close} ${closeCl}`}
            onClick={closeModal}
          >
            <svg
              className="ico-80 stroke"
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
            >
              <path
                d="M26 53.457L51.4558 28.0012"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                d="M26.7266 28.7285L52.1824 54.1844"
                stroke="currentColor"
                strokeWidth="3"
              />
            </svg>
          </button>
        )}
        <div className={`modal__inner ${cl.inner} ${innerCl}`}>{children}</div>
      </div>
    </div>
  );
};

export default MyModal;
