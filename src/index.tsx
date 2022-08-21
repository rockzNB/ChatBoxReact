import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './styles.module.css';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <div className={styles.сontainer}>
      <Home />
    </div>
  </React.StrictMode>
);
