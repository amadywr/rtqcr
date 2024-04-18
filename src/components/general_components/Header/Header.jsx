import React from 'react';
import styles from './Header.module.css';

function Header({ headerText, headerTextRight }) {
  return (
    <div className={`${styles.header}`}>
      <h1 className={headerTextRight ? styles.text_right : ''}>{headerText}</h1>
      <div></div>
    </div>
  );
}

export default Header;
