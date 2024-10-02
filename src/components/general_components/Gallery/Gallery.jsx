import { useState } from 'react';
import Header from '../../general_components/Header/Header';
import styles from './Gallery.module.css';
import Modal from '../../general_components/Modal/Modal';

function Gallery({ headerText, headerTextRight, gallery1, gallery2, btnText }) {
  const [viewMore, setViewMore] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageSource, setModalImageSource] = useState('');
  const [caption, setCaption] = useState('');

  function getImage(image) {
    setModalOpen(true);
    setModalImageSource(image.source);
    setCaption(`Galley Image ${image.id}`);
  }

  return (
    <div className={`mini-container margin-top-medium`}>
      <Header headerText={headerText} headerTextRight={headerTextRight} />

      <div className={styles.gallery}>
        {gallery1.map((image, i) => (
          <img
            key={i}
            src={image.source}
            alt="gallery"
            onClick={() => getImage(image)}
            loading="lazy"
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
            onClick={() => getImage(image)}
            loading="lazy"
          />
        ))}
      </div>

      <div className="button_div">
        <button className="button" onClick={() => setViewMore(!viewMore)}>
          {viewMore ? `View less ${btnText}` : `View more ${btnText}`}
        </button>
      </div>
      {modalOpen && (
        <Modal
          modalImageSource={modalImageSource}
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
          caption={caption}
        />
      )}
    </div>
  );
}

export default Gallery;
