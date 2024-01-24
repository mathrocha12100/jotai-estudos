import PostListCtx from './PostList';
import PostListProvider from './PostListContext';

function PostPage() {
	return (
		<PostListProvider>
			<PostListCtx />
		</PostListProvider>
	);
}

export default PostPage;
