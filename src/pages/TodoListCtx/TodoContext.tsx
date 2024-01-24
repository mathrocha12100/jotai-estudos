import {
	Dispatch,
	PropsWithChildren,
	createContext,
	useContext,
	useMemo,
	useState,
} from 'react';
import { TodoItemProps } from './TodoItem';

type TodoContextProps = {
	list: TodoItemProps[];
	setList: Dispatch<TodoItemProps[]>;

	deleteTodo: (todoKey: number) => void;
	toggleTodoDone: (todoKey: number) => void;
};

const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

export function TodoProvider({ children }: PropsWithChildren) {
	const [list, setList] = useState<TodoItemProps[]>([]);

	const deleteTodo = (todoKey: number) => {
		setList((state) => state.filter((_, idx) => idx !== todoKey));
	};

	const toggleTodoDone = (todoKey: number) => {
		setList((state) =>
			state.map((todo, idx) => {
				if (idx === todoKey) return { ...todo, isDone: !todo.isDone };

				return todo;
			}),
		);
	};

	const value = useMemo(
		() =>
			({
				list,
				setList,
				deleteTodo,
				toggleTodoDone,
			}) as TodoContextProps,
		[list],
	);

	return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodoContext(): TodoContextProps {
	const context = useContext(TodoContext);

	return context;
}
