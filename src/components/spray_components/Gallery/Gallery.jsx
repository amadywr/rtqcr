import { useState } from 'react';
import Header from '../Header/Header';
import styles from './Gallery.module.css';
import gallery1 from '../../../assets/spray_images/gallery/gallery1';
import gallery2 from '../../../assets/spray_images/gallery/gallery2';
import Modal from '../../general_components/Modal/Modal';

function Gallery() {
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
      <Header text={'Gallery'} />

      <div className={styles.gallery}>
        {gallery1.map((image, i) => (
          <img
            key={i}
            src={image.source}
            alt="gallery"
            onClick={() => getImage(image.source)}
          />
        ))}
      </div>

      <div
        className={`${styles.gallery} ${viewMore ? '' : 'hidden'}`}
        style={{ marginTop: '1rem' }}
      >
        {gallery2.map((image, i) => (
          <img
            key={i}
            src={image.source}
            alt="gallery"
            onClick={() => getImage(image.source)}
          />
        ))}
      </div>

      <div className="button_div">
        <button className="button" onClick={() => setViewMore(!viewMore)}>
          {viewMore ? 'View less' : 'View more'}
        </button>
      </div>
      {modalOpen && (
        <Modal
          modalImageSource={modalImageSource}
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
        />
      )}
    </div>
  );
}

export default Gallery;
