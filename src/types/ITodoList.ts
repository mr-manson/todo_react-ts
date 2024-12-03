import {ITodo} from "./ITodo";

export interface ITodoList {
	items: ITodo[];
	removeTodo: (id: number) => void;
	toggleTodo: (id: number) => void;

}