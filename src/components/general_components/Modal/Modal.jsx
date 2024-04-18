import React from 'react';
import styles from './Modal.module.css';
import { IoMdClose } from 'react-icons/io';

function Modal({ modalImageSource, setModalOpen }) {
  return (
    <div className={`${styles.modal_div}`}>
      <img src={modalImageSource} alt="modal" />

      <IoMdClose
        onClick={() => setModalOpen(false)}
        className={styles.modal_close_btn}
      />
    </div>
  );
}

export default Modal;
