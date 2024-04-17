import styles from './Project.module.css';

function Project({ project }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.details_header}>
            <p className={styles.suburb}>{project.suburb}</p>
            <h1 className={styles.project_type}>{project.type}</h1>
          </div>
          <div className={styles.details_body}>
            {project.details.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.img_before_wrapper}>
            <div>
              <img
                src={project.imgBefore}
                alt="project before"
                className={styles.before_img}
              />
            </div>
          </div>
          <div className={styles.img_after_wrapper}>
            <div>
              <img
                src={project.imgAfter}
                alt="project after"
                className={styles.after_img}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
