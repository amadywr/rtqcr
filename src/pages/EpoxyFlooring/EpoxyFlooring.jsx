import epoxyFAQs from '../../assets/epoxy/epoxyFAQs';
import Hero from '../../components/general_components/Hero/Hero';
import heroImg from '../../assets/epoxy/hero.webp';
import Why from '../../components/general_components/Why/Why';
import whyList from '../../assets/epoxy/Why';
import Info from '../../components/general_components/Info/Info';
import gallery1 from '../../assets/epoxy/gallery/gallery1';
import gallery2 from '../../assets/epoxy/gallery/gallery2';
import Gallery from '../../components/general_components/Gallery/Gallery';
import MiddleText from '../../components/general_components/MiddleText/MiddleText';
import FAQs from '../../components/general_components/FAQs/FAQs';
import MultiGrid from '../../components/general_components/MultiGrid/MultiGrid';
import { Helmet } from 'react-helmet-async';

function EpoxyFlooring() {
  return (
    <div>
      <Helmet>
        <title>Epoxy Flooring | RTQ Concrete Resurfacing</title>
        <link rel="canonical" href="https://rtqcr.com.au/epoxy-flooring" />
        <meta
          name="description"
          content="Explore RTQ Concrete Resurfacing's Epoxy Flooring solutions. Enhance your spaces with durable, stylish, and high-performance epoxy flooring designed to last."
        />
      </Helmet>
      <Hero
        text={'Epoxy Flooring'}
        info={
          'Welcome to a world where durability meets aesthetics – introducing our top-notch epoxy flooring solutions! Elevate your surroundings with a flooring choice that not only withstands the test of time but also adds a touch of modern sophistication to any space'
        }
        image={heroImg}
      />

      <Why
        headerText={'Why choose epoxy flooring, you ask?'}
        headerTextRight={false}
        why={whyList}
      />

      <Info
        serviceType={'Epoxy Flooring'}
        headerText={
          'Explore Endless Possibilities: Styles, Designs, and Colors'
        }
        headerTextRight={true}
      />

      <MultiGrid />

      <Gallery
        headerText={'Gallery'}
        headerTextRight={false}
        btnText={'photos'}
        gallery1={gallery1}
        gallery2={gallery2}
      />

      <MiddleText />

      <FAQs faqs={epoxyFAQs} />
    </div>
  );
}

export default EpoxyFlooring;
