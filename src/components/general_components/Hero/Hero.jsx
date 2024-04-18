import styles from './Hero.module.css';

function Hero({ text, info, image }) {
  return (
    <div
      className={styles.hero_wrapper}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <h1>{text}</h1>
      <div className={`${styles.hero_text_div}`}>
        <p>{info}</p>
      </div>
    </div>
  );
}

export default Hero;
