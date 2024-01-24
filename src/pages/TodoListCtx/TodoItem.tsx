import { Trash2, Square, CheckSquare } from 'lucide-react';
import { useTodoContext } from './TodoContext';
import RandomID from '../../components/RandomID';

export type TodoItemProps = {
	description: string;
	isDone: boolean;
};

type TodoItemType = {
	todo: TodoItemProps;
	todoKey: number;
};

function CheckIcon({ isDone }: { isDone: boolean }) {
	if (isDone) return <CheckSquare className="h-4 w-4 text-emerald-400" />;

	return <Square className="h-4 w-4 text-slate-50" />;
}

function TodoItem({ todo, todoKey }: TodoItemType) {
	const { toggleTodoDone, deleteTodo } = useTodoContext();

	return (
		<div className="flex items-center justify-between p-2 bg-zinc-800 rounded-md mb-2">
			<span className="text-slate-50 italic">{todo.description}</span>
			<div className="flex items-center">
				<button
					onClick={() => toggleTodoDone(todoKey)}
					type="button"
					className="cursor-pointer p-1"
				>
					<CheckIcon isDone={todo.isDone} />
				</button>
				<button
					type="button"
					className="ml-2 p-1 rounded-md bg-rose-500 text-slate-50"
					onClick={() => deleteTodo(todoKey)}
				>
					<Trash2 className="h-4 w-4" />
				</button>
				<RandomID className="ml-2" cyan />
			</div>
		</div>
	);
}

export default TodoItem;
