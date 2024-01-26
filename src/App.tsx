import { Outlet } from 'react-router-dom';
import GlobalProvider from './contexts/GlobalContext';
import Sidebar from './components/Sidebar';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientAtom } from 'jotai-tanstack-query';
import { useHydrateAtoms } from 'jotai/utils';
import { PropsWithChildren } from 'react';

const queryClient = new QueryClient();

const HydrateAtoms = ({ children }: PropsWithChildren) => {
	useHydrateAtoms([[queryClientAtom, queryClient]]);

	return children;
};

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<GlobalProvider>
				<HydrateAtoms>
					<div className="min-w-screen max-h-screen bg-zinc-700 flex font-sans">
						<Sidebar />
						<div className="overflow-y-auto w-full">
							<Outlet />
						</div>
					</div>
				</HydrateAtoms>
			</GlobalProvider>
		</QueryClientProvider>
	);
}

export default App;
