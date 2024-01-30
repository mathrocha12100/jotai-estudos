import List from './List';
import Filters from './Filters';
import RenderProvider from './RenderContext';
import InfosContainer from './InfosContainer';
import ComponentBadge, {
	ComponentBadgeJSX,
} from '../../components/ComponentBadge';

const code = `import List from './List';
import Filters from './Filters';
import RenderProvider from './RenderContext';
import InfosContainer from './InfosContainer';
import ComponentBadge, { ComponentBadgeJSX } from '../../components/ComponentBadge';

function ContextRenderMain() {
	return (
		<RenderProvider>
			<div className=...">
				<ComponentBadge
					name="ContextRenderMain"
					className="..."
				/>
				<div className="...">
					<Filters />
					<InfosContainer />
					<List />
				</div>
			</div>
		</RenderProvider>
	);
}`;

const jsx: ComponentBadgeJSX = {
	title: 'index.tsx',
	path: 'src/pages/ContextRender/index.tsx',
	code,
};

function ContextRenderMain() {
	return (
		<RenderProvider>
			<div
				id="context-render__main"
				className="p-2 border-2 h-full border-dashed border-lime-300 relative"
			>
				<ComponentBadge
					jsx={jsx}
					name="ContextRenderMain"
					className="bg-slate-500 text-lime-300 "
				/>
				<div className="p-2 bg-slate-800 rounded-md mt-8">
					<Filters />
					<InfosContainer />
					<List />
				</div>
			</div>
		</RenderProvider>
	);
}

export default ContextRenderMain;
