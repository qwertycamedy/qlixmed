import ScreenModal from '@components/_UI/screenModal/ScreenModal';
import cl from './Work.module.scss';
import Slider from './slider/Slider';

const Work = ({ modalIsOpen, setModalIsOpen, curWork }) => {

  return (
    <ScreenModal
      modalCl={cl.modal}
      title={curWork?.name}
      modalIsOpen={modalIsOpen}
      setModalIsOpen={setModalIsOpen}
      contentCl={cl.content}
    >
      <Slider classNames={cl.slider_outer} slides={curWork?.gallery} />
      <div className={cl.info}>
        <h5 className={cl.title + ' title title-block'}>{curWork?.name}</h5>
        <p className={cl.descr} dangerouslySetInnerHTML={{ __html: curWork?.description }} />
      </div>
    </ScreenModal>
  );
};

export default Work;
