import React from 'react';
import styles from './styles.module.css';

export default function Header() {
  return (
    <div>
      <img
        className={styles.headerLogo}
        src="https://www.dating.com/i/index/logo.svg?2"
        alt="logo"
      />
    </div>
  );
}
