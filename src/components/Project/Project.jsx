import styles from './Project.module.css';
import photo from '../../assets/epoxy_flooring.jpg';

function Project2() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.details_header}>
            <p className={styles.suburb}>Penrith</p>
            <h1 className={styles.project_type}>Concrete Resurfacing</h1>
          </div>
          <div className={styles.details_body}>
            <p>Bluh Bluh Bluh</p>
            <p>Bluh Bluh Bluh</p>
            <p>Bluh Bluh Bluh</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.img_before_wrapper}>
            <div>
              <img src={photo} alt="aa" className={styles.before_img} />
            </div>
          </div>
          <div className={styles.img_after_wrapper}>
            <div>
              <img src={photo} alt="aa" className={styles.after_img} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project2;
