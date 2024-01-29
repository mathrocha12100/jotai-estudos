function createRoute(name: string, path: string) {
	return { name, path };
}

export const ROUTES = [
	{
		group: 'Exemplos renderização',
		routes: [
			createRoute('Renderização basica', 'examples-simple-render'),
			createRoute('Renderizacao Context API', 'examples-simple-context-render'),
		],
	},
	{
		group: 'Todo List',
		routes: [
			createRoute('Jotai', 'jotai-todo-list'),
			createRoute('Context API', 'context-todo-list'),
		],
	},
	{
		group: 'Posts',
		routes: [
			createRoute('Jotai', 'jotai-post-list'),
			createRoute('Context API', 'context-post-list'),
		],
	},
	{
		group: 'User Form',
		routes: [
			createRoute('Jotai', 'jotai-user-form'),
			createRoute('Context API', 'context-user-form'),
		],
	},
	{
		group: 'Jotai + React Query',
		routes: [
			createRoute('List', 'jotai-react-query-list'),
			createRoute('Infinity List', 'jotai-react-query-infinity-list'),
		],
	},
];
