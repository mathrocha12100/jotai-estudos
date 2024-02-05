import { MotionValue, PanInfo } from 'framer-motion';
import { IBottomSheetConfig } from '.';
import { useCallback, useRef } from 'react';

type UseDragControlProps = {
	config: IBottomSheetConfig & { minHeight: number };
	height: MotionValue<number>;

	setOpen: (isOpen: boolean) => void;
};

function useDragControl({ config, height, setOpen }: UseDragControlProps) {
	const sheetState = useRef<'normal' | 'maximized'>('normal');

	const { allowMaximize, minHeight } = config;

	const getMaxHeight = () => {
		return window.innerHeight;
	};

	const shouldMaximize = (currentHeight: number, maxHeight: number) => {
		if (sheetState.current === 'maximized' || currentHeight < minHeight)
			return false;

		const isTryingToMaximize = currentHeight >= minHeight;
		const canMaximize = currentHeight >= minHeight * 1.35;

		if (isTryingToMaximize && canMaximize) {
			sheetState.current = 'maximized';
			height.set(maxHeight);

			return true;
		}

		if (isTryingToMaximize) height.set(minHeight);

		return isTryingToMaximize;
	};

	const shouldMinimize = (currentHeight: number, maxHeight: number) => {
		if (sheetState.current !== 'maximized') return false;

		const isTryingToMinimize = currentHeight <= maxHeight;
		const canMinimize = currentHeight <= maxHeight * 0.85;

		if (isTryingToMinimize && canMinimize) {
			sheetState.current = 'normal';
			height.set(minHeight);

			return true;
		}

		if (isTryingToMinimize) height.set(maxHeight);

		return isTryingToMinimize;
	};

	const isTryingToClose = (currentHeight: number) => {
		const isTryingToClose = currentHeight < minHeight;
		const canClose = currentHeight <= minHeight * 0.65;

		if (isTryingToClose && canClose) {
			height.set(0);
			setOpen(false);

			return true;
		}

		if (isTryingToClose) height.set(minHeight);

		return isTryingToClose;
	};

	const heightValuesHaveNotChange = (
		currentHeight: number,
		maxHeight: number,
	) => {
		return currentHeight === maxHeight || currentHeight === minHeight;
	};

	const cantDrag = (
		newHeight: number,
		maxHeight: number,
		currentHeight: number,
		cantDragNow?: boolean,
	) => {
		// Ele esta tentando maximizar dentro da div do content
		if (cantDragNow) {
			console.log(currentHeight, minHeight);
			return true;
		}

		// Ele nao pode maximizar mas esta tentando
		if (!allowMaximize && newHeight > minHeight) return true;

		// Verifica se o novo tamanho está dentro dos limites desejados (mínimo de 0 e máximo de 100% da altura da tela)
		if (newHeight <= 0 || newHeight > maxHeight) return true;

		return false;
	};

	const handleDrag = useCallback(
		(_: Event, info: PanInfo, isFromContent?: boolean) => {
			const maxHeight = getMaxHeight();
			const currentHeight = height.get();

			// Subtrai delta.y do mHeight atual para fazer o elemento crescer para cima
			const newHeight = currentHeight - info.delta.y;

			console.log(newHeight);

			if (cantDrag(newHeight, maxHeight, currentHeight, false)) return;

			console.log('setting');
			height.set(newHeight);
		},
		[],
	);

	const handleDragEnd = useCallback((isFromContent?: boolean) => {
		const maxHeight = getMaxHeight();
		const currentHeight = height.get();

		if (heightValuesHaveNotChange(currentHeight, maxHeight)) return;

		if (isTryingToClose(currentHeight)) {
			console.log('-=- CLOSE -=-');
			return;
		}

		if (!allowMaximize) return;

		if (shouldMaximize(currentHeight, maxHeight)) {
			console.log('max ->');
			return;
		}

		if (shouldMinimize(currentHeight, maxHeight)) {
			console.log('<- MIN');
			return;
		}
	}, []);

	return { handleDrag, handleDragEnd };
}

export type IUseDragControlHook = ReturnType<typeof useDragControl>;

export default useDragControl;
