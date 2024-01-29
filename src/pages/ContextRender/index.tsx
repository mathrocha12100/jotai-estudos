import List from './List';
import Filters from './Filters';
import RenderProvider from './RenderContext';
import InfosContainer from './Infos';
import ComponentBadge from '../../components/ComponentBadge';

function ContextRenderMain() {
	return (
		<RenderProvider>
			<div className="p-2 border-2 h-full border-dashed border-lime-300 relative">
				<ComponentBadge
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
