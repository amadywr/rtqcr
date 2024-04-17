import React from 'react';
import styles from './Why.module.css';
import Header from '../Header/Header';

function Why() {
  return (
    <div className={`${styles.why_wrapper} mini-container`}>
      <Header text={'Why choose spray-crete floor, you ask?'} />

      <div className={styles.body}>
        <ul>
          <li>
            <span className={styles.item_id}>1. </span>
            <span>Renewed Aesthetics: </span>Give your concrete surfaces a
            fresh, modern look. Our resurfacing options come in various finishes
            and textures, allowing you to achieve the aesthetic you desire.
          </li>

          <li>
            <span className={styles.item_id}>4. </span>
            <span>Customization Options: </span>Express your style with a range
            of customization options. Choose from different colours, patterns,
            and textures to tailor the resurfacing to your unique preferences.
          </li>
        </ul>

        <ul>
          <li>
            <span className={styles.item_id}>4. </span>
            <span>Enhanced Durability: </span>Strengthen and protect your
            concrete surfaces against the elements. Our resurfacing materials
            provide an extra layer of durability, ensuring longevity and
            resistance to wear and tear.
          </li>

          <li>
            <span className={styles.item_id}>3. </span>
            <span>Quick Installation: </span>
            Experience minimal disruption to your daily activities. Our
            efficient installation process ensures a swift transformation of
            your space without lengthy downtimes.
          </li>
        </ul>

        <ul>
          <li>
            <span className={styles.item_id}>3. </span>
            <span>Cost-Effective Solution: </span>Concrete resurfacing is a
            cost-effective alternative to full replacement. Save on the expense
            of removing and pouring new concrete while achieving a revitalized
            appearance.
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Why;
