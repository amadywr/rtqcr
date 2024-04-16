import React from 'react';
import styles from './Homepage.module.css';
import Services from '../../components/Services/Services';
import ServeArea from '../../components/ServeArea/ServeArea';
import RecentProjects from '../../components/RecentProjects/RecentProjects';
import FAQs from '../../components/FAQs/FAQs';
import homepageFAQs from '../../assets/homepageFAQs';
import Hero from '../../components/Hero/Hero';
import Reviews from '../../components/Reviews/Reviews';

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
