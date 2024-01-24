import { Heart, HeartHandshake, Plus, Trash2, X } from 'lucide-react';
import { usePostList } from './PostListContext';
import { useRef } from 'react';
import RandomID from '../../components/RandomID';

export type PostProps = {
	login: string;
	description: string;
	avatar: string;
	liked: boolean;
	comments: string[];
	postKey: number;
};

function Post({
	liked,
	comments,
	description,
	login,
	avatar,
	postKey,
}: PostProps) {
	const inputRef = useRef<HTMLInputElement>(null);

	const {
		handleAddComment,
		handleRemoveComment,
		handleRemovePost,
		handleToggleLike,
	} = usePostList();

	const handleLike = () => {
		handleToggleLike(postKey);
	};

	const removeComment = (commentKey: number) => {
		handleRemoveComment(postKey, commentKey);
	};

	const addComment = () => {
		if (!inputRef.current?.value) return;

		const { value } = inputRef.current;

		handleAddComment(postKey, value);

		inputRef.current.value = '';
	};

	return (
		<div className="bg-gray-900 p-2 rounded-md w-[500px] mb-4">
			<div className="flex justify-between">
				<div className="flex">
					<img alt={login} className="h-8 w-8 rounded-full mr-2" src={avatar} />
					<span className="text-lg text-slate-100">{login}</span>
				</div>
				<div className="flex">
					<RandomID className="flex justify-end mt-1 mb-2" emerald />
					<button
						onClick={() => handleRemovePost(postKey)}
						type="button"
						className="hover:bg-slate-100/10 p-2 rounded-md"
					>
						<Trash2 className="text-rose-600 h-4 w-4" />
					</button>
				</div>
			</div>
			<p className="text-slate-200 text-sm mt-2 mb-2 ">{description}</p>
			<div>
				<button type="button" onClick={handleLike} className="hover:opacity-70">
					{liked ? (
						<HeartHandshake className="text-rose-600 h-5 w-5" />
					) : (
						<Heart className="text-slate-200 h-5 w-5" />
					)}
				</button>
			</div>
			<div className="flex flex-col border-t-2 border-slate-600 mt-2">
				{comments.map((comment, i) => (
					<div
						className="flex items-start mt-2 justify-between"
						key={`comment-${i}`}
					>
						<span className="text-slate-500 text-xs">{comment}</span>
						<button
							type="button"
							onClick={() => removeComment(i)}
							className="text-red-500"
						>
							<X className="h-4 w-4" />
						</button>
					</div>
				))}
			</div>
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
	);
}

export default Post;
