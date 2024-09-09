import React from 'react';
import styles from './Modal.module.css';
import { IoMdClose } from 'react-icons/io';

function Modal({
  modalImageSource,
  setModalOpen,
  caption = 'default caption',
}) {
  return (
    <div className={`${styles.modal_div}`} onClick={() => setModalOpen(false)}>
      <div className={styles.imageContainer}>
        <img src={modalImageSource} alt="modal" />

        <IoMdClose
          onClick={() => setModalOpen(false)}
          className={styles.modal_close_btn}
        />
      </div>

      <p className={styles.caption}>{caption}</p>
    </div>
  );
}

export default Modal;
