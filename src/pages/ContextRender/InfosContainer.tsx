import ComponentBadge, {
	ComponentBadgeJSX,
} from '../../components/ComponentBadge';
import InfoData from './InfoData';
import code from './InfosContainer?raw';

const jsx: ComponentBadgeJSX = {
	title: 'InfosContainer.tsx',
	path: 'src/pages/ContextRender/InfosContainer.tsx',
	code,
};

function InfosContainer() {
	return (
		<div className="relative border-2 border-dashed border-red-500 p-2 mt-2">
			<h1 className="text-lg text-yellow-400">List statistics</h1>
			<ComponentBadge
				name="InfosContainer"
				className="text-red-500 bg-slate-700"
				jsx={jsx}
			/>
			<InfoData />
		</div>
	);
}

export default InfosContainer;
