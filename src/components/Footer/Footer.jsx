import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

function Footer() {
  return (
    <section className={`${styles.footer_section}`} id="contact">
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
                <p>Info@rtqcr.com.au</p>
              </a>
              <a href="tel:0470175621" className={styles.div_item}>
                <FaPhoneAlt className={styles.footer_icon} />
                <p>0473 098 092</p>
              </a>
            </div>
          </div>

          <div className={styles.inner_div_wrapper}>
            <h2>Follow us on</h2>
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

        <div className={styles.right_div}>
          <form action="">
            <input
              type="text"
              name="Name"
              id="name"
              placeholder="Name"
              className={styles.input_fields}
              required
            />
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="Email"
              className={styles.input_fields}
              required
            />
            <input
              type="tel"
              name="Phone"
              id="phone"
              pattern="[0-9]*"
              inputMode="numeric"
              placeholder="Phone"
              className={styles.input_fields}
              required
            />
            <input
              type="text"
              name="suburb"
              id="suburb"
              placeholder="Suburb"
              className={styles.input_fields}
              required
            />
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              rows={10}
              className={styles.input_fields}
              required
            ></textarea>

            <input type="submit" value="Submit" className={styles.submit} />
          </form>
        </div>
      </div>
      <div className={styles.signature}>
        <p>Copyright &copy; {new Date().getFullYear()}. All rights reserved.</p>
        <p>
          Built by{' '}
          <a
            href="https://www.ahmadyawari.com/"
            target="_blank"
            rel="noreferrer"
          >
            Ahmad
          </a>
        </p>
      </div>
    </section>
  );
}

export default Footer;
