import { useState } from 'react';
import Header from '../Header/Header';
import styles from './Gallery.module.css';

import img1 from '../../../assets/spray_images/gallery/spray_1.jpg';
import img2 from '../../../assets/spray_images/gallery/spray_2.jpg';
import img3 from '../../../assets/spray_images/gallery/spray_3.jpg';
import img4 from '../../../assets/spray_images/gallery/spray_4.jpg';
import img5 from '../../../assets/spray_images/gallery/spray_5.jpg';
import img6 from '../../../assets/spray_images/gallery/spray_6.jpg';
import img7 from '../../../assets/spray_images/gallery/spray_7.jpg';
import img8 from '../../../assets/spray_images/gallery/spray_8.jpg';
import img9 from '../../../assets/spray_images/gallery/spray_9.jpg';

import img10 from '../../../assets/spray_images/gallery/spray_10.jpg';
import img11 from '../../../assets/spray_images/gallery/spray_11.jpg';
import img12 from '../../../assets/spray_images/gallery/spray_12.jpg';
import img13 from '../../../assets/spray_images/gallery/spray_13.jpg';
import img14 from '../../../assets/spray_images/gallery/spray_14.jpg';
import img15 from '../../../assets/spray_images/gallery/spray_15.jpg';
import img16 from '../../../assets/spray_images/gallery/spray_16.jpg';
import img17 from '../../../assets/spray_images/gallery/spray_17.jpg';
import img18 from '../../../assets/spray_images/gallery/spray_18.jpg';

function Gallery() {
  const [viewMore, setViewMore] = useState(false);

  return (
    <div className={`mini-container ${styles.wrapper}`}>
      <Header text={'Gallery'} />

      <div className={styles.gallery}>
        <img src={img1} alt="gallery" />
        <img src={img2} alt="gallery" />
        <img src={img3} alt="gallery" />
        <img src={img4} alt="gallery" />
        <img src={img5} alt="gallery" />
        <img src={img6} alt="gallery" />
        <img src={img7} alt="gallery" />
        <img src={img8} alt="gallery" />
        <img src={img9} alt="gallery" />
      </div>

      <div
        className={`${styles.gallery} ${viewMore ? '' : 'hidden'}`}
        style={{ marginTop: '1rem' }}
      >
        <img src={img10} alt="gallery" />
        <img src={img11} alt="gallery" />
        <img src={img12} alt="gallery" />
        <img src={img13} alt="gallery" />
        <img src={img14} alt="gallery" />
        <img src={img15} alt="gallery" />
        <img src={img16} alt="gallery" />
        <img src={img17} alt="gallery" />
        <img src={img18} alt="gallery" />
      </div>

      <div className="button_div">
        <button className="button" onClick={() => setViewMore(!viewMore)}>
          {viewMore ? 'View less' : 'View more'}
        </button>
      </div>
    </div>
  );
}

export default Gallery;
