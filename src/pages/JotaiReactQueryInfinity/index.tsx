import { Provider } from 'jotai';
import InfinityList from './InfinityList';
import DebugData from './Debug';

function Page() {
	return (
		<Provider>
			<div className="flex justify-center p-4 gap-4">
				<InfinityList />
				<DebugData />
			</div>
		</Provider>
	);
}

export default Page;
