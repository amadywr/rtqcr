import React from 'react';
import styles from './Homepage.module.css';
import hero from '../assets/hero.jpg';

function Homepage() {
  return (
    <div className={styles.home}>
      <div className={styles.hero_wrapper}>
        {/* <img src={hero} alt="page hero" /> */}
      </div>
    </div>
  );
}

export default Homepage;
