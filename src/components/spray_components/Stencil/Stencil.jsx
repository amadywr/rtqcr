import { useState } from 'react';
import Header from '../Header/Header';
import styles from './Stencil.module.css';
import block from '../../../assets/spray_images/stencil_images/block.png';
import rustic_brick from '../../../assets/spray_images/stencil_images/rustic_brick.png';
import mediterranean from '../../../assets/spray_images/stencil_images/mediterranean.png';
import convict_brick from '../../../assets/spray_images/stencil_images/convict_brick.png';
import brick from '../../../assets/spray_images/stencil_images/brick.png';
import bushrock from '../../../assets/spray_images/stencil_images/bushrock.png';
import classic_herringbone from '../../../assets/spray_images/stencil_images/classic_herringbone.png';
import diamond_tile from '../../../assets/spray_images/stencil_images/diamond_tile.png';
import european_fan from '../../../assets/spray_images/stencil_images/european_fan.png';
import basket_weave from '../../../assets/spray_images/stencil_images/basket_weave.png';
import quarry_tile from '../../../assets/spray_images/stencil_images/quarry_tile.png';
import ashlar_slate from '../../../assets/spray_images/stencil_images/ashlar_slate.png';
import flagstone from '../../../assets/spray_images/stencil_images/flagstone.png';
import english_cobble from '../../../assets/spray_images/stencil_images/english_cobble.png';
import regal_tile from '../../../assets/spray_images/stencil_images/regal_tile.png';
import keystone from '../../../assets/spray_images/stencil_images/keystone.png';
import random_bluestone from '../../../assets/spray_images/stencil_images/random_bluestone.png';
import cobblestone from '../../../assets/spray_images/stencil_images/cobblestone.png';
import antique_tile from '../../../assets/spray_images/stencil_images/antique_tile.png';
import large_tile from '../../../assets/spray_images/stencil_images/large_tile.png';
import keystone_header from '../../../assets/spray_images/stencil_images/keystone_header.png';
import brick_header from '../../../assets/spray_images/stencil_images/brick_header.png';
import cobble_header from '../../../assets/spray_images/stencil_images/cobble_header.png';
import large_tile_header from '../../../assets/spray_images/stencil_images/large_tile_header.png';
// import edge_brick_header from '../../../assets/spray_images/stencil_images/edge_brick_header.png';
import star_compass from '../../../assets/spray_images/stencil_images/star_compass.png';
import rosette from '../../../assets/spray_images/stencil_images/rosette.png';

function Stencil() {
  const [viewMore, setViewMore] = useState(false);

  return (
    <div className={`mini-container ${styles.wrapper}`}>
      <Header textRight={true} text={'Choose your stencil'} />
      {/* <div className={styles.text_div}>
        <p className={styles.text}>
          choose your stencil from a wide range of styles we offer:
        </p>
      </div> */}

      <div className={styles.desgins_container}>
        <div className={styles.design}>
          <img src={block} alt="block" />
          <p>Block</p>
        </div>

        <div className={styles.design}>
          <img src={rustic_brick} alt="rustic brick" />
          <p>Rustic Brick</p>
        </div>

        <div className={styles.design}>
          <img src={mediterranean} alt="mediterranean" />
          <p>Mediterranean</p>
        </div>

        <div className={styles.design}>
          <img src={convict_brick} alt="convict brick" />
          <p>Convict Brick</p>
        </div>

        <div className={styles.design}>
          <img src={brick} alt="brick" />
          <p>Brick</p>
        </div>

        <div className={styles.design}>
          <img src={bushrock} alt="bushrock" />
          <p>Bushrock</p>
        </div>

        <div className={styles.design}>
          <img src={classic_herringbone} alt="classic herringbone" />
          <p>Classic Herringbone</p>
        </div>

        <div className={styles.design}>
          <img src={diamond_tile} alt="diamond tile" />
          <p>Diamond Tile</p>
        </div>

        <div className={styles.design}>
          <img src={european_fan} alt="european fan" />
          <p>European Fan</p>
        </div>

        <div className={styles.design}>
          <img src={basket_weave} alt="basket weave" />
          <p>Basket Weave</p>
        </div>

        <div className={styles.design}>
          <img src={quarry_tile} alt="quarry tile" />
          <p>Quarry Tile</p>
        </div>

        <div className={styles.design}>
          <img src={ashlar_slate} alt="ashlar slate" />
          <p>Ashlar Slate</p>
        </div>
      </div>

      <div
        className={`${styles.desgins_container} ${viewMore ? '' : 'hidden'}`}
        style={{ marginTop: '3rem' }}
      >
        <div className={styles.design}>
          <img src={flagstone} alt="flagstone" />
          <p>Flagstone</p>
        </div>

        <div className={styles.design}>
          <img src={english_cobble} alt="english cobble" />
          <p>English Cobble</p>
        </div>

        <div className={styles.design}>
          <img src={regal_tile} alt="regal tile" />
          <p>Regal Tile</p>
        </div>

        <div className={styles.design}>
          <img src={keystone} alt="keystone" />
          <p>Keystone</p>
        </div>

        <div className={styles.design}>
          <img src={random_bluestone} alt="random bluestone" />
          <p>Random Bluestone</p>
        </div>

        <div className={styles.design}>
          <img src={cobblestone} alt="cobblestone" />
          <p>Cobblestone</p>
        </div>

        <div className={styles.design}>
          <img src={antique_tile} alt="antique tile" />
          <p>Antique Tile</p>
        </div>

        <div className={styles.design}>
          <img src={large_tile} alt="large tile" />
          <p>Large Tile</p>
        </div>

        <div className={styles.design}>
          <img src={keystone_header} alt="keystone header" />
          <p>Keystone Header</p>
        </div>

        <div className={styles.design}>
          <img src={brick_header} alt="brick header" />
          <p>Brick Header</p>
        </div>

        <div className={styles.design}>
          <img src={cobble_header} alt="cobble header" />
          <p>Cobble Header</p>
        </div>

        <div className={styles.design}>
          <img src={large_tile_header} alt="large tile header" />
          <p>Large Tile Header</p>
        </div>

        {/* <div className={styles.design}>
          <img src={edge_brick_header} alt="edge brick header" />
          <p>Edge Brick Header</p>
        </div> */}

        <div className={styles.design}>
          <img src={star_compass} alt="star compass" />
          <p>Star Compass</p>
        </div>

        <div className={styles.design}>
          <img src={rosette} alt="rosette" />
          <p>Rosette</p>
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

export default Stencil;
