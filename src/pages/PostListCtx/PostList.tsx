import Post, { PostProps } from './Post';

import { useRef } from 'react';
import { Plus } from 'lucide-react';
import { generateRandomPosts } from '../../atoms/post';
import { usePostList } from './PostListContext';

const myUser = {
	...generateRandomPosts(1)[0],
	comments: [] as string[],
} as PostProps;

function PostListCtx() {
	const inputRef = useRef<HTMLInputElement>(null);
	const { posts, handleAddNewPost } = usePostList();

	const addNewPost = () => {
		if (!inputRef.current?.value) return;

		const { value } = inputRef.current;

		handleAddNewPost({ ...myUser, description: value });

		inputRef.current.value = '';
	};

	return (
		<div className="flex p-4 gap-4">
			<div className="flex items-center w-full flex-col">
				<div className="bg-slate-900 rounded-md p-2 mb-4 max-w-[500px] w-full">
					<h1 className="text-slate-100 text-lg">
						<span className="text-blue-400 italic">[Context API PostList] </span>
						Add Post
					</h1>
					<div className="flex mt-4">
						<input
							onKeyUp={(e) => {
								if (e.key === 'Enter') {
									addNewPost();
								}
							}}
							ref={inputRef}
							placeholder="add new post!"
							className="p-1 rounded-md w-full text-sm bg-slate-500 pl-2 pr-2 outline-none text-slate-100"
						/>
						<button
							type="button"
							className="p-1 bg-blue-400 rounded-md ml-1 text-slate-100"
							onClick={addNewPost}
						>
							<Plus className="h-4 w-4" />
						</button>
					</div>
				</div>
				{posts.map((post, index) => (
					<Post key={`post-${index}`} {...post} postKey={index} />
				))}
			</div>
		</div>
	);
}

export default PostListCtx;
