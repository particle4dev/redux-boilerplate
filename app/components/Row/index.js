/**
*
* Row
*
*/

import React from 'react';


import styles from './styles.css';

function Row({ ...props }) {
  let { _id, title, onRemove, onUpdate, done } = props;
  onRemove = onRemove.bind(null, _id);
  onUpdate = onUpdate.bind(null, _id, !done);
  let className = [ styles.row, styles.uiSortableHelper ];
  if(done) {
    className.push( styles.done );
  }
  return (
    <li className={ className.join(' ') }>
      <a className={ styles.remove } href="javascript:void(0)" onClick={ onRemove }>
        <i className="fa fa-trash-o"></i>
      </a>
      <a className={ styles.completed } href="javascript:void(0)" onClick={ onUpdate }>
        <i className="fa fa-check"></i>
      </a>
      { title }
    </li>
  );
}

export default Row;
