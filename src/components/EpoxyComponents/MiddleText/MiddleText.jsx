import React from 'react';
import styles from './MiddleText.module.css';

function MiddleText() {
  return (
    <div>
      <div className={`mini-container ${styles.text_div}`}>
        <p>
          Ready to transform your space? Request your free quote today for a
          personalized consultation and let's bring your vision to life!
        </p>

        <a href="#contact" className={styles.btn}>
          Request a free quote
        </a>
      </div>
    </div>
  );
}

export default MiddleText;
