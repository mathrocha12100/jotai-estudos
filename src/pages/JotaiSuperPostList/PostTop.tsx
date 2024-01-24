import { PrimitiveAtom, useAtom } from 'jotai';
import { PostItemProps } from './BetterPost';
import { postTopData } from '../../atoms/post';
import { Trash2, HeartHandshake, Heart } from 'lucide-react';
import { useAtomCallback } from 'jotai/utils';
import RandomID from '../../components/RandomID';

type PostTopProps = {
	atom: PrimitiveAtom<PostItemProps>;
	removePost: () => void;
};

function PostTop({ atom, removePost }: PostTopProps) {
	const [post] = useAtom(postTopData(atom));

	const handleLikePost = useAtomCallback((_, set) => {
		set(atom, (state) => ({ ...state, liked: !state.liked }));
	});

	return (
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
					<RandomID className="flex justify-end mt-1 mb-2" emerald />
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
				<button type="button" onClick={handleLikePost} className="hover:opacity-70">
					{post.liked ? (
						<HeartHandshake className="text-rose-600 h-5 w-5" />
					) : (
						<Heart className="text-slate-200 h-5 w-5" />
					)}
				</button>
			</div>
		</div>
	);
}

export default PostTop;
