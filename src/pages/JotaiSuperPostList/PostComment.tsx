import { PrimitiveAtom, useAtom } from 'jotai';
import { PostItemProps } from './BetterPost';
import { postCommentsData } from '../../atoms/post';
import { useRef } from 'react';
import { Plus, X } from 'lucide-react';
import { useAtomCallback } from 'jotai/utils';
import ComponentRenderedTag from '../../components/ComponentRenderedTag';

type HandleCommentProps =
	| {
			type: 'delete';
			indexKey: number;
	  }
	| { type: 'add'; comment: string };

type PostCommentProps = {
	atom: PrimitiveAtom<PostItemProps>;
};

function PostComment({ atom }: PostCommentProps) {
	const [comments] = useAtom(postCommentsData(atom));

	const inputRef = useRef<HTMLInputElement>(null);

	const handleComment = useAtomCallback((_, set, data: HandleCommentProps) => {
		if (data.type === 'delete') {
			set(atom, (state) => ({
				...state,
				comments: state.comments.filter((_, idx) => idx !== data.indexKey),
			}));
			return;
		}

		set(atom, (state) => ({
			...state,
			comments: [data.comment, ...state.comments],
		}));
	});

	const deleteComment = (indexKey: number) => {
		handleComment({ type: 'delete', indexKey });
	};

	const addComment = () => {
		if (!inputRef.current || inputRef.current.value.trim() === '') return;
		handleComment({ type: 'add', comment: inputRef.current.value });
		inputRef.current.value = '';
	};

	return (
		<div className="flex flex-col border-t-2 border-slate-600 mt-2">
			<ComponentRenderedTag className="flex justify-end mt-1 mb-2" cyan />

			{comments.map((comment, i) => (
				<div className="flex items-start mt-2 justify-between" key={`comment-${i}`}>
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
	);
}

export default PostComment;
