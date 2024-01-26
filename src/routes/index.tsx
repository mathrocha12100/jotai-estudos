import App from '../App';
import JotaiTodoList from '../pages/TodoListJotai';
import TodoListCtx from '../pages/TodoListCtx';

import { createBrowserRouter } from 'react-router-dom';
import PostListJotai from '../pages/PostListJotai';
import JotaiSuperPostList from '../pages/JotaiSuperPostList';
import PostListCtx from '../pages/PostListCtx';
import SimpleRender from '../pages/SimpleRender';
import JotaiReactQueryList from '../pages/JotaiReactQueryList';
import JotaiReactQueryInfinity from '../pages/JotaiReactQueryInfinity';

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
			{
				path: 'jotai-react-query-list',
				element: <JotaiReactQueryList />,
			},
			{
				path: 'jotai-react-query-infinity-list',
				element: <JotaiReactQueryInfinity />,
			},
			{
				path: 'examples-simple-render',
				element: <SimpleRender />,
			},
			{
				path: 'examples-simple-context-render',
				element: <h1>W.I.P</h1>,
			},
		],
	},
]);

export default router;
