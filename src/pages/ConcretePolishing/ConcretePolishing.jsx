import React from 'react';
import Hero from '../../components/general_components/Hero/Hero';
import heroImg from '../../assets/polishing/hero.jpg';
import Why from '../../components/general_components/Why/Why';
import whyList from '../../assets/polishing/why';

function ConcretePolishing() {
  return (
    <div>
      <Hero
        text={'Concrete Polishing'}
        info={
          'Welcome to RTQCR, your trusted provider of professional concrete polishing solutions. Concrete polishing is a cost-effective way to enhance the beauty and durability of your floors'
        }
        image={heroImg}
      />

      <Why
        headerText={'Benefits of Concrete Polishing'}
        headerTextRight={false}
        why={whyList}
      />
    </div>
  );
}

export default ConcretePolishing;
