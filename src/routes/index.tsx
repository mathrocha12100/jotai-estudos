import App from '../App';
import JotaiTodoList from '../pages/TodoListJotai';
import TodoListCtx from '../pages/TodoListCtx';

import { createBrowserRouter } from 'react-router-dom';
import PostListJotai from '../pages/PostListJotai';
import PostListCtx from '../pages/PostListCtx';
import SimpleRender from '../pages/SimpleRender';
import JotaiReactQueryList from '../pages/JotaiReactQueryList';
import JotaiReactQueryInfinity from '../pages/JotaiReactQueryInfinity';
import JotaiUserForm from '../pages/JotaiUserForm';
import ContextUserForm from '../pages/ContextUserForm';
import ContextRender from '../pages/ContextRender';

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
				path: 'jotai-post-list',
				element: <PostListJotai />,
			},
			{
				path: 'context-post-list',
				element: <PostListCtx />,
			},
			{
				path: 'jotai-user-form',
				element: <JotaiUserForm />,
			},
			{
				path: 'context-user-form',
				element: <ContextUserForm />,
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
				element: <ContextRender />,
			},
		],
	},
]);

export default router;
