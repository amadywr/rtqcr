import React from 'react';
import Services from '../../components/home_components/Services/Services';
import ServeArea from '../../components/home_components/ServeArea/ServeArea';
import RecentProjects from '../../components/home_components/RecentProjects/RecentProjects';
import FAQs from '../../components/general_components/FAQs/FAQs';
import homepageFAQs from '../../assets/home/homepageFAQs';
import HomepageHero from '../../components/home_components/HomePageHero/HomePageHero';
import Reviews from '../../components/home_components/Reviews/Reviews';

function Homepage() {
  return (
    <div>
      <HomepageHero />
      <Services />
      <ServeArea />
      <RecentProjects />
      <Reviews />
      <FAQs faqs={homepageFAQs} />
    </div>
  );
}

export default Homepage;
