import { useState } from 'react';
import logo from '../../../assets/logo.webp';
import styles from './Navbar.module.css';
import Dropdown from '../Dropdown/Dropdown';
import { FaPhoneAlt } from 'react-icons/fa';

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Add state to track hamburger menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

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
        <nav
          className={`${styles.navbar_menu} ${menuOpen ? styles.active : ''}`}
        >
          {/* <a href="/" className={styles.navbar_menu_item} onClick={toggleMenu}>
            HOME
          </a> */}

          <div
            className={styles.services_dropdown}
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <p className={styles.navbar_menu_item}>Services</p>
            {dropdown && <Dropdown />}
          </div>

          {/* mobile nav items */}

          <a
            href="/spray-crete-floor"
            className={`${styles.navbar_menu_item} ${styles.hamburger_services_item}`}
            onClick={toggleMenu}
          >
            Spray-Crete Flooring
          </a>

          <a
            href="/epoxy_flooring"
            className={`${styles.navbar_menu_item} ${styles.hamburger_services_item}`}
            onClick={toggleMenu}
          >
            Epoxy Flooring
          </a>

          <a
            href="/concrete_sealing"
            className={`${styles.navbar_menu_item} ${styles.hamburger_services_item}`}
            onClick={toggleMenu}
          >
            Concrete Sealing
          </a>

          <a
            href="/concrete_polishing"
            className={`${styles.navbar_menu_item} ${styles.hamburger_services_item}`}
            onClick={toggleMenu}
          >
            Concrete Polishing
          </a>

          <div className={styles.hamburger_bottom_div}>
            <a
              href="#contact"
              className={styles.navbar_menu_item}
              onClick={toggleMenu}
            >
              Enquiry
            </a>

            <a
              href="tel:0473098092"
              className={`${styles.navbar_menu_item} ${styles.navbar_menu_item_phone}`}
            >
              <div className={styles.navbar_menu_item_phone_inner}>
                <FaPhoneAlt className={styles.phone_icon} />
                <span>0473 098 092</span>
              </div>
            </a>
          </div>
        </nav>

        <div
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
          onClick={toggleMenu} // Toggle menu on click
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
