import { Outlet } from 'react-router-dom';
import GlobalProvider from './contexts/GlobalContext';
import Sidebar from './components/Sidebar';

function App() {
	return (
		<GlobalProvider>
			<div className="min-w-screen max-h-screen bg-zinc-700 flex">
				<Sidebar />
				<div className="overflow-y-auto w-full">
					<Outlet />
				</div>
			</div>
		</GlobalProvider>
	);
}

export default App;
