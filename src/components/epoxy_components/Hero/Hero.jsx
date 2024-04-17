import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <div
      className={styles.hero_wrapper}
      data-heroImg={'../../../assets/hero.jpg'}
    >
      <h1>Epoxy Flooring</h1>
      <div className={`${styles.hero_text_div}`}>
        <p>
          Welcome to a world where durability meets aesthetics – introducing our
          top-notch epoxy flooring solutions! Elevate your surroundings with a
          flooring choice that not only withstands the test of time but also
          adds a touch of modern sophistication to any space
        </p>
      </div>
    </div>
  );
}

export default Hero;
