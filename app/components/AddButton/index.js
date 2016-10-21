/**
*
* AddButton
*
*/

import React from 'react';

import styles from './styles.css';

function AddButton({ onClick, uiState }) {
  onClick = onClick.bind(null, uiState);
  return (
    <div className={ styles.add } onClick={ onClick }>
      <i className="fa fa-plus"></i>
    </div>
  );
}

export default AddButton;
