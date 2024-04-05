import React from 'react';
import styles from './RecentProjects.module.css';
import photo from '../assets/epoxy_flooring.jpg';

function RecontProjects() {
  return (
    <section className={`${styles.recent_projects_section} mini-container`}>
      <h1>Recent Projects</h1>

      <div className={styles.projects_div}>
        <div className={styles.project_div}>
          <div>
            <p>Penrith</p>
            <h2>Concrete Resurfacing</h2>
          </div>
          <div className={styles.project_before_div}>
            <img
              src={photo}
              alt="concrete resurfacing"
              className={styles.project_before}
            />
          </div>

          <div className={styles.project_after_div}>
            <img
              src={photo}
              alt="concrete resurfacing"
              className={styles.project_after}
            />
          </div>
        </div>

        <div className={styles.project_div}>
          <div>
            <p>Penrith</p>
            <h2>Concrete Resurfacing</h2>
          </div>
          <div className={styles.project_before_div}>
            <img
              src={photo}
              alt="concrete resurfacing"
              className={styles.project_before}
            />
          </div>

          <div className={styles.project_after_div}>
            <img
              src={photo}
              alt="concrete resurfacing"
              className={styles.project_after}
            />
          </div>
        </div>
      </div>
      <div className={styles.button_div}>
        <button className="CTA">View more projects</button>
      </div>
    </section>
  );
}

export default RecontProjects;
