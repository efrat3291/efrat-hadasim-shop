import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <p className={styles.text}>
        © {new Date().getFullYear()} My Store. All rights reserved.
      </p>
      <div className={styles.links}>
        <a href="/" className={styles.link}>Home</a>
        <a href="/about" className={styles.link}>About</a>
        <a href="/contact" className={styles.link}>Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
