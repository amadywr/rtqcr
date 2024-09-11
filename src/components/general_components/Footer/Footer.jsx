import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import Form from '../Form/Form';

function Footer() {
  return (
    <footer
      className={`margin-top-medium ${styles.footer_section}`}
      id="contact"
    >
      <div className={`${styles.wrapper} mini-container`}>
        <div className={styles.left_div}>
          <div className={styles.inner_div_wrapper}>
            <h2>Contact us</h2>
            <div className={styles.inner_div}>
              <a
                href="mailto:info@rtqcr.com.au"
                className={styles.div_item}
                target="_blank"
                rel="noreferrer"
              >
                <MdEmail className={styles.footer_icon} />
                <p>info@rtqcr.com.au</p>
              </a>
              <a href="tel:0470175621" className={styles.div_item}>
                <FaPhoneAlt className={styles.footer_icon} />
                <p>0473 098 092</p>
              </a>
            </div>
          </div>

          <div className={styles.inner_div_wrapper}>
            <h2>Follow us</h2>
            <div className={styles.inner_div}>
              <a
                href="https://www.facebook.com/RTQConcreteResurfacing/"
                className={styles.div_item}
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook className={styles.footer_icon} />
                <p>@rtqconcreteresurfacing</p>
              </a>
              <a
                href="https://www.instagram.com/rtqconcreteresurfacing/"
                className={styles.div_item}
                target="_blank"
                rel="noreferrer"
              >
                <RiInstagramFill className={styles.footer_icon} />
                <p>@rtqconcreteresurfacing</p>
              </a>
            </div>
          </div>
        </div>

        <Form />
      </div>
      <div className={styles.signature}>
        <p>Copyright &copy; {new Date().getFullYear()}. All rights reserved.</p>
        {/* <p>
          Built by{' '}
          <a
            href="https://www.ahmadyawari.com/"
            target="_blank"
            rel="noreferrer"
          >
            Ahmad
          </a>
        </p> */}
      </div>
    </footer>
  );
}

export default Footer;
