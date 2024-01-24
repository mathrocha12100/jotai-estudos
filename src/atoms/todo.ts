import { splitAtom } from 'jotai/utils';
import { atom } from 'jotai';
import { TodoItemProps } from '../pages/TodoListJotai/TodoItem';

export const todoList = atom<TodoItemProps[]>([]);

export const todoListSplit = splitAtom(todoList);
