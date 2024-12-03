import React, {useState} from 'react';
import {ITodoItem} from '../types/ITodoItem';
import style from './TodoItem.module.css';

const TodoItem: React.FC<ITodoItem> = (props) => {


	const {id, title, isCompleted, removeTodo, toggleTodo} = props;
	return (
		<div>
			<input type='checkbox' checked={isCompleted} onChange={() => toggleTodo(id)}/>
			{title}
			<button className={style.button} onClick={() => removeTodo(id)}>x
			</button>
		</div>
	);
};

export {TodoItem};