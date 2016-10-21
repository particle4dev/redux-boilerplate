/**
*
* Container
*
*/

import React, { Children } from 'react';

import styles from './styles.css';

function Container({ children }) {
  return (
    <div className={styles.container}>
      { children }
    </div>
  );
}

export default Container;
