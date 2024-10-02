import React from 'react';
import sealing_hero from '../../../assets/sealing/hero.webp';
import spray_crete_hero from '../../../assets/spray/hero.webp';
import epoxy_hero from '../../../assets/epoxy/hero.webp';
import polishing_hero from '../../../assets/polishing/hero.webp';

import styles from './Services.module.css';

function Services() {
  return (
    <section
      className={`mini-mini-container ${styles.services_section}`}
      id="ourServices"
    >
      <h1>Our services</h1>

      <div className={`${styles.services_div}`}>
        <a href="/spray-crete-floor" className={`${styles.services_item}`}>
          <img src={spray_crete_hero} alt="spray crete floor" />

          <div>
            <h2>Spray-Crete Floor</h2>
            <p>
              Spray-Crete Floors is the perfect solution for worn, tired and
              cracked concrete driveways and pathways. This process seals the
              concrete surface, giving it a brand new look whilst also
              protecting it in the future
            </p>
          </div>
        </a>

        <a href="epoxy_flooring" className={`${styles.services_item}`}>
          <img src={epoxy_hero} alt="epoxy flooring" />

          <div>
            <h2>Epoxy Flooring</h2>
            <p>
              Epoxy flooring offers a durable, attractive and easy-to-clean
              surface for homes and businesses. Epoxy flooring also offers the
              additional benefit of improved safety around hazardous spills and
              slips. Freestyle Epoxy Flooring is proud to be a Dulux Accredited
              epoxy flooring applicator with a quality workmanship guarantee
            </p>
          </div>
        </a>

        <a href="/concrete_sealing" className={`${styles.services_item}`}>
          <img src={sealing_hero} alt="concrete sealing" />

          <div>
            <h2>Concrete sealing</h2>
            <p>
              Concrete sealing enhances durability, appearance, and resistance
              to stains, UV rays, and cracking. It simplifies maintenance,
              reduces long-term costs, and increases property value. Ideal for
              driveways, patios, and commercial spaces, sealing is a
              cost-effective solution for resilient and vibrant concrete
            </p>
          </div>
        </a>

        <a href="concrete_polishing" className={`${styles.services_item}`}>
          <img src={polishing_hero} alt="concrete polishing" />

          <div>
            <h2>Concrete Polishing</h2>
            <p>
              Polished concrete, achieved through grinding and honing, provides
              a modern, glossy finish with exceptional benefits. Renowned for
              durability, stain resistance, and cost-effectiveness, it reflects
              light for a brighter space. This environmentally friendly option
              requires minimal maintenance and is versatile in various settings,
              offering a stylish and sustainable flooring solution
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Services;
