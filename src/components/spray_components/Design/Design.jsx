import { useState } from 'react';
import Header from '../Header/Header';
import styles from './Design.module.css';
import Modal from '../../general_components/Modal/Modal';
import colours1 from '../../../assets/spray_images/colour_images/colours1';
import colours2 from '../../../assets/spray_images/colour_images/colours2';

function Design() {
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
      <Header
        textRight={true}
        text={'Unleash Your Style: Patterns, Designs, and Colours'}
      />

      <div className={styles.text_div}>
        <p className={styles.text}>
          At <span>RTQCR</span>, we understand that every space is unique, and
          your concrete surfaces should reflect your personal style. Explore the
          diverse range of patterns, designs, and colours that our spray-crete
          solutions offer
        </p>
      </div>

      <Header textRight={false} text={'Choose your colour'} />

      <div className={styles.desgins_container}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div className={styles.design} key={i}>
            <img
              src={colours1[i].source}
              alt={colours1[i].name}
              onClick={() => getImage(colours1[i].source)}
            />
            <p>{colours1[i].name}</p>
          </div>
        ))}
      </div>

      <div
        className={`${styles.desgins_container} ${viewMore ? '' : 'hidden'}`}
        style={{ marginTop: '3rem' }}
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <div className={styles.design} key={i}>
            <img
              src={colours2[i].source}
              alt={colours2[i].name}
              onClick={() => getImage(colours2[i].source)}
            />
            <p>{colours2[i].name}</p>
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

export default Design;
