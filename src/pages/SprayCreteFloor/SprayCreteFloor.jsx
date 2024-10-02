import MiddleText from '../../components/general_components/MiddleText/MiddleText';
import FAQs from '../../components/general_components/FAQs/FAQs';
import sprayFAQs from '../../assets/spray/sprayFAQs';
import Hero from '../../components/general_components/Hero/Hero';
import heroImg from '../../assets/spray/hero.webp';
import Why from '../../components/general_components/Why/Why';
import whyList from '../../assets/spray/why';
import Info from '../../components/general_components/Info/Info';
import Grid from '../../components/general_components/Grid/Grid';
import colours1 from '../../assets/spray/colour_images/colours1';
import colours2 from '../../assets/spray/colour_images/colours2';
import stencils1 from '../../assets/spray/stencil_images/stencils1';
import stencils2 from '../../assets/spray/stencil_images/stencils2';
import Gallery from '../../components/general_components/Gallery/Gallery';
import gallery1 from '../../assets/spray/gallery/gallery1';
import gallery2 from '../../assets/spray/gallery/gallery2';

function SprayCreteFloor() {
  return (
    <div>
      <Hero
        text={'Spray-Crete Floor'}
        info={
          'Welcome to RTQ Concrete Resurfacing, where we redefine the possibilities of concrete surfaces. Our concrete resurfacing solutions breathe new life into worn-out, dull surfaces, transforming them into stunning, durable spaces'
        }
        image={heroImg}
      />

      <Why
        headerText={'Why choose spray-crete floor, you ask?'}
        headerTextRight={false}
        why={whyList}
      />

      <Info
        serviceType={'Spray-Crete Floor'}
        headerText={'Unleash Your Style: Patterns, Designs, and Colours'}
        headerTextRight={true}
      />

      <div className="mini-container">
        <Grid
          headerText={'Choose your colours'}
          headerTextRight={false}
          gridList1={colours1}
          gridList2={colours2}
          btnText={'colours'}
        />
      </div>

      <div className="mini-container">
        <Grid
          headerText={'Choose your stencils'}
          headerTextRight={true}
          gridList1={stencils1}
          gridList2={stencils2}
          btnText={'stencils'}
        />
      </div>

      <Gallery
        headerText={'Gallery'}
        headerTextRight={false}
        gallery1={gallery1}
        gallery2={gallery2}
        btnText={'photos'}
      />

      <MiddleText />

      <FAQs faqs={sprayFAQs} />
    </div>
  );
}

export default SprayCreteFloor;
