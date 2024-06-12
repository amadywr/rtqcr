import { useState } from 'react';
import styles from './Grid.module.css';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';

function Grid({
  wantHeader = true,
  headerText,
  headerTextRight,
  gridList1,
  gridList2,
  btnText = 'grid items',
  marginTop = 'margin-top-medium',
}) {
  // const [viewMore, setViewMore] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageSource, setModalImageSource] = useState('');
  const [caption, setCaption] = useState('');

  function getImage(image) {
    setModalOpen(true);
    setModalImageSource(image.source);
    setCaption(image.name);
  }

  return (
    <div className={`mini-container ${marginTop}`}>
      {wantHeader && (
        <Header headerText={headerText} headerTextRight={headerTextRight} />
      )}

      <div className={styles.grid}>
        {Array.from({ length: gridList1.length }).map((_, i) => (
          <div className={styles.item} key={i}>
            <img
              src={gridList1[i].source}
              alt={gridList1[i].name}
              onClick={() => getImage(gridList1[i])}
            />
            <p>{gridList1[i].name}</p>
          </div>
        ))}
      </div>

      {/* {gridList2 ? (
        <div
          className={`${styles.grid} ${viewMore ? '' : 'hidden'}`}
          style={{ marginTop: '3rem' }}
        >
          {Array.from({ length: gridList2.length }).map((_, i) => (
            <div className={styles.item} key={i}>
              <img
                src={gridList2[i].source}
                alt={gridList2[i].name}
                onClick={() => getImage(gridList2[i])}
              />
              <p>{gridList2[i].name}</p>
            </div>
          ))}
        </div>
      ) : (
        ''
      )} */}

      {/* {gridList2 ? (
        <div className="button_div">
          <button className="button" onClick={() => setViewMore(!viewMore)}>
            {viewMore ? `View less ${btnText}` : `View more ${btnText}`}
          </button>
        </div>
      ) : (
        ''
      )} */}

      {modalOpen && (
        <Modal
          setModalOpen={setModalOpen}
          modalImageSource={modalImageSource}
          caption={caption}
        />
      )}
    </div>
  );
}

export default Grid;
