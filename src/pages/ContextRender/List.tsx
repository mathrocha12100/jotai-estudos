import { useRenderContext } from './RenderContext';
import UserCard from './UserCard';
import ComponentBadge, {
	ComponentBadgeJSX,
} from '../../components/ComponentBadge';

const code = `import { useRenderContext } from './RenderContext';
import UserCard from './UserCard';
import ComponentBadge, { ComponentBadgeJSX } from '../../components/ComponentBadge';

function List() {
	const { getFilteredList } = useRenderContext();

	const list = getFilteredList();

	return (
		<div className="...">
			<ComponentBadge name="List" className="..." />

			<h1 className="...">Users</h1>
			{list.length ? (
				<div className="...">
					{list.map((user, index) => (
						<UserCard key={index} user={user} index={index} />
					))}
				</div>
			) : (
				<div className="...">
					<h1 className="...">Nenhum usuario encontrado :(</h1>
				</div>
			)}
		</div>
	);
}
`;

const jsxShow: ComponentBadgeJSX = {
	title: 'List.tsx',
	path: 'src/pages/ContextRender/List.tsx',
	code,
};

function List() {
	const { getFilteredList } = useRenderContext();

	const list = getFilteredList();

	return (
		<div className="relative flex flex-col items-center border-2 border-dashed border-cyan-400 mt-2 pb-4">
			<ComponentBadge
				jsx={jsxShow}
				name="List"
				className="bg-slate-600 text-cyan-400"
			/>

			<h1 className="p-2 text-slate-50 font-bold text-xl">Users</h1>
			{list.length ? (
				<div className="grid grid-cols-3 gap-4">
					{list.map((user, index) => (
						<UserCard key={`user-${index}`} user={user} index={index} />
					))}
				</div>
			) : (
				<div className="flex flex-col p-2 items-center justify-center">
					<h1 className="text-xl text-slate-300">Nenhum usuario encontrado :(</h1>
				</div>
			)}
		</div>
	);
}

export default List;
