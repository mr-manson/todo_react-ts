import {ITodo} from "./ITodo";

export interface ITodoItem extends ITodo {
	removeTodo: (id: number) => void;
	toggleTodo: (id: number) => void;
}