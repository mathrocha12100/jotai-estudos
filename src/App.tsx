import { Provider } from 'jotai';

import { Outlet } from 'react-router-dom';
import { global__showDebugIds } from './atoms/global';
import { tv } from 'tailwind-variants';
import GlobalProvider from './contexts/GlobalContext';
import { useGlobalAtom } from './hooks/jotai-global';

const debug = tv({
	base: 'p-0.5 rounded-md text-xs pl-1 pr-1 italic text-slate-800 font-bold',
	variants: {
		on: {
			true: 'bg-emerald-400',
		},
		off: {
			true: 'bg-rose-400',
		},
	},
});

function Header() {
	const [showDebug, setShowDebug] = useGlobalAtom(global__showDebugIds);

	return (
		<div className="w-full bg-zinc-600 flex items-center p-2 justify-between">
			<div className="flex items-center gap-2">
				<a
					className="bg-slate-300 p-1 rounded-md text-sm pl-2 pr-2 font-bold"
					href="jotai-todo-list"
				>
					Jotai TodoList
				</a>
				<a
					className="bg-blue-500 p-1 rounded-md text-sm pl-2 pr-2 font-bold"
					href="context-todo-list"
				>
					Context API TodoList
				</a>
				<div className="w-1 h-10 bg-red-200 ml-2 mr-2" />
				<a
					className="bg-slate-300 p-1 rounded-md text-sm pl-2 pr-2 font-bold"
					href="jotai-post-list"
				>
					Jotai PostList
				</a>
				<a
					className="bg-slate-400 p-1 rounded-md text-sm pl-2 pr-2 font-bold"
					href="jotai-super-post-list"
				>
					Jotai Super PostList
				</a>
				<a
					className="bg-blue-500 p-1 rounded-md text-sm pl-2 pr-2 font-bold"
					href="context-post-list"
				>
					Context API PostList
				</a>
			</div>
			<div
				onClick={() => setShowDebug((state) => !state)}
				className="border-2 border-dashed p-1.5 pl-3 pr-3 border-orange-500 rounded-md cursor-pointer flex items-center hover:bg-slate-400/40 font-bold"
			>
				<span className="text-xs mr-2 text-slate-200">DEBUG</span>
				<span className={debug({ on: showDebug, off: !showDebug })}>
					{showDebug ? 'ON' : 'OFF'}
				</span>
			</div>
		</div>
	);
}

function App() {
	return (
		<GlobalProvider>
			<Provider>
				<div className="min-w-screen min-h-screen bg-zinc-800">
					<Header />
					<Outlet />
				</div>
			</Provider>
		</GlobalProvider>
	);
}

export default App;
