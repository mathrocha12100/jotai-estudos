import { Provider, useAtom } from 'jotai';
import { todoList, todoListSplit } from '../../atoms/todo';
import { Plus } from 'lucide-react';
import { useRef, useState } from 'react';
import TodoItem from './TodoItem';
import { useGlobalAtomValue } from '../../hooks/jotai-global';
import { global__showDebugIds } from '../../atoms/global';

function DebugData() {
	const [show, setShow] = useState(false);
	const [list] = useAtom(todoListSplit);
	const [trueList] = useAtom(todoList);

	return (
		<div className="flex flex-col p-2 bg-zinc-800 ml-2 rounded-md w-full">
			<div className="flex justify-center w-full ">
				{!show ? (
					<button
						className="bg-emerald-400 text-zinc-800 p-1.5 pl-2 pr-2 rounded-md max-w-[200px] mb-4"
						type="button"
						onClick={() => setShow(true)}
					>
						Show Data
					</button>
				) : (
					<button
						className="bg-rose-400 rounded-md max-w-[200px] mb-4 text-zinc-100 p-1.5 pl-2 pr-2 "
						type="button"
						onClick={() => setShow(false)}
					>
						Hide Data
					</button>
				)}
			</div>
			<h1 className="text-center text-lg text-slate-100 font-bold mb-4">
				[JOTAI] TODOLIST
			</h1>
			{show && (
				<div className="flex justify-around gap-2">
					<div className="bg-zinc-800 w-[50%] rounded-md p-2">
						<h4 className="text-slate-200 font-bold mb-2">[atom] todoListSplit</h4>
						<pre className="text-orange-400 italic">
							{JSON.stringify(list, null, 2)}
						</pre>
					</div>
					<div className="bg-zinc-800 w-[50%] rounded-md p-2">
						<h4 className="text-slate-200 font-bold mb-2">[atom] todoList</h4>
						<pre className="text-orange-400 italic overflow-auto">
							{JSON.stringify(trueList, null, 1)}{' '}
						</pre>
					</div>
				</div>
			)}
		</div>
	);
}

function ShowDebugDataComponent() {
	const shouldShow = useGlobalAtomValue(global__showDebugIds);

	if (!shouldShow) return;

	return <DebugData />;
}

function TodoList() {
	const input = useRef<HTMLInputElement>(null);
	const [list, setList] = useAtom(todoListSplit);

	const handleAddItem = () => {
		if (!input.current) return;

		setList({
			type: 'insert',
			value: { description: input.current.value, isDone: false },
		});

		input.current.value = '';
	};

	return (
		<div className="flex w-full justify-center">
			<div className="flex flex-col p-2 bg-zinc-600 max-w-[600px] rounded-md w-full">
				<h1 className="text-2xl font-bold text-slate-100 mb-4">
					<b className="text-orange-300">[ JOTAI ]</b> Todo List
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
					{list.map((atom, key) => (
						<TodoItem
							key={`item-${key}`}
							deleteTodo={() => setList({ type: 'remove', atom })}
							atom={atom}
						/>
					))}
				</div>
			</div>
			<ShowDebugDataComponent />
		</div>
	);
}

function TodoPage() {
	return (
		<Provider>
			<TodoList />
		</Provider>
	);
}

export default TodoPage;
