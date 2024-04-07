import FAQ from './FAQ';
import styles from './FAQs.module.css';

function FAQs({
  faqs = [{ question: 'Default Question', answer: 'Default Answer' }],
}) {
  return (
    <section className={`${styles.faqs_section} mini-container`}>
      <h1>FAQs</h1>
      <div className={styles.faqs_wrapper}>
        {faqs.map((faq, i) => (
          <FAQ faq={faq} key={i} />
        ))}
      </div>
    </section>
  );
}

export default FAQs;
