import React from 'react';
import styles from './ServeArea.module.css';
import { FaHome, FaBuilding } from 'react-icons/fa';
import { MdFactory } from 'react-icons/md';

function ServeArea() {
  return (
    <div className={styles.serve_area_wrapper}>
      <div className={`${styles.serve_area_div} mini-container`}>
        <h1>Areas we serve</h1>
        <p>
          Situated in Western Sydney, RTQ Concrete Resurfacing is your premier
          destination for high-quality concrete services . Specializing in
          residential, commercial, and industrial projects, we excel in concrete
          resurfacing, sealing, polishing, and epoxy flooring. Our dedicated
          team proudly serves the entire greater Sydney region. Elevate your
          space with our expert concrete solutions, tailored to perfection
        </p>

        <p className={styles.slogan}>Resurface. Renew. Re-Imagine</p>

        <div className={styles.icons_div}>
          <div className={styles.icon_item}>
            <FaHome className={styles.icon} />
            <p>Residents</p>
          </div>
          <div className={styles.icon_item}>
            <FaBuilding className={styles.icon} />
            <p>Commercial</p>
          </div>
          <div className={styles.icon_item}>
            <MdFactory className={styles.icon} />
            <p>Industrial</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServeArea;
