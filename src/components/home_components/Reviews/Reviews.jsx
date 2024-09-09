import { useRef } from 'react';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './Reviews.module.css';

import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import Review from '../Review/Review';

import googleReviews from '../../../assets/home/googleReviews';

function Reviews() {
  const swiperRef = useRef(null);

  return (
    <section className={`mini-container ${styles.reviews_section}`}>
      <h1>Google Reviews</h1>
      <Swiper
        ref={swiperRef}
        modules={[Pagination]}
        pagination={{ el: '.slider-pagination', clickable: true }}
        grabCursor={true}
        spaceBetween={10}
      >
        {googleReviews.map((review, index) => (
          <SwiperSlide key={index}>
            <Review review={review} />
          </SwiperSlide>
        ))}

        <div className={`swiper_wrapper `}>
          <div onClick={() => swiperRef.current.swiper.slidePrev()}>
            <SlArrowLeft className={`icons `} />
          </div>

          <div className="slider-pagination"></div>

          <div onClick={() => swiperRef.current.swiper.slideNext()}>
            <SlArrowRight className={`icons`} />
          </div>
        </div>
      </Swiper>
    </section>
  );
}

export default Reviews;
