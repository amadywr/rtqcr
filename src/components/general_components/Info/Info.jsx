import React from 'react';
import Header from '../../general_components/Header/Header';
import styles from './Info.module.css';

function Info({ serviceType, headerText, headerTextRight, customText }) {
  return (
    <div className="mini-container margin-top-medium">
      <Header headerText={headerText} headerTextRight={headerTextRight} />

      <div className={styles.text_div}>
        <p className={`${styles.text} margin-top-mini`}>
          At <span>RTQCR</span>,{' '}
          {customText
            ? customText
            : `we understand that every space is unique, and your floor surfaces should reflect your personal style. Explore the diverse range of patterns, designs, and colours that our ${serviceType} solutions offer`}
        </p>
      </div>
    </div>
  );
}

export default Info;

// 'Unleash Your Style: Patterns, Designs, and Colours'
