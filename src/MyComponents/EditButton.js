import React from 'react';
import { EditForm } from './EditForm';

export const EditButton = (props) => {
    return (props.editTrigger) ? (
      <div className='popup'>
        <div className='popup-inner'>
          <button className='btn close-btn btn-secondary' onClick={() => props.setEditTrigger(false)}>close</button>
          <EditForm editArr={props.editArr} onEdit={props.onEdit} />
        </div>
      </div>
    ) : "";
  }
