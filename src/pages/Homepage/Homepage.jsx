import React from 'react';
import styles from './Homepage.module.css';
import { NavLink } from 'react-router-dom';
import Services from '../../components/Services';
import ServeArea from '../../components/ServeArea';
import RecentProjects from '../../components/RecentProjects';
import GoogleReview from '../../components/GoogleReview';
import FAQs from '../../components/FAQs';
import homepageFAQs from '../../assets/homepageFAQs';
import Footer from '../../components/Footer';

function Homepage() {
  return (
    <div className={styles.home}>
      <div className={styles.hero_wrapper}>
        <div className={`container ${styles.hero_text_div}`}>
          <h1>
            Transforming Surfaces, Elevating Spaces: Unleash the Artistry of
            Concrete Resurfacing and Epoxy Flooring with{' '}
            <span>RTQ Concrete Resurfacing</span>
          </h1>
          <a href="#contact" className={`CTA`}>
            REQUEST A FREE QUOTE
          </a>
        </div>
      </div>

      <Services />
      <ServeArea />
      <RecentProjects />
      <GoogleReview />
      <FAQs faqs={homepageFAQs} />
      <Footer />
    </div>
  );
}

export default Homepage;
