import { useState } from 'react';
import { global__showDebugIds } from '../../../../atoms/global';
import { useGlobalAtomValue } from '../../../../hooks/jotai-global';
import { useAtomValue } from 'jotai';
import { userProfile } from '../../../../atoms/form';

function DebugData() {
	const formData = useAtomValue(userProfile);

	return (
		<pre className=" text-orange-400">{JSON.stringify(formData, null, 1)}</pre>
	);
}

function Debug() {
	const shouldShow = useGlobalAtomValue(global__showDebugIds);
	const [show, setShow] = useState(false);

	if (!shouldShow) return null;

	return (
		<div className="flex flex-col min-w-[500px] p-2 bg-zinc-800 rounded-md overflow-auto">
			{show ? (
				<button
					onClick={() => setShow(false)}
					className="bg-rose-400 rounded-md mb-2"
					type="button"
				>
					Hide
				</button>
			) : (
				<button
					onClick={() => setShow(true)}
					className="bg-emerald-400 rounded-md mb-2"
					type="button"
				>
					Show
				</button>
			)}
			{show && <DebugData />}
		</div>
	);
}

export default Debug;
