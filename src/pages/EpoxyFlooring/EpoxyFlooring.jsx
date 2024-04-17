import React from 'react';
import Hero from '../../components/EpoxyComponents/Hero/Hero';
import Why from '../../components/EpoxyComponents/Why/Why';
import Design from '../../components/EpoxyComponents/Design/Design';
import Gallery from '../../components/EpoxyComponents/Gallery/Gallery';
import MiddleText from '../../components/EpoxyComponents/MiddleText/MiddleText';
import FAQs from '../../components/FAQs/FAQs';
import epoxyFAQs from '../../assets/epoxyFAQs';

function EpoxyFlooring() {
  return (
    <div>
      <Hero />
      <Why />
      <Design />
      <Gallery />
      <MiddleText />
      <FAQs faqs={epoxyFAQs} />
    </div>
  );
}

export default EpoxyFlooring;
