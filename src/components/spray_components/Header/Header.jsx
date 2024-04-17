import React from 'react';
import styles from './Header.module.css';

function Header({ text, textRight }) {
  return (
    <div className={`${styles.header}`}>
      <h1 className={textRight ? styles.text_right : ''}>{text}</h1>
      <div></div>
    </div>
  );
}

export default Header;
