import { Square, CheckSquare } from 'lucide-react';
import { FilterGender, useRenderContext } from './RenderContext';
import ComponentBadge, {
	ComponentBadgeJSX,
} from '../../components/ComponentBadge';

const code = `import { Square, CheckSquare } from 'lucide-react';
import { FilterGender, useRenderContext } from './RenderContext';
import ComponentBadge, {
	ComponentBadgeJSX,
} from '../../components/ComponentBadge';

function Filters() {
	const { filters, setFilters } = useRenderContext();

	const toggleHasInterestFilter = () => {
		setFilters((state) => ({
			...state,
			hasInterest: !state.hasInterest,
		}));
	};

	const changeFilterName = (newText: string) => {
		setFilters((state) => ({
			...state,
			name: newText,
		}));
	};

	const changeGenderFilter = (newGender: string) => {
		const parsed = Number(newGender);

		setFilters((state) => ({
			...state,
			gender: parsed,
		}));
	};

	return (
		<div className="...">
			<ComponentBadge
				jsx={jsxShow}
				name="Filters"
				className="..."
			/>
			<h1 className="...">List Filters</h1>
			<div className="...">
				<input
					value={filters.name || ''}
					onChange={({ target }) => changeFilterName(target.value)}
					placeholder="Search for name"
					className="..."
				/>
				<select
					onChange={({ target }) => changeGenderFilter(target.value)}
					value={filters.gender || FilterGender.ALL}
					className="..."
				>
					<option value={FilterGender.ALL}>Todos</option>
					<option value={FilterGender.MALE}>Homem</option>
					<option value={FilterGender.FEMALE}>Mulher</option>
					<option value={FilterGender.OTHER}>Outros</option>
				</select>

				<div className="...">
					{filters.hasInterest ? (
						<CheckSquare
							onClick={toggleHasInterestFilter}
							className="..."
						/>
					) : (
						<Square
							onClick={toggleHasInterestFilter}
							className="..."
						/>
					)}
					<span className="...">
						Filter by interest
					</span>
				</div>
			</div>
		</div>
	);
}`;

const jsxShow: ComponentBadgeJSX = {
	title: 'Filters.tsx',
	path: 'src/pages/ContextRender/Filters.tsx',
	code,
};

function Filters() {
	const { filters, setFilters } = useRenderContext();

	const toggleHasInterestFilter = () => {
		setFilters((state) => ({
			...state,
			hasInterest: !state.hasInterest,
		}));
	};

	const changeFilterName = (newText: string) => {
		setFilters((state) => ({
			...state,
			name: newText,
		}));
	};

	const changeGenderFilter = (newGender: string) => {
		const parsed = Number(newGender);

		setFilters((state) => ({
			...state,
			gender: parsed,
		}));
	};

	return (
		<div className="relative border-2 border-dashed border-yellow-400 p-2 flex flex-col">
			<ComponentBadge
				jsx={jsxShow}
				name="Filters"
				className="bg-slate-600 text-yellow-400"
			/>
			<h1 className="text-xl mb-2 text-slate-100 font-bold">List Filters</h1>
			<div className="flex items-center">
				<input
					value={filters.name || ''}
					onChange={({ target }) => changeFilterName(target.value)}
					placeholder="Search for name"
					className="text-slate-50 p-1 placeholder:text-sm mr-2 rounded-md border-1 border-slate-600 outline-none bg-slate-700"
				/>
				<select
					onChange={({ target }) => changeGenderFilter(target.value)}
					value={filters.gender || FilterGender.ALL}
					className="p-1 outline-none rounded-md bg-slate-700 text-slate-50 select-none"
				>
					<option value={FilterGender.ALL}>Todos</option>
					<option value={FilterGender.MALE}>Homem</option>
					<option value={FilterGender.FEMALE}>Mulher</option>
					<option value={FilterGender.OTHER}>Outros</option>
				</select>

				<div className="flex ml-4 items-center">
					{filters.hasInterest ? (
						<CheckSquare
							onClick={toggleHasInterestFilter}
							className="text-emerald-400 w-5 h-5 cursor-pointer"
						/>
					) : (
						<Square
							onClick={toggleHasInterestFilter}
							className="text-slate-300 w-5 h-5 cursor-pointer"
						/>
					)}
					<span className="text-slate-50 text-sm ml-1 select-none">
						Filter by interest
					</span>
				</div>
			</div>
		</div>
	);
}

export default Filters;
