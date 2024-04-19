import styles from './RecentProjects.module.css';
import Project from '../Project/Project';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import recentProjects from '../../../assets/home/recentProjects';
import 'swiper/css/bundle';
import Modal from '../../general_components/Modal/Modal';
import { useState } from 'react';

function RecentProjects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageSource, setModalImageSource] = useState('');
  const [caption, setCaption] = useState('');

  function getImage(source) {
    console.log(source);
    setModalOpen(true);
    setModalImageSource(source);
  }

  return (
    <section className={`${styles.recent_projects_section} mini-container`}>
      <h1>Recent Projects</h1>

      <Swiper
        pagination={{ el: '.slider-pagination', clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        grabCursor={true}
      >
        {recentProjects.map((project, index) => (
          <SwiperSlide key={index}>
            <Project
              project={project}
              getImage={getImage}
              setCaption={setCaption}
            />
          </SwiperSlide>
        ))}

        <div className="pagination-wrapper">
          <div className="slider-pagination"></div>
        </div>
      </Swiper>

      {modalOpen && (
        <Modal
          setModalOpen={setModalOpen}
          modalImageSource={modalImageSource}
          caption={caption}
        />
      )}
    </section>
  );
}

export default RecentProjects;
