import React from 'react';
import styles from './Homepage.module.css';
import { NavLink } from 'react-router-dom';
import Services from '../components/Services';
import ServeArea from '../components/ServeArea';
import RecontProjects from '../components/RecontProjects';

function Homepage() {
  return (
    <div className={styles.home}>
      <div className={styles.hero_wrapper}>
        <div className={`container ${styles.hero_text_div}`}>
          <h1>
            Transforming Surfaces, Elevating Spaces: Unleash the Artistry of
            Concrete Resurfacing and Epoxy Flooring with{' '}
            <span>RTQ Concrete Resurfacing</span>
          </h1>
          <NavLink to={'#contact'} className={`CTA`}>
            REQUEST A FREE QUOTE
          </NavLink>
        </div>
      </div>

      <Services />
      <ServeArea />
      <RecontProjects />
    </div>
  );
}

export default Homepage;
