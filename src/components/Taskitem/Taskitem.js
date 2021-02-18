import React, { useState } from 'react';
import "./taskitem.css"
import PropTypes from 'prop-types';

export default function Taskitem({ id, title, taskState, onTaskUpdate, onDeleteTask}) {
    const [editing, setEditing] = useState(false);
    const [editableTitle, setEditableTitle] = useState(title);

    const onTitleChange = (event) => {
        const newTitle = event.target.value;
        setEditableTitle(newTitle);
        onTaskUpdate(id, newTitle, taskState);
    }

    const onKeyPress = (event) => {
        if (event.key === 'Enter') {
            setEditing(false);
            if (editableTitle.length === 0) {
                onDeleteTask(id);
            }
        }
    }

    const onTaskStateChange = (event) => {
        onTaskUpdate(id, title, event.target.value);
    }

    if (editing) {
        return ( 
            <div>
                <input 
                type="text" 
                value={editableTitle} 
                onChange={onTitleChange} 
                onKeyPress={onKeyPress}
                />
            </div>
            
        )
    } else {
        return (
            <div className="task-item">
                <div onClick={(event) => setEditing(true)}>{editableTitle}</div>
                <select onChange={onTaskStateChange} value={taskState}>
                    <option value="Pendente">Pendente</option>
                    <option value="Fazendo">Fazendo</option>
                    <option value="Completo">Completo</option>
                </select>
            </div>
        )
    }
}

Taskitem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    taskState: PropTypes.string.isRequired
}
