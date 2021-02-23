import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import Taskitem from '../Taskitem';
import Content from '../Content';
import Button from '../Button';
import EmptyList from '../EmptyList';

const TaskListContainer = styled.div`
	padding: 8px;
	background-color: ${({ theme }) => theme.container};
	border-radius: 2px;
`;

export default function Tasklist({ title, onAddTask, tasks, onTaskUpdate, taskState, onDeleteTask }) {
	const addTask = () => {
			onAddTask('clique para alterar', taskState )
	}

	return(
		<TaskListContainer>
			<h1>{title}</h1>
			<Content>
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
					{tasks.length === 0 && <EmptyList>Lista Vazia</EmptyList>}
			<Button onClick={ addTask }>adicione uma tarefa</Button>
			</Content>
		</TaskListContainer>
	)
}

Tasklist.propTypes = {
	title: PropTypes.string.isRequired,
	onAddTask: PropTypes.func.isRequired,
	tasks: PropTypes.array.isRequired
};