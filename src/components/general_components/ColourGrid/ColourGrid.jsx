import { useState } from 'react';
import Header from '../Header/Header';
import styles from './ColourGrid.module.css';
import Button from '../Button/Button';

function ColourGrid({
  wantHeader = true,
  colours1,
  colours2,
  marginTop = 'margin-top-medium',
  style,
}) {
  const [viewMore, setViewMore] = useState(false);
  return (
    <div className={`mini-container ${marginTop}`} style={style}>
      {wantHeader && (
        <Header headerText={'Choose your colour'} headerTextRight={false} />
      )}

      <div className={` margin-top-mini ${styles.grid}`}>
        {colours1.map((colour, i) => (
          <div className={styles.item} key={i}>
            <div
              className={styles.colour}
              style={{ backgroundColor: `${colour.colour}` }}
            ></div>
            <p className={styles.name}>{colour.name}</p>
          </div>
        ))}

        {colours2
          ? viewMore
            ? colours2.map((colour, i) => (
                <div className={styles.item} key={i}>
                  <div
                    className={styles.colour}
                    style={{ backgroundColor: `${colour.colour}` }}
                  ></div>
                  <p className={styles.name}>{colour.name}</p>
                </div>
              ))
            : null
          : null}
      </div>

      {colours2 && (
        <Button state={viewMore} setState={setViewMore}>
          {viewMore ? 'View less colours' : 'View more colours'}
        </Button>
      )}
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
