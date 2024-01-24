import { Provider, createStore } from 'jotai';
import { PropsWithChildren, createContext } from 'react';

const globalStore = createStore();
export type GlobalStoreType = typeof globalStore;
export const GlobalContext = createContext<null | typeof globalStore>(null);

function GlobalProvider({ children }: PropsWithChildren) {
	return (
		<GlobalContext.Provider value={globalStore}>
			<Provider>{children}</Provider>
		</GlobalContext.Provider>
	);
}

export default GlobalProvider;
