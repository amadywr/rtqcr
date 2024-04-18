import { useState } from 'react';
import Header from '../Header/Header';
import styles from './Stencil.module.css';
import stencils1 from '../../../assets/spray_images/stencil_images/stencils1';
import stencils2 from '../../../assets/spray_images/stencil_images/stencils2';
import Modal from '../../general_components/Modal/Modal';

function Stencil() {
  const [viewMore, setViewMore] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageSource, setModalImageSource] = useState('');

  function getImage(source) {
    console.log(source);
    setModalOpen(true);
    setModalImageSource(source);
  }

  return (
    <div className={`mini-container ${styles.wrapper}`}>
      <Header textRight={true} text={'Choose your stencil'} />

      <div className={styles.desgins_container}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div className={styles.design} key={i}>
            <img
              src={stencils1[i].source}
              alt={stencils1[i].name}
              onClick={() => getImage(stencils1[i].source)}
            />
            <p>{stencils1[i].name}</p>
          </div>
        ))}
      </div>

      <div
        className={`${styles.desgins_container} ${viewMore ? '' : 'hidden'}`}
        style={{ marginTop: '3rem' }}
      >
        {Array.from({ length: 14 }).map((_, i) => (
          <div className={styles.design} key={i}>
            <img
              src={stencils2[i].source}
              alt={stencils2[i].name}
              onClick={() => getImage(stencils2[i].source)}
            />
            <p>{stencils2[i].name}</p>
          </div>
        ))}
      </div>

      <div className="button_div">
        <button className="button" onClick={() => setViewMore(!viewMore)}>
          {viewMore ? 'View less' : 'View more'}
        </button>
      </div>

      {modalOpen && (
        <Modal
          setModalOpen={setModalOpen}
          modalImageSource={modalImageSource}
        />
      )}
    </div>
  );
}

export default Stencil;
