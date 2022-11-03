import React from 'react';
import { AddToPosts } from './AddToPosts';

export const AddPostButton = (props) => {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='btn close-btn btn-secondary' onClick={() => props.setTrigger(false)}>close</button>
        <AddToPosts addToPosts={props.addToPosts} />
      </div>
    </div>
  ) : "";
}
