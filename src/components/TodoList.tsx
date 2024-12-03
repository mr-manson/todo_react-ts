import React from 'react';

import {TodoItem} from "./TodoItem";
import {ITodoList} from "../types/ITodoList";

const TodoList: React.FC<ITodoList> = (props) => {
	const {items, removeTodo, toggleTodo} = props;

	return <>
		{
			items.map(todo => (<
				TodoItem
					key={todo.id}
					removeTodo = {removeTodo}
					toggleTodo = {toggleTodo}
					{...todo} />))
		}
	</>
};

export {TodoList};