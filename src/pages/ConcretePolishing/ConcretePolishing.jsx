import React from 'react';
import Hero from '../../components/general_components/Hero/Hero';
import heroImg from '../../assets/polishing/hero.webp';
import Why from '../../components/general_components/Why/Why';
import whyList from '../../assets/polishing/why';
import MiddleText from '../../components/general_components/MiddleText/MiddleText';
import FAQs from '../../components/general_components/FAQs/FAQs';
import polishingFAQs from '../../assets/polishing/polishingFAQs';
import { Helmet } from 'react-helmet-async';

function ConcretePolishing() {
  return (
    <div>
      <Helmet>
        <title>Concrete Polishing | RTQ Concrete Resurfacing</title>
        <link rel="canonical" href="https://rtqcr.com.au/concrete-polishing" />
        <meta
          name="description"
          content="Discover RTQ Concrete Resurfacing's Concrete Polishing solutions. Enhance the beauty and durability of your floors with our professional concrete polishing services."
        />
      </Helmet>
      <Hero
        text={'Concrete Polishing'}
        info={
          'Welcome to RTQ Concrete Resurfacing, your trusted provider of professional concrete polishing solutions. Concrete polishing is a cost-effective way to enhance the beauty and durability of your floors'
        }
        image={heroImg}
      />

      <Why
        headerText={'Benefits of Concrete Polishing'}
        headerTextRight={false}
        why={whyList}
      />

      <MiddleText />

      <FAQs faqs={polishingFAQs} />
    </div>
  );
}

export default ConcretePolishing;
