import React from 'react';
import styles from './RecentProjects.module.css';
import photo from '../assets/epoxy_flooring.jpg';

function RecontProjects() {
  return (
    <section className={`${styles.recent_projects_section}`}>
      <h1>Recent Projects</h1>

      <div className={styles.projects_div}>
        <div className={styles.project_div}>
          <div>
            <p>Penrith</p>
            <h2>Concrete Resurfacing</h2>
          </div>
          <div className={styles.project1_before_div}>
            <img
              src={photo}
              alt="concrete resurfacing"
              className={styles.project1_before}
            />
          </div>

          <img
            src={photo}
            alt="concrete resurfacing"
            className={styles.project1_after}
          />
        </div>

        <div className={styles.project_div}>
          <div>
            <p>Penrith</p>
            <h2>Concrete Resurfacing</h2>
          </div>
          <img
            src={photo}
            alt="concrete resurfacing"
            className={styles.project1_before}
          />
          <img
            src={photo}
            alt="concrete resurfacing"
            className={styles.project1_after}
          />
        </div>

        <div className={styles.project_div}>
          <div>
            <p>Penrith</p>
            <h2>Concrete Resurfacing</h2>
          </div>
          <img
            src={photo}
            alt="concrete resurfacing"
            className={styles.project1_before}
          />
          <img
            src={photo}
            alt="concrete resurfacing"
            className={styles.project1_after}
          />
        </div>
      </div>
    </section>
  );
}

export default RecontProjects;
