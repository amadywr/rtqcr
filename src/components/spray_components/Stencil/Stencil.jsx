import React from 'react';
import Header from '../Header/Header';
import styles from './Stencil.module.css';
import img1 from '../../../assets/s1.webp';
import img2 from '../../../assets/s2.webp';
import img3 from '../../../assets/s3.webp';
import img4 from '../../../assets/s4.webp';
import img5 from '../../../assets/s5.webp';
import img6 from '../../../assets/s6.webp';
import img7 from '../../../assets/s7.webp';
import img8 from '../../../assets/s8.webp';

function Stencil() {
  return (
    <div className={`mini-container ${styles.wrapper}`}>
      <Header textRight={false} text={'Choose your stencil'} />
      <div className={styles.text_div}>
        {/* <p className={styles.text}>
          At <span>RTQCR</span>, we understand that every space is unique, and
          your concrete surfaces should reflect your personal style. Explore the
          diverse range of patterns, designs, and colours that our concrete
          resurfacing solutions offer:
        </p> */}
      </div>

      <div className={styles.desgins_container}>
        <div className={styles.design}>
          <img src={img1} alt="img1" />
          <p>Antique Tile</p>
        </div>

        <div className={styles.design}>
          <img src={img2} alt="img1" />
          <p>Ashlar Slate</p>
        </div>

        <div className={styles.design}>
          <img src={img3} alt="img1" />
          <p>Basket Weave</p>
        </div>

        <div className={styles.design}>
          <img src={img4} alt="img1" />
          <p>Block</p>
        </div>

        <div className={styles.design}>
          <img src={img5} alt="img1" />
          <p>Brick</p>
        </div>

        <div className={styles.design}>
          <img src={img6} alt="img1" />
          <p>Bushrock</p>
        </div>

        <div className={styles.design}>
          <img src={img7} alt="img1" />
          <p>Classic Herringbone</p>
        </div>

        <div className={styles.design}>
          <img src={img8} alt="img1" />
          <p>Cobblestone</p>
        </div>
      </div>
    </div>
  );
}

export default Stencil;
