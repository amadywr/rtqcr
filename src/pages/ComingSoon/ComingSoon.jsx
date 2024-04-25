import React from 'react';
import styles from './ComingSoon.module.css';
import logo from '../../assets/original_logo.png';

function ComingSoon() {
  return (
    <div className={styles.bg}>
      <div className={`${styles.header}`}>
        <div className={`container ${styles.nav}`}>
          <a href="/">
            <img src={logo} alt="logo" className={styles.logo} />
          </a>

          <a
            href="tel:0473098092"
            className={`${styles.navbar_menu_item} ${styles.navbar_menu_item_phone}`}
          >
            0473 098 092
          </a>
        </div>
      </div>
      <div className={styles.container}>
        <h1>COMING SOON</h1>
      </div>
    </div>
  );
}

export default ComingSoon;
