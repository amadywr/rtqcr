import { useState } from 'react';
import Header from '../Header/Header';
import styles from './Design.module.css';
import bluegum from '../../../assets/spray_images/colour_images/bluegum.png';
import silver_sands from '../../../assets/spray_images/colour_images/silver_sands.png';
import slate_grey from '../../../assets/spray_images/colour_images/slate_grey.png';
import french_grey from '../../../assets/spray_images/colour_images/french_grey.png';
import granite from '../../../assets/spray_images/colour_images/granite.png';
import bluestone from '../../../assets/spray_images/colour_images/bluestone.png';
import gunmetal from '../../../assets/spray_images/colour_images/gunmetal.png';
import charcoal from '../../../assets/spray_images/colour_images/charcoal.png';
import jet_black from '../../../assets/spray_images/colour_images/jet_black.png';
import chocolate from '../../../assets/spray_images/colour_images/chocolate.png';
import brick_red from '../../../assets/spray_images/colour_images/brick_red.png';
import dark_terracotta from '../../../assets/spray_images/colour_images/dark_terracotta.png';
import light_terracotta from '../../../assets/spray_images/colour_images/light_terracotta.png';
import sandstone from '../../../assets/spray_images/colour_images/sandstone.png';
import chestnut from '../../../assets/spray_images/colour_images/chestnut.png';
import lite_mocha from '../../../assets/spray_images/colour_images/lite_mocha.png';
import merino from '../../../assets/spray_images/colour_images/merino.png';
import sandy_beige from '../../../assets/spray_images/colour_images/sandy_beige.png';
import cream from '../../../assets/spray_images/colour_images/cream.png';
import white from '../../../assets/spray_images/colour_images/white.png';

function Design() {
  const [viewMore, setViewMore] = useState(false);

  return (
    <div className={`mini-container ${styles.wrapper}`}>
      <Header
        textRight={true}
        text={'Unleash Your Style: Patterns, Designs, and Colours'}
      />

      <div className={styles.text_div}>
        <p className={styles.text}>
          At <span>RTQCR</span>, we understand that every space is unique, and
          your concrete surfaces should reflect your personal style. Explore the
          diverse range of patterns, designs, and colours that our spray-crete
          solutions offer
        </p>
      </div>

      <Header textRight={false} text={'Choose your colour'} />

      <div className={styles.desgins_container}>
        <div className={styles.design}>
          <img src={bluegum} alt="bluegum" />
          <p>bluegum</p>
        </div>

        <div className={styles.design}>
          <img src={silver_sands} alt="silver sands" />
          <p>Silver Sands</p>
        </div>

        <div className={styles.design}>
          <img src={slate_grey} alt="slate grey" />
          <p>Sandy Beige</p>
        </div>

        <div className={styles.design}>
          <img src={french_grey} alt="french grey" />
          <p>French Grey</p>
        </div>

        <div className={styles.design}>
          <img src={granite} alt="granite" />
          <p>Granite</p>
        </div>

        <div className={styles.design}>
          <img src={bluestone} alt="bluestone" />
          <p>Bluestone</p>
        </div>

        <div className={styles.design}>
          <img src={gunmetal} alt="gunmetal" />
          <p>Gunmetal</p>
        </div>

        <div className={styles.design}>
          <img src={charcoal} alt="charcoal" />
          <p>Charcoal</p>
        </div>

        <div className={styles.design}>
          <img src={jet_black} alt="jet black" />
          <p>Jet Black</p>
        </div>

        <div className={styles.design}>
          <img src={chocolate} alt="chocolate" />
          <p>Chocolate</p>
        </div>

        <div className={styles.design}>
          <img src={brick_red} alt="brick red" />
          <p>Brick Red</p>
        </div>

        <div className={styles.design}>
          <img src={dark_terracotta} alt="dark terracotta" />
          <p>Dark Terracotta</p>
        </div>
      </div>

      <div
        className={`${styles.desgins_container} ${viewMore ? '' : 'hidden'}`}
        style={{ marginTop: '3rem' }}
      >
        <div className={styles.design}>
          <img src={light_terracotta} alt="ligh terracotta" />
          <p>Light Terracotta</p>
        </div>

        <div className={styles.design}>
          <img src={sandstone} alt="sandstone" />
          <p>Sandstone</p>
        </div>

        <div className={styles.design}>
          <img src={chestnut} alt="chestnut" />
          <p>Chestnut</p>
        </div>

        <div className={styles.design}>
          <img src={lite_mocha} alt="lite mocha" />
          <p>Lite Mocha</p>
        </div>

        <div className={styles.design}>
          <img src={merino} alt="merino" />
          <p>Merino</p>
        </div>

        <div className={styles.design}>
          <img src={sandy_beige} alt="sandy beige" />
          <p>Sandy Beige</p>
        </div>

        <div className={styles.design}>
          <img src={cream} alt="cream" />
          <p>Cream</p>
        </div>

        <div className={styles.design}>
          <img src={white} alt="white" />
          <p>white</p>
        </div>
      </div>

      <div className="button_div">
        <button className="button" onClick={() => setViewMore(!viewMore)}>
          {viewMore ? 'View less' : 'View more'}
        </button>
      </div>
    </div>
  );
}

export default Design;
