import { useAtomValue } from 'jotai';
import { useGlobalAtomValue } from '../../hooks/jotai-global';
import { global__showDebugIds } from '../../atoms/global';
import { useState } from 'react';
import { postsAtom } from '../../atoms/reactQueryInfinityList';

function ShowDebugData() {
	const [show, setShow] = useState(false);
	const { data } = useAtomValue(postsAtom);

	return (
		<div className="flex flex-col bg-slate-600 max-w-[500px] w-full rounded-md p-2">
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
				[JOTAI + REACTQUERY] USER POSTS
			</h1>

			{show && (
				<pre className="bg-slate-800 p-2 text-orange-400 border-2 border-slate-950 text-sm italic rounded-md overflow-auto">
					{JSON.stringify(data, null, 1)}
				</pre>
			)}
		</div>
	);
}

function DebugData() {
	const shouldShow = useGlobalAtomValue(global__showDebugIds);

	if (!shouldShow) return;

	return <ShowDebugData />;
}

export default DebugData;
