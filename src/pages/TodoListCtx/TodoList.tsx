import { Plus } from 'lucide-react';
import { useRef } from 'react';
import TodoItem from './TodoItem';
import { useTodoContext } from './TodoContext';

function TodoList() {
	const { list, setList } = useTodoContext();
	const input = useRef<HTMLInputElement>(null);

	const handleAddItem = () => {
		if (!input.current) return;

		setList([...list, { description: input.current.value, isDone: false }]);

		input.current.value = '';
	};

	return (
		<div className="flex w-full">
			<div className="flex flex-col p-2 bg-zinc-600 max-w-[600px] rounded-md w-full">
				<h1 className="text-2xl font-bold text-slate-100 mb-4">
					<b className="text-blue-500">[ REACT CONTEXT ]</b> Todo List
				</h1>

				<div className="flex items-center w-full mb-4">
					<input
						ref={input}
						placeholder="add todo item :)"
						onKeyUp={(e) => {
							if (e.key === 'Enter') handleAddItem();
						}}
						className="w-full p-1 rounded-md outline-none bg-zinc-700 border-2 border-slate-800 text-slate-200"
					/>
					<button
						className="bg-blue-500 text-slate-200 p-1 rounded-md ml-1"
						onClick={handleAddItem}
						type="button"
					>
						<Plus />
					</button>
				</div>

				<div className="flex flex-col">
					{list.map((todo, key) => (
						<TodoItem key={`item-${key}`} todoKey={key} todo={todo} />
					))}
				</div>
			</div>
		</div>
	);
}

export default TodoList;
