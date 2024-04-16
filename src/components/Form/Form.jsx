import { useRef } from 'react';
import styles from './Form.module.css';
import emailjs from '@emailjs/browser';

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1w33hna', 'template_sjry4w2', form.current, {
        publicKey: 'DrxK_kaXTmI-rjT2Z',
        customer_name: 'appp_name',
        to_name: 'appp_to',
        customer_message: 'appp_msg',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className={styles.right_div}>
      <form action="" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="customer_name"
          id="customer_name"
          placeholder="Name"
          className={styles.input_fields}
          required
        />
        <input
          type="email"
          name="customer_email"
          id="customer_email"
          placeholder="Email"
          className={styles.input_fields}
          required
        />
        <input
          type="tel"
          name="customer_phone"
          id="customer_phone"
          pattern="[0-9]*"
          inputMode="numeric"
          placeholder="Phone"
          className={styles.input_fields}
          required
        />
        <input
          type="text"
          name="customer_suburb"
          id="customer_suburb"
          placeholder="Suburb"
          className={styles.input_fields}
          required
        />
        <textarea
          name="customer_message"
          id="customer_message"
          placeholder="Message"
          rows={10}
          className={styles.input_fields}
          required
        ></textarea>

        <input type="submit" value="Submit" className={styles.submit} />
      </form>
    </div>
  );
}

export default Form;
