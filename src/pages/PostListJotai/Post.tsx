import { Heart, HeartHandshake, Plus, Trash2, X } from 'lucide-react';
import { PrimitiveAtom, useAtom } from 'jotai';
import { useRef } from 'react';
import ComponentRenderedTag from '../../components/ComponentRenderedTag';

export type PostItemProps = {
	login: string;
	description: string;
	avatar: string;
	liked: boolean;
	comments: string[];
};

type PostProps = {
	atom: PrimitiveAtom<PostItemProps>;
	removePost: () => void;
};

function Post({ atom, removePost }: PostProps) {
	const inputRef = useRef<HTMLInputElement>(null);

	const [post, setPost] = useAtom(atom);

	const handleLike = () => {
		setPost((state) => ({ ...state, liked: !state.liked }));
	};

	const deleteComment = (indexKey: number) => {
		setPost((state) => ({
			...state,
			comments: state.comments.filter((_, index) => index !== indexKey),
		}));
	};

	const addComment = () => {
		if (!inputRef.current || inputRef.current.value.trim() === '') return;

		const { value } = inputRef.current;

		setPost((state) => ({
			...state,
			comments: [...state.comments, value],
		}));

		inputRef.current.value = '';
	};

	return (
		<div className="bg-gray-900 p-2 rounded-md max-w-[500px] w-full mb-4">
			<div className="flex flex-col">
				<div className="flex justify-between">
					<div className="flex">
						<img
							alt={post.login}
							className="h-8 w-8 rounded-full mr-2"
							src={post.avatar}
						/>
						<span className="text-lg text-slate-100">{post.login}</span>
					</div>
					<div className="flex">
						<ComponentRenderedTag className="flex justify-end mt-1 mb-2" cyan />
						<button
							onClick={removePost}
							type="button"
							className="hover:bg-slate-100/10 p-2 rounded-md"
						>
							<Trash2 className="text-rose-600 h-4 w-4" />
						</button>
					</div>
				</div>
				<p className="text-slate-200 text-sm mt-2 mb-2 ">{post.description}</p>
				<div>
					<button
						type="button"
						onClick={() => handleLike()}
						className="hover:opacity-70"
					>
						{post.liked ? (
							<HeartHandshake className="text-rose-600 h-5 w-5" />
						) : (
							<Heart className="text-slate-200 h-5 w-5" />
						)}
					</button>
				</div>
			</div>
			<div className="flex flex-col border-t-2 border-slate-600 mt-2">
				<ComponentRenderedTag className="flex justify-end mt-1 mb-2" emerald />
				{post.comments.map((comment, i) => (
					<div className="flex items-start mt-2" key={`comment-${i}`}>
						<span className="text-slate-500 text-xs">{comment}</span>
						<button
							type="button"
							onClick={() => deleteComment(i)}
							className="text-red-500"
						>
							<X className="h-4 w-4" />
						</button>
					</div>
				))}
				<div className="flex mt-4">
					<input
						onKeyUp={(e) => {
							if (e.key === 'Enter') {
								addComment();
							}
						}}
						ref={inputRef}
						placeholder="add new comment !"
						className="p-1 rounded-md w-full text-sm bg-slate-500 pl-2 pr-2 outline-none text-slate-100"
					/>
					<button
						type="button"
						className="p-1 bg-blue-400 rounded-md ml-1 text-slate-100"
						onClick={addComment}
					>
						<Plus className="h-4 w-4" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Post;
