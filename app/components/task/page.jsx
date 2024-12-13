'use client';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './page.css';

export default function Task({ data, onEdit, onDelete }) {
  const { _id, title, priority, status } = data || {};

  return (
    <div className="task">
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
