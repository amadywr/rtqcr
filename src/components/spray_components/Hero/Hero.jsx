import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <h1>Spray-Crete Floor</h1>
      <div className={`${styles.hero_text_div}`}>
        <p>
          Welcome to RTQCR, where we redefine the possibilities of concrete
          surfaces. Our concrete resurfacing solutions breathe new life into
          worn-out, dull surfaces, transforming them into stunning, durable
          spaces
        </p>
      </div>
    </div>
  );
}

export default Hero;
