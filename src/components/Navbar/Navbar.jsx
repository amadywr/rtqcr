import { useState } from 'react';
import logo from '../../assets/logo.webp';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import Dropdown from '../Dropdown/Dropdown';

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className={`${styles.header}`} id="navbar">
      <div className={`${styles.navbar} container`}>
        <NavLink to="/">
          <img
            src={logo}
            alt="RTQ Concrete Resurfacing"
            className={styles.logo}
          />
        </NavLink>
        <nav className={styles.navbar_menu}>
          <NavLink to="/" className={styles.navbar_menu_item}>
            HOME
          </NavLink>

          <div
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <p className={styles.navbar_menu_item}>SERVICES</p>
            {dropdown && <Dropdown />}
          </div>

          {/* <NavLink to="/gallery" className={styles.navbar_menu_item}>
            GALLERY
          </NavLink> */}

          <a href="#contact" className={styles.navbar_menu_item}>
            CONTACT
          </a>

          <a
            href="tel:0470175621"
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
