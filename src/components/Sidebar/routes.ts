function createRoute(name: string, path: string) {
	return { name, path };
}

export const ROUTES = [
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
			createRoute('Jotai Super', 'jotai-super-post-list'),
			createRoute('Context API', 'context-post-list'),
		],
	},
	{
		group: 'Exemplos renderização',
		routes: [
			createRoute('Renderização basica', 'examples-simple-render'),
			createRoute('Renderização com contextos', 'examples-simple-context-render'),
		],
	},
];
