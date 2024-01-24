import {
	useContext,
	createContext,
	useState,
	Dispatch,
	useMemo,
	PropsWithChildren,
} from 'react';
import { PostProps } from './Post';
import { generateRandomPosts } from '../../atoms/post';

type PostListContextProps = {
	posts: PostProps[];
	setPosts: Dispatch<PostProps[]>;

	handleRemovePost: (postKey: number) => void;
	handleToggleLike: (postKey: number) => void;
	handleAddComment: (postKey: number, newComment: string) => void;
	handleAddNewPost: (newPost: PostProps) => void;
	handleRemoveComment: (postKey: number, commentKey: number) => void;
};

const PostListContext = createContext<PostListContextProps>(
	{} as PostListContextProps,
);

function PostListProvider({ children }: PropsWithChildren) {
	const [posts, setPosts] = useState<PostProps[]>(
		generateRandomPosts(2) as PostProps[],
	);

	const handleRemovePost = (postKey: number) => {
		setPosts((state) => state.filter((_, idx) => postKey !== idx));
	};

	const handleToggleLike = (postKey: number) => {
		setPosts((state) =>
			state.map((curPost, idx) => {
				if (idx === postKey) {
					return { ...curPost, liked: !curPost.liked };
				}

				return curPost;
			}),
		);
	};

	const handleAddComment = (postKey: number, newComment: string) => {
		setPosts((state) =>
			state.map((curPost, idx) => {
				if (idx === postKey) {
					return {
						...curPost,
						comments: [newComment, ...curPost.comments],
					};
				}

				return curPost;
			}),
		);
	};

	const handleAddNewPost = (newPost: PostProps) => {
		setPosts((state) => [newPost, ...state]);
	};

	const handleRemoveComment = (postKey: number, commentKey: number) => {
		setPosts((state) =>
			state.map((curPost, idx) => {
				if (idx === postKey) {
					return {
						...curPost,
						comments: curPost.comments.filter(
							(_, commentIdx) => commentKey !== commentIdx,
						),
					};
				}

				return curPost;
			}),
		);
	};

	const value = useMemo(
		() =>
			({
				posts,
				setPosts,
				handleAddComment,
				handleRemoveComment,
				handleRemovePost,
				handleToggleLike,
				handleAddNewPost,
			}) as PostListContextProps,
		[posts],
	);

	return (
		<PostListContext.Provider value={value}>{children}</PostListContext.Provider>
	);
}

export function usePostList() {
	const context = useContext(PostListContext);

	return context;
}

export default PostListProvider;
