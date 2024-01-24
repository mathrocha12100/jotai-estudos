import { useAtomValue, PrimitiveAtom } from 'jotai';
import getGlobalStorage from './getGlobalStorage';

function useGlobalAtomValue<T>(atom: PrimitiveAtom<T>) {
	const store = getGlobalStorage();

	return useAtomValue(atom, { store });
}

export default useGlobalAtomValue;
