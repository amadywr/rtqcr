import React from 'react';
import styles from './Homepage.module.css';
import Services from '../../components/home_components/Services/Services';
import ServeArea from '../../components/home_components/ServeArea/ServeArea';
import RecentProjects from '../../components/home_components/RecentProjects/RecentProjects';
import FAQs from '../../components/general_components/FAQs/FAQs';
import homepageFAQs from '../../assets/homepageFAQs';
import Hero from '../../components/home_components/Hero/Hero';
import Reviews from '../../components/home_components/Reviews/Reviews';

function Homepage() {
  return (
    <div className={styles.home}>
      <Hero />
      <Services />
      <ServeArea />
      <RecentProjects />
      <Reviews />
      <FAQs faqs={homepageFAQs} />
    </div>
  );
}

export default Homepage;
