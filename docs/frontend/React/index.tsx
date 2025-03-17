import React from 'react';
import styles from './index.scss';

export default function MyComponent() {
  return (
    <div className={`className1 ${styles.className2}`}>
        <p>111</p>
    </div>
  );
}