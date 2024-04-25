import { useState } from 'react';
import styles from './MultiGrid.module.css';
import Header from '../Header/Header';
import Grid from '../Grid/Grid';
import {
  ultra_flake_styles1,
  ultra_flake_styles2,
} from '../../../assets/epoxy/styles/ultra_flake/ultra_flake_styles';
import { hyper_flake_styles1 } from '../../../assets/epoxy/styles/hyper_flake/hyper_flake_styles';

function MultiGrid() {
  const [gridName, setGridName] = useState('ultra_flake');

  return (
    <div className={`mini-container margin-top-medium`}>
      <Header
        headerText={'Find your perfect style match'}
        headerTextRight={false}
      />
      <div className={`margin-top-mini ${styles.btns_div}`}>
        <button
          onClick={() => setGridName('ultra_flake')}
          className={
            gridName === 'ultra_flake' ? `${styles.btn_clicked}` : null
          }
        >
          Ultra Flake
        </button>

        <div className={styles.vertical_line}></div>

        <button
          onClick={() => setGridName('hyper_flake')}
          className={
            gridName === 'hyper_flake' ? `${styles.btn_clicked}` : null
          }
        >
          Hyper Flake
        </button>

        <div className={styles.vertical_line}></div>

        <button>Grip Finish</button>

        <div className={styles.vertical_line}></div>

        <button>Quartz Shield</button>

        <div className={styles.vertical_line}></div>

        <button>Plain Epoxy</button>

        <div className={styles.vertical_line}></div>

        <button>Glitter</button>

        <div className={styles.vertical_line}></div>

        <button>Metallic</button>
      </div>

      {gridName === 'ultra_flake' && (
        <Grid
          wantHeader={false}
          gridList1={ultra_flake_styles1}
          gridList2={ultra_flake_styles2}
          btnText={'ultra flakes'}
          marginTop={'margin-top-small'}
        />
      )}

      {gridName === 'hyper_flake' && (
        <Grid
          wantHeader={false}
          gridList1={hyper_flake_styles1}
          marginTop={'margin-top-small'}
        />
      )}
    </div>
  );
}

export default MultiGrid;
