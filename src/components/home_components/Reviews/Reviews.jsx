import styles from './Reviews.module.css';
import { RiStarSFill } from 'react-icons/ri';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import googleLogoImg from '../../../assets/home/google_logo.png';

import 'swiper/css/bundle';

function Reviews() {
  return (
    <section className={`mini-container ${styles.reviews_section}`}>
      <h1>Google Reviews</h1>
      <Swiper
        pagination={{ el: '.slider-pagination', clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        grabCursor={true}
      >
        <SwiperSlide>
          <div className={`${styles.cards_div}`}>
            <div className={`${styles.card}`}>
              <div className={styles.card_header}>
                <img
                  src={
                    'https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  }
                  alt="person"
                  className={`${styles.photo}`}
                />
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
                We just had our worn stencilled driveway stripped and
                resurfaced, epoxy floor covering in the garage, and flake and
                seal over tiles on the patio - what a fantastic transformation -
                we couldn’t be happier. I can’t recommend Joel and Adrian highly
                enough - quality finish, professional, concise, attention to
                detail, clear communication, punctual and polite, these guys did
                an amazing job transforming a tired 20 year old house. Great
                guys so if you are looking to update, these are the guys for you
              </p>

              <img
                src={googleLogoImg}
                alt="google logo"
                className={styles.google_logo}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={`${styles.cards_div}`}>
            <div className={`${styles.card}`}>
              <div className={styles.card_header}>
                <img
                  src={
                    'https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  }
                  alt="person"
                  className={`${styles.photo}`}
                />
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
                We just had our worn stencilled driveway stripped and
                resurfaced, epoxy floor covering in the garage, and flake and
                seal over tiles on the patio - what a fantastic transformation -
                we couldn’t be happier. I can’t recommend Joel and Adrian highly
                enough - quality finish, professional, concise, attention to
                detail, clear communication, punctual and polite, these guys did
                an amazing job transforming a tired 20 year old house. Great
                guys so if you are looking to update, these are the guys for you
              </p>

              <img
                src={googleLogoImg}
                alt="google logo"
                className={styles.google_logo}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={`${styles.cards_div}`}>
            <div className={`${styles.card}`}>
              <div className={styles.card_header}>
                <img
                  src={
                    'https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  }
                  alt="person"
                  className={`${styles.photo}`}
                />
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
                We just had our worn stencilled driveway stripped and
                resurfaced, epoxy floor covering in the garage, and flake and
                seal over tiles on the patio - what a fantastic transformation -
                we couldn’t be happier. I can’t recommend Joel and Adrian highly
                enough - quality finish, professional, concise, attention to
                detail, clear communication, punctual and polite, these guys did
                an amazing job transforming a tired 20 year old house. Great
                guys so if you are looking to update, these are the guys for you
              </p>

              <img
                src={googleLogoImg}
                alt="google logo"
                className={styles.google_logo}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={`${styles.cards_div}`}>
            <div className={`${styles.card}`}>
              <div className={styles.card_header}>
                <img
                  src="https://images.unsplash.com/photo-1608127010513-2c9fc1638893?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="person"
                  className={`${styles.photo}`}
                />
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
                We just had our worn stencilled driveway stripped and
                resurfaced, epoxy floor covering in the garage, and flake and
                seal over tiles on the patio - what a fantastic transformation -
                we couldn’t be happier. I can’t recommend Joel and Adrian highly
                enough - quality finish, professional, concise, attention to
                detail, clear communication, punctual and polite, these guys did
                an amazing job transforming a tired 20 year old house. Great
                guys so if you are looking to update, these are the guys for you
              </p>

              <img
                src={googleLogoImg}
                alt="google logo"
                className={styles.google_logo}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={`${styles.cards_div}`}>
            <div className={`${styles.card}`}>
              <div className={styles.card_header}>
                <img
                  src="https://plus.unsplash.com/premium_photo-1677756270912-c3fd90e84743?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="person"
                  className={`${styles.photo}`}
                />
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
                We just had our worn stencilled driveway stripped and
                resurfaced, epoxy floor covering in the garage, and flake and
                seal over tiles on the patio - what a fantastic transformation -
                we couldn’t be happier. I can’t recommend Joel and Adrian highly
                enough - quality finish, professional, concise, attention to
                detail, clear communication, punctual and polite, these guys did
                an amazing job transforming a tired 20 year old house. Great
                guys so if you are looking to update, these are the guys for you
              </p>

              <img
                src={googleLogoImg}
                alt="google logo"
                className={styles.google_logo}
              />
            </div>
          </div>
        </SwiperSlide>

        <div className="pagination-wrapper">
          <div className="slider-pagination"></div>
        </div>
      </Swiper>
    </section>
  );
}

export default Reviews;
