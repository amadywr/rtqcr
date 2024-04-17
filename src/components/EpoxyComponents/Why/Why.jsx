import React from 'react';
import styles from './Why.module.css';
import Header from '../Header/Header';
import epoxyWhy from '../../../assets/epoxyWhy';

function Why() {
  return (
    <div className={`${styles.why_wrapper} mini-container`}>
      <Header />

      <div>
        <ul>
          <li>
            <span className={styles.item_id}>1. </span>
            <span>Unparalleled Durability: </span>Our epoxy flooring is
            engineered to withstand heavy foot traffic, spills, and daily wear
            and tear. Say goodbye to worries about scratches, stains, or
            unsightly damage – your floors will maintain their flawless finish
            for years to come
          </li>

          <li>
            <span className={styles.item_id}>2. </span>
            <span>Seamless Style: </span>Create a sleek, polished look that
            effortlessly complements any design aesthetic. Our epoxy flooring
            comes in a variety of colours and finishes, allowing you to
            customize your space with ease. Whether you prefer a contemporary
            sheen or a more traditional matte finish, we've got you covered
          </li>

          <li>
            <span className={styles.item_id}>3. </span>
            <span>Low Maintenance and High Impact: </span>Tired of spending
            hours on floor upkeep? Epoxy flooring is not only resistant to dirt
            and grime but also incredibly easy to clean. Enjoy a low-maintenance
            solution that doesn't compromise on aesthetics
          </li>
        </ul>

        <ul>
          <li>
            <span className={styles.item_id}>4. </span>
            <span>Versatility at its Best: </span>Perfect for residential,
            commercial, or industrial spaces, epoxy flooring adapts to your
            needs. From garages to living rooms, kitchens to warehouses,
            experience the versatility that sets our flooring apart
          </li>

          <li>
            <span className={styles.item_id}>4. </span>
            <span>Eco-friendly Choices: </span>We understand the importance of
            sustainability. Our epoxy flooring options are crafted with
            environmentally friendly materials, ensuring you make a responsible
            choice without compromising on quality
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Why;
