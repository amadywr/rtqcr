import { useState } from 'react';
import logo from '../../../assets/logo.png';
import styles from './Navbar.module.css';
import Dropdown from '../Dropdown/Dropdown';

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className={`${styles.header}`} id="navbar">
      <div className={`${styles.navbar} container`}>
        <a href="/">
          <img
            src={logo}
            alt="RTQ Concrete Resurfacing"
            className={styles.logo}
          />
        </a>
        <nav className={styles.navbar_menu}>
          <a href="/" className={styles.navbar_menu_item}>
            HOME
          </a>

          <div
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <p className={styles.navbar_menu_item}>SERVICES</p>
            {dropdown && <Dropdown />}
          </div>

          <a href="#contact" className={styles.navbar_menu_item}>
            CONTACT
          </a>

          <a
            href="tel:0473098092"
            className={`${styles.navbar_menu_item} ${styles.navbar_menu_item_phone}`}
          >
            0473 098 092
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
