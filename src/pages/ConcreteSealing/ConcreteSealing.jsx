import Hero from '../../components/general_components/Hero/Hero';
import heroImg from '../../assets/sealing/hero.png';
import Why from '../../components/general_components/Why/Why';
import whyList from '../../assets/sealing/why';
import Info from '../../components/general_components/Info/Info';

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
    </div>
  );
}

export default ConcreteSealing;
