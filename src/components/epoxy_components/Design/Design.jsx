import React from 'react';
import Header from '../Header/Header';
import styles from './Design.module.css';
import img1 from '../../../assets/cr1.webp';

function Design() {
  return (
    <div className={`mini-container ${styles.wrapper}`}>
      <Header
        textRight={true}
        text={'Explore Endless Possibilities: Styles, Designs, and Colors'}
      />
      <div className={styles.text_div}>
        <p className={styles.text}>
          Transform your space into a masterpiece with our wide range of epoxy
          flooring options. At <span>RTQCR</span>, we understand that every
          space is unique, and so are our flooring solutions. Explore the
          diversity of styles, designs, and colours that we offer:
        </p>
      </div>

      <div className={styles.desgins_container}>
        <div className={styles.design}>
          <img src={img1} alt="img1" />
          <p>Black Granite</p>
        </div>

        <div className={styles.design}>
          <img src={img1} alt="img1" />
          <p>Black Granite</p>
        </div>

        <div className={styles.design}>
          <img src={img1} alt="img1" />
          <p>Black Granite</p>
        </div>

        <div className={styles.design}>
          <img src={img1} alt="img1" />
          <p>Black Granite</p>
        </div>

        <div className={styles.design}>
          <img src={img1} alt="img1" />
          <p>Black Granite</p>
        </div>

        <div className={styles.design}>
          <img src={img1} alt="img1" />
          <p>Black Granite</p>
        </div>

        <div className={styles.design}>
          <img src={img1} alt="img1" />
          <p>Black Granite</p>
        </div>

        <div className={styles.design}>
          <img src={img1} alt="img1" />
          <p>Black Granite</p>
        </div>
      </div>
    </div>
  );
}

export default Design;
