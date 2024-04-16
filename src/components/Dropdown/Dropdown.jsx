import { Link } from 'react-router-dom';
import styles from './Dropdown.module.css';
import { useState } from 'react';

function Dropdown() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className={`${styles.container} ${isClicked && styles.hide}`}
      onClick={() => setIsClicked(!isClicked)}
    >
      <Link to="/spray-crete-floor" className={styles.dropdown_item}>
        Spray-Crete Floor
      </Link>
      <Link to="/epoxy_flooring" className={styles.dropdown_item}>
        Epoxy Flooring
      </Link>
      <Link to="/concrete_sealing" className={styles.dropdown_item}>
        Concrete Sealing
      </Link>
      <Link to="/concrete_polishing" className={styles.dropdown_item}>
        Concrete Polishing
      </Link>
    </div>
  );
}

export default Dropdown;
