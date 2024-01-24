import App from '../App';
import JotaiTodoList from '../pages/TodoListJotai';
import TodoListCtx from '../pages/TodoListCtx';

import { createBrowserRouter } from 'react-router-dom';
import PostListJotai from '../pages/PostListJotai';
import JotaiSuperPostList from '../pages/JotaiSuperPostList';
import PostListCtx from '../pages/PostListCtx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: 'jotai-todo-list',
				element: <JotaiTodoList />,
			},
			{
				path: 'context-todo-list',
				element: <TodoListCtx />,
			},
			{
				path: 'jotai-super-post-list',
				element: <JotaiSuperPostList />,
			},
			{
				path: 'jotai-post-list',
				element: <PostListJotai />,
			},
			{
				path: 'context-post-list',
				element: <PostListCtx />,
			},
		],
	},
]);

export default router;
