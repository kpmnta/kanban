import React from 'react';
import "./tasklist.css"
import PropTypes from "prop-types";
import Taskitem from '../Taskitem/Taskitem'

export default function Tasklist({ title, onAddTask, tasks, onTaskUpdate, taskState, onDeleteTask }) {
    const addTask = () => {
        onAddTask('clique para alterar', taskState )
    }

    return(
        <div className="tasklist">
            <div className="title">{title}</div>
            <div className="content">
                {tasks.map((task) => {
                    return (
                        <Taskitem 
                            key={task.id}
                            id={task.id} 
                            title={task.title} 
                            taskState={task.state}
                            onTaskUpdate={onTaskUpdate} 
                            onDeleteTask={onDeleteTask}
                        />
                    )
                })}
                {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
            <button onClick={ addTask }>adicione uma tarefa</button>
            </div>
        </div>
    )
}


Tasklist.propTypes = {
    title: PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
};