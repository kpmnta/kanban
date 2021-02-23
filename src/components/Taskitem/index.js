import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TaskItemContainer = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  cursor: pointer;
  margin-bottom: 8px;
  width: 100%;
  padding: 8px 4px;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
`;

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
            style={{ 
              // border: 'none',
              fontSize: '14px',
              display: 'block',
              width: '100%'}}
            type="text" 
            value={editableTitle} 
            onChange={onTitleChange} 
            onKeyPress={onKeyPress}
          />
        </div>
          
      )
  } else {
      return (
        <TaskItemContainer>
          <div onClick={(event) => setEditing(true)}>{editableTitle}</div>
          <select 
            style={{ 
              display: 'block', 
              width: '100%', 
              marginTop: '8px'}} 
            onChange={onTaskStateChange} 
            value={taskState}
          >
            <option value="Pendente">Pendente</option>
            <option value="Fazendo">Fazendo</option>
            <option value="Completo">Completo</option>
          </select>
        </TaskItemContainer>
      )
  }
}

Taskitem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired
}
