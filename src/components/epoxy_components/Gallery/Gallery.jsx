import React from 'react';
import Header from '../Header/Header';
import styles from './Gallery.module.css';
import img1 from '../../../assets/cr_photo2.jpg';

function Gallery() {
  return (
    <div className={`mini-container ${styles.wrapper}`}>
      <Header text={'Gallery'} />

      <div className={styles.gallery}>
        <img src={img1} alt="asd" />
        <img src={img1} alt="asd" />
        <img src={img1} alt="asd" />
        <img src={img1} alt="asd" />
        <img src={img1} alt="asd" />
        <img src={img1} alt="asd" />
        <img src={img1} alt="asd" />
        <img src={img1} alt="asd" />
        <img src={img1} alt="asd" />
      </div>
    </div>
  );
}

export default Gallery;
