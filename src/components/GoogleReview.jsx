import React from 'react';
import styles from './GoogleReview.module.css';
import person from '../assets/person.jpg';
import { RiStarSFill } from 'react-icons/ri';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

function GoogleReview() {
  return (
    <section className={`${styles.google_review_section} mini-container`}>
      <h1>Google Review</h1>
      <div className={styles.main_div}>
        <div>
          <SlArrowLeft className={styles.carousel_arrow} />
        </div>
        <div className={`${styles.cards_div}`}>
          <div className={`${styles.card}`}>
            <div className={styles.card_header}>
              <img src={person} alt="person" className={`${styles.photo}`} />
              <h2 className={`${styles.name}`}>Jeremy</h2>
              <p className={`${styles.date}`}>09/02/2024</p>
            </div>

            <div className={styles.stars_div}>
              <RiStarSFill className={`${styles.star}`} />
              <RiStarSFill className={`${styles.star}`} />
              <RiStarSFill className={`${styles.star}`} />
              <RiStarSFill className={`${styles.star}`} />
              <RiStarSFill className={`${styles.star}`} />
            </div>
            <p className={`${styles.quote}`}>
              We just had our worn stencilled driveway stripped and resurfaced,
              epoxy floor covering in the garage, and flake and seal over tiles
              on the patio - what a fantastic transformation - we couldn’t be
              happier. I can’t recommend Joel and Adrian highly enough - quality
              finish, professional, concise, attention to detail, clear
              communication, punctual and polite, these guys did an amazing job
              transforming a tired 20 year old house. Great guys so if you are
              looking to update, these are the guys for you
            </p>
          </div>
        </div>
        <div>
          <SlArrowRight className={styles.carousel_arrow} />
        </div>
      </div>
    </section>
  );
}

export default GoogleReview;
