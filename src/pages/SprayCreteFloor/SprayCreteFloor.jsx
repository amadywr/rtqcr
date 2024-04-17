import React from 'react';
import Hero from '../../components/spray_components/Hero/Hero';
import Why from '../../components/spray_components/Why/Why';
import Design from '../../components/spray_components/Design/Design';
import Stencil from '../../components/spray_components/Stencil/Stencil';
import Gallery from '../../components/spray_components/Gallery/Gallery';
import MiddleText from '../../components/spray_components/MiddleText/MiddleText';
import FAQs from '../../components/general_components/FAQs/FAQs';
import sprayFAQs from '../../assets/sprayFAQs';

function SprayCreteFloor() {
  return (
    <div>
      <Hero />
      <Why />
      <Design />
      <Stencil />
      <Gallery />
      <MiddleText />
      <FAQs faqs={sprayFAQs} />
    </div>
  );
}

export default SprayCreteFloor;
