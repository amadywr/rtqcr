import { useRef } from 'react';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './Reviews.module.css';

import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import Review from '../Review/Review';

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
        {Array.from({ length: 5 }).map((_, index) => (
          <SwiperSlide key={index}>
            <Review />
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
