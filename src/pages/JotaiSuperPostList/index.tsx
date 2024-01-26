import { useAtom, useAtomValue } from 'jotai';
import Post, { PostItemProps } from './BetterPost';
import {
	generateRandomPosts,
	splitPosts,
	posts as atomPosts,
} from '../../atoms/post';
import { useRef, useState } from 'react';
import { Plus } from 'lucide-react';
import { useAtomCallback } from 'jotai/utils';
import { global__showDebugIds } from '../../atoms/global';
import { useGlobalAtomValue } from '../../hooks/jotai-global';

const myUser = {
	...generateRandomPosts(1)[0],
	comments: [],
};

function DebugData() {
	const [show, setShow] = useState(false);
	const [posts] = useAtomValue(atomPosts);

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
				[JOTAI] POSTLIST
			</h1>

			{show && (
				<pre className="bg-slate-800 p-2 text-orange-400 border-2 border-slate-950 text-sm italic rounded-md overflow-auto">
					{JSON.stringify(posts, null, 1)}
				</pre>
			)}
		</div>
	);
}

function ShowDebugDataComponent() {
	const shouldShow = useGlobalAtomValue(global__showDebugIds);

	if (!shouldShow) return;

	return <DebugData />;
}

function JotaiSuperPostList() {
	const inputRef = useRef<HTMLInputElement>(null);
	const [posts, setPosts] = useAtom(splitPosts);

	const addPost = useAtomCallback((_, set, newPost: PostItemProps) => {
		set(atomPosts, (state) => [newPost, ...state]);
	});

	const handleAddNewPost = () => {
		if (!inputRef.current?.value) return;

		const { value } = inputRef.current;

		addPost({ ...myUser, description: value });

		inputRef.current.value = '';
	};

	return (
		<div className="flex justify-between p-4 gap-4">
			<div className="flex items-center w-full flex-col">
				<div className="bg-slate-900 rounded-md p-2 mb-4 max-w-[500px] w-full">
					<h1 className="text-slate-100 text-lg">
						<span className="text-orange-400 italic">[Jotai Super PostList]</span> Add
						Post
					</h1>
					<div className="flex mt-4">
						<input
							onKeyUp={(e) => {
								if (e.key === 'Enter') {
									handleAddNewPost();
								}
							}}
							ref={inputRef}
							placeholder="add new post!"
							className="p-1 rounded-md w-full text-sm bg-slate-500 pl-2 pr-2 outline-none text-slate-100"
						/>
						<button
							type="button"
							className="p-1 bg-blue-400 rounded-md ml-1 text-slate-100"
							onClick={handleAddNewPost}
						>
							<Plus className="h-4 w-4" />
						</button>
					</div>
				</div>
				{posts.map((atom, index) => (
					<Post
						key={`post-${index}`}
						atom={atom}
						removePost={() => setPosts({ atom, type: 'remove' })}
					/>
				))}
			</div>
			<ShowDebugDataComponent />
		</div>
	);
}

export default JotaiSuperPostList;
