import { useRef, useState } from 'react';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './RecentProjects.module.css';

import Project from '../Project/Project';
import recentProjects from '../../../assets/home/recentProjects';
import Modal from '../../general_components/Modal/Modal';

import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

function RecentProjects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageSource, setModalImageSource] = useState('');
  const [caption, setCaption] = useState('');

  function getImage(source) {
    console.log(source);
    setModalOpen(true);
    setModalImageSource(source);
  }

  const swiperRef = useRef(null);

  return (
    <section className={`mini-container ${styles.recent_projects_section}`}>
      <h1>Recent Projects</h1>

      <Swiper
        ref={swiperRef}
        modules={[Pagination]}
        pagination={{ clickable: true, el: '.slider-pagination' }}
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
