import { PrimitiveAtom } from 'jotai';
import PostComment from './PostComment';
import PostTop from './PostTop';

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
	return (
		<div className="bg-gray-900 p-2 rounded-md max-w-[500px] w-full mb-4">
			<PostTop atom={atom} removePost={removePost} />
			<PostComment atom={atom} />
		</div>
	);
}

export default Post;
