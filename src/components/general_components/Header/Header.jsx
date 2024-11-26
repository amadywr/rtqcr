import React from 'react';
import styles from './Header.module.css';

function Header({ headerText, headerTextRight }) {
  return (
    <div className={`${styles.header}`}>
      <h2 className={headerTextRight ? styles.text_right : ''}>{headerText}</h2>
      <div></div>
    </div>
  );
}

export default Header;
