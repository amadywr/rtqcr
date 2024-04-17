import React from 'react';
import Hero from '../../components/epoxy_components/Hero/Hero';
import Why from '../../components/epoxy_components/Why/Why';
import Design from '../../components/epoxy_components/Design/Design';
import Gallery from '../../components/epoxy_components/Gallery/Gallery';
import MiddleText from '../../components/epoxy_components/MiddleText/MiddleText';
import FAQs from '../../components/general_components/FAQs/FAQs';
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
