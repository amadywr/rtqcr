import Hero from '../../components/general_components/Hero/Hero';
import heroImg from '../../assets/sealing/hero.png';
import Why from '../../components/general_components/Why/Why';
import whyList from '../../assets/sealing/why';
import Info from '../../components/general_components/Info/Info';
import ColourGrid from '../../components/general_components/ColourGrid/ColourGrid';
import colours1 from '../../assets/sealing/colours1';
import colours2 from '../../assets/sealing/colours2';
import MiddleText from '../../components/general_components/MiddleText/MiddleText';
import FAQs from '../../components/general_components/FAQs/FAQs';
import sealingFAQs from '../../assets/sealing/sealingFAQs';

function ConcreteSealing() {
  return (
    <div>
      <Hero
        text={'Concrete Sealing'}
        info={
          'Welcome to RTQCR, where we specialize in professional concrete sealing services. Concrete sealing is essential for protecting and maintaining the integrity of your concrete'
        }
        image={heroImg}
      />

      <Why
        headerText={'Benefits of Concrete Sealing'}
        headerTextRight={false}
        why={whyList}
      />

      <Info
        headerText={'Concrete sealing process'}
        headerTextRight={true}
        serviceType={'Concrete Sealing'}
        customText={
          'We start by preparing surfaces, repairing damage, then apply premium sealants using specialized techniques. Our team ensures optimal protection, selecting the right sealant for driveways, patios, or commercial floors'
        }
      />

      <ColourGrid colours1={colours1} colours2={colours2} />

      <MiddleText />

      <FAQs faqs={sealingFAQs} />
    </div>
  );
}

export default ConcreteSealing;
