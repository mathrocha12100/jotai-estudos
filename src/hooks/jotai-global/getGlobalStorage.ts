import { useContext } from 'react';
import { GlobalContext, GlobalStoreType } from '../../contexts/GlobalContext';

function getGlobalStorage() {
	const store = useContext(GlobalContext);

	return store as GlobalStoreType;
}

export default getGlobalStorage;
