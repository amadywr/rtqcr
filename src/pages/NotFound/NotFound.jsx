import React from 'react';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={`mini-container margin-top-large ${styles.wrapper}`}>
      <h1>Error 404 Page Not Found</h1>

      <a href="/" className="CTA">
        Go back to homepage
      </a>
    </div>
  );
}

export default NotFound;
