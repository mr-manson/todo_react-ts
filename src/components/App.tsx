import React, {useState, useEffect, useRef} from "react";

import {ITodo} from "../types/ITodo";
import {TodoList} from './TodoList';

const App: React.FC = () => {
	const [value, setValue] = useState("");
	const [todos, setTodos] = useState<ITodo[]>([]);

	const inputRef = useRef<HTMLInputElement>(null);

	const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.target.value);
	}

	const keyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === 'Enter') {
			addTodo();
		}
	}

	const addTodo = () => {
		if (value) {
			setTodos([...todos, {
				id: Date.now(),
				title: value,
				isCompleted: false,
			}])
			setValue("");
		}
	}

	const removeTodo = (id: number): void => {
		setTodos(todos.filter(todo => todo.id !==id));
	}

	const toggleTodo = (id: number): void => {
		setTodos(todos.map(todo => {
			if(todo.id !== id) return todo;
			return {
				...todo,
				isCompleted: !todo.isCompleted,
			}
		}))
	}

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus()
		}
	}, []);

	return <>
		<div>
			<input value={value} onChange={changeHandler} onKeyDown={keyDownHandler} ref={inputRef}/>
			<button onClick={addTodo}>Add</button>
		</div>
		<TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
	</>;
}

export {App};