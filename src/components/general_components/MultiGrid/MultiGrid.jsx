import { useState } from 'react';
import styles from './MultiGrid.module.css';
import Header from '../Header/Header';
import Grid from '../Grid/Grid';
import {
  ultra_flake_styles1,
  ultra_flake_styles2,
} from '../../../assets/epoxy/styles/ultra_flake/ultra_flake_styles';
import { hyper_flake_styles1 } from '../../../assets/epoxy/styles/hyper_flake/hyper_flake_styles';
import { grip_finish_style1 } from '../../../assets/epoxy/styles/grip_finish/grip_finish_style';
import { quartz_shield_style1 } from '../../../assets/epoxy/styles/quartz_shield/quartz_shield_style';
import ColourGrid from '../ColourGrid/ColourGrid';
import { plain_epoxy_colour1 } from '../../../assets/epoxy/styles/plain_epoxy/plain_epoxy';
import { glitter_style1 } from '../../../assets/epoxy/styles/glitter/glitter_style';
import { metallic_style1 } from '../../../assets/epoxy/styles/metallic/metallic_style';

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

        <button
          onClick={() => setGridName('grip_finish')}
          className={
            gridName === 'grip_finish' ? `${styles.btn_clicked}` : null
          }
        >
          Grip Finish
        </button>

        <div className={styles.vertical_line}></div>

        <button
          onClick={() => setGridName('quartz_shield')}
          className={
            gridName === 'quartz_shield' ? `${styles.btn_clicked}` : null
          }
        >
          Quartz Shield
        </button>

        <div className={styles.vertical_line}></div>

        <button
          onClick={() => setGridName('plain_epoxy')}
          className={
            gridName === 'plain_epoxy' ? `${styles.btn_clicked}` : null
          }
        >
          Plain Epoxy
        </button>

        <div className={styles.vertical_line}></div>

        <button
          onClick={() => setGridName('glitter')}
          className={gridName === 'glitter' ? `${styles.btn_clicked}` : null}
        >
          Glitter
        </button>

        <div className={styles.vertical_line}></div>

        <button
          onClick={() => setGridName('metallic')}
          className={gridName === 'metallic' ? `${styles.btn_clicked}` : null}
        >
          Metallic
        </button>
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

      {gridName === 'grip_finish' && (
        <Grid
          wantHeader={false}
          gridList1={grip_finish_style1}
          marginTop={'margin-top-small'}
        />
      )}

      {gridName === 'quartz_shield' && (
        <Grid
          wantHeader={false}
          gridList1={quartz_shield_style1}
          marginTop={'margin-top-small'}
        />
      )}

      {gridName === 'plain_epoxy' && (
        <ColourGrid
          wantHeader={false}
          colours1={plain_epoxy_colour1}
          marginTop={'margin-top-small'}
        />
      )}

      {gridName === 'glitter' && (
        <Grid
          wantHeader={false}
          gridList1={glitter_style1}
          marginTop={'margin-top-small'}
        />
      )}

      {gridName === 'metallic' && (
        <Grid
          wantHeader={false}
          gridList1={metallic_style1}
          marginTop={'margin-top-small'}
        />
      )}
    </div>
  );
}

export default MultiGrid;
