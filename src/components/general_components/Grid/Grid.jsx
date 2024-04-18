import { useState } from 'react';
import styles from './Grid.module.css';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';

function Grid({ headerText, headerTextRight, gridList1, gridList2, btnText }) {
  const [viewMore, setViewMore] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageSource, setModalImageSource] = useState('');

  function getImage(source) {
    console.log(source);
    setModalOpen(true);
    setModalImageSource(source);
  }

  return (
    <div className={`mini-container margin-top-medium`}>
      <Header headerText={headerText} headerTextRight={headerTextRight} />

      <div className={styles.grid}>
        {Array.from({ length: gridList1.length }).map((_, i) => (
          <div className={styles.item} key={i}>
            <img
              src={gridList1[i].source}
              alt={gridList1[i].name}
              onClick={() => getImage(gridList1[i].source)}
            />
            <p>{gridList1[i].name}</p>
          </div>
        ))}
      </div>

      <div
        className={`${styles.grid} ${viewMore ? '' : 'hidden'}`}
        style={{ marginTop: '3rem' }}
      >
        {Array.from({ length: gridList2.length }).map((_, i) => (
          <div className={styles.item} key={i}>
            <img
              src={gridList2[i].source}
              alt={gridList2[i].name}
              onClick={() => getImage(gridList2[i].source)}
            />
            <p>{gridList2[i].name}</p>
          </div>
        ))}
      </div>

      <div className="button_div">
        <button className="button" onClick={() => setViewMore(!viewMore)}>
          {viewMore ? `View less ${btnText}` : `View more ${btnText}`}
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

export default Grid;
