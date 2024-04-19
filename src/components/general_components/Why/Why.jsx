import React from 'react';
import Header from '../Header/Header';
import styles from './Why.module.css';

function Why({ headerText, headerTextRight, why }) {
  return (
    <div className="mini-container margin-top-large">
      <Header headerText={headerText} headerTextRight={headerTextRight} />
      <div className={`${styles.grid} margin-top-mini`}>
        {why.map((item, i) => (
          <p className={styles.item} key={i}>
            <span className={styles.id}>{item.id}.</span>
            <span className={styles.title}>{item.title}:</span>
            {item.body}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Why;
