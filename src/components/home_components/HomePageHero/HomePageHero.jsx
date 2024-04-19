import React from 'react';
import styles from './HomePageHero.module.css';

function HomePageHero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={`container ${styles.hero_text_div}`}>
        <h1>
          Transforming Surfaces, Elevating Spaces: Unleash the Artistry of
          Concrete Resurfacing and Epoxy Flooring with{' '}
          <span>RTQ Concrete Resurfacing</span>
        </h1>

        <a href="#contact" className={`CTA`}>
          REQUEST A FREE QUOTE
        </a>
      </div>
    </div>
  );
}

export default HomePageHero;
