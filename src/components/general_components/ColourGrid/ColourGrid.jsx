import { useState } from 'react';
import Header from '../Header/Header';
import styles from './ColourGrid.module.css';
import colours1 from '../../../assets/sealing/colours1';
import colours2 from '../../../assets/sealing/colours2';
import Button from '../Button/Button';

function ColourGrid() {
  const [viewMore, setViewMore] = useState(false);
  return (
    <div className={`mini-container`}>
      <Header headerText={'Choose your colour'} headerTextRight={false} />

      <div className={`margin-top-mini ${styles.grid}`}>
        {colours1.map((colour, i) => (
          <div className={styles.item} key={i}>
            <div
              className={styles.colour}
              style={{ backgroundColor: `${colour.colour}` }}
            ></div>
            <p className={styles.name}>{colour.name}</p>
          </div>
        ))}

        {viewMore &&
          colours2.map((colour, i) => (
            <div className={styles.item} key={i}>
              <div
                className={styles.colour}
                style={{ backgroundColor: `${colour.colour}` }}
              ></div>
              <p className={styles.name}>{colour.name}</p>
            </div>
          ))}
      </div>

      <Button state={viewMore} setState={setViewMore}>
        View more colours
      </Button>
    </div>
  );
}

export default ColourGrid;

// {Array.from({ length: `${viewMore ? colours1.length : 12}` }).map(
//     (_, i) => (
//       <div className={styles.item} key={i}>
//         <div
//           className={styles.colour}
//           style={{ backgroundColor: `${colours1[i].colour}` }}
//         ></div>
//         <p className={styles.name}>{colours1[i].name}</p>
//       </div>
//     )
//   )}
