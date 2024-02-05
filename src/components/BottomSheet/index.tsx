import { Dispatch, PropsWithChildren } from 'react';
import { SetStateAction } from 'jotai';
import { AnimatePresence } from 'framer-motion';
import BottomSheetContent from './Content';

export type IBottomSheetConfig = {
	minHeight?: number; // by default is 400
	allowMaximize?: boolean; // by default is false
};

export type BottomSheetProps = {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;

	HeaderComponent?: JSX.Element;
	config?: IBottomSheetConfig;
} & PropsWithChildren;

function BottomSheet({ open, ...props }: BottomSheetProps) {
	return (
		<AnimatePresence>{open && <BottomSheetContent {...props} />}</AnimatePresence>
	);
}

export default BottomSheet;
