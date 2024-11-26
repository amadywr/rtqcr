import { useRef, useState } from 'react';
import styles from './Form.module.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactLoading from 'react-loading';

function Form() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm('service_1w33hna', 'template_sjry4w2', form.current, {
        publicKey: 'DrxK_kaXTmI-rjT2Z',
      })
      .then(
        () => {
          e.target.reset();
          succcessNotify();
          setIsLoading(false);
        },
        (error) => {
          errorNotify();
          console.log('FAILED...', error.text);
          setIsLoading(false);
        }
      );
  };

  const succcessNotify = () =>
    toast.success('Email sent successfully', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
      style: { fontSize: '14px' },
    });

  const errorNotify = () =>
    toast.error('Something went wrong, try again', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
      style: { fontSize: '14px' },
    });

  return (
    <div className={styles.form_container}>
      <h3 className={styles.title}>Enquiry</h3>
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
          {/* <input
          type="email"
          name="customer_email"
          id="customer_email"
          placeholder="Email"
          className={styles.input_fields}
          required
        /> */}
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
            className={`${styles.input_fields} ${styles.text_area}`}
            required
          ></textarea>

          <button type="submit" className={styles.submit}>
            {isLoading ? (
              <ReactLoading
                type={'bubbles'}
                // color={'FFFFFF'}
                height={40}
                width={40}
              />
            ) : (
              'Submit'
            )}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Form;
