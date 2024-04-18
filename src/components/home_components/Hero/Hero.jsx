import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={`container ${styles.hero_text_div}`}>
        <h1>
          Transforming Surfaces, Elevating Spaces: Unleash the Artistry of
          Concrete Resurfacing and Epoxy Flooring with{' '}
          <span>RTQ Concrete Resurfacing</span>
        </h1>

        {/* <p className={styles.slogan}>Resurface. Renew. Re-Imagine</p> */}

        <a href="#contact" className={`CTA`}>
          REQUEST A FREE QUOTE
        </a>
      </div>
    </div>
  );
}

export default Hero;
