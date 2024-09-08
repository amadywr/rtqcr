import styles from './Project.module.css';

function Project({ project, getImage, setCaption }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.details_header}>
            <p className={styles.suburb}>{project.suburb}</p>
            <h2 className={styles.project_type}>{project.type}</h2>
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
                src={project.imgBefore.source}
                alt={project.imgBefore.name}
                className={styles.before_img}
                onClick={() => {
                  getImage(project.imgBefore.source);
                  setCaption(project.imgBefore.name);
                }}
              />
            </div>
          </div>
          <div className={styles.img_after_wrapper}>
            <div>
              <img
                src={project.imgAfter.source}
                alt={project.imgAfter.name}
                className={styles.after_img}
                onClick={() => {
                  getImage(project.imgAfter.source);
                  setCaption(project.imgAfter.name);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
