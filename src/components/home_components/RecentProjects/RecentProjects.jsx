import styles from './RecentProjects.module.css';
import Project from '../Project/Project';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import recentProjects from '../../../assets/recentProjects';

import 'swiper/css/bundle';

function RecentProjects() {
  return (
    <section className={`${styles.recent_projects_section} mini-container`}>
      <h1>Recent Projects</h1>

      <Swiper
        pagination={{ el: '.slider-pagination', clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        grabCursor={true}
      >
        {recentProjects.map((project, index) => (
          <SwiperSlide key={index}>
            <Project project={project} />
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <Project />
        </SwiperSlide>

        <SwiperSlide>
          <Project />
        </SwiperSlide> */}

        <div className="pagination-wrapper">
          <div className="slider-pagination"></div>
        </div>
      </Swiper>
    </section>
  );
}

export default RecentProjects;
