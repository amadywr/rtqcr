import FAQ from '../FAQ/FAQ';
import styles from './FAQs.module.css';

function FAQs({
  faqs = [{ question: 'Default Question', answer: 'Default Answer' }],
}) {
  return (
    <div className={`mini-container margin-top-medium ${styles.faqs_section}`}>
      <h1>FAQs</h1>
      <div className={styles.faqs_wrapper}>
        {faqs.map((faq, i) => (
          <FAQ faq={faq} key={i} />
        ))}
      </div>
    </div>
  );
}

export default FAQs;
