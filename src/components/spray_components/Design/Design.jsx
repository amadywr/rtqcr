import React from 'react';
import Header from '../Header/Header';
import styles from './Design.module.css';
import img1 from '../../../assets/cr1.webp';
import img2 from '../../../assets/cr2.webp';
import img3 from '../../../assets/cr3.webp';
import img4 from '../../../assets/cr4.webp';
import img5 from '../../../assets/cr5.webp';
import img6 from '../../../assets/cr6.webp';
import img7 from '../../../assets/cr7.webp';
import img8 from '../../../assets/cr8.webp';

function Design() {
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
          diverse range of patterns, designs, and colours that our concrete
          resurfacing solutions offer:
        </p>
      </div>

      <div className={styles.desgins_container}>
        <div className={styles.design}>
          <img src={img1} alt="img1" />
          <p>Black Granite</p>
        </div>

        <div className={styles.design}>
          <img src={img2} alt="img1" />
          <p>Cream</p>
        </div>

        <div className={styles.design}>
          <img src={img3} alt="img1" />
          <p>Sandy Beige</p>
        </div>

        <div className={styles.design}>
          <img src={img4} alt="img1" />
          <p>Merino</p>
        </div>

        <div className={styles.design}>
          <img src={img5} alt="img1" />
          <p>Lite Mocha</p>
        </div>

        <div className={styles.design}>
          <img src={img6} alt="img1" />
          <p>Chestnut</p>
        </div>

        <div className={styles.design}>
          <img src={img7} alt="img1" />
          <p>Sandstone</p>
        </div>

        <div className={styles.design}>
          <img src={img8} alt="img1" />
          <p>Light Terracotta</p>
        </div>
      </div>
    </div>
  );
}

export default Design;
