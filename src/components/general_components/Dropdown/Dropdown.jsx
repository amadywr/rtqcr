// import { Link } from 'react-router-dom';
import styles from './Dropdown.module.css';
import { useState } from 'react';

function Dropdown() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className={`${styles.container} ${isClicked && styles.hide}`}
      onClick={() => setIsClicked(!isClicked)}
    >
      <a href="/spray-crete" className={styles.dropdown_item}>
        Spray-Crete
      </a>
      <a href="/epoxy-flooring" className={styles.dropdown_item}>
        Epoxy Flooring
      </a>
      <a href="/concrete-sealing" className={styles.dropdown_item}>
        Concrete Sealing
      </a>
      <a href="/concrete-polishing" className={styles.dropdown_item}>
        Concrete Polishing
      </a>
    </div>
  );
}

export default Dropdown;
