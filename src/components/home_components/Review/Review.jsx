import styles from './Review.module.css';

import { RiStarSFill } from 'react-icons/ri';

import googleLogoImg from '../../../assets/home/google_logo.png';

function Review({ review }) {
  return (
    <div className={`${styles.cards_div}`}>
      <a
        href={review.link}
        className={`${styles.card}`}
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.card_header}>
          <img
            src={`${review.profileImg}`}
            alt="person"
            className={`${styles.photo}`}
          />
          <h2 className={`${styles.name}`}>{review.name}</h2>
          <p className={`${styles.date}`}>{review.date}</p>
        </div>

        <div className={styles.stars_div}>
          {Array.from({ length: review.rating }).map((_, index) => (
            <RiStarSFill className={`${styles.star}`} key={index} />
          ))}
        </div>
        <p className={`${styles.quote}`}>{review.review}</p>

        <img
          src={googleLogoImg}
          alt="google logo"
          className={styles.google_logo}
        />
      </a>
    </div>
  );
}

export default Review;
