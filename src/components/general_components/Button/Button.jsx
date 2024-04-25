import styles from './Button.module.css';

function Button({ children, state, setState }) {
  return (
    <div className={styles.button_div}>
      <button className={styles.button} onClick={() => setState(!state)}>
        {children}
      </button>
    </div>
  );
}

export default Button;
