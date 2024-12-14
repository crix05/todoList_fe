'use client';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './page.css'; 
import { useState, useEffect } from 'react';

export default function Task({ data, onEdit, onDelete }) {
  const { _id, title, priority, status } = data || {};

  const [bgrndColor, setBgrndColor] = useState('#2980b9');

  useEffect(()=>{
    if(status == 'Pending') setBgrndColor('#F28B82');
    else if (status == 'Completed') setBgrndColor('#81C784');
  },[])

  return (
    <div className="task" style={{backgroundColor:bgrndColor}}>
      <div className="task-content">
        <span className="task-title">{title}</span>
        <div className="task-details">
          <div className="task-boxes">
            <div className="task-box" style={{ width: '80px' }}>{priority}</div>
            <div className="task-box" style={{ width: '120px' }}>{status}</div>
          </div>
          <div className="task-actions">
            <button onClick={() => onEdit(_id)} className="edit-button"> 
              <EditIcon />
            </button>
            <button onClick={() => onDelete(_id)} className="delete-button">
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
