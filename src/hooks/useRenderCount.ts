import { useRef } from 'react';

function useRenderCount() {
	const renders = useRef(-1);

	renders.current += 1;

	return renders.current;
}

export default useRenderCount;
