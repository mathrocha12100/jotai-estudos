import { PrimitiveAtom, useAtom } from 'jotai';
import getGlobalStorage from './getGlobalStorage';

function useGlobalAtom<T>(atom: PrimitiveAtom<T>) {
	const store = getGlobalStorage();

	return useAtom(atom, { store });
}

export default useGlobalAtom;
