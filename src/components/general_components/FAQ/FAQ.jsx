import { useState } from 'react';
import styles from './FAQ.module.css';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function FAQ({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqs_item}>
      <div
        className={`${styles.faq_question_div} ${
          isOpen && styles.faq_question_div_clicked
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{faq.question}</p>
        <div>
          {isOpen ? (
            <IoIosArrowUp className={styles.faq_question_div_arrow} />
          ) : (
            <IoIosArrowDown className={styles.faq_question_div_arrow} />
          )}
        </div>
      </div>
      <div
        className={`${styles.faq_answer_div} ${
          isOpen && styles.faq_answer_div_show
        }`}
      >
        <p>{faq.answer}</p>
      </div>
    </div>
  );
}

export default FAQ;
